import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'https://porfoliolaura.herokuapp.com/auth/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);

  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `detail/${id}`, educacion);
  }

  public delete(id: Number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `detail/${id}`);
  }
}
