import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child2Component } from './child2/child2.component';
import { Customer } from "./models/Customer";
@NgModule({
  declarations: [
    AppComponent,
    Child2Component
  ],
  imports: [
  BrowserModule
  ],
  providers: [Customer],
  bootstrap: [AppComponent]
})
export class AppModule { }
