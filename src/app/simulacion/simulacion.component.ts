import { Component, Input, OnChanges } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';


// Interfaz de los datos a representar
interface Comunicacion {
  dir: number; //  0 bidireccional cliente<->servidor
  //  1 direccion cliente->servidor
  //  2 direccion servidor->cliente
  // -1 segmento perdido en direccion cliente->servidor
  // -2 segmento perdido en direccion servidor->cliente
  flagcli: string; // indica si es SYN, ACK o FIN
  sncli: number; // numero de secuencia
  ancli: number; // numero de reconocimento
  dcli: number; // tamnyo de lo datos enviados
  wcli: number; // tamanyo de la ventana de recepcion permitida para la entidad contraria
  msscli: number; // maximo tamanyo de segmento
  flagserv: string; // indica si es SYN, ACK o FIN
  snserv: number; // numero de secuencia
  anserv: number; // numero de reconocimento
  dserv: number; // tamnyo de lo datos enviados
  wserv: number; // tamanyo de la ventana de recepcion permitida para la entidad contraria
  mssserv: number; // maximo tamanyo de segmento
  numseg: number; // numero de segmento
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
  ipclien: string = null;
  ipserv: string = null;
  pgvalor: number = 0;
  
  // Variable para ocultar o no la simulacion
  public mostrar: Boolean = false;

  // Obtenemos los datos del componente padre ContenidoComponent
  @Input() simular: Simulacion;

  constructor() { }

  ngOnChanges() {
    this.generarSimulacion()
  }

  /**
   * TODO: 
   * @description Genera la simulacion 
   * @author javierorp
   */
  generarSimulacion(): void {
    this.comunicacion = []
    this.pgvalor = 0;
    this.mostrar = false;
    /*-----PARAMETROS DE ENTRADA-----*/
    // Cliente
    this.ipclien = this.simular.ipclien;
    var mssclien: number = this.simular.mssclien;
    var datosclien: number = this.simular.datosclien;
    var snclien: number = this.simular.snclien;
    var segperdclien: string = this.simular.segperdclien;
    var wclien: number = this.simular.wclien;
    // Servidor
    this.ipserv = this.simular.ipserv;
    var mssserv: number = this.simular.mssserv;
    var datosserv: number = this.simular.datosserv;
    var snserv: number = this.simular.snserv;
    var segperdserv: string = this.simular.segperdserv;
    var wserv: number = this.simular.wserv;
    // General
    var timeout: number = this.simular.timeout;
    var algort: string = this.simular.algort;
    var cierre: string = this.simular.cierre;

    /*-----VARIABLES-----*/
    var nseg: number = 0;
    var anclien: number = 0;
    var anserv: number = 0;
    var numpqtcli: number = Math.floor(datosclien / mssclien);
    var modpqtcli: number = datosclien % mssclien;
    var numpqtserv: number = Math.floor(datosserv / mssserv);
    var modpqtserv: number = datosserv % mssserv;
    var dclienenv: number = 0;
    var dservenv: number = 0;

    // Barra de progreso
    var numseg: number = numpqtcli + numpqtserv + 7; // 3 de conexion + 3 de cierre + 1 de ACK
    if (modpqtcli != 0)
      numseg++;
    if (modpqtserv != 0)
      numseg++;
    
      var incremento: number = 100/numseg;


    // ----- Conexion -----
    // Enviamos los segmentos de SYN; SYN, ACK; y ACK
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "SYN", sncli: snclien, ancli: 0, dcli: dclienenv, wcli: wclien, msscli: mssclien, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0 });
    anserv = snclien + 1;
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: "SYN, ACK", snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: mssserv });

    snclien = snclien + 1;
    anclien = snserv + 1;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "ACK", sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0 });

    this.pgvalor = this.pgvalor + (3 * incremento);

    // ----- Envio de datos cliente->servidor -----
    var envack = 0; // Cada dos paquetes enviados por el cliente, el servidor devuelve un ACK

    // El cliente envia los paquetes completos
    for (var i = 0; i < numpqtcli; i++) {
      snclien = snclien + dclienenv;
      anclien = snserv + dservenv;
      dclienenv = mssclien;

      if (nseg > 4 && envack >= 2) {
        this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: null, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0 });
        envack = 0;
      }
      else {
        anserv = snclien + dclienenv
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: null, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0 });
        envack++;
      }
      this.pgvalor = this.pgvalor + incremento;
    }
    setTimeout(this.generarSimulacion, 500);
    // El cliente envia el ultimo paquete con los datos restantes
    if (modpqtcli != 0) {
      snclien = snclien + dclienenv;
      anserv = snclien + dclienenv
      dclienenv = modpqtcli

      if (nseg > 4 && envack >= 2) {
        this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: null, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0 });
      }
      else {
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: null, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0 });
      }
      this.pgvalor = this.pgvalor + incremento;
    }

    // El servidor envia el ACK correspondiente al ultimo paquete
    snserv = snserv + dservenv
    anserv = snclien + dclienenv
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0 });
    this.pgvalor = this.pgvalor + incremento;

    // ----- Envio de datos servidor->cliente -----
    for (var i = 0; i < numpqtserv; i++) {
      snserv = snserv + dservenv;
      dservenv = mssserv;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0 });
      this.pgvalor = this.pgvalor + incremento;
    }

    // El servidor envia el ultimo paquete con los datos restantes
    if (modpqtserv != 0) {
      snserv = snserv + dservenv
      dservenv = modpqtserv
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0 });
      this.pgvalor = this.pgvalor + incremento;
    }


    // ----- Cierre -----
    if (cierre == "1") {
      snclien = snclien + dclienenv;
      anclien = snserv + dservenv;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "FIN", sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0 });

      snserv = snserv + dservenv;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: "FIN, ACK", snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0 });

      snclien = snclien + 1;
      anclien = snserv + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "ACK", sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0 });
      this.pgvalor = this.pgvalor + (3 * incremento);
    }
    else {
      snserv = snserv + dservenv;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: "FIN", snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0 });
      
      snclien = snclien + dclienenv;
      anclien = snserv + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "FIN, ACK", sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0 });

      snserv = snserv + 1;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: "ACK", snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0 });
      this.pgvalor = this.pgvalor + (3 * incremento);
    }
    this.mostrar = true;
  }

}
