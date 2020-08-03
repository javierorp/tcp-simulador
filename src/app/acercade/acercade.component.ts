import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {

  titulo: string = null;
  texto: string = null;
  texto2: string = null;
  repo: string = null;
  cerrar: string = null;
  appVersion = require('../../../package.json');

  constructor(public activeModal: NgbActiveModal) { }

}
