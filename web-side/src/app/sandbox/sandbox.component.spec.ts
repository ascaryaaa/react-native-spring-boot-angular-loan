import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SANDBOXComponent } from './sandbox.component';

describe('SANDBOXComponent', () => {
  let component: SANDBOXComponent;
  let fixture: ComponentFixture<SANDBOXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SANDBOXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SANDBOXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
