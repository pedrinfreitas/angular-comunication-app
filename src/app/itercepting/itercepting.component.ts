import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itercepting',
  templateUrl: './itercepting.component.html',
  styleUrls: ['./itercepting.component.css']
})
export class IterceptingComponent implements OnInit {

  name = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
