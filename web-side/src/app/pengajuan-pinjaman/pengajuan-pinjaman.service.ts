  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { AdminDetailResponse, FormDetailResponse, FormResponse} from './pengajuan-pinjaman';
  import { Observable } from 'rxjs';
  import { createPengajuanPinjamanUrl, createPinjamanUrl, detailAdmin, detailPengajuanPinjaman, listPengajuanPinjaman } from '../config/api';
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
    getDetailPengajuanPinjaman(hashedIdForm: string): Observable<FormDetailResponse> {
      const headers = this.getHeaders();
      return this.httpClient.get<FormDetailResponse>(`${detailPengajuanPinjaman}`+'hid/'+`${hashedIdForm}`, { headers });
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
    getDetailAdmin(hashedId: string): Observable<AdminDetailResponse> {
      const headers = this.getHeaders();
      return this.httpClient.get<AdminDetailResponse>(`${detailAdmin}`+'hid/'+`${hashedId}`, { headers })
    }
  }

