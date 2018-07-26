import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Hello Angular';
  flag:boolean;
  counter:number;
  myclass:string;
  fruits:string[];

  constructor(){
    this.flag =true;
    this.counter = 0;
    this.myclass = '';
    this.fruits = ['Orange','Banana','Apple'];
  }

  showHide(){
    this.flag=this.flag?false:true;
    this.counter++;
    this.myclass ='red';
  }

  takeInput(event: Event):void{
    this.title = event.target.value;
  }
}
