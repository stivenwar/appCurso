import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangclass',
  templateUrl: './ejdirectivangclass.component.html',
  styleUrls: ['./ejdirectivangclass.component.scss']
})
export class EjdirectivangclassComponent implements OnInit {

  puntuacion: number;
  constructor() {
    this.puntuacion = 0;
  }

  ngOnInit(): void {
  }

}
