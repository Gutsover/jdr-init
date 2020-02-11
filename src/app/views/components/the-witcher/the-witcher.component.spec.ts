import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWitcherComponent } from './the-witcher.component';

describe('TheWitcherComponent', () => {
  let component: TheWitcherComponent;
  let fixture: ComponentFixture<TheWitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
