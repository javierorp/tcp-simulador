import { Component, Input, OnChanges } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import { delay, share, combineAll } from 'rxjs/operators';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { ReturnStatement } from '@angular/compiler';

// Interfaz de los datos a representar
interface Comunicacion {
  dir: number; //  0 bidireccional cliente<->servidor
  //  1 direccion cliente->servidor
  //  2 direccion servidor->cliente
  // -1 segmento perdido en direccion cliente->servidor
  // -2 segmento perdido en direccion servidor->cliente
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
  an: number; // numero de reconocimento
  data: number; // tamnyo de lo datos enviados
  w: number; // tamanyo de la ventana de recepcion permitida para la entidad contraria
  segperd: string; // segmentos perdidos
  vc: number; // ventana de congestion
  flags: string[]; // [SYN, FIN, ACK, AL, EC, RR]
  ec: Boolean; // control de activacion del flag EC
  vcCtrl: number; // control para incrementar o no la VC
}


@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent implements OnChanges {

  faLaptop = faLaptop;
  faServer = faServer;
  comunicacion: Comunicacion[];
  cli: Maquina;
  serv: Maquina;
  ipclien: string = null;
  ipserv: string = null;
  mostrar: Observable<{}>; // Mostrar simulacion o imagen de 'cargando'

  // Obtenemos los datos del componente padre ContenidoComponent
  @Input() simular: Simulacion;

  constructor() { }

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
  generarSimulacion() {
    this.comunicacion = [];
    this.cli = { sn: 0, an: 0, data: 0, w: 0, segperd: "", vc: 0, flags: [], ec: false, vcCtrl: 0 };
    this.serv = { sn: 0, an: 0, data: 0, w: 0, segperd: "", vc: 0, flags: [], ec: false, vcCtrl: 0 };
    this.ipclien = this.simular.ipclien;
    this.ipserv = this.simular.ipserv;

    if (this.simular.algort == "1")
      this.simularReno();
    else
      this.simularTahoe();

    return of(true).pipe(delay(500));; // Ocultar la imagen de carga y mostrar la simulacion
  }

  /**
   * @description Simula utilizando como algoritmo de congestion Reno
   * @author javierorp
   * @returns  
   */
  simularReno() {
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
    this.cli.an = 0;
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
    this.serv.an = 0;
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
    this.serv.an = this.cli.sn + 1;
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: mssserv, vc: this.cli.vc });
    this.serv.flags = nullflag;
    this.cli.sn += 1;
    this.cli.an = this.serv.sn + 1;
    this.cli.flags = ack;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: this.serv.vc });
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
      this.serv.sn += 1;
      this.serv.an = this.cli.sn + denv;
      this.incrementarVC(this.cli);
      this.comprobarEC(this.cli, umbral);
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: this.cli.vc });
      this.cli.an += 1;
    }

    let envAck: number = 0; // Cada dos paquetes enviados por el cliente, el servidor devuelve un ACK
    let ultAnServ: number = this.serv.an; // Ultimo AN enviado por el servidor
    let ultSnCli: number = this.cli.sn; // Ultimo SN del cliente
    let ultDataEnv: number = denv; // Tamanyo de los ultimos datos enviados
    for (; numPqtClienEnv <= numPqtClien; numPqtClienEnv++) {
      if (numPqtClienEnv == numPqtClien) // Si es el ultimo paquete a enviar, se envian los datos restantes
        denv = modPqtClien;

      if (envAck == this.cli.vc) // Si se han enviado los paquetes que permite la VC pero no se ha recibido aun un ACK, se envia
      {
        this.incrementarVC(this.cli);
        this.comprobarEC(this.cli, umbral);
        this.serv.sn++;
        this.serv.an = ultSnCli + (ultSnCli - ultAnServ);
        this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: this.cli.vc });
        ultSnCli = this.cli.sn;
        this.cli.vcCtrl++;
        this.cli.an++;
        ultAnServ = this.serv.an;
        numPqtClienEnv--;
        envAck = 0;
      }
      else if (envAck < 2) // El numero de paquetes enviados no alcanza al ACK
      {
        this.cli.sn += ultDataEnv;
        this.comprobarEC(this.cli, umbral);
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: denv, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
        ultSnCli = this.cli.sn;
        ultDataEnv = denv;
        envAck++;
      }
      else { // Cada 2 paquetes enviados por el cliente, el servidor envia un ACK
        this.cli.sn += ultDataEnv;
        this.incrementarVC(this.cli);
        this.comprobarEC(this.cli, umbral);
        this.serv.sn++;
        this.serv.an = ultSnCli + (ultSnCli - ultAnServ);
        this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: denv, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: this.cli.vc });
        ultDataEnv = denv;
        ultSnCli = this.cli.sn;
        this.cli.vcCtrl++;
        this.cli.an++;
        ultAnServ = this.serv.an;
        envAck = 0;
      }

      if (envAck == 0 && numPqtClienEnv + 1 == numPqtClien && modPqtClien == 0) // Si es el ultimo paquete a enviar y no hay mas datos a enviar salimos del bucle
        numPqtClienEnv++;
    }

    // El servidor espera 1.5 ticks por si recibe otro paquete
    this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

    // El servidor envia el ACK del ultimo paquete
    if (envAck != 0 || (envAck == 0 && modPqtClien != 0)) { // Si el ACK no se ha enviado ya
      this.incrementarVC(this.cli);
      this.comprobarEC(this.cli, umbral);
      this.serv.sn++;
      this.serv.an = ultSnCli + denv;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: this.cli.vc });
      ultSnCli = this.cli.sn;
      this.cli.vcCtrl++;
      this.cli.an++;
      ultAnServ = this.serv.an;
      this.cli.flags = nullflag;
    }


    // >>>>> Envio de datos servidor->cliente <<<<<
    if (numPqtServ == 0)
      denv = modPqtServ;
    else
      denv = mss;
    // El servidor envía el primer paquete
    this.serv.sn++;
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: denv, wserv: this.serv.w, mssserv: 0, vc: 0 });
    numPqtServEnv++;

    if (numPqtServ != 0) // Si hay mas de un paquete a enviar
    {
      // El cliente espera 1.5 ticks por si recibe otro paquete
      this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      // El cliente manda el ACK del primer paquete   
      this.cli.sn = ultAnServ;
      this.cli.an = this.serv.sn + denv;
      this.incrementarVC(this.serv);
      this.comprobarEC(this.serv, umbral);
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: this.serv.vc });
      this.serv.an += 1;
    }

    let ultAnCli: number = this.cli.an; // Ultimo AN enviado por el servidor
    let ultSnServ: number = this.serv.sn; // Ultimo SN del cliente
    ultDataEnv = denv; // Tamanyo de los ultimos datos enviados
    envAck = 0;
    for (; numPqtServEnv <= numPqtServ; numPqtServEnv++) {
      if (numPqtServEnv == numPqtServ) // Si es el ultimo paquete a enviar, se envian los datos restantes
        denv = modPqtServ;

      if (envAck == this.serv.vc) // Si se han enviado los paquetes que permite la VC pero no se ha recibido aun un ACK, se envia
      {
        this.incrementarVC(this.serv);
        this.comprobarEC(this.serv, umbral);
        this.cli.sn++;
        this.cli.an = ultSnServ + (ultSnServ - ultAnCli);
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: this.serv.vc });
        ultSnServ = this.serv.sn;
        this.serv.vcCtrl++;
        this.serv.an++;
        ultAnCli = this.cli.an;
        numPqtServEnv--;
        envAck = 0;
      }
      else if (envAck < 2) // El numero de paquetes enviados no alcanza al ACK
      {
        this.serv.sn += ultDataEnv;
        this.comprobarEC(this.serv, umbral);
        this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: this.cli.flags, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: denv, wserv: this.serv.w, mssserv: 0, vc: 0 });
        ultSnServ = this.serv.sn;
        ultDataEnv = denv;
        envAck++;
      }
      else { // Cada 2 paquetes enviados por el cliente, el servidor envia un ACK
        this.serv.sn += ultDataEnv;
        this.incrementarVC(this.serv);
        this.comprobarEC(this.serv, umbral);
        this.cli.sn++;
        this.cli.an = ultSnServ + (ultSnServ - ultAnCli);
        this.comunicacion.push({ numseg: ++nseg, dir: 10, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: denv, wserv: this.serv.w, mssserv: 0, vc: this.serv.vc });
        ultDataEnv = denv;
        ultSnServ = this.serv.sn;
        this.serv.vcCtrl++;
        this.serv.an++;
        ultAnCli = this.cli.an;
        envAck = 0;
      }

      if (envAck == 0 && numPqtServEnv + 1 == numPqtServ && modPqtServ == 0) // Si es el ultimo paquete a enviar y no hay mas datos a enviar salimos del bucle
        numPqtServEnv++;
    }

    // El cliente espera 1.5 ticks por si recibe otro paquete
    this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

    // El cliente envia el ACK del ultimo paquete
    if (envAck != 0 || (envAck == 0 && numPqtServEnv != 0)) { // Si el ACK no se ha enviado ya
      this.incrementarVC(this.serv);
      this.comprobarEC(this.serv, umbral);
      this.cli.sn++;
      this.cli.an = ultSnServ + denv;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: this.serv.flags, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: this.serv.vc });
      ultSnServ = this.serv.sn;
      this.serv.vcCtrl++;
      this.serv.an++;
      ultAnCli = this.cli.an;
    }

    // ----- Cierre -----
    // Enviamos los segmentos de FIN; FIN, ACK; y ACK
    if (cierre == "1") { // El cliente cierra la conexion
      //FIN
      this.cli.sn++;
      this.cli.flags = fin;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
      // FIN, ACK
      this.serv.sn += denv;
      this.serv.an = this.cli.sn + 1;
      this.serv.flags = finack;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: 0 });
      // ACK
      this.cli.sn++;
      this.cli.an = this.serv.sn + 1;
      this.cli.flags = ack;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

    } else { // El servidor cierra la conexion
      // FIN
      this.serv.sn += denv;
      this.serv.an = this.cli.sn + 1;
      this.serv.flags = fin;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: 0 });
      // FIN, ACK
      this.cli.sn++;
      this.cli.an = this.serv.sn + 1;
      this.cli.flags = finack;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: this.cli.flags, sncli: this.cli.sn, ancli: this.cli.an, dcli: 0, wcli: this.cli.w, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
      // ACK
      this.serv.sn++;
      this.serv.an = this.cli.sn + 1;
      this.serv.flags = ack;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: this.serv.flags, snserv: this.serv.sn, anserv: this.serv.an, dserv: 0, wserv: this.serv.w, mssserv: 0, vc: 0 });
    }

  }


  /**
   * @description Comprobar si se activa o no EC
   * @author javierorp
   * @returns 
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
     * @returns
     */
  incrementarVC(maq: Maquina) {
    if ((maq.ec == true && maq.vcCtrl == maq.vc) || maq.ec == false) { // Si EC ya está activo y el número de ACKs es igual a VC, o si EC no ha sido activado, se invrementa VC
      maq.vc++;
      maq.vcCtrl = 0;
    }
    return maq;
  }


  /**
   * @description Simula utilizando como algoritmo de congestion Tahoe
   * @author javierorp
   * @returns  
   */
  simularTahoe() {
    this.simularReno();
    return;
  }
}
