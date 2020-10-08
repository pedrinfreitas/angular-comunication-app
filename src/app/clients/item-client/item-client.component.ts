import { Client } from './../client.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css'],
})
export class ItemClientComponent implements OnInit {
  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<any>();

  onEdit: boolean = false;
  name: string;
  age: number;

  constructor() {}

  ngOnInit(): void {}

  edit() {
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }

  remove() {
    this.removeClient.emit();
  }

  save() {
    this.onEdit = true;
    this.updateClient.emit({ name: this.name, age: this.age });
  }
}
