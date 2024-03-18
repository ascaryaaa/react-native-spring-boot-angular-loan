import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPengajuanPinjamanComponent } from './list-pengajuan-pinjaman.component';

describe('ListPengajuanPinjamanComponent', () => {
  let component: ListPengajuanPinjamanComponent;
  let fixture: ComponentFixture<ListPengajuanPinjamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPengajuanPinjamanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPengajuanPinjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
