import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivastyle',
  templateUrl: './ejdirectivastyle.component.html',
  styleUrls: ['./ejdirectivastyle.component.scss']
})
export class EjdirectivastyleComponent implements OnInit {

  puntuacion:number;
  constructor() {
    this.puntuacion = 0;
  }

  ngOnInit(): void {
  }

  setColor(){
    return this.puntuacion >= 5 ? 'green':'red';
  }
}
