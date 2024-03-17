import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { DetailComponent } from './home/detail/detail.component';

import { DetailMonitoringComponent } from './monitoring/detail-monitoring/detail-monitoring.component';
import { MonitoringComponent } from './monitoring/monitoring.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'home/detail', component: DetailComponent },
  { path: 'monitoring/detail-monitoring', component: DetailMonitoringComponent },
  { path: 'monitoring', component: MonitoringComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
