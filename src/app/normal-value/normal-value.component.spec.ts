import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalValueComponent } from './normal-value.component';

describe('NormalValueComponent', () => {
  let component: NormalValueComponent;
  let fixture: ComponentFixture<NormalValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
