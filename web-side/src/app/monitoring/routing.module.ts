import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListMonitoringComponent } from './list-monitoring/list-monitoring.component';
import { DetailMonitoringComponent } from './detail-monitoring/detail-monitoring.component';


const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch: 'full'},
  {
    path: 'list',
    component: ListMonitoringComponent
  },
  { path: ':id', 
    component: DetailMonitoringComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RoutingModule { }
