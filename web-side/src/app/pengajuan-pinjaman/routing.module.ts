import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPengajuanPinjamanComponent } from './detail-pengajuan-pinjaman/detail-pengajuan-pinjaman.component';
import { ListPengajuanPinjamanComponent } from './list-pengajuan-pinjaman/list-pengajuan-pinjaman.component';

const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch: 'full'},
  {
    path: 'list',
    component: ListPengajuanPinjamanComponent
  },
  { path: ':id', 
    component: DetailPengajuanPinjamanComponent 
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RoutingModule { }
