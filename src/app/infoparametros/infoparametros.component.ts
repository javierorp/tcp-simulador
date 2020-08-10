import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-infoparametros',
  templateUrl: './infoparametros.component.html',
  styleUrls: ['./infoparametros.component.css']
})
export class InfoparametrosComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
