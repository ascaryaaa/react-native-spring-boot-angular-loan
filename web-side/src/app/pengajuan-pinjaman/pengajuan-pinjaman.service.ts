import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormPengajuanPinjaman, FormPengajuanPinjamanResponse } from './pengajuan-pinjaman';
import { Observable } from 'rxjs';
import { listPengajuanPinjaman } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class PengajuanPinjamanService {

  constructor(private httpClient: HttpClient) { }

  getListPengajuanPinjaman(): Observable<Array<FormPengajuanPinjaman>> {
    return new Observable(observer => {
      this.httpClient
      .get<FormPengajuanPinjamanResponse>(listPengajuanPinjaman)
      .subscribe(respone => {
        console.log({respone});
        observer.next(respone);
        observer.complete();
      })
   })
  }
}

