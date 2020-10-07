import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.models';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string;
  @Input('otherName') lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {id: 1, name: "Pedro", age: 31},
      {id: 2, name: "Antonio", age: 45},
      {id: 3, name: "Paula", age: 22}
    ]
   }

  ngOnInit(): void {
  }

}
