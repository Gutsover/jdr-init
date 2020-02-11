import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCrusadeComponent } from './black-crusade.component';

describe('BlackCrusadeComponent', () => {
  let component: BlackCrusadeComponent;
  let fixture: ComponentFixture<BlackCrusadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackCrusadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCrusadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
