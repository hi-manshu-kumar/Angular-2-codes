import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Session 2';
  fruits: string[];
  counter:number;
  sum:number;

  constructor() {
    this.fruits = ['Orange', 'Apple', 'Banana'];
    this.counter = 0;
    }

  inc():void{
    this.counter++;
  }

  add(firstno:string,secondno:string):void{
     this.sum = parseFloat(firstno) + parseFloat(secondno);
  }

  takeValueFromChild(data){
    this.title = data;

  }
}
