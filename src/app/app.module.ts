import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FechaactualComponent} from "./fechaactual/fechaactual.component";
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjevenbindingComponent } from './ejevenbinding/ejevenbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import {FormsModule} from "@angular/forms";
import { EjdirectivanifComponent } from './ejdirectivanif/ejdirectivanif.component';
import { EjdirectivastyleComponent } from './ejdirectivastyle/ejdirectivastyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { ArrayobjetosComponent } from './arrayobjetos/arrayobjetos.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
import { MenuitemDirective } from './menuitem.directive';
import { EjdirectivaComponent } from './ejdirectiva/ejdirectiva.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { EuroPipe } from './euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EjevenbindingComponent,
    Ej2waybindingComponent,
    EjdirectivanifComponent,
    EjdirectivastyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    ArrayobjetosComponent,
    EjdirectivangswitchComponent,
    MenuitemDirective,
    EjdirectivaComponent,
    PadreComponent,
    HijoComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
