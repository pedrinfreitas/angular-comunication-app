import { Client } from './client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  name: string;
  age: number;
  clients: Client[] = [];

  constructor() {}

  ngOnInit(): void {}

  save() {
    this.clients.push({ name: this.name, age: this.age });
    this.name = '';
    this.age = 0;
  }

  removeClient(i: number) {
    this.clients.splice(i, 1);
  }

  updateClient(c: Client, i: number) {
    this.clients[i] = c;
  }
}
