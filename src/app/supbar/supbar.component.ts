import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AcercadeComponent } from '../acercade/acercade.component';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

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

  public idiomaActivo = 'es';

  constructor(private titleService: Title, private modalService: NgbModal, private translate: TranslateService) {

    var naviLang =  navigator.language;

    if(naviLang.toUpperCase().indexOf("ES") == 0) {
      this.translate.setDefaultLang("es");
      this.idiomaSeleccionado = this.idiomas[0];
      this.bandera = "spain";
    }
    else {
    this.translate.setDefaultLang("en");
    this.idiomaSeleccionado = this.idiomas[1];
    this.bandera = "united_kingdom";

    }

    this.translate.get('index.titulo').subscribe(value => { titleService.setTitle(value); });
  }

  /**
   * TODO: 
   * @description Abre la ventana 'Acerca de...' con la información de la aplicacion
   * @author javierorp
   */
  open() {
    const modalRef = this.modalService.open(AcercadeComponent);
    this.translate.get('acercade.titulo').subscribe(value => { modalRef.componentInstance.titulo = value; });
    this.translate.get('acercade.texto').subscribe(value => { modalRef.componentInstance.texto = value; });
    this.translate.get('acercade.texto2').subscribe(value => { modalRef.componentInstance.texto2 = value; });
    this.translate.get('acercade.repo').subscribe(value => { modalRef.componentInstance.repo = value; });
    this.translate.get('acercade.cerrar').subscribe(value => { modalRef.componentInstance.cerrar = value; });
  }



  CambiarIdioma(idioma: string) {
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

  public ObtenerIdioma():string{
    return this.idiomaActivo;
  }

}
