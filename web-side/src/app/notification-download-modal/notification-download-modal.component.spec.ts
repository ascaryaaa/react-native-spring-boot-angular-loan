import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDownloadModalComponent } from './notification-download-modal.component';

describe('NotificationDownloadModalComponent', () => {
  let component: NotificationDownloadModalComponent;
  let fixture: ComponentFixture<NotificationDownloadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationDownloadModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationDownloadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
