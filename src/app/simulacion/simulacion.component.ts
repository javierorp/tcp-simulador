import { Component, Input, OnChanges } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import { delay, share, combineAll } from 'rxjs/operators';
import { invalid } from '@angular/compiler/src/render3/view/util';

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
    this.comunicacion = []
    /*----------PRUEBA----------*/
    // this.simular.snclien = 345;
    // this.simular.mssclien = 500;
    // this.simular.datosclien = 5000;
    // this.simular.wclien = 8000;
    // this.simular.snserv = 190;
    // this.simular.mssserv = 680;
    // this.simular.datosserv = 5000;
    // this.simular.wserv = 2000;
    // this.simular.algort = "1";
    // this.simular.umbral = 3;

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
    let mss: number = Math.min(mssclien, mssserv); // Se elige el minimo MSS
    let nseg: number = 0;
    let anclien: number = 0;
    let anserv: number = 0;
    let numpqtcli: number = Math.floor(datosclien / mss);
    let modpqtcli: number = datosclien % mss;
    let numpqtserv: number = Math.floor(datosserv / mss);
    let modpqtserv: number = datosserv % mss;
    let dclienenv: number = 0;
    let dservenv: number = 0;
    let vcclien: number = 1;
    let vcserv: number = 1;
    let ultackclien: number = 0;
    let ultackserv: number = 0;
    let vcc: number = 0;
    let ecctrl: number = 1; // Variable de control de evitacion de la congestion

    let nullflag: string[] = ["", "", "", "", "", ""];
    let syn: string[] = ["SYN", "", "", "AL", "", ""];
    let synack: string[] = ["SYN", "", "ACK", "AL", "", ""];
    let ack: string[] = ["", "", "ACK", "", "", ""];
    let finack: string[] = ["", "FIN", "ACK", "", "", ""];
    let fin: string[] = ["", "FIN", "", "", "", ""];
    let ec: string[] = ["", "", "", "", "EC", "", ""];
    let al: string[] = ["", "", "", "", "", "AL", ""];
    let rr: string[] = ["", "", "", "", "", "", "rr"];

    // ----- Conexion -----
    // Enviamos los segmentos de SYN; SYN, ACK; y ACK
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: syn, sncli: snclien, ancli: 0, dcli: dclienenv, wcli: wclien, msscli: mssclien, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    anserv = snclien + 1;

    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: synack, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: mssserv, vc: vcclien });
    ultackserv = anserv;

    snclien += 1;
    anclien = snserv + 1;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: ack, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcserv });
    ultackclien = anclien;

    // ----- Envio de datos cliente->servidor -----
    var envack = 0; // Cada dos paquetes enviados por el cliente, el servidor devuelve un ACK

    // El cliente envía el primer paquete
    snclien += dclienenv;
    dclienenv = mss;
    anserv = snclien + dclienenv;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    ultackclien = anclien;
    // El servidor espera 1.5 ticks
    this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    // El servidor manda el ACK
    let flag: string[] = nullflag;
    let flagECctrl: boolean = true;

    if (vcclien >= umbral) {
      if (ecctrl == vcclien) {
        vcclien++;
        ecctrl = 0;
      }
      vcc = vcclien;
      ecctrl++;
    }
    else if (anserv > ultackserv) {
      vcclien += Math.floor((anserv - ultackserv) / mss);
      vcc = vcclien;
      if (vcclien >= umbral && flagECctrl) {
        flagECctrl = false;
        flag = ec;
      }
    }
    snserv++;
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: flag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
    ultackclien = anclien;
    ultackserv = anserv;
    flag = nullflag;

    // Continua mandando paquetes
    // El cliente envia los paquetes completos
    for (var i = 1; i < numpqtcli; i++) {
      // Controlar que envie el numero de paquetes que marca VC
      for (var j = 0; j < vcclien; j++) {
        snclien += dclienenv;
        // console.log("["+i+"]["+j+"] vcclien: " + vcclien + " - umbral: " + umbral);

        if (nseg > 4 && envack >= 2) {
          if (vcclien >= umbral) {
            if (ecctrl == vcclien) {
              vcclien++;
              ecctrl = 0;
            }
            vcc = vcclien;
            ecctrl++;
          }
          else if (anserv > ultackserv) {
            vcclien += Math.floor((anserv - ultackserv) / mss);
            vcc = vcclien;
            if (vcclien >= umbral && flagECctrl) {
              flagECctrl = false;
              flag = ec;
            }
          }

          snserv++;
          this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: flag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
          ultackclien = anclien;
          ultackserv = anserv;
          envack = 0;
          flag = nullflag;
        }
        else {
          anserv = snclien + dclienenv;
          this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
          ultackclien = anclien;
          envack++;
        }
      }
      // El servidor manda el ACK correspondiente
      if (i < (numpqtcli - 1)) {
        if (vcclien >= umbral) {
          if (ecctrl == vcclien) {
            vcclien++;
            ecctrl = 0;
          }
          vcc = vcclien;
          ecctrl++;
        }
        else if (anserv > ultackserv) {
          vcclien += Math.floor((anserv - ultackserv) / mss);
          vcc = vcclien;
          if (vcclien >= umbral && flagECctrl) {
            flagECctrl = false;
            flag = ec;
          }
        }
        snserv++;
        this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: flag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
        ultackclien = anclien;
        ultackserv = anserv;
        flag = nullflag;
        envack = 0;
      }
    }

    // El cliente envia el ultimo paquete con los datos restantes
    if (modpqtcli != 0) {
      snclien += dclienenv;
      ultackclien = anserv;
      dclienenv = modpqtcli

      if (nseg > 4 && envack >= 2) {
        if (vcclien >= umbral) {
          if (ecctrl == vcclien) {
            vcclien++;
            ecctrl = 0;
          }
          vcc = vcclien;
          ecctrl++;
        }
        else if (anserv > ultackserv) {
          vcclien += Math.floor((anserv - ultackserv) / mss);
          vcc = vcclien;
          if (vcclien >= umbral && flagECctrl) {
            flagECctrl = false;
            flag = ec;
          }
        }
        snserv++;
        this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: flag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
        ultackclien = anclien;
        ultackserv = anserv;
        flag = nullflag;
      }
      else {
        if (anclien > ultackclien) {
          vcserv += Math.floor((anclien - ultackclien) / mss);
          vcc = vcserv;
        } else {
          vcc = 0;
        }
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcc });
        ultackclien = anclien;
      }
    }

    // El servidor envia el primer paquete con ACK incluido
    snserv += 1;
    dservenv = mss;
    anserv = snclien + dclienenv;

    if (vcclien >= umbral) {
      if (ecctrl == vcclien) {
        vcclien++;
        ecctrl = 0;
      }
      vcc = vcclien;
      ecctrl++;
    }
    else if (anserv > ultackserv) {
      let inc = Math.round((anserv - ultackserv) / mss);
      if (inc == 0)
        inc = 1;
      vcclien += inc;
      vcc = vcclien;
      if (vcclien >= umbral && flagECctrl) {
        flagECctrl = false;
        flag = ec;
      }
    } else {
      vcc = 0;
    }
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: flag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
    ultackserv = anserv;
    flag = nullflag;

    // El cliente espera 1.5 ticks y envia el ACK correspondiente
    this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

    snclien += dclienenv;
    dclienenv = 0;
    anclien = snserv + dservenv;
    vcc = ++vcserv;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcc });
    ultackclien = anclien;
    ultackserv = anserv;

    // ----- Envio de datos servidor->cliente -----
    envack = 0;
    anserv += 1;

    for (var i = 1; i < numpqtserv; i++) {
      // Controlar que envie el numero de paquetes que marca VC
    //  for (var j = 0; j < vcserv; j++) {
        snserv += dservenv;
        // console.log("["+i+"]["+j+"] vcserv: " + vcserv);
        if (nseg > 4 && envack >= 2) {
          if (anclien > ultackclien) {
            vcserv += Math.floor((anclien - ultackclien) / mss);
            vcc = vcserv;
          } else {
            vcc = 0;
          }
          snclien++;
          this.comunicacion.push({ numseg: ++nseg, dir: 10, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
          ultackclien = anclien;
          ultackserv = anserv;
          envack = 0;
        }
        else {
          anclien = snserv + dservenv;
          this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: 0 });
          ultackserv = anserv;
          envack++;
        }
      }
      // El cliente manda el ACK correspondiente
      // if (i < (numpqtserv - 1)) {
      //   if (anclien > ultackclien) {
      //     vcserv += Math.floor((anclien - ultackclien) / mss);
      //     vcc = vcserv;
      //   } else {
      //     vcc = 0;
      //   }

      //   snclien++;
      //   this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcc });
      //   ultackserv = anserv;
      //   envack = 0;
     // }
    //}

    // El servidor envia el ultimo paquete con los datos restantes
    if (modpqtserv != 0) {
      snserv += dservenv;
      ultackserv = anclien;
      dservenv = modpqtserv;

      if (nseg > 4 && envack >= 2) {
        if (anclien > ultackclien) {
          vcserv += Math.floor((anclien - ultackclien) / mss);
          vcc = vcserv;
        } else {
          vcc = 0;
        }
        snclien++;
        this.comunicacion.push({ numseg: ++nseg, dir: 10, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
        ultackclien = anclien;
        ultackserv = anserv;
      }
      else {
        if (anserv > ultackserv) {
          vcclien += Math.floor((anserv - ultackserv) / mss);
          vcc = vcclien;
        } else {
          vcc = 0;
        }
        this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: 0 });
        ultackserv = anserv;
      }
    }

    // El cliente espera 1.5 ticks y envia el ACK correspondiente
    this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });


    snclien++;
    dclienenv = 0;
    anclien = snserv + dservenv;
    vcc = ++vcserv;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcc });
    ultackclien = anclien;
    ultackserv = anserv;

    // ----- Cierre -----
    if (cierre == "1") { //Cliente cierra la conexion;
      anclien = snserv + dservenv;
      snclien += 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: fin, sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      snserv = snserv + dservenv;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: finack, snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });

      snclien += 1;
      anclien = snserv + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: ack, sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    }
    else { // Servidor cierra la conexion
      snserv = snserv + dservenv;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: fin, snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });

      snclien = snclien + 1;
      anclien = snserv + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: finack, sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      snserv = snserv + 1;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: ack, snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });
    }
  }



  /**
   * @description Simula utilizando como algoritmo de congestion Tahoe
   * @author javierorp
   * @returns  
   */
  simularTahoe() {
    this.simularReno();
    return;
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
    let mss: number = Math.min(mssclien, mssserv); // Se elige el minimo MSS
    let nseg: number = 0;
    let anclien: number = 0;
    let anserv: number = 0;
    let numpqtcli: number = Math.floor(datosclien / mss);
    let modpqtcli: number = datosclien % mss;
    let numpqtserv: number = Math.floor(datosserv / mss);
    let modpqtserv: number = datosserv % mss;
    let dclienenv: number = 0;
    let dservenv: number = 0;
    let vcclien: number = 1;
    let vcserv: number = 1;
    let ultackclien: number = 0;
    let ultackserv: number = 0;
    let vcc: number = 0;
    let ecctrl: number = 1; // Variable de control de evitacion de la congestion

    let nullflag: string[] = ["", "", "", "", "", ""];
    let syn: string[] = ["SYN", "", "", "AL", "", ""];
    let synack: string[] = ["SYN", "", "ACK", "AL", "", ""];
    let ack: string[] = ["", "", "ACK", "", "", ""];
    let finack: string[] = ["", "FIN", "ACK", "", "", ""];
    let fin: string[] = ["", "FIN", "", "", "", ""];
    let ec: string[] = ["", "", "", "", "EC", "", ""];
    let al: string[] = ["", "", "", "", "", "AL", ""];
    let rr: string[] = ["", "", "", "", "", "", "rr"];

    // ----- Conexion -----
    // Enviamos los segmentos de SYN; SYN, ACK; y ACK
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: syn, sncli: snclien, ancli: 0, dcli: dclienenv, wcli: wclien, msscli: mssclien, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    anserv = snclien + 1;

    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: synack, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: mssserv, vc: vcclien });
    ultackserv = anserv;

    snclien += 1;
    anclien = snserv + 1;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: ack, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcserv });
    ultackclien = anclien;

    // ----- Envio de datos cliente->servidor -----
    var envack = 0; // Cada dos paquetes enviados por el cliente, el servidor devuelve un ACK

    // El cliente envía el primer paquete, espera 1.5 ticks la respuesta del servidor y luego prosigue
    snclien += dclienenv;
    dclienenv = mss;
    anserv = snclien + dclienenv;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    ultackclien = anclien;
    // Espera 1.5 ticks
    this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    // ACK del servidor
    let flag: string[] = nullflag;
    let flagECctrl: boolean = true;

    if (vcclien >= umbral) {
      if (ecctrl == vcclien) {
        vcclien++;
        ecctrl = 0;
      }
      vcc = vcclien;
      ecctrl++;
    }
    else if (anserv > ultackserv) {
      vcclien += Math.floor((anserv - ultackserv) / mss);
      vcc = vcclien;
      if (vcclien >= umbral && flagECctrl) {
        flagECctrl = false;
        flag = ec;
      }
    }
    snserv++;
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
    ultackclien = anclien;
    ultackserv = anserv;
    flag = nullflag;

    // Continua mandando paquetes
    // El cliente envia los paquetes completos
    for (var i = 1; i < numpqtcli; i++) {

      for (var j = 0; j < vcclien; j++) {
        snclien += dclienenv;
        console.log("[" + i + "][" + j + "] vcclien: " + vcclien + " - umbral: " + umbral);

        if (nseg > 4 && envack >= 2) {
          if (vcclien >= umbral) {
            if (ecctrl == vcclien) {
              vcclien++;
              ecctrl = 0;
            }
            vcc = vcclien;
            ecctrl++;
          }
          else if (anserv > ultackserv) {
            vcclien += Math.floor((anserv - ultackserv) / mss);
            vcc = vcclien;
            if (vcclien >= umbral && flagECctrl) {
              flagECctrl = false;
              flag = ec;
            }
          }

          snserv++;
          this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: flag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
          ultackclien = anclien;
          ultackserv = anserv;
          envack = 0;
          flag = nullflag;
        }
        else {
          anserv = snclien + dclienenv;
          this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
          ultackclien = anclien;
          envack++;
        }
      }

      // El servidor manda el ACK correspondiente
      if (vcclien >= umbral) {
        if (ecctrl == vcclien) {
          vcclien++;
          ecctrl = 0;
        }
        vcc = vcclien;
        ecctrl++;
      }
      else if (anserv > ultackserv) {
        vcclien += Math.floor((anserv - ultackserv) / mss);
        vcc = vcclien;
        if (vcclien >= umbral && flagECctrl) {
          flagECctrl = false;
          flag = ec;
        }
      }
      snserv++;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
      ultackclien = anclien;
      ultackserv = anserv;
      flag = nullflag;
      envack = 0;
    }

    // El cliente envia el ultimo paquete con los datos restantes
    if (modpqtcli != 0) {
      snclien += dclienenv;
      ultackclien = anserv;
      dclienenv = modpqtcli

      if (nseg > 4 && envack >= 2) {
        if (vcclien >= umbral) {
          if (ecctrl == vcclien) {
            vcclien++;
            ecctrl = 0;
          }
          vcc = vcclien;
          ecctrl++;
        }
        else if (anserv > ultackserv) {
          vcclien += Math.floor((anserv - ultackserv) / mss);
          vcc = vcclien;
          if (vcclien >= umbral && flagECctrl) {
            flagECctrl = false;
            flag = ec;
          }
        }
        snserv++;
        this.comunicacion.push({ numseg: ++nseg, dir: 0, flagcli: flag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
        ultackclien = anclien;
        ultackserv = anserv;
        flag = nullflag;
      }
      else {
        if (anclien > ultackclien) {
          vcserv += Math.floor((anclien - ultackclien) / mss);
          vcc = vcserv;
        } else {
          vcc = 0;
        }
        this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcc });
        ultackclien = anclien;
      }
    }

    // El servidor envia el primer paquete con ACK incluido
    snserv += 1;
    dservenv = mss;
    anserv = snclien + dclienenv;

    if (vcclien >= umbral) {
      if (ecctrl == vcclien) {
        vcclien++;
        ecctrl = 0;
      }
      vcc = vcclien;
      ecctrl++;
    }
    else if (anserv > ultackserv) {
      let inc = Math.round((anserv - ultackserv) / mss);
      if (inc == 0)
        inc = 1;
      vcclien += inc;
      vcc = vcclien;
      if (vcclien >= umbral && flagECctrl) {
        flagECctrl = false;
        flag = ec;
      }
    } else {
      vcc = 0;
    }
    this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: flag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
    ultackserv = anserv;
    flag = nullflag;

    // El cliente espera 1.5 ticks y envia el ACK correspondiente
    this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

    snclien += dclienenv;
    dclienenv = 0;
    anclien = snserv + dservenv;
    vcc = ++vcserv;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcc });
    ultackclien = anclien;
    ultackserv = anserv;

    // ----- Envio de datos servidor->cliente -----
    envack = 0;
    anserv += 1;

    for (var i = 1; i < numpqtserv; i++) {
      snserv += dservenv;
      dservenv = mss;

      if (nseg > 4 && envack >= 2) {
        if (anclien > ultackclien) {
          vcserv += Math.floor((anclien - ultackclien) / mss);
          vcc = vcserv;
        } else {
          vcc = 0;
        }
        snclien++;
        this.comunicacion.push({ numseg: ++nseg, dir: 10, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
        ultackclien = anclien;
        ultackserv = anserv;
        envack = 0;
      }
      else {
        anclien = snserv + dservenv;
        this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: 0 });
        ultackserv = anserv;
        envack++;
      }
    }

    // El servidor envia el ultimo paquete con los datos restantes
    if (modpqtserv != 0) {
      snserv += dservenv;
      ultackserv = anclien;
      dservenv = modpqtserv;

      if (nseg > 4 && envack >= 2) {
        if (anclien > ultackclien) {
          vcserv += Math.floor((anclien - ultackclien) / mss);
          vcc = vcserv;
        } else {
          vcc = 0;
        }
        snclien++;
        this.comunicacion.push({ numseg: ++nseg, dir: 10, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: vcc });
        ultackclien = anclien;
        ultackserv = anserv;
      }
      else {
        if (anserv > ultackserv) {
          vcclien += Math.floor((anserv - ultackserv) / mss);
          vcc = vcclien;
        } else {
          vcc = 0;
        }
        this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: snserv, anserv: anserv, dserv: dservenv, wserv: wserv, mssserv: 0, vc: 0 });
        ultackserv = anserv;
      }
    }

    // El cliente espera 1.5 ticks y envia el ACK correspondiente
    this.comunicacion.push({ numseg: null, dir: null, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });


    snclien++;
    dclienenv = 0;
    anclien = snserv + dservenv;
    vcc = ++vcserv;
    this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: nullflag, sncli: snclien, ancli: anclien, dcli: dclienenv, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: vcc });
    ultackclien = anclien;
    ultackserv = anserv;

    // ----- Cierre -----
    if (cierre == "1") { //Cliente cierra la conexion;
      anclien = snserv + dservenv;
      snclien += 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: fin, sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      snserv = snserv + dservenv;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: finack, snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });

      snclien += 1;
      anclien = snserv + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: ack, sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });
    }
    else { // Servidor cierra la conexion
      snserv = snserv + dservenv;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: fin, snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });

      snclien = snclien + 1;
      anclien = snserv + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 1, flagcli: finack, sncli: snclien, ancli: anclien, dcli: 0, wcli: wclien, msscli: 0, flagserv: nullflag, snserv: 0, anserv: 0, dserv: 0, wserv: 0, mssserv: 0, vc: 0 });

      snserv = snserv + 1;
      anserv = snclien + 1;
      this.comunicacion.push({ numseg: ++nseg, dir: 2, flagcli: nullflag, sncli: 0, ancli: 0, dcli: 0, wcli: 0, msscli: 0, flagserv: ack, snserv: snserv, anserv: anserv, dserv: 0, wserv: wserv, mssserv: 0, vc: 0 });
    }
  }

}
