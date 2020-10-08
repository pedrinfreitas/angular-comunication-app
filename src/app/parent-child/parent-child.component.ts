import { TimerComponent } from './timer/timer.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild("stopwatch2")
  private mytimer: TimerComponent;

  @ViewChild("myP")  
  private myp: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  start() {
    this.mytimer.start();
  }

  stop() {
    this.mytimer.stop();
  }

  clear() {
    this.mytimer.clear();
  }

  ngAfterViewInit(){
    console.log(this.myp);
    
  }

}
