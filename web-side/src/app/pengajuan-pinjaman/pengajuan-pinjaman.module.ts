import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { DetailPengajuanPinjamanComponent } from './detail-pengajuan-pinjaman/detail-pengajuan-pinjaman.component';
import { ListPengajuanPinjamanComponent } from './list-pengajuan-pinjaman/list-pengajuan-pinjaman.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DetailPengajuanPinjamanComponent,
    ListPengajuanPinjamanComponent,
    
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
  ]
})
export class PengajuanPinjamanModule { }
