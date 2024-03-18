import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailPinjamanResponse, ListPinjamanResponse } from './monitoring';
import { Observable } from 'rxjs';
import { listMonitoringPinjaman } from '../config/api'
import { detailMonitoringPinjaman } from '../config/api'
@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  constructor(private httpClient: HttpClient) { }

  getListMonitoringPinjaman(): Observable<ListPinjamanResponse> {
    return this.httpClient.get<ListPinjamanResponse>(listMonitoringPinjaman);
  }
  getDetailMonitoringPinjaman(id: number): Observable<DetailPinjamanResponse> {
    return this.httpClient.get<DetailPinjamanResponse>(detailMonitoringPinjaman + id);
  }
}
