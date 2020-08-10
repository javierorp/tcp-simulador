import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  faSadTear = faSadTear;
  faSadCry = faSadCry;
  faEnvelope = faEnvelope;
  desde: string = null;
  parametros: string = "{}";
  merror: string = null;
  pck = require('../../../package.json');

  constructor(public activeModal: NgbActiveModal) { }

}
