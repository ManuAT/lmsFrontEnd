import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen4Component } from './screen4.component';

describe('Screen4Component', () => {
  let component: Screen4Component;
  let fixture: ComponentFixture<Screen4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
