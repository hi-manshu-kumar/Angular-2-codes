import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Child2Component } from './child2/child2.component';
import { Customer } from './models/Customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Customer]
})

export class AppComponent {
  title = 'Hello Angular ';
  
  // customer:Customer = new Customer(1001,"Ram");
  // @ViewChild(Child2Component)
  // mychild2Object: Child2Component;
  
  @ViewChildren(Child2Component)
  myChild2List:QueryList<Child2Component>;

  constructor(private customerService:Customer){

  }

  showHide() {
    // this.mychild2Object.x++;
    // this.mychild2Object.y--;

    this.myChild2List.forEach(currentChild => {
      currentChild.x++;
      currentChild.y--;
    });
    
    // this.title = this.customer.print();
    this.title = this.customerService.print();
  }
}
