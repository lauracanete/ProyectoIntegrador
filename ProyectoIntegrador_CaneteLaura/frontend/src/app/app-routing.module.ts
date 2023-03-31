
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditareducacionComponent } from './components/estudios/editareducacion.component';
import { NuevaeducacionComponent } from './components/estudios/nuevaeducacion.component';
import { EditarexperienciaComponent } from './components/experiencia/editarexperiencia.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexpe',component:NewexperienciaComponent},
  {path:'editarexpe/:id', component: EditarexperienciaComponent},
  {path:'nuevaedu', component: NuevaeducacionComponent},
  {path:'editedu/:id', component: EditareducacionComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
