import { Component, OnInit, Input } from '@angular/core';
import { Simulacion } from '../simulacion';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  // Objeto simulacion que obtiene los datos del menu lateral
  simulacion : Simulacion = {
    mss: null,
    datos: null,
    ipserv: "",
    ipclien: "",
    snserv: null,
    snclien: null,
    algort: null,
  };

  //Objeto que se le enviara al componente 'simulacion'
  simulacionEnv : Simulacion = {
    mss: null,
    datos: null,
    ipserv: "",
    ipclien: "",
    snserv: null,
    snclien: null,
    algort: null,
  };

  constructor() { }

  ngOnInit() {
  }

  simular(){
    this.simulacionEnv = this.simulacion;
  }

}
