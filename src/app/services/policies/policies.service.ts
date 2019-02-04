import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { settings } from 'src/app/settings/settings';

@Injectable()
export class PoliciesService {

  onChangePolicies = new EventEmitter();
  apiUrl = settings.apiUrl;

  constructor(public Api: ApiService) { }

  public get (id: string | number): Observable<any> {
    return this.Api.get(`${this.apiUrl}/Policies/${id}`).pipe(
      map((response: Response) => response)
    );
  }

  public post (entity: any) {
    return this.Api.post(`${this.apiUrl}/Policies`, entity).pipe(
      map((response: Response) => response)
    );
  }

  public delete (id: string | number) {
    return this.Api.delete(`${this.apiUrl}/Policies/${id}`, {}).pipe(
      map((response: Response) => response)
    );
  }

  public update (id: string | number, entity: any) {
    return this.Api.put(`${this.apiUrl}/Policies/${id}`, entity).pipe(
      map((response: Response) => response)
    );
  }
}
