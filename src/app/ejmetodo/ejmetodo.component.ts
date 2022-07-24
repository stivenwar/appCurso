import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.scss']
})
export class EjmetodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  puntuacion = 9;

  getPuntuacion(){
    return this.puntuacion;
  }
}
