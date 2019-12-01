import { Component, OnInit, Input } from '@angular/core';
import { Simulacion } from '../simulacion';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent implements OnInit {
  
  @Input() simular : Simulacion;

  constructor() { }

  ngOnInit() {
  }

}
