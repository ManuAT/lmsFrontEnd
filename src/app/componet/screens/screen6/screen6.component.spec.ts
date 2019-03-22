import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen6Component } from './screen6.component';

describe('Screen6Component', () => {
  let component: Screen6Component;
  let fixture: ComponentFixture<Screen6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
