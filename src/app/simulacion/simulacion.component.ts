import { Component, Input, OnChanges } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import { delay, share } from 'rxjs/operators';
import { NgbPopoverConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from '../error/error.component';

// Interfaz de los datos a representar
interface Comunicacion {
  dir: number; // null espacio vacio
  // 0 bidireccional cliente<->servidor con VC en cliente
  // 10 bidireccional cliente<->servidor con VC en servidor
  //  1 direccion cliente->servidor
  //  2 direccion servidor->cliente
  // -1 segmento perdido en direccion cliente->servidor
  // -2 segmento perdido en direccion servidor->cliente
  // -10 segmento perdido en direccion cliente->servidor y flecha servidor->cliente
  // -20 segmento perdido en direccion servidor->cliente y flecha cliente->servidor
  flagcli: string[]; // [SYN, FIN, ACK, AL, EC, RR]
  sncli: number; // numero de secuencia
  ancli: number; // numero de reconocimento
  dcli: number; // tamnyo de lo datos enviados
  wcli: number; // tamanyo de la ventana de recepcion permitida para la entidad contraria
  msscli: number; // maximo tamanyo de segmento
  flagserv: string[]; // [SYN, FIN, ACK, AL, EC, RR]
  snserv: number; // numero de secuencia
  anserv: number; // numero de reconocimento
  dserv: number; // tamnyo de lo datos enviados
  wserv: number; // tamanyo de la ventana de recepcion permitida para la entidad contraria
  mssserv: number; // maximo tamanyo de segmento
  numseg: number; // numero de segmento
  vc: number; // ventana de congestion
}

// Interfaz para el cliente y el servidor
interface Maquina {
  sn: number; // numero de secuencia
  ult_sn: number; // ultimo numero de secuencia
  an: number; // numero de reconocimento
  ult_an: number; // ultimo numero de reconocimento
  data: number; // tamnyo de lo datos enviados
  w: number; // tamanyo de la ventana de recepcion permitida para la entidad contraria
  segperd: string; // segmentos perdidos
  vc: number; // ventana de congestion
  vcrep: number; // ventana de congestion que se va a mostrar
  flags: string[]; // [SYN, FIN, ACK, AL, EC, RR]
  ec: Boolean; // control de activacion del flag EC
  vcCtrl: number; // control para incrementar o no la VC
}


@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css'],
  providers: [NgbPopoverConfig]
})
export class SimulacionComponent implements OnChanges {

  faLaptop = faLaptop;
  faServer = faServer;
  faBug = faBug;
  faPrint = faPrint;
  comunicacion: Comunicacion[];
  cli: Maquina;
  serv: Maquina;
  ipclien: string = null;
  ipserv: string = null;
  mostrar: Observable<{}>; // Mostrar simulacion o imagen de 'cargando'
  parametros: string = null;
  pck = require('../../../package.json');
  host = window.location.href;


  // Obtenemos los datos del componente padre ContenidoComponent
  @Input() simular: Simulacion;

  constructor(private modalService: NgbModal, config: NgbPopoverConfig) {
    // Estilo del popover para reportar un error en la simulacion
    config.placement = 'left';
    config.triggers = 'hover';
  }

  /**
 * @description Cambia el estado de la variable 'mostrar'
 * @author javierorp
 */
  ngOnChanges() {
    this.mostrar = this.generarSimulacion().pipe(share());
  }


  /**
   * @description Genera la simulacion
   * @author javierorp
   */
  generarSimulacion(): Observable<boolean> {
    try {
      this.comunicacion = [];
      this.cli = { sn: 0, ult_sn: 0, an: 0, ult_an: 0, data: 0, w: 0, segperd: "", vc: 0, vcrep: 0, flags: [], ec: false, vcCtrl: 0 };
      this.serv = { sn: 0, ult_sn: 0, an: 0, ult_an: 0, data: 0, w: 0, segperd: "", vc: 0, vcrep: 0, flags: [], ec: false, vcCtrl: 0 };
      this.ipclien = this.simular.ipclien;
      this.ipserv = this.simular.ipserv;

      if (this.simular.segperdclien == "" && this.simular.segperdserv == "")
        this.simularEC();
      else if (this.simular.algort == "1")
        this.simularReno();
      else
        this.simularTahoe();

      this.parametros = JSON.stringify(this.simular);
      return of(true).pipe(delay(500));; // Ocultar la imagen de carga y mostrar la simulacion
    } catch (error) {
      const modalRef = this.modalService.open(ErrorComponent, {windowClass: 'modal-entrada'});
      modalRef.componentInstance.desde = "Simular";
      modalRef.componentInstance.parametros = JSON.stringify(this.simular);
      modalRef.componentInstance.merror = error;
      return new Observable<false>()
    }
  }

  /**
   * @description Simula utilizando Evitacion de la Congestion
   * @author javierorp
   * @returns  
   */
  simularEC(): void {
    /*-----INICIALIZACION-----*/
    // Flags
    let nullflag: string[] = ["", "", "", "", "", ""];
    let syn: string[] = ["SYN", "", "", "AL", "", ""];
    let synack: string[] = ["SYN", "", "ACK", "AL", "", ""];
    let ack: string[] = ["", "", "ACK", "", "", ""];
    let finack: string[] = ["", "FIN", "ACK", "", "", ""];
    let fin: string[] = ["", "FIN", "", "", "", ""];
    let al: string[] = ["", "", "", "", "", "AL", ""];
    let rr: string[] = ["", "", "", "", "", "", "RR"];
    // Cliente
    let mssclien: number = this.simular.mssclien;
    this.cli.sn = this.simular.snclien;
    this.cli.ult_sn = 0;
    this.cli.an = 0;
    this.cli.ult_an = 0;
    this.cli.data = this.simular.datosclien;
    this.cli.w = this.simular.wclien;
    this.cli.segperd = this.simular.segperdclien;
    this.cli.vc = 1;
    this.cli.flags = syn;
    this.cli.ec = false;
    this.cli.vcCtrl = 0;
    // Servidor
    let mssserv: number = this.simular.mssserv;
    this.serv.sn = this.simular.snserv;
    this.serv.ult_sn = 0;
    this.serv.an = 0;
    this.serv.ult_an = 0;
    this.serv.data = this.simular.datosserv;
    this.serv.w = this.simular.wserv;
    this.serv.segperd = this.simular.segperdserv;
    this.serv.vc = 1;
    this.serv.flags = synack;
    this.serv.ec = false;
    this.serv.vcCtrl = 0;
    // General
    let timeout: number = this.simular.timeout;
    let umbral: number = this.simular.umbral;
    let algort: string = this.simular.algort;
    let cierre: string = this.simular.cierre;
    /*-----VARIABLES-----*/
    // General
    let mss: number = Math.min(mssclien, mssserv); // Se elige el minimo MSS
    let nseg: number = 0;
    let denv: number = mss; // Datos a enviar
    // Cliente
    let numPqtClien: number = Math.floor(this.cli.data / mss);
    let numPqtClienEnv: number = 0;
    let modPqtClien: number = this.cli.data % mss;
    //Servidor
    let numPqtServ: number = Math.floor(this.serv.data / mss);
    let numPqtServEnv: number = 0;
    let modPqtServ: number = this.serv.data % mss;

    // ----- Conexion -----
    // Enviamos los segmentos de SYN; SYN, ACK; y ACK
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: 0, dcli: 0, wcli: this.cli.w, msscli: mssclien, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    this.serv.ult_an = this.serv.an;
    this.serv.an = this.cli.sn + 1;
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: mssserv, vc: this.cli.vcrep });
    this.serv.flags = nullflag;
    this.cli.ult_sn = this.cli.sn;
    this.cli.sn += 1;
    this.cli.ult_an = this.cli.an;
    this.cli.an = this.serv.sn + 1;
    this.cli.flags = ack;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: this.serv.vcrep });
    this.cli.flags = nullflag;

    // >>>>> Envio de datos cliente->servidor <<<<<
    if (numPqtClien == 0)
      denv = modPqtClien;
    else
      denv = mss;
    // El cliente envía el primer paquete
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: denv, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    numPqtClienEnv++;

    if (numPqtClien != 0) // Si hay mas de un paquete a enviar
    {
      // El servidor espera 1.5 ticks por si recibe otro paquete
      this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      // El servidor manda el ACK del primer paquete
      this.serv.ult_sn = this.serv.sn;
      this.serv.sn += 1;
      this.serv.ult_an = this.serv.an;
      this.serv.an = this.cli.sn + denv;
      this.incrementarVC(this.cli, this.serv, mss);
      this.comprobarEC(this.cli, umbral);
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: this.cli.vcrep });
      this.cli.ult_an = this.serv.an;
    }
    let envAck: number = 0; // Cada dos paquetes enviados por el cliente, el servidor devuelve un ACK
    let ultDataEnv: number = denv; // Tamanyo de los ultimos datos enviados
    for (; numPqtClienEnv <= numPqtClien; numPqtClienEnv++) {
      if (numPqtClienEnv == numPqtClien) // Si es el ultimo paquete a enviar, se envian los datos restantes
        denv = modPqtClien;

      if (envAck == this.cli.vcrep) // Si se han enviado los paquetes que permite la VC pero no se ha recibido aun un ACK, se envia
      {
        this.serv.ult_sn = this.serv.sn;
        this.serv.ult_an = this.serv.an;
        this.serv.an = this.cli.ult_sn + (this.cli.ult_sn - this.serv.ult_an);
        this.incrementarVC(this.cli, this.serv, mss);
        this.comprobarEC(this.cli, umbral);
        this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: this.cli.vcrep });
        this.cli.ult_sn = this.cli.sn;
        this.cli.vcCtrl++;
        this.cli.ult_an = this.cli.an;
        numPqtClienEnv--;
        envAck = 0;
      }
      else if (envAck < 2) // El numero de paquetes enviados no alcanza al ACK
      {
        this.cli.ult_sn = this.cli.sn;
        this.cli.sn += ultDataEnv;
        this.comprobarEC(this.cli, umbral);
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: denv, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
        this.cli.ult_sn = this.cli.sn;
        ultDataEnv = denv;
        envAck++;
      }
      else { // Cada 2 paquetes enviados por el cliente, el servidor envia un ACK
        this.cli.ult_sn = this.cli.sn;
        this.cli.sn += ultDataEnv;
        this.serv.ult_sn = this.serv.sn;
        this.serv.ult_an = this.serv.an;
        this.serv.an = this.cli.ult_sn + (this.cli.ult_sn - this.serv.ult_an);
        this.incrementarVC(this.cli, this.serv, mss);
        this.comprobarEC(this.cli, umbral);
        this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: denv, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: this.cli.vcrep });
        ultDataEnv = denv;
        this.cli.ult_sn = this.cli.sn;
        this.cli.vcCtrl++;
        this.cli.ult_an = this.cli.an;
        envAck = 1;
      }

      if (envAck == 2 && numPqtClienEnv + 1 >= numPqtClien && modPqtClien == 0) // Si es el ultimo paquete a enviar y no hay mas datos a enviar salimos del bucle
        numPqtClienEnv += 99;
    }

    // El servidor espera 1.5 ticks por si recibe otro paquete
    if (envAck != 2)
      this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

    // El servidor envia el primer paquete de datos junto al ACK del ultimo paquete
    if (envAck != 0 || (envAck == 0 && modPqtClien != 0)) { // Si el ACK no se ha enviado ya
      if (envAck == 0 && modPqtClien != 0) {
        this.cli.ult_sn = this.cli.sn;
        this.cli.sn += denv;
      }

      this.serv.ult_an = this.serv.an;
      this.serv.an = this.cli.ult_sn + denv;
      if (numPqtServ == 0)
        denv = modPqtServ;
      else
        denv = mss;
      this.serv.ult_sn = this.serv.sn;
      this.incrementarVC(this.cli, this.serv, mss);
      this.comprobarEC(this.cli, umbral);
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: denv, wserv: this.serv.w, mssserv: 0, vc: this.cli.vcrep });
      this.cli.ult_sn = this.cli.sn;
      this.cli.vcCtrl++;
      this.cli.ult_an = this.cli.an;
      this.cli.an++;
      this.serv.ult_an = this.serv.an;
      this.cli.flags = nullflag;
      numPqtServEnv++;
    }


    // >>>>> Envio de datos servidor->cliente <<<<<
    if (numPqtServ != 0) // Si hay mas de un paquete a enviar
    {
      // El cliente espera 1.5 ticks por si recibe otro paquete
      this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      // El cliente manda el ACK del primer paquete
      this.cli.ult_sn = this.cli.sn;
      this.cli.sn = this.serv.ult_an;
      this.cli.ult_an = this.cli.an;
      this.cli.an = this.serv.sn + denv;
      this.incrementarVC(this.serv, this.cli, mss);
      this.comprobarEC(this.serv, umbral);
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: this.serv.vcrep });
      this.serv.ult_an = this.serv.an;
    }
    else {
      this.cli.an = this.serv.sn + denv;
    }

    ultDataEnv = denv; // Tamanyo de los ultimos datos enviados
    envAck = 0;
    for (; numPqtServEnv <= numPqtServ; numPqtServEnv++) {
      if (numPqtServEnv == numPqtServ) // Si es el ultimo paquete a enviar, se envian los datos restantes
        denv = modPqtServ;

      if (envAck == this.serv.vcrep) // Si se han enviado los paquetes que permite la VC pero no se ha recibido aun un ACK, se envia
      {
        this.cli.ult_sn = this.cli.sn;
        this.cli.ult_an = this.cli.an;
        this.cli.an = this.serv.ult_sn + (this.serv.ult_sn - this.cli.ult_an);
        this.incrementarVC(this.serv, this.cli, mss);
        this.comprobarEC(this.serv, umbral);
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: this.serv.vcrep });
        this.serv.ult_sn = this.serv.sn;
        this.serv.vcCtrl++;
        this.serv.ult_an = this.serv.an;
        numPqtServEnv--;
        envAck = 0;
      }
      else if (envAck < 2) // El numero de paquetes enviados no alcanza al ACK
      {
        this.serv.ult_sn = this.serv.sn;
        this.serv.sn += ultDataEnv;
        this.comprobarEC(this.serv, umbral);
        this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: denv, wserv: this.serv.w, mssserv: 0, vc: 0 });
        this.serv.ult_sn = this.serv.sn;
        ultDataEnv = denv;
        envAck++;
      }
      else { // Cada 2 paquetes enviados por el cliente, el servidor envia un ACK
        this.serv.ult_sn = this.serv.sn;
        this.serv.sn += ultDataEnv;
        this.cli.ult_sn = this.cli.sn;
        this.cli.ult_an = this.cli.an;
        this.cli.an = this.serv.ult_sn + (this.serv.ult_sn - this.cli.ult_an);
        this.incrementarVC(this.serv, this.cli, mss);
        this.comprobarEC(this.serv, umbral);
        this.comunicacion.push({ numseg: ++nseg, dir: 10, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: denv, wserv: this.serv.w, mssserv: 0, vc: this.serv.vcrep });
        ultDataEnv = denv;
        this.serv.ult_sn = this.serv.sn;
        this.serv.vcCtrl++;
        this.serv.ult_an = this.serv.an;
        envAck = 1;
      }

      if (envAck == 2 && numPqtServEnv + 1 >= numPqtServ && modPqtServ == 0) // Si es el ultimo paquete a enviar y no hay mas datos a enviar salimos del bucle
        numPqtServEnv += 99;
    }

    // El cliente espera 1.5 ticks por si recibe otro paquete
    if (envAck != 2)
      this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

    // El cliente envia el ACK del ultimo paquete
    if (envAck != 0 || (envAck == 0 && numPqtServEnv == 1)) { // Si el ACK no se ha enviado ya
      this.cli.ult_sn = this.cli.sn;
      this.cli.ult_an = this.cli.an;
      this.cli.an = this.serv.ult_sn + denv;
      this.incrementarVC(this.serv, this.cli, mss);
      this.comprobarEC(this.serv, umbral);
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: this.serv.vcrep });
      this.serv.ult_sn = this.serv.sn;
      this.serv.vcCtrl++;
      this.serv.ult_an = this.serv.an;
      this.cli.ult_an = this.cli.an;
    }

    // El cliente espera 1.5 tick por si hay intercambio de informacion y luego se procede a cerrar
    if (envAck == 2 && cierre == "1")
      this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });


    // ----- Cierre -----
    // Enviamos los segmentos de FIN; FIN, ACK; y ACK
    if (cierre == "1") { // El cliente cierra la conexion
      //FIN
      this.cli.ult_sn = this.cli.sn;
      this.cli.flags = fin;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
      // FIN, ACK
      this.serv.ult_sn = this.serv.sn;
      this.serv.sn += denv;
      this.serv.ult_an = this.serv.an;
      this.serv.an = this.cli.sn + 1;
      this.serv.flags = finack;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: 0 });
      // ACK
      this.cli.ult_sn = this.cli.sn;
      this.cli.sn++;
      this.cli.ult_an = this.cli.an;
      this.cli.an = this.serv.sn + 1;
      this.cli.flags = ack;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

    } else { // El servidor cierra la conexion
      // FIN
      this.serv.ult_sn = this.serv.sn;
      this.serv.sn += denv;
      this.serv.ult_an = this.serv.an;
      this.serv.flags = fin;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: 0 });
      // FIN, ACK
      this.cli.ult_sn = this.cli.sn;
      this.cli.ult_an = this.cli.an;
      this.cli.an = this.serv.sn + 1;
      this.cli.flags = finack;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
      // ACK
      this.serv.ult_sn = this.serv.sn;
      this.serv.sn++;
      this.serv.ult_an = this.serv.an;
      this.serv.an = this.cli.sn + 1;
      this.serv.flags = ack;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: 0 });
    }

  }


  /**
   * @description Comprobar si se activa o no EC
   * @author javierorp
   * @returns Maquina
   */
  comprobarEC(maq: Maquina, umbral: number) {
    let ec: string[] = ["", "", "", "", "EC", "", ""];
    let nullflag: string[] = ["", "", "", "", "", ""];

    if (maq.ec == true || maq.vc < umbral) // EC ya ha sido activado
      maq.flags = nullflag
    else {
      maq.ec = true;
      maq.flags = ec;
    }
    return maq;
  }

  /**
     * @description incrementar la ventana de congestion o no
     * @author javierorp
     * @returns Maquina
     */
  incrementarVC(maqVC: Maquina, maqACK: Maquina, mss: number) {
    if (maqVC.ec == false){ // EC desactivado
      maqVC.vc += Math.ceil((maqACK.an - maqACK.ult_an) / mss);
      maqVC.vcrep = maqVC.vc;
    }
    else
    {
      let tramas: number = Math.ceil((maqACK.an - maqACK.ult_an) / mss);

      for (let i = 1; i <= tramas; i++) {
        maqVC.vc = maqVC.vc + 1/Math.floor(maqVC.vc);
      }
      maqVC.vcrep = Math.round((maqVC.vc + Number.EPSILON) * 100) / 100;
    }
    maqVC.vcCtrl = 0;

    return maqVC;
  }

  /**
   * 
 * @description Simula utilizando como algoritmo de congestion Reno
 * @author javierorp
 * @returns  
 */
  simularReno(): void {
    this.simularEC();
    return;
  }

  /**
   * @description Simula utilizando como algoritmo de congestion Tahoe
   * @author javierorp
   * @returns  
   */
  simularTahoe() {
    this.simularEC();
    return;
  }
}


