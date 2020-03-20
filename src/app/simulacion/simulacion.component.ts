import { Component, Input, OnInit } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';


// Interfaz de los datos a representar
interface Comunicacion {
  flag: string; // indica si es SYN, ACK o FIN
  sn: number; // numero de secuencia
  an: number; // numero de reconocimento
  d: number; // tamnyo de lo datos enviados
  w: number; // tamanyo de la ventana de recepcion permitida para la entidad contraria
  mss: number; // maximo tamanyo de segmento
  dir: number; // 0 indica direccion cliente->sevidor, 1 indica direccion servidor-cliente, -1 indica que se ha perdido el segmento en direccion cliente->servidor
}

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent implements OnInit{

  faLaptop = faLaptop;
  faServer = faServer;
  comunicacion: Comunicacion[];
  
  // Obtenemos los datos del componente padre ContenidoComponent
  @Input() simular: Simulacion;
  
  constructor() {
    
  }

  ngOnInit(){
    this.simular.ipclien = "127.0.0.1";
    this.simular.ipserv = "192.168.0.1";
    this.comunicacion = [];
    this.comunicacion.push({ flag: "SYN", sn: 499, mss: 2420, w: 4000, d: 0, an: 0, dir: 0});
    this.comunicacion.push({ flag: "SYN, ACK", sn: 2099, mss: 0, w: 4000, d: 0, an: 500, dir: 1});
    this.comunicacion.push({ flag: "ACK", sn: 500, mss: 0, w: 4000, d: 0, an: 2100, dir: 0});
    this.comunicacion.push({ flag: null, sn: 500, mss: 0, w: 4000, d: 250, an: 2100, dir: -1});
  }


}
