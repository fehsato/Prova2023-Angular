import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Empresas } from './empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

url = "http://localhost:4200";

constructor(private http: HttpClient) { }

getEmpresas(): Observable<Empresas[]> {
  return this.http.get<Empresas[]>(this.url);
}

cadastrar(empresa: Empresas): Observable<Empresas> {
  return this.http.post<Empresas>(this.url, empresa);
}
update(empresa: Empresas): Observable<Empresas> {
  return this.http.put<Empresas>(`${this.url}/${empresa.id}`,empresa);
}

}
