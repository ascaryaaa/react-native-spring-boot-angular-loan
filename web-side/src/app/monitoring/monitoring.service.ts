import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailPinjamanResponse, ListPinjamanResponse, Pinjaman } from './monitoring';
import { Observable } from 'rxjs';
import { listMonitoringPinjaman } from '../config/api'
import { detailMonitoringPinjaman } from '../config/api'
@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  constructor(private httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Ideally, use an AuthService to get the token
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
    return new HttpHeaders();
  }

  getListMonitoringPinjaman(): Observable<ListPinjamanResponse> {
    const headers = this.getHeaders();
    return this.httpClient.get<ListPinjamanResponse>(listMonitoringPinjaman, { headers });
  }
  getDetailMonitoringPinjaman(hashedId: string): Observable<DetailPinjamanResponse> {
    const headers = this.getHeaders();
    return this.httpClient.get<DetailPinjamanResponse>(`${detailMonitoringPinjaman}`+'hid/'+`${hashedId}`, { headers });
  }
}