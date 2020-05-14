import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-infoparametros',
  templateUrl: './infoparametros.component.html',
  styleUrls: ['./infoparametros.component.css']
})
export class InfoparametrosComponent {

  titulo: string = null;
  tcp_link: string = null;
  masinfo: string = null;
  supuestos: string = null;
  supuesto1: string = null;
  supuesto2: string = null;
  ip: string = null;
  ip_link: string = null;
  ip_text: string = null;
  mss: string = null;
  mss_link: string = null;
  mss_text: string = null;
  datos: string = null;
  datos_link: string = null;
  datos_text: string = null;
  sn: string = null;
  sn_link: string = null;
  sn_text: string = null;
  segperd: string = null;
  segperd_link: string = null;
  segperd_text: string = null;
  w: string = null;
  w_link: string = null;
  w_text: string = null;
  vc: string = null;
  vc_link: string = null;
  vc_text: string = null;
  timeout: string = null;
  timeout_link: string = null;
  timeout_text: string = null;
  alg: string = null;
  alg_link: string = null;
  alg_text: string = null;
  cerrar: string = null;


  constructor(public activeModal: NgbActiveModal) { }

}
