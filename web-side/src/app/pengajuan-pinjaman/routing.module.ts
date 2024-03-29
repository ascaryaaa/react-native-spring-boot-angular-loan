import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPengajuanPinjamanComponent } from './detail-pengajuan-pinjaman/detail-pengajuan-pinjaman.component';
import { ListPengajuanPinjamanComponent } from './list-pengajuan-pinjaman/list-pengajuan-pinjaman.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'not-found', pathMatch: 'full'},
  {
    path: 'list',
    component: ListPengajuanPinjamanComponent
  },
  { path: 'id/:hashedId', 
    component: DetailPengajuanPinjamanComponent 
  },
  { path:'**', redirectTo:'..', pathMatch: 'full'},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RoutingModule { }
