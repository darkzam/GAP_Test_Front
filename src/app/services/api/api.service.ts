import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient) { }

  get (path: string): Observable<any> {
    return this.http.get(path);
  }

  post (path: string, entity: any): Observable<any> {
    return this.http.post(path, entity);
  }
}
