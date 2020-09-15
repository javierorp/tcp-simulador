import { Component, OnInit, ChangeDetectorRef, AfterContentChecked, ViewChild } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faBars, faEraser, faPlay, faRandom, faQuestionCircle, faCookieBite, faCogs, faExclamationTriangle, faExclamationCircle, faHandPointUp, faEye, faBook, faPollH } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { InfoparametrosComponent } from '../infoparametros/infoparametros.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime } from 'rxjs/operators';
import { ErrorComponent } from '../error/error.component';
import { SimulacionComponent } from '../simulacion/simulacion.component';

// Interfaz para las alertas
interface Alerta {
  campo: string;
  msg: string;
}

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit, AfterContentChecked {

  // Abrir o cerrar barra lateral
  sidenavOpened: boolean = true;
  movil: boolean = false;

  // Iconos de los botones
  faBars = faBars; // menu
  faPlay = faPlay; // simular
  faRandom = faRandom; // rellenar formulario con datos aleatorios
  faEraser = faEraser; // limpiar formulario
  faQuestionCircle = faQuestionCircle; // informacion sobre los parametros
  faCookieBite = faCookieBite; // cookie
  faCogs = faCogs; // engranaje
  faExclamationTriangle = faExclamationTriangle; // exclamacion triangular
  faExclamationCircle = faExclamationCircle; // exclamación circular
  faHandPointUp = faHandPointUp; // mano con dedo indice levantado
  faEye = faEye; // icono ojo
  faBook = faBook; // icono guia de usuario
  faPollH = faPollH; // encuesta

  // Variable para ocultar o no la simulacion
  public ejecutar: Boolean = false;

  // Componente hijo donde se ejecuta la simulacion
  @ViewChild(SimulacionComponent, {static: false}) simulacionComp: SimulacionComponent;

  // Objeto simulacion que obtiene los datos del formulario
  simulacion: Simulacion = {
    //Cliente
    ipclien: "127.0.0.1",
    mssclien: null,
    datosclien: null,
    snclien: null,
    segperdclien: null,
    wclien: null,
    //Servidor
    ipserv: "192.168.0.1",
    mssserv: null,
    datosserv: null,
    snserv: null,
    segperdserv: null,
    wserv: null,
    //General
    timeout: null,
    umbral: null,
    algort: "",
    cierre: ""
  };

  // Objeto que se le enviara a SimulacionComponent para simular
  simulacionEnv: Simulacion = {
    //Cliente
    ipclien: "",
    mssclien: null,
    datosclien: null,
    snclien: null,
    segperdclien: "",
    wclien: null,
    //Servidor
    ipserv: "",
    mssserv: null,
    datosserv: null,
    snserv: null,
    segperdserv: "",
    wserv: null,
    //General
    timeout: 0,
    umbral: 0,
    algort: "",
    cierre: ""
  };

  // Alertas
  private _success = new Subject<string>();
  staticAlertClosed = false;
  infoMsg: string = null;
  infoCookie: boolean = true;
  infoMovil: boolean = false;
  infoOpt: boolean = true;
  alertas: Alerta[];
  navOptimizado: boolean = false;
  enprocMsg: boolean = false;
  infoGuia: boolean = true;
  infoEncuesta: boolean = false;

  constructor(private modalService: NgbModal, private translate: TranslateService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    // Si se visualiza en un movil la barra lateral aparece cerrada y se activa la alerta de informacion en movil
    this.movil = window.screen.width <= 705 ? true : false;
    this.sidenavOpened = this.movil == true ? false: true;
    this.infoMovil = this.movil == true ? true: false;

    // Muestra la alerta de las cookies y/o navegadores compatibles durante 5 segundos
    var duracion: number = 10000; //en milisegundos
    let navegador: string = navigator.userAgent;

    if(navegador.indexOf("Chrome") > -1)
        this.navOptimizado = true;
    if(navegador.indexOf("Firefox") > -1)
        this.navOptimizado = true;

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.infoMsg = message);
    this._success.pipe(debounceTime(duracion)).subscribe(() => this.infoMsg = null);
    this.translate.get('contenido.aviso').subscribe(value => { this._success.next(value); });

    // this.test();
  }

  ngAfterContentChecked() {
    // Forzamos la deteccion de cambios despues de que el contenido se haya comprobado para evitar el error ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }

  /**
   * @description Destruye el componente Simulacion si existiese
   * @author javierorp
   */
  destruirSimulacionComp(): void {
    if (this.simulacionComp) {
      this.simulacionComp.ngOnDestroy();
    }
  }

  /**
   * @description Abre una ventana con la informacion sobre los parametros
   * @author javierorp
   */
  infoParametros() {
    try {
      const modalRef = this.modalService.open(InfoparametrosComponent, {windowClass: 'modal-entrada'});
    }
    catch (error) {
      const modalRef = this.modalService.open(ErrorComponent, {windowClass: 'modal-entrada'});
      modalRef.componentInstance.desde = "Contenido";
      modalRef.componentInstance.parametros = JSON.stringify(this.simulacion);
      modalRef.componentInstance.merror = error;
    }
  }


  /**
   * @description Asigna los parametros del formulario a la variable simulacionEnv por valor
   *              que es el atributo del componente hijo SimulacionComponents
   * @author javierorp
   */
  simular(): void {
    try {
      var simular: Boolean = false;
      this.enprocMsg = false;
      this.destruirSimulacionComp(); // Destruimos la simulacion anterior

      // Se compruban que los parametros introducidos sean correctos
      simular = this.comprobarParametros();

      if (simular) {
        // Asi se consiguen que los datos se pasen por valor en lugar de por referencia
        var ipclien: string = this.simulacion.ipclien;
        var mssclien: number = this.simulacion.mssclien;
        var datosclien: number = this.simulacion.datosclien;
        var snclien: number = this.simulacion.snclien;
        var segperdclien: string = this.simulacion.segperdclien;
        var wclien: number = this.simulacion.wclien;
        var ipserv: string = this.simulacion.ipserv;
        var mssserv: number = this.simulacion.mssserv;
        var datosserv: number = this.simulacion.datosserv;
        var snserv: number = this.simulacion.snserv;
        var segperdserv: string = this.simulacion.segperdserv;
        var wserv: number = this.simulacion.wserv;
        var timeout: number = this.simulacion.timeout;
        var umbral: number = this.simulacion.umbral;
        var algort: string = this.simulacion.algort;
        var cierre: string = this.simulacion.cierre;
        this.simulacionEnv = { ipclien, mssclien, datosclien, snclien, segperdclien, 
          wclien, ipserv, mssserv, datosserv, snserv, segperdserv, wserv, timeout, 
          umbral, algort, cierre };

        this.sidenavOpened = this.movil == true ? false : true; // Ocultamos la barra de navegacion si es un movil
        // Permitimos que se visualice la simulacion
        this.ejecutar = true;
      }
      else {
        this.ejecutar = false;
      }
      this.infoGuia = false;
    }
    catch (error) {
      const modalRef = this.modalService.open(ErrorComponent, { windowClass: 'modal-entrada' });
      modalRef.componentInstance.desde = "Contenido";
      modalRef.componentInstance.parametros = JSON.stringify(this.simulacion);
      modalRef.componentInstance.merror = error;
    }
  }


  /**
   * @description Comprueba los parametros del formulario
   * @author javierorp
   * @returns devuevle 'false' si alguno de los parametros no es correcto y 'true' si todos son correctos
   *          ademas genera alertas para los parametros erroneos
   */
  comprobarParametros(): Boolean {
    if (this.simulacion.segperdclien == "error")
      throw new Error('Test ErrorComponent');

    var simular: Boolean = false;

    // -----IPs-----
    // Expresion regular para comprobar que la IP sea valida con numeros comprendidos entre 0 y 255
    var ipRegex = new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$');
    // Se eliminan los espacios en blanco de las IPs
    this.simulacion.ipclien = this.simulacion.ipclien.replace(/\s/g, '');
    this.simulacion.ipclien = this.simulacion.ipclien.replace(/\s/g, '');
    //Se eliminan los caracteres que sean letras
    this.simulacion.ipclien = this.simulacion.ipclien.replace(/[a-zA-Z]+/gi, '');
    this.simulacion.ipserv = this.simulacion.ipserv.replace(/[a-zA-Z]+/gi, '');
    // Se cambias los caracteres no numericos por punto (.)
    this.simulacion.ipserv = this.simulacion.ipserv.replace(/\W+/g, '.');
    this.simulacion.ipclien = this.simulacion.ipclien.replace(/\W+/g, '.');

    //-----SEGMENTOS PERDIDOS-----
    // Expresion regular para comprbar si segperd son numeros separados por comas
    var segperdRegex = new RegExp('[0-9]+(,[0-9]+)+/g');
    var segperdclien: string = this.simulacion.segperdclien;
    var segperdserv: string = this.simulacion.segperdserv;

    if (segperdclien != null) { //Cliente
      segperdclien = segperdclien.replace(/[a-zA-Z]+/gi, ''); // se eliminan los caracteres que sean letras
      segperdclien = segperdclien.replace(/\s/g, ''); // se eliminan los espacios
      segperdclien = segperdclien.replace(/\W+/g, ','); // se cambian todos los caracteres no numericos por comas (,)

      var segperdNum = segperdclien.split(',').map(Number); // se transforma la cadena de caracteres a un array numerico
      segperdNum = segperdNum.sort((n1, n2) => n1 - n2); // se ordenan los numeros de menor a mayor
      segperdclien = segperdNum.toString(); // se transforma el array numerico en una cadena de caracteres

      // Eliminamos los valores duplicados
      var segperdArr = segperdclien.split(',');
      for (var i = 0; i < segperdArr.length; i++) {
        for (var j = i + 1; j < (segperdArr.length); j++) {
          if (segperdArr[i] == segperdArr[j])
            delete segperdArr[j];
        }
      }
      segperdclien = segperdArr.toString();
      segperdclien = segperdclien.replace(/\W+/g, ','); // se vuelve a ejecutar esta regex para eliminar las comas duplicadas
      segperdclien = (segperdclien[0] == ',') ? segperdclien.substring(1) : segperdclien; // si el primer caracter es una coma se elimina
      segperdclien = (segperdclien[segperdclien.length - 1] == ',') ? segperdclien.substring(0, segperdclien.length - 1) : segperdclien; // si el ultimo caracter es una coma se elimina

      if (segperdclien == "0")
        segperdclien = ""

      this.simulacion.segperdclien = segperdclien;
    }

    if (segperdserv != null) { //Servidor
      segperdserv = segperdserv.replace(/[a-zA-Z]+/gi, ''); // se eliminan los caracteres que sean letras
      segperdserv = segperdserv.replace(/\s/g, ''); // se eliminan los espacios
      segperdserv = segperdserv.replace(/\W+/g, ','); // se cambian todos los caracteres no numericos por comas (,)

      var segperdNum = segperdserv.split(',').map(Number); // se transforma la cadena de caracteres a un array numerico
      segperdNum = segperdNum.sort((n1, n2) => n1 - n2); // se ordenan los numeros de menor a mayor
      segperdserv = segperdNum.toString(); // se transforma el array numerico en una cadena de caracteres

      // Eliminamos los valores duplicados
      var segperdArr = segperdserv.split(',');
      for (var i = 0; i < segperdArr.length; i++) {
        for (var j = i + 1; j < (segperdArr.length); j++) {
          if (segperdArr[i] == segperdArr[j])
            delete segperdArr[j];
        }
      }
      segperdserv = segperdArr.toString();
      segperdserv = segperdserv.replace(/\W+/g, ','); // se vuelve a ejecutar esta regex para eliminar las comas duplicadas
      segperdserv = (segperdserv[0] == ',') ? segperdserv.substring(1) : segperdserv; // si el primer caracter es una coma se elimina
      segperdserv = (segperdserv[segperdserv.length - 1] == ',') ? segperdserv.substring(0, segperdserv.length - 1) : segperdserv; // si el ultimo caracter es una coma se elimina

      if (segperdserv == "0")
        segperdserv = ""

      this.simulacion.segperdserv = segperdserv;
    }

    // ----DATOS NUMERICOS----
    // Se comprueba que los valores introducidos no son mayores a 99999999
    if (this.simulacion.mssclien > 99999999) this.simulacion.mssclien = 99999999;
    if (this.simulacion.datosclien > 99999999) this.simulacion.datosclien = 99999999;
    if (this.simulacion.snclien > 9999999) this.simulacion.snclien = 9999999;
    if (this.simulacion.wclien > 99999999) this.simulacion.wclien = 99999999;
    if (this.simulacion.mssserv > 99999999) this.simulacion.mssserv = 99999999;
    if (this.simulacion.datosserv > 99999999) this.simulacion.datosserv = 99999999;
    if (this.simulacion.snserv > 9999999) this.simulacion.snserv = 9999999;
    if (this.simulacion.wserv > 99999999) this.simulacion.wserv = 99999999;
    if (this.simulacion.timeout == null) this.simulacion.timeout = 0;
    if (this.simulacion.timeout > 99999999) this.simulacion.timeout = 99999999;
    if (this.simulacion.umbral > 99999999) this.simulacion.umbral = 99999999;

    // -----ALERTAS-----
    // Se eliminan todas las alertas
    this.alertas = [];
    //Se comprueban todos los parametros y se incluyen las alertas en caso de ser necesarias
    //Cliente
    if (!ipRegex.test(this.simulacion.ipclien))
      this.alertas.push({ campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.ipclien') + ": ", msg: "Debe ser del tipo [0-255].[0-255].[0-255].[0-255]" });
    if (this.simulacion.mssclien < 1)
      this.alertas.push({ campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.mssclien') + ": ", msg: this.translate.instant('contenido.error-mss') });
    if (this.simulacion.datosclien < 1)
      this.alertas.push({ campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.datosclien') + ": ", msg: this.translate.instant('contenido.error-datosclien') });
    if (this.simulacion.snclien < 1)
      this.alertas.push({ campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.snclien') + ": ", msg: this.translate.instant('contenido.error-snclien') });
    if (this.simulacion.segperdclien != null && this.simulacion.segperdclien.indexOf(',') != -1 && segperdRegex.test(this.simulacion.segperdclien))
      this.alertas.push({ campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.segperdclien') + ": ", msg: this.translate.instant('contenido.error-segperdclien') });
    if (this.simulacion.wclien < 1)
      this.alertas.push({ campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.wclien') + ": ", msg: this.translate.instant('contenido.error-wclien') });
    //Servidor
    if (!ipRegex.test(this.simulacion.ipserv))
      this.alertas.push({ campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.ipserv') + ": ", msg: this.translate.instant('contenido.error-ipserv') });
    if (this.simulacion.mssserv < 1)
      this.alertas.push({ campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.mssserv') + ": ", msg: this.translate.instant('contenido.error-mssserv') });
    if (this.simulacion.datosserv < 1)
      this.alertas.push({ campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.datosserv') + ": ", msg: this.translate.instant('contenido.error-datosserv') });
    if (this.simulacion.snserv < 1)
      this.alertas.push({ campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.snserv') + ": ", msg: this.translate.instant('contenido.error-snserv') });
    if (this.simulacion.segperdserv != null && this.simulacion.segperdserv.indexOf(',') != -1 && segperdRegex.test(this.simulacion.segperdserv))
      this.alertas.push({ campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.segperdserv') + ": ", msg: this.translate.instant('contenido.error-segperdserv') });
    if (this.simulacion.wserv < 1)
      this.alertas.push({ campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.wserv') + ": ", msg: this.translate.instant('contenido.error-wserv') });
    //General
    if (this.simulacion.timeout < 0 || this.simulacion.timeout == null)
      this.alertas.push({ campo: this.translate.instant('contenido.general') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.timeout') + ": ", msg: this.translate.instant('contenido.error-timeout') });
    if (this.simulacion.algort == "")
      this.alertas.push({ campo: this.translate.instant('contenido.general') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.algort') + ": ", msg: this.translate.instant('contenido.error-algort') });
    if (this.simulacion.umbral <= 1 || this.simulacion.umbral == null)
      this.alertas.push({ campo: this.translate.instant('contenido.general') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.umbral') + ": ", msg: this.translate.instant('contenido.error-umbral') });
    if (this.simulacion.cierre == "")
      this.alertas.push({ campo: this.translate.instant('contenido.general') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.cierre') + ": ", msg: this.translate.instant('contenido.error-cierre') });

    //Se comprueba si se debe simular o no, retorna 'true' si no hay alertas generadas y 'false' en caso contrario
    if (this.alertas.length == 0) {
      simular = true;
      // Si hay segmentos perdidos mostramos la advertencia sobre funcionalidad en proceso
      if ((this.simulacion.segperdclien != null && this.simulacion.segperdclien != "") || (this.simulacion.segperdserv != null && this.simulacion.segperdserv != ""))
        this.enprocMsg = true;
    }
    else {
      simular = false;
    }

    return simular;
  }


  /**
   * @description Rellenar los datos del formulario de manera aleatoria entre unos valores comprendidos
   * @author javierorp
   */
  rellenarDatos(): void {
    try {
      //Cliente
      this.simulacion.ipclien = "127.0." + this.numAleatorio(0, 11, 1).toString() + "." + this.numAleatorio(0, 255, 1).toString();
      this.simulacion.mssclien = this.numAleatorio(100, 2000, 10);
      this.simulacion.datosclien = this.numAleatorio(100, 5000, 10);
      this.simulacion.snclien = this.numAleatorio(1, 500, 5);
      this.simulacion.wclien = this.numAleatorio(0, 8000, 1000);
      this.simulacion.segperdclien = null;

      //Servidor
      this.simulacion.ipserv = "192.168." + + this.numAleatorio(0, 11, 1).toString() + "." + this.numAleatorio(0, 255, 1).toString();
      this.simulacion.mssserv = this.numAleatorio(100, 2000, 10);
      this.simulacion.datosserv = this.numAleatorio(100, 5000, 10);
      this.simulacion.snserv = this.numAleatorio(1, 500, 5);
      this.simulacion.wserv = this.numAleatorio(0, 8000, 1000);
      this.simulacion.segperdserv = null;

      //General
      this.simulacion.timeout = this.numAleatorio(0, 10, 1);
      this.simulacion.algort = this.numAleatorio(1, 3, 1).toString();
      this.simulacion.umbral = this.numAleatorio(2, 10, 1);
      this.simulacion.cierre = this.numAleatorio(1, 3, 1).toString();
    }
    catch (error) {
      const modalRef = this.modalService.open(ErrorComponent, {windowClass: 'modal-entrada'});
      modalRef.componentInstance.desde = "Contenido";
      modalRef.componentInstance.parametros = JSON.stringify(this.simulacion);
      modalRef.componentInstance.merror = error;
    }
  }


  /**
   * @description Genera un numero aleatorio comprendido entre un numero y un maximo multiplo del un valor 
   * @author javierorp
   * @param min minimo numero a obtener
   * @param max maximo numbero a obtener
   * @param multiplo numero del que seran multiplos los valores obtenidos
   * @returns aleatorio 
   */
  numAleatorio(min: number, max: number, multiplo: number): number {
    var numero: number = Math.floor(Math.random() * (max - min) + min);
    var modulo: number = (numero % multiplo);
    var redondeo: number = (modulo != 0) ? (multiplo - modulo) : 0;
    return numero + redondeo;
  }


  /**
   * @description Limpia el formulario y oculta la simulacion
   * @author javierorp
   */
  limpiar(): void {
    try {
      this.alertas = [];
      this.enprocMsg = false;

      //Cliente
      let ipclien: string = "127.0.0.1";
      let mssclien: number = null;
      let datosclien: number = null;
      let snclien: number = null;
      let segperdclien: string = null;
      let wclien: number = null;
      //Servidor
      let ipserv: string = "192.168.0.1";
      let mssserv: number = null;
      let datosserv: number = null;
      let snserv: number = null;
      let segperdserv: string = null;
      let wserv: number = null;
      //General
      let timeout: number = null;
      let umbral: number = null;
      let algort: string = "";
      let cierre: string = "";

      this.simulacion = { ipclien, mssclien, datosclien, snclien, segperdclien, wclien, ipserv, mssserv, datosserv, snserv, segperdserv, wserv, timeout, umbral, algort, cierre };

      // Ocultamos la simulacion
      this.ejecutar = false;
    }
    catch (error) {
      const modalRef = this.modalService.open(ErrorComponent, {windowClass: 'modal-entrada'});
      modalRef.componentInstance.desde = "Contenido";
      modalRef.componentInstance.parametros = JSON.stringify(this.simulacion);
      modalRef.componentInstance.merror = error;
    }
  }


  /**
   * @description Cierra la alerta sobre la que se ha pulsado
   * @author javierorp
   * @param alerta alerta a cerrar
   */
  cerrarAlerta(alerta: Alerta): void {
    this.alertas.splice(this.alertas.indexOf(alerta), 1);
  }

  /**
 * @description Impide que se puedan poner decimales en la entrada de datos, redondeando el numero hacia abajo
 * @author javierorp
 * @param param parametro del input
 */
  limpiarParametros(param: number): number {
    param = Math.floor(param);
    return param;
  }

  /* TEST */
  test(): void {
    this.test1();
    // this.test2();
    this.simular();
  }

  test1(): void {
    // cliente
    this.simulacion.ipclien = "127.0.0.1";
    this.simulacion.mssclien = 1390;
    this.simulacion.datosclien = 2310;
    this.simulacion.snclien = 55;
    this.simulacion.segperdclien = "";
    this.simulacion.wclien = 2000;
    // servidor
    this.simulacion.ipserv = "192.168.0.1";
    this.simulacion.mssserv = 950;
    this.simulacion.datosserv = 410;
    this.simulacion.snserv = 220;
    this.simulacion.segperdserv = "";
    this.simulacion.wserv = 6000;
    this.simulacion.timeout = 6;
    this.simulacion.umbral = 9;
    this.simulacion.algort = "1";
    this.simulacion.cierre = "1";
  }

  test2(): void {
    // cliente
    this.simulacion.ipclien = "127.0.0.1";
    this.simulacion.mssclien = 1680;
    this.simulacion.datosclien = 3270;
    this.simulacion.snclien = 40;
    this.simulacion.segperdclien = "";
    this.simulacion.wclien = 8000;
    // servidor
    this.simulacion.ipserv = "192.168.0.1";
    this.simulacion.mssserv = 1800;
    this.simulacion.datosserv = 2530;
    this.simulacion.snserv = 290;
    this.simulacion.segperdserv = "";
    this.simulacion.wserv = 5000;
    this.simulacion.timeout = 7;
    this.simulacion.umbral = 2;
    this.simulacion.algort = "1";
    this.simulacion.cierre = "1";
  }



}
