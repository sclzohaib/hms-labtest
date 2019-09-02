import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabtestformComponent } from './add-labtestform.component';

describe('AddLabtestformComponent', () => {
  let component: AddLabtestformComponent;
  let fixture: ComponentFixture<AddLabtestformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLabtestformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabtestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
