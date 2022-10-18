import { NonNullableFormBuilder } from "@angular/forms";

export class Experiencia {
    id? : NonNullableFormBuilder;
    nombreE : string;
    descripcionE : string;

    constructor(nombreE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;

    }
}
