import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailMonitoringComponent } from './detail-monitoring/detail-monitoring.component';
import { ListMonitoringComponent } from './list-monitoring/list-monitoring.component';



@NgModule({
  declarations: [
    DetailMonitoringComponent,
    ListMonitoringComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule
  ]
})
export class MonitoringModule { }
