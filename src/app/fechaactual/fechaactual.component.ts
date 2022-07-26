import {Component,Pipe} from "@angular/core";


@Component({
  selector: 'app-fechaactual',
  template: `<p>{{ ciudad | uppercase}}, {{ hoy | date:'d-M-y' | uppercase}} a las {{ hoy |date:'H:m Z'}}</p>
  <p> El resultado es {{ resultado | number:'2.2-2'}}</p>
  <p>La cotización actual del dólar es de {{ dolareuro | currency:'EUR':true}}</p>
  <p> {{ sexo | i18nSelect: encabezamiento }} {{ nombre }} </p>
  <p>La cotización actual del dólar es de {{ dolareuro | euro }}</p>
  <app-copyright></app-copyright>`,
})

export class FechaactualComponent{
  hoy: any = new Date()
  ciudad:string= 'Valencia';
  resultado: number = 1.148;
  dolareuro: number = 0.94;


  nombre: string = 'Esteban';
  sexo: string = 'hombre';
  encabezamiento: any = { 'hombre':'Estimado', 'mujer':'Estimada' }
}
