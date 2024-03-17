import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListPengajuanPinjamanComponent } from './pengajuan-pinjaman/list-pengajuan-pinjaman/list-pengajuan-pinjaman.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { DetailPengajuanPinjamanComponent } from './pengajuan-pinjaman/detail-pengajuan-pinjaman/detail-pengajuan-pinjaman.component';

import { DetailMonitoringComponent } from './monitoring/detail-monitoring/detail-monitoring.component';
import { MonitoringComponent } from './monitoring/monitoring.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-pengajuan-pinjaman', component: ListPengajuanPinjamanComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'detail-pengajuan-pinjaman', component: DetailPengajuanPinjamanComponent },
  { path: 'monitoring/detail-monitoring', component: DetailMonitoringComponent },
  { path: 'monitoring', component: MonitoringComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
