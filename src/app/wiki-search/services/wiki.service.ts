import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from '../interface/Articles.interface';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor( private http: HttpClient ) { }

  getArticlesWithTerm( term: string ): Observable<Articles> {
    const urlBase = 'https://es.wikipedia.org/w/api.php';

    return this.http.get<Articles>(`${ urlBase }?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=${term}`);
  }

}
