import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hello Angular ';

  // @ViewChild(Child2Component)
  // mychild2Object: Child2Component;
  
  @ViewChildren(Child2Component)
  myChild2List:QueryList<Child2Component>;

  showHide() {
    // this.mychild2Object.x++;
    // this.mychild2Object.y--;

    this.myChild2List.forEach(currentChild => {
      currentChild.x++;
      currentChild.y--;
    })
  }
}
