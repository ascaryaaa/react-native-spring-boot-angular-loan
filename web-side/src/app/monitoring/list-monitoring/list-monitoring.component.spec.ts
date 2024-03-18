import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonitoringComponent } from './list-monitoring.component';

describe('ListMonitoringComponent', () => {
  let component: ListMonitoringComponent;
  let fixture: ComponentFixture<ListMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
