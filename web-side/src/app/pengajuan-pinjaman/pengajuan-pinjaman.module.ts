import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { DetailPengajuanPinjamanComponent } from './detail-pengajuan-pinjaman/detail-pengajuan-pinjaman.component';
import { ListPengajuanPinjamanComponent } from './list-pengajuan-pinjaman/list-pengajuan-pinjaman.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";
import { RejectingModalComponent } from "../rejecting-modal/rejecting-modal.component";
import { FormsModule } from '@angular/forms';
import { NotificationDownloadModalComponent } from '../notification-download-modal/notification-download-modal.component';
import { SidebarComponent } from '../sidebar/sidebar.component';




@NgModule({
    declarations: [
        DetailPengajuanPinjamanComponent,
        ListPengajuanPinjamanComponent,
    ],
    imports: [
        CommonModule,
        RoutingModule,
        HttpClientModule,
        ConfirmationModalComponent,
        RejectingModalComponent,
        NotificationDownloadModalComponent,
        FormsModule,
        SidebarComponent
    ], bootstrap: [ListPengajuanPinjamanComponent]
})
export class PengajuanPinjamanModule { }
