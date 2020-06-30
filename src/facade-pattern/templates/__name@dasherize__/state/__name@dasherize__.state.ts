import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { <%= classify(model) %>Model } from '../models/<%= dasherize(model) %>.model';


@Injectable()
export class <%= classify(name) %>State {

  private updating$ = new BehaviorSubject<boolean>(false);
  private <%= camelize(model) %>s$ = new BehaviorSubject<<%= classify(model) %>Model[]>(null);

  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  get<%= classify(model) %>s$() {
    return this.<%= camelize(model) %>s$.asObservable();
  }

  set<%= classify(model) %>s(<%= camelize(model) %>s: <%= classify(model) %>Model[]) {
    this.<%= camelize(model) %>s$.next(<%= camelize(model) %>s);
  }

  add<%= classify(model) %>(<%= camelize(model) %>: <%= classify(model) %>Model) {
    const currentValue = this.<%= camelize(model) %>s$.getValue();
    this.<%= camelize(model) %>s$.next([...currentValue, <%= camelize(model) %>]);
  }

  update<%= classify(model) %>(updated<%= classify(model) %>: <%= classify(model) %>Model) {
    const <%= camelize(model) %>s = this.<%= camelize(model) %>s$.getValue();
    const indexOfUpdated = <%= camelize(model) %>s.findIndex(<%= camelize(model) %> => <%= camelize(model) %>.id === updated<%= classify(model) %>.id);
    <%= camelize(model) %>s[indexOfUpdated] = updated<%= classify(model) %>;
    this.<%= camelize(model) %>s$.next([...<%= camelize(model) %>s]);
  }

  update<%= classify(model) %>Id(<%= camelize(model) %>ToReplace: <%= classify(model) %>Model, added<%= classify(model) %>WithId: <%= classify(model) %>Model) {
    const <%= camelize(model) %>s = this.<%= camelize(model) %>s$.getValue();
    const updated<%= classify(model) %>Index = <%= camelize(model) %>s.findIndex(<%= camelize(model) %> => <%= camelize(model) %> === <%= camelize(model) %>ToReplace);
    <%= camelize(model) %>s[updated<%= classify(model) %>Index] = added<%= classify(model) %>WithId;
    this.<%= camelize(model) %>s$.next([...<%= camelize(model) %>s]);
  }

  remove<%= classify(model) %>(<%= camelize(model) %>Remove: <%= classify(model) %>Model) {
    const currentValue = this.<%= camelize(model) %>s$.getValue();
    this.<%= camelize(model) %>s$.next(currentValue.filter(<%= camelize(model) %> => <%= camelize(model) %> !== <%= camelize(model) %>Remove));
  }
}