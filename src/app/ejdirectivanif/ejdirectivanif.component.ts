import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivanif',
  templateUrl: './ejdirectivanif.component.html',
  styleUrls: ['./ejdirectivanif.component.scss']
})
export class EjdirectivanifComponent implements OnInit {

  nombre:string = 'esteban';
  capital: string = '';
  constructor() {}

  ngOnInit(): void {
  }
  setResultado(){
    return this.capital === "Madrid";
  }


}
