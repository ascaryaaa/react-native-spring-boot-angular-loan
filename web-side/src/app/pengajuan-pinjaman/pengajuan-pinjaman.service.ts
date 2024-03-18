import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormDetailResponse, FormResponse} from './pengajuan-pinjaman';
import { Observable } from 'rxjs';
import { detailPengajuanPinjaman, listPengajuanPinjaman } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class PengajuanPinjamanService {

  constructor(private httpClient: HttpClient) { }

  getListPengajuanPinjaman(): Observable<FormResponse> {
    return this.httpClient.get<FormResponse>(listPengajuanPinjaman);
  }
  getDetailPengajuanPinjaman(id: number): Observable<FormDetailResponse> {
    return this.httpClient.get<FormDetailResponse>(detailPengajuanPinjaman + id);
  }
}

