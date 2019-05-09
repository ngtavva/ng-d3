import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPieChartComponent } from './nested-pie-chart.component';

describe('NestedPieChartComponent', () => {
  let component: NestedPieChartComponent;
  let fixture: ComponentFixture<NestedPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
