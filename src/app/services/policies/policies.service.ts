import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PoliciesService {

  constructor(public Api: ApiService) { }

  public get (id: string | number): Observable<any> {
    return this.Api.get(`ruta/${id}`).pipe(
      map((response: Response) => response)
    );
  }

  public post (entity: any) {
    return this.Api.post(`ruta/`, entity).pipe(
      map((response: Response) => response)
    );
  }
}
