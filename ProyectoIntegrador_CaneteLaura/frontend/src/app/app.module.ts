import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptProvider } from './service/interceptorservice';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { EditareducacionComponent } from './components/estudios/editareducacion.component';
import { EditarexperienciaComponent } from './components/experiencia/editarexperiencia.component';
import { NewestudiosComponent } from './components/estudios/newestudios.component';













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
    HomeComponent,
    LoginComponent,
    NewexperienciaComponent,
    EditarexperienciaComponent,
    EditareducacionComponent,
    NewestudiosComponent,
   
   
   
   
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
