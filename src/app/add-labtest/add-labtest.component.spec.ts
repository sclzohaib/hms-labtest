import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabtestComponent } from './add-labtest.component';

describe('AddLabtestComponent', () => {
  let component: AddLabtestComponent;
  let fixture: ComponentFixture<AddLabtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLabtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
