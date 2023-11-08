import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDenuncia } from '../models/denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  private denunciasUrl = 'http://localhost:9090/denuncias';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getDenuncias(): Observable<any>{
    return this.http.get(this.denunciasUrl);
  }

  deleteDenuncia(id: string): Observable<IDenuncia> {
    const url = `${this.denunciasUrl}/${id}`;
    return this.http.delete<IDenuncia>(url);
  }

  getDenunciasOfUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.denunciasUrl}/user/${id}`);
  }

  createDenuncia(denuncia:any): Observable<any> {
    const url = `${this.denunciasUrl}`;
    return this.http.post<IDenuncia>(url,denuncia);
  }

}
