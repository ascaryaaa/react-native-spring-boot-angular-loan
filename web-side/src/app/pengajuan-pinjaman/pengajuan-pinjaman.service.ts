  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { FormDetailResponse, FormResponse} from './pengajuan-pinjaman';
  import { Observable } from 'rxjs';
  import { createPengajuanPinjamanUrl, createPinjamanUrl, detailPengajuanPinjaman, listPengajuanPinjaman } from '../config/api';
  import { AuthService } from '../auth/auth.service';
  import { Pinjaman } from '../monitoring/monitoring';

  @Injectable({
    providedIn: 'root'
  })
  export class PengajuanPinjamanService {

    constructor(private httpClient: HttpClient) { }

    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('token'); // Ideally, use an AuthService to get the token
      if (token) {
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
      }
      return new HttpHeaders();
    }

    getListPengajuanPinjaman(): Observable<FormResponse> {
      const headers = this.getHeaders();
      return this.httpClient.get<FormResponse>(listPengajuanPinjaman, { headers });
    }
    getDetailPengajuanPinjaman(id: number): Observable<FormDetailResponse> {
      const headers = this.getHeaders();
      return this.httpClient.get<FormDetailResponse>(`${detailPengajuanPinjaman}${id}`, { headers });
    }
    updateStatusPengajuanPinjaman(id: number, data: any): Observable<any> {
      const headers = this.getHeaders();
      return this.httpClient.put(detailPengajuanPinjaman + id, data, { headers });
    }
    createPinjamanMinimal(data: Pinjaman): Observable<Pinjaman> {
      const headers = this.getHeaders();
      return this.httpClient.post<Pinjaman>(createPinjamanUrl, data, { headers });
    }
    createPengajuanPinjaman(data: any): Observable<any> {
      const headers = this.getHeaders();
      return this.httpClient.post(createPengajuanPinjamanUrl, data, { headers });
    }
    // createPinjamanMinimal(data: any): Observable<any> {
    //   const headers = this.getHeaders();
    //   return this.httpClient.post(createPinjamanUrl, data, { headers });
    // }
  }

