import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit {
  expeLab : Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
     this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expeLab = data;
          }, err =>{
            alert("error al modificar experiencia");
             this.router.navigate(['']);
        

          }
        )
        
      }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expeLab).subscribe(
      data =>{
        this.router.navigate(['']);

      }, err =>{
         alert("error al modificar experiencia");
         this.router.navigate(['']);
        }
      )
    }
}


