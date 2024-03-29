// import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { DetailMonitoringComponent } from './monitoring/detail-monitoring/detail-monitoring.component';
// // import { MonitoringComponent } from './monitoring/monitoring.component';

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'pengajuan-pinjaman',
//     loadChildren: ()=> 
//     import('./pengajuan-pinjaman/pengajuan-pinjaman.module').then(m => m.PengajuanPinjamanModule),    
//   },
//   {
//     path: 'monitoring',
//     loadChildren: ()=> 
//     import('./monitoring/monitoring.module').then(m => m.MonitoringModule),    
//   },
//   // { path: 'monitoring/detail-monitoring', component: DetailMonitoringComponent },
//   // { path: 'monitoring', component: MonitoringComponent},
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pengajuan-pinjaman',
    canActivate: [authGuard], // Lindungi rute ini dengan AuthGuard
    loadChildren: ()=> import('./pengajuan-pinjaman/pengajuan-pinjaman.module').then(m => m.PengajuanPinjamanModule),
  },
  {
    path: 'monitoring',
    canActivate: [authGuard], // Lindungi rute ini dengan AuthGuard
    loadChildren: ()=> import('./monitoring/monitoring.module').then(m => m.MonitoringModule),
  },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
