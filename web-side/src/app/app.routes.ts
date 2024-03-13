import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { DetailComponent } from './home/detail/detail.component';
import { MonitoringComponent } from './home/monitoring/monitoring.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
