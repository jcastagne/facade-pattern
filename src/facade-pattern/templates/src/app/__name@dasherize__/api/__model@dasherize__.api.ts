import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { <%= classify(model) %> } from '../models/<%= dasherize(model) %>.model';


@Injectable()
export class <%= classify(model) %>Api {

  readonly API = '/api/<%= underscore(model) %>';

  constructor(private http: HttpClient) {}

  get<%= classify(model) %>s(): Observable<<%= classify(model) %>[]> {
    return this.http.get<<%= classify(model) %>[]>(this.API);
  }

  create<%= classify(model) %>(<%= underscore(model) %>: <%= classify(model) %>): Observable<any> {
    return this.http.post(this.API, <%= underscore(model) %>);
  }

  update<%= classify(model) %>(<%= underscore(model) %>: <%= classify(model) %>): Observable<any> {
    return this.http.put(`${this.API}/${<%= underscore(model) %>.id}`, <%= underscore(model) %>);
  }
}