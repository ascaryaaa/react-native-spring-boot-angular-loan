import { Component } from '@angular/core';
// import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import {ListPinjamanResponse, Pinjaman} from '../monitoring';
import {MonitoringService} from '../monitoring.service'

@Component({
  selector: 'app-monitoring',
  templateUrl: './list-monitoring.component.html',
  styleUrl: './list-monitoring.component.css',
})
export class ListMonitoringComponent {
  pinjamans: Pinjaman[] = [];
  filteredMonitoring: ListMonitoringComponent[] = [];
  searchText: string = '';
  pageSize: number = 10;

  
  constructor(private monitoringService: MonitoringService) { }

  async ngOnInit() {
    this.refreshFormList();
  }

  async refreshFormList() {
    try{
      this.monitoringService.getListMonitoringPinjaman().subscribe({
        next: (data) => {
          this.pinjamans = data;
          console.log(this.pinjamans); // For debugging
        },
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  
}
