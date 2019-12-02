import { Component, Input } from '@angular/core';
import { Simulacion } from '../simulacion';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent {

  // Obtenemos los datos del componente padre ContenidoComponent
  @Input() simular: Simulacion;

  constructor() { }

}
