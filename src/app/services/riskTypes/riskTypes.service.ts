import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { settings } from '../../settings/settings';

@Injectable()
export class RiskTypesService {

  onChangeRiskTypes = new EventEmitter();
  apiUrl = settings.apiUrl

  constructor(public Api: ApiService) { }

  public get (id: string | number): Observable<any> {
    return this.Api.get(`${this.apiUrl}/RiskTypes/${id}`).pipe(
      map((response: Response) => response)
    );
  }

  public post (entity: any) {
    return this.Api.post(`${this.apiUrl}/RiskTypes`, entity).pipe(
      map((response: Response) => response)
    );
  }

  public delete (id: string | number) {
    return this.Api.delete(`${this.apiUrl}/RiskTypes/${id}`, {}).pipe(
      map((response: Response) => response)
    );
  }

  public update (id: string | number, entity: any) {
    return this.Api.put(`${this.apiUrl}/RiskTypes/${id}`, entity).pipe(
      map((response: Response) => response)
    );
  }
}
