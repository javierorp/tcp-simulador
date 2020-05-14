import { Component, Input, OnChanges } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import { delay, share, combineAll } from 'rxjs/operators';

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
  vc: number; // ventana de congestion
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
    console.clear();
    this.comunicacion = []
    /*----------PRUEBA----------*/
    // this.simular.snclien = 345;
    // this.simular.mssclien = 770;
    // this.simular.datosclien = 3300;
    // this.simular.wclien = 8000;
    // this.simular.snserv = 190;
    // this.simular.mssserv = 680;
    // this.simular.datosserv = 3000
    // this.simular.wserv = 2000;
    // this.simular.cierre = "1";


    /*-----PARAMETROS DE ENTRADA-----*/
    // Cliente
    this.ipclien = this.simular.ipclien;
    let mssclien: number = this.simular.mssclien;
    let datosclien: number = this.simular.datosclien;
    let snclien: number = this.simular.snclien;
    let segperdclien: string = this.simular.segperdclien;
    let wclien: number = this.simular.wclien;
    // Servidor
    this.ipserv = this.simular.ipserv;
    let mssserv: number = this.simular.mssserv;
    let datosserv: number = this.simular.datosserv;
    let snserv: number = this.simular.snserv;
    let segperdserv: string = this.simular.segperdserv;
    let wserv: number = this.simular.wserv;
    // General
    let timeout: number = this.simular.timeout;
    let umbral: number = this.simular.umbral;
    let algort: string = this.simular.algort;
    let cierre: string = this.simular.cierre;

    /*-----VARIABLES-----*/
    let nseg: number = 0;
    let anclien: number = 0;
    let anserv: number = 0;
    let numpqtcli: number = Math.floor(datosclien / mssclien);
    let modpqtcli: number = datosclien % mssclien;
    let numpqtserv: number = Math.floor(datosserv / mssserv);
    let modpqtserv: number = datosserv % mssserv;
    let dclienenv: number = 0;
    let dservenv: number = 0;
    let vcclien: number = 1;
    let vcserv: number = 1;
    let mss: number = 0;
    let ultackclien: number = 0;
    let ultackserv: number = 0;
    let vcc: number = 0;

    // ----- Conexion -----
    // Enviamos los segmentos de SYN; SYN, ACK; y ACK
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "SYN", sncli: snclien, ancli: 0, dcli: dclienenv, wcli: wclien, msscli: mssclien, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    anserv = snclien + 1;

    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: "SYN, ACK", snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: mssserv, vc: vcclien });
    ultackserv = anserv;

    snclien += 1;
    anclien = snserv + 1;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "ACK", sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcserv });
    ultackclien = anclien;

    // Se elige el minimo MSS
    mss = Math.min(mssclien, mssserv);

    // ----- Envio de datos cliente->servidor -----
    var envack = 0; // Cada dos paquetes enviados por el cliente, el servidor devuelve un ACK

    // El cliente envia los paquetes completos
    for (var i = 0; i < numpqtcli; i++) {
      snclien += dclienenv;
      dclienenv = mss;

      if (nseg > 4 && envack >= 2) {
        if (anserv > ultackserv) {
          vcclien += Math.floor((anserv - ultackserv) / mss);
          vcc = vcclien;
        } else {
          vcc = 0;
        }

        this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: null, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
        ultackclien = anclien;
        ultackserv = anserv;
        envack = 0;
      }
      else {
        anserv = snclien + dclienenv;
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: null, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
        ultackclien = anclien;
        envack++;
      }
    }

    // El cliente envia el ultimo paquete con los datos restantes
    if (modpqtcli != 0) {
      snclien += dclienenv;
      anserv = snclien + dclienenv
      ultackclien = anserv;
      dclienenv = modpqtcli

      if (nseg > 4 && envack >= 2) {
        if (anserv > ultackserv) {
          vcclien += Math.floor((anserv - ultackserv) / mss);
          vcc = vcclien;
        } else {
          vcc = 0;
        }

        this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: null, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
        ultackclien = anclien;
        ultackserv = anserv;
      }
      else {
        if (anclien > ultackclien) {
          vcserv += Math.floor((anclien - ultackclien) / mss);
          vcc = vcserv;
        } else {
          vcc = 0;
        }
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: null, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcc });
        ultackclien = anclien;
      }
    }

    // El servidor envia el ACK correspondiente al ultimo paquete
    snserv += dservenv
    anserv = snclien + dclienenv
    if (anserv > ultackserv) {
      vcclien += Math.floor((anserv - ultackserv) / mss);
      vcc = vcclien;
    } else {
      vcc = 0;
    }
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
    ultackserv = anserv;

    // ----- Envio de datos servidor->cliente -----
    snserv += 1;
    for (var i = 0; i < numpqtserv; i++) {
      snserv += dservenv;
      dservenv = mss;
      if (anserv > ultackserv) {
        vcclien += Math.floor((anserv - ultackserv) / mss);
        vcc = vcclien;
      } else {
        vcc = 0;
      }
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
      ultackserv = anserv;
    }

    // El servidor envia el ultimo paquete con los datos restantes
    if (modpqtserv != 0) {
      snserv = snserv + dservenv
      dservenv = modpqtserv
      if (anserv > ultackserv) {
        vcclien += Math.floor((anserv - ultackserv) / mss);
        vcc = vcclien;
      } else {
        vcc = 0;
      }
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: null, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
    }


    // ----- Cierre -----
    if (cierre == "1") { //Cliente cierra la conexion
      snclien = snclien + dclienenv;
      anclien = snserv + dservenv;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "FIN", sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      snserv = snserv + dservenv;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: "FIN, ACK", snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });

      snclien = snclien + 1;
      anclien = snserv + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "ACK", sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    }
    else { // Servidor cierra la conexion
      snserv = snserv + dservenv;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: "FIN", snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });

      snclien = snclien + dclienenv;
      anclien = snserv + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: "FIN, ACK", sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: null, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      snserv = snserv + 1;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: null, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: "ACK", snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });
    }
    return of(true).pipe(delay(500));; // Ocultar la imagen de carga y mostrar la simulacion
  }

}
