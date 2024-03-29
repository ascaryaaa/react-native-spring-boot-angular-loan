import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListMonitoringComponent } from './list-monitoring/list-monitoring.component';
import { DetailMonitoringComponent } from './detail-monitoring/detail-monitoring.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch: 'full'},
  {
    path: 'list',
    component: ListMonitoringComponent
  },
  { path: 'id/:hashedId', 
    component: DetailMonitoringComponent
  },
  { path:'**', redirectTo:'..', pathMatch: 'full'},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RoutingModule { }
