import { Component, OnInit, Input } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, ignoreElements } from 'rxjs/operators';

// interfaz para las alertas alerta
interface Alerta {
  campo: string;
  msg: string;
}

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  // Iconos de los botones
  faBars = faBars; // menu
  faPlay = faPlay; // simular
  faRandom = faRandom; // rellenar formulario con datos aleatorios
  faUndo = faUndo; // limpiar formulario

  // Variable para ocultar o no la simulacion
  protected mostrar: Boolean = false;

  // Objeto simulacion que obtiene los datos del formulario
  simulacion: Simulacion = {
    mss: null,
    datos: null,
    ipserv: "192.168.0.1",
    ipclien: "127.0.0.1",
    snserv: null,
    snclien: null,
    algort: null,
    segperd: null
  };

  // Objeto que se le enviara a SimulacionComponent para simular
  simulacionEnv: Simulacion = {
    mss: null,
    datos: null,
    ipserv: "",
    ipclien: "",
    snserv: null,
    snclien: null,
    algort: null,
    segperd: ""
  };

  // Alertas
  private _success = new Subject<string>();
  staticAlertClosed = false;
  infoMsg: string;
  alertas: Alerta[];


  constructor() {
  }

  ngOnInit() {
    // Muestra la alerta de los navegadores compatibles durante 5 segundos
    var duracion: number = 5000; //en milisegundos
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.infoMsg = message);
    this._success.pipe(debounceTime(duracion)).subscribe(() => this.infoMsg = null);
    this._success.next('Se recomienda usar los navegadores Firefox, Chrome o basados en Chromium, como Vivaldi u Opera.');
  }


  /**
   * TODO: Revisar los parametros antes de asignalos a simulacionEnv
   * @description Asigna los parametros del formulario a la variable simulacionEnv por valor
   *              que es el atributo del componente hijo SimulacionComponents
   * @author javierorp
   */
  simular(): void {
    var simular: Boolean = false;

    // Se compruban que los parametros introducidos sean correctos
    simular = this.comprobarParametros();

    if (simular) {
      // Asi se consiguen que los datos se pasen por valor en lugar de por referencia
      var mss: number = this.simulacion.mss;
      var datos: number = this.simulacion.datos;
      var ipserv: string = this.simulacion.ipserv;
      var ipclien: string = this.simulacion.ipclien;
      var snserv: number = this.simulacion.snserv;
      var snclien: number = this.simulacion.snclien;
      var algort: number = this.simulacion.algort;
      var segperd: string = this.simulacion.segperd;

      this.simulacionEnv = { mss, datos, ipserv, ipclien, snserv, snclien, algort, segperd };

      // Permitimos que se visualice la simulacion
      this.mostrar = true;
    }
    else {
      this.mostrar = false;
    }
  }

  /**
   * TODO: 
   * @description Comprueba los parametros del formulario
   * @author javierorp
   * @returns devuevle 'false' si alguno de los parametros no es correcto y 'true' si todos son correctos
   *          ademas genera alertas para los parametros erroneos
   */
  comprobarParametros(): Boolean {
    var simular: Boolean = false;

    // Expresion regular para comprobar que la IP sea valida con numeros comprendidos entre 0 y 255
    var ipRegex = new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$');

    // Se trata la cadena que sontiene los sementes perdidos
    var segperd: string = this.simulacion.segperd;
    if (segperd != null) {
      segperd = segperd.replace(/[a-zA-Z]+/gi, ''); // se eliminan los caracteres no numericos
      segperd = segperd.replace(/\s/g, ''); // se eliminan los espacios
      segperd = segperd.replace(/\W+/g, ','); // se cambian todos los caracteres no numericos por comas (,)
      segperd = (segperd[0] == ',') ? segperd.substring(1) : segperd; // si el primer caracter es una coma se elimina
      segperd = (segperd[segperd.length - 1] == ',') ? segperd.substring(0, segperd.length - 1) : segperd; // si el ultimo caracter es una coma se elimina
      this.simulacion.segperd = segperd;
    }
    // Expresion regular para comprbar si segperd son numeros separados por comas
    var segperdRegex = new RegExp('[0-9]+(,[0-9]+)+/g');

    // Se eliminan todas las alertas
    this.alertas = [];

    //Se comprueban todos los parametros y se incluyen las alertas en caso de ser necesarias
    if (this.simulacion.mss < 1)
      this.alertas.push({ campo: "MSS(B)", msg: "El tamaño máximo de segmento a enviar (en bytes) debe ser mayor que 0." });
    if (this.simulacion.datos < 1)
      this.alertas.push({ campo: "Datos(B)", msg: "El tamaño de los datos a enviar (en bytes) debe ser mayor que 0." });
    if (!ipRegex.test(this.simulacion.ipserv))
      this.alertas.push({ campo: "IP del servidor", msg: "Debe ser del tipo [0-255].[0-255].[0-255].[0-255]" });
    if (!ipRegex.test(this.simulacion.ipclien))
      this.alertas.push({ campo: "IP del cliente", msg: "Debe ser del tipo [0-255].[0-255].[0-255].[0-255]" });
    if (this.simulacion.snserv < 1)
      this.alertas.push({ campo: "SN Servidor", msg: "El número de secuencia por el que comienza el servidor debe ser mayor que 0." });
    if (this.simulacion.snclien < 1)
      this.alertas.push({ campo: "SN Cliente", msg: "El número de secuencia por el que comienza el cliente debe ser mayor que 0." });
    if (this.simulacion.segperd != null && this.simulacion.segperd.indexOf(',') != -1 && segperdRegex.test(this.simulacion.segperd))
      this.alertas.push({ campo: "Segmentos perdidos", msg: "Los segmentos que se pierden deben ser numeros separados por comas." });
    if (this.simulacion.algort == null)
      this.alertas.push({ campo: "Algoritmo de congestión", msg: "Debe seleccionar un algoritmo de congestión a usar." });

    //Se comprueba si se debe simular o no, retorna 'false' si alguno de los parametros es incorrecto y 'true' si todos lo son
    simular = (this.simulacion.mss < 1 || this.simulacion.datos < 1 || !ipRegex.test(this.simulacion.ipclien) || !ipRegex.test(this.simulacion.ipserv) || this.simulacion.snserv < 1 || this.simulacion.snclien < 1 || this.simulacion.algort == null || (this.simulacion.segperd != null && this.simulacion.segperd.indexOf(',') != -1 && segperdRegex.test(this.simulacion.segperd))) ? false : true;

    return simular;
  }


  /**
   * TODO: 
   * @description Rellenar los datos del formulario con valores aleatorios excepto la IP del servidor y del cliente,
   *              los segmentos que se pierden y el algoritmo de congestion a usar, que debe seleccionarlo el usuario
   * @author javierorp
   */
  rellenarDatos(): void {
    this.simulacion.mss = this.numAleatorio(100, 2000, 10);
    this.simulacion.datos = this.numAleatorio(100, 5000, 10);
    this.simulacion.snserv = this.numAleatorio(1, 500, 5);
    this.simulacion.snclien = this.numAleatorio(1, 500, 5);
  }

  /**
   * TODO: 
   * @description Genera un numero aleatorio comprendido entre un numero y un maximo multiplo del un valor 
   * @author javierorp
   * @param min minomo numero a obtener
   * @param max maximo numbero a obtener
   * @param multiplo numero del que seran multiplos los valores obtenidos
   * @returns aleatorio 
   */
  numAleatorio(min, max, multiplo): number {
    var numero: number = Math.floor(Math.random() * (max - min) + min);
    var modulo: number = (numero % multiplo);
    var redondeo: number = (modulo != 0) ? (multiplo - modulo) : 0;
    return numero + redondeo;
  }

  /**
   * TODO:
   * @description Limpia el formulario y oculta la simulacion
   * @author javierorp
   */
  limpiar(): void {
    this.alertas = [];

    var mss: number = null;
    var datos: number = null;
    var ipserv: string = "192.168.0.1"
    var ipclien: string = "127.0.0.1";
    var snserv: number = null;
    var snclien: number = null;
    var algort: number = null;
    var segperd: string = "";

    this.simulacion = { mss, datos, ipserv, ipclien, snserv, snclien, algort, segperd };

    // Ocultamos la simulacion
    this.mostrar = false;
  }

  /**
   * TODO:
   * @description Cierra la alerta sobre la que se ha pulsado
   * @author javierorp
   * @param alerta alerta a cerrar
   */
  cerrarAlerta(alerta: Alerta): void {
    this.alertas.splice(this.alertas.indexOf(alerta), 1);
  }

}
