import { NgModule } from '@angular/core';
import { MyComp2Component } from './mycomp2.component';

@NgModule(
    {
        declarations: [MyComp2Component],
        exports: [MyComp2Component]
    }
)

export class AdminModule{

} 