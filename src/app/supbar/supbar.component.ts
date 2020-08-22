import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faInfoCircle, faBook } from '@fortawesome/free-solid-svg-icons';
import { AcercadeComponent } from '../acercade/acercade.component';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-supbar',
  templateUrl: './supbar.component.html',
  styleUrls: ['./supbar.component.css']
})
export class SupbarComponent {

  // Titulo de la aplicacion
  title = 'Simulador gráfico de comunicaciones TCP';
  faBook = faBook; // icono guia de usuario
  faInfoCircle = faInfoCircle; // icono circulo de informacion
  idiomas: string[] = ["Español", "English"]; // idiomas disponibles
  idiomaSeleccionado: string = "Español";
  bandera: string = "spain"; // bandera predeterminada
  public idiomaActivo = 'es'; // idioma predeterminado

  constructor(private titleService: Title, private modalService: NgbModal, private translate: TranslateService) {

    var naviLang = navigator.language;

    // Idioma por defecto en el navegador
    if (naviLang.toUpperCase().indexOf("ES") == 0) { // Si el navegador se encuentra en espanyol se selecciona este idioma por defecto
      this.translate.setDefaultLang("es");
      this.idiomaSeleccionado = this.idiomas[0];
      this.bandera = "spain";
    }
    else { // Si el navegador no se encuentra en espayol se selecciona el ingles por defecto
      this.translate.setDefaultLang("en");
      this.idiomaSeleccionado = this.idiomas[1];
      this.bandera = "united_kingdom";

    }

    this.translate.get('index.titulo').subscribe(value => { titleService.setTitle(value); });
  }


  /**
   * @description Abre la ventana 'Acerca de...' con la información de la aplicacion
   * @author javierorp
   */
  acercaDe(): void {
    try {
      const modalRef = this.modalService.open(AcercadeComponent, { windowClass: 'modal-entrada' });
    } catch (error) {
      const modalRef = this.modalService.open(ErrorComponent, { windowClass: 'modal-entrada' });
      this.translate.get('acercade.titulo').subscribe(value => { modalRef.componentInstance.desde = value; });
      modalRef.componentInstance.merror = error;
    }
  }


  /**
   * @description Abre el manual de usuario en una pestaña nueva
   * @author javierorp
   */
  manualUsuario(): void {
    try {
      let url: string = null;
      this.translate.get('supbar.manual-link').subscribe(value => { url = value; });
      window.open(url, "_blank");
    } catch (error) {
      const modalRef = this.modalService.open(ErrorComponent, { windowClass: 'modal-entrada' });
      modalRef.componentInstance.desde = "Supbar";
      modalRef.componentInstance.merror = error;
    }
  }


  /**
   * @description Cambia el idioma de la aplicacion asi como la bandera del boton de seleccion de idioma
   * @author javierorp
   * @param idioma idioma al que se va a cambiar
   */
  CambiarIdioma(idioma: string): void {
    this.idiomaSeleccionado = idioma;
    if (idioma == "Español") {
      this.bandera = "spain";
      this.idiomaActivo = 'es';
      this.translate.use('es')
    }
    else if (idioma == "English") {
      this.bandera = "united_kingdom";
      this.idiomaActivo = 'en';
      this.translate.use('en')
    }
    this.translate.get('index.titulo').subscribe(value => { this.titleService.setTitle(value); });
  }

}
