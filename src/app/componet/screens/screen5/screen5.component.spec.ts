import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen5Component } from './screen5.component';

describe('Screen5Component', () => {
  let component: Screen5Component;
  let fixture: ComponentFixture<Screen5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
