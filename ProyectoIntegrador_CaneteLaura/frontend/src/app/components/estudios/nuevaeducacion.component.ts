import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const educacion = new Educacion(this.nombreE,this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Estudio agregado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo");
        this.router.navigate(['']);

      }
    )
    
  }


}
