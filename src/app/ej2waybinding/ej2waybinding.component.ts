import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2waybinding',
  templateUrl: './ej2waybinding.component.html',
  styleUrls: ['./ej2waybinding.component.scss']
})
export class Ej2waybindingComponent implements OnInit {

  texto = 'Texto original al cargar';
  constructor() { }

  ngOnInit(): void {
  }

}
