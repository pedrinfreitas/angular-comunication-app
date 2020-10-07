import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  value: number = 0;
  title = 'Meu titulo';
  constructor() { }

  ngOnInit(): void {
  }

  incBy(n: number){
    this.value += n;
  }

}
