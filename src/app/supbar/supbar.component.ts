import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supbar',
  templateUrl: './supbar.component.html',
  styleUrls: ['./supbar.component.css']
})
export class SupbarComponent implements OnInit {
  title = 'Simulador gráfico de comunicaciones TCP';
  constructor() { }

  ngOnInit() {
  }

}
