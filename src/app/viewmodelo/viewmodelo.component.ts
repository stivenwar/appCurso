import { Component, OnInit } from '@angular/core';
import {Alumno} from "../modelos/alumno.modelo";

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.scss']
})
export class ViewmodeloComponent implements OnInit {

  alumno1 = new Alumno(1,'Esteban','Guerra','Valencia');
  constructor() { }

  ngOnInit(): void {
  }

}
