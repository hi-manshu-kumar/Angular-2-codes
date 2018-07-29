import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child2Component } from './child2/child2.component';
import { AdminModule } from './admin.module'
@NgModule({
  declarations: [
    AppComponent,
    Child2Component
  ],
  imports: [
  BrowserModule,AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
