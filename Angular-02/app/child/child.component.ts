import {
    Component,
    Input,
    EventEmitter,
    Output} from '@angular/core';

@Component({
    selector:'app-child',
    templateUrl:'./child.component.html',
    styleUrls:['./child.component.css']     
})

export class ChildComponent {
    @Output()
    parentoutput:EventEmitter<string> = new EventEmitter<string>();
    @Input()
    myvalue:string;
    msg:string;

    constructor(){
        this.msg = 'Hello I am Child';
    }
    callParent(){
        this.parentoutput.emit('Hello Parent I am passing my data');
    }
}