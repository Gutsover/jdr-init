import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkHeresyComponent } from './dark-heresy.component';

describe('DarkHeresyComponent', () => {
  let component: DarkHeresyComponent;
  let fixture: ComponentFixture<DarkHeresyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkHeresyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkHeresyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
