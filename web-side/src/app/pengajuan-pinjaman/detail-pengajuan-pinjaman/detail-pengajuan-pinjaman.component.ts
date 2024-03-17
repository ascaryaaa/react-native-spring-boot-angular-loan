import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './detail-pengajuan-pinjaman.component.html',
  styleUrl: './detail-pengajuan-pinjaman.component.css'
})
export class DetailPengajuanPinjamanComponent {

}
