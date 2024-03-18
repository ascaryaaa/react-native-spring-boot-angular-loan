import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailMonitoringComponent } from './monitoring/detail-monitoring/detail-monitoring.component';
// import { MonitoringComponent } from './monitoring/monitoring.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pengajuan-pinjaman',
    loadChildren: ()=> 
    import('./pengajuan-pinjaman/pengajuan-pinjaman.module').then(m => m.PengajuanPinjamanModule),    
  },
  {
    path: 'monitoring',
    loadChildren: ()=> 
    import('./monitoring/monitoring.module').then(m => m.MonitoringModule),    
  },
  // { path: 'monitoring/detail-monitoring', component: DetailMonitoringComponent },
  // { path: 'monitoring', component: MonitoringComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
