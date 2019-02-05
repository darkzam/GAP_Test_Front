import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { settings } from '../../settings/settings';

@Injectable()
export class AssignmentService {

  onChangeAssignment = new EventEmitter();
  apiUrl = settings.apiUrl

  constructor(public Api: ApiService) { }

  public get (clientId: string | number, ): Observable<any> {
    return this.Api.get(`${this.apiUrl}/Clients/${clientId}/Policies`).pipe(
      map((response: Response) => response)
    );
  }

  public post (clientId: string | number, entity: any) {
    return this.Api.post(`${this.apiUrl}/Clients/${clientId}/Policies`, entity).pipe(
      map((response: Response) => response)
    );
  }

  public delete (clientId: string | number, policyId: string | number) {
    return this.Api.delete(`${this.apiUrl}/Clients/${clientId}/Policies/${policyId}`, {}).pipe(
      map((response: Response) => response)
    );
  }

}
