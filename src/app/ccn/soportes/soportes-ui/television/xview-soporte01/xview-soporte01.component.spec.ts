import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XviewSoporte01Component } from './xview-soporte01.component';

describe('XviewSoporte01Component', () => {
  let component: XviewSoporte01Component;
  let fixture: ComponentFixture<XviewSoporte01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XviewSoporte01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XviewSoporte01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
