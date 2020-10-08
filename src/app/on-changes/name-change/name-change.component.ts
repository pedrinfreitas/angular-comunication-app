import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name-change',
  templateUrl: './name-change.component.html',
  styleUrls: ['./name-change.component.css'],
})
export class NameChangeComponent implements OnInit, OnChanges {
  @Input() name: string;

  nameBefore: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: { [propkey: string]: SimpleChange}) {
    console.log(changes);
    if(changes.hasOwnProperty('name')){
      this.nameBefore = changes['name'].previousValue;
    }
  }
}
