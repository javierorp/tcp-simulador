import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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
  faInfoCircle = faInfoCircle;
  idiomas: string[] = ["Español", "English"];
  idiomaSeleccionado: string = "Español";
  bandera: string = "spain";
  movil: boolean = false;
  public idiomaActivo = 'es';

  constructor(private titleService: Title, private modalService: NgbModal, private translate: TranslateService) {

    var naviLang = navigator.language;

    // Si se visualiza en un movil no aparece el titulo de la pagina
    if(window.screen.width <= 705)
      this.movil = true;

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
      const modalRef = this.modalService.open(AcercadeComponent);
    } catch (error) {
      const modalRef = this.modalService.open(ErrorComponent);
      this.translate.get('acercade.titulo').subscribe(value => { modalRef.componentInstance.desde = value; });
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
