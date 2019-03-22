import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen0Component } from './screen0.component';

describe('Screen0Component', () => {
  let component: Screen0Component;
  let fixture: ComponentFixture<Screen0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
