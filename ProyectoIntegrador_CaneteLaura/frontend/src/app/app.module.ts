import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BanerComponent } from './components/baner/baner.component';
import { AcercademiComponent } from './components/acercademi/acercademi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CirculosComponent } from './components/circulos/circulos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import {HttpClient, HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BanerComponent,
    AcercademiComponent,
    EstudiosComponent,
    ExperienciaComponent,
    CirculosComponent,
    ProyectoComponent,
    PiedepaginaComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
