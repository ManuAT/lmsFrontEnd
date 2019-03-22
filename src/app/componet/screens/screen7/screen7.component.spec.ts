import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen7Component } from './screen7.component';

describe('Screen7Component', () => {
  let component: Screen7Component;
  let fixture: ComponentFixture<Screen7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
