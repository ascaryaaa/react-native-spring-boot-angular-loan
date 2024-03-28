import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailMonitoringComponent } from './detail-monitoring/detail-monitoring.component';
import { ListMonitoringComponent } from './list-monitoring/list-monitoring.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { RejectingModalComponent } from '../rejecting-modal/rejecting-modal.component';
import { NotificationDownloadModalComponent } from '../notification-download-modal/notification-download-modal.component';
import { FormsModule } from '@angular/forms';
import { ListPengajuanPinjamanComponent } from '../pengajuan-pinjaman/list-pengajuan-pinjaman/list-pengajuan-pinjaman.component';
import { SidebarComponent } from '../sidebar/sidebar.component';



@NgModule({
  declarations: [
    DetailMonitoringComponent,
    ListMonitoringComponent
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
export class MonitoringModule { }
