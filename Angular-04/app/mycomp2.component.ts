import { Component } from '@angular/core';

@Component({
    selector:'app-child3',
    template:'<h1>{{title}}</h1>'
})

export class MyComp2Component{
    title:string;

    constructor(){
        this.title = 'Module2 App Comp2';
    }
}