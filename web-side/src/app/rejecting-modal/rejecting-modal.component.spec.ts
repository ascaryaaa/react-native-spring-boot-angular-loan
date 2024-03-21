import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectingModalComponent } from './rejecting-modal.component';

describe('RejectingModalComponent', () => {
  let component: RejectingModalComponent;
  let fixture: ComponentFixture<RejectingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RejectingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
