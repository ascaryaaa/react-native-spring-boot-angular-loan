import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { DetailPinjamanResponse, Pinjaman } from '../monitoring';
import { MonitoringService } from '../monitoring.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables)
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


  refreshFormList() {
    const id: number = this.router.snapshot.params['id'];
    this.monitoringService.getDetailMonitoringPinjaman(id).subscribe({
      next: (data) => {
        this.pinjamans = data;
        console.log(this.pinjamans); // For debugging
        this.RenderChart(this.pinjamans.pinjamanToForm.jumlahPinjaman, this.pinjamans.sisaTagihan);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  
  RenderChart(totalPinjaman: any, sisapinjaman: any) {
    const persentaseSisaPinjaman = Math.round(((sisapinjaman / totalPinjaman) * 100));
  
    const myChart = new Chart("RenderChart", {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          data: [totalPinjaman - sisapinjaman, sisapinjaman],
          backgroundColor: ['rgb(246, 131, 16)', 'rgb(245, 245, 245)'],
          borderColor: ['rgb(246, 131, 16)', 'rgb(245, 245, 245)'],
          borderWidth: 1,
        }]
      },
      options: {
        cutout: '75%',
        plugins: {
          title: {
            display: true,
            text: `${persentaseSisaPinjaman}%`,
            color: 'grey',
            font: {
              size: 20 // Adjust font size as needed
            },
            padding: {
              top: 10 // Adjust padding as needed
            },
            // **Corrected line:**
            position: 'top' // Position the title in the center of the chart
          }
        }
      }
    });
  }
  
}
