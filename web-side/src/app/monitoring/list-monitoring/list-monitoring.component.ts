import { Component } from '@angular/core';
// import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  // standalone: true,
  // imports: [SidebarComponent,],
  templateUrl: './list-monitoring.component.html',
  styleUrl: './list-monitoring.component.css',
})
export class ListMonitoringComponent {
  constructor(
    private router: Router
  ) {} 
  navigateToMontoringDetail() {
    // Menggunakan Router untuk melakukan navigasi ke path /monitoring/detail-monitoring
    this.router.navigate(['monitoring/detail-monitoring']);
  }
}
