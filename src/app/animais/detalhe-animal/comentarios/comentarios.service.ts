import { Comentarios } from './comentarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient,) {}

  buscaComentario(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }
  incluiComentario(id: number, commentText: string): Observable<Comentarios> {
    return this.http.post<Comentarios>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
