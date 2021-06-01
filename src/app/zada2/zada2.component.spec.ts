import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zada2Component } from './zada2.component';

describe('Zada2Component', () => {
  let component: Zada2Component;
  let fixture: ComponentFixture<Zada2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zada2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zada2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
