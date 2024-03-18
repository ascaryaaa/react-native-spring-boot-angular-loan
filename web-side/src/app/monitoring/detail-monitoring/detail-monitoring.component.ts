import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { DetailPinjamanResponse, Pinjaman } from '../monitoring';
import { MonitoringService } from '../monitoring.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-monitoring',
  templateUrl: './detail-monitoring.component.html',
  styleUrl: './detail-monitoring.component.css'
})
export class DetailMonitoringComponent {
  pinjamans?: DetailPinjamanResponse;
  constructor(private router: ActivatedRoute, private monitoringService: MonitoringService ) { }

  async ngOnInit() {
    this.refreshFormList();
  }

  async refreshFormList() {
    const id: number = this.router.snapshot.params['id'];
    try{
      this.monitoringService.getDetailMonitoringPinjaman(id).subscribe({
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
