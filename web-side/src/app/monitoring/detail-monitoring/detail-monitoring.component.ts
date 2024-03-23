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
        if (this.pinjamans.pinjamanToForm?.formToJenis.idJenisPinjaman === 1) {
          // Use hargaRumah for jenisPinjamanId 1
          this.RenderChart(this.pinjamans.pinjamanToForm?.hargaRumah, this.pinjamans.totalAmounts);
        } else if (this.pinjamans.pinjamanToForm?.formToJenis.idJenisPinjaman === 2 || this.pinjamans.pinjamanToForm?.formToJenis.idJenisPinjaman === 3) {
          // Use jumlahPinjaman for jenisPinjamanId 2 or 3
          this.RenderChart(this.pinjamans.pinjamanToForm?.jumlahPinjaman, this.pinjamans.totalAmounts);
        } else {
          console.error('Invalid jenisPinjamanId:', this.pinjamans.pinjamanToForm?.formToJenis.idJenisPinjaman);
          // Handle invalid jenisPinjamanId if necessary
        }
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  
  RenderChart(totalPinjaman: any, sisapinjaman: any) {
    const persentaseSisaPinjaman = Math.round(sisapinjaman / totalPinjaman * 100);
  
    const myChart = new Chart("RenderChart", {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          data: [sisapinjaman, totalPinjaman - sisapinjaman],
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
          },
        },
        backgroundColor: 'rgba(211, 211, 211, 0.5)' // Ubah nilai warna sesuai keinginan Anda
      }
    });
  }
  
}
