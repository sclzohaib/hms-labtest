import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTestComponent } from './sub-test.component';

describe('SubTestComponent', () => {
  let component: SubTestComponent;
  let fixture: ComponentFixture<SubTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
