import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPengajuanPinjamanComponent } from './detail-pengajuan-pinjaman.component';

describe('DetailPengajuanPinjamanComponent', () => {
  let component: DetailPengajuanPinjamanComponent;
  let fixture: ComponentFixture<DetailPengajuanPinjamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPengajuanPinjamanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailPengajuanPinjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
