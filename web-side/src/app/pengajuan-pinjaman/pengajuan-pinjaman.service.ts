import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormResponse} from './pengajuan-pinjaman';
import { Observable } from 'rxjs';
import { listPengajuanPinjaman } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class PengajuanPinjamanService {

  constructor(private httpClient: HttpClient) { }

  getListPengajuanPinjaman(): Observable<FormResponse> {
    return this.httpClient.get<FormResponse>(listPengajuanPinjaman);
  }
}

