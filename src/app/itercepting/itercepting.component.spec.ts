import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterceptingComponent } from './itercepting.component';

describe('IterceptingComponent', () => {
  let component: IterceptingComponent;
  let fixture: ComponentFixture<IterceptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterceptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterceptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
