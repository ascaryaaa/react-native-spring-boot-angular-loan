import { TestBed } from '@angular/core/testing';

import { PengajuanPinjamanService } from './pengajuan-pinjaman.service';

describe('PengajuanPinjamanService', () => {
  let service: PengajuanPinjamanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PengajuanPinjamanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
