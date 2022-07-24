import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejevenbinding',
  templateUrl: './ejevenbinding.component.html',
  styleUrls: ['./ejevenbinding.component.scss']
})
export class EjevenbindingComponent implements OnInit {

  texto = 'Originalmente el texto se carga asi';
  constructor() { }

  modTexto(){
    this.texto = 'Al pulsar el boton el texto se muestra asi';
  }
  ngOnInit(): void {
  }

}
