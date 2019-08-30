import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorQuickViewComponent } from './monitor-quick-view.component';

describe('MonitorQuickViewComponent', () => {
  let component: MonitorQuickViewComponent;
  let fixture: ComponentFixture<MonitorQuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorQuickViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
