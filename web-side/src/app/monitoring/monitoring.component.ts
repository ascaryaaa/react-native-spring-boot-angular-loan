import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [SidebarComponent,],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.css',
})
export class MonitoringComponent {
  constructor(
    private router: Router
  ) {} 
  navigateToMontoringDetail() {
    // Menggunakan Router untuk melakukan navigasi ke path /monitoring/detail-monitoring
    this.router.navigate(['monitoring/detail-monitoring']);
  }
}
