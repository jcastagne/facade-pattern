import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    <%= classify(name) %>RoutingModule
  ]
})
export class <%= classify(name) %>Module { }
