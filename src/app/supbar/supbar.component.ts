import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AcercadeComponent } from '../acercade/acercade.component';

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

  constructor(private modalService: NgbModal) { }

  /**
   * TODO: 
   * @description Abre la ventana 'Acerca de...' con la información de la aplicacion
   * @author javierorp
   */
  open() {
    const modalRef = this.modalService.open(AcercadeComponent);
  }



  CambiarIdioma(idioma: string) {
    this.idiomaSeleccionado = idioma;
    if (idioma == "Español")
      this.bandera = "spain"
    else if (idioma == "English")
      this.bandera = "united_kingdom"
  }
}
