import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LogoutModalComponent } from '../sidebar/logout-modal/logout-modal.component';
import { PengajuanPinjamanService } from '../pengajuan-pinjaman/pengajuan-pinjaman.service';
import { AdminDetailResponse } from '../pengajuan-pinjaman/pengajuan-pinjaman';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, LogoutModalComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router, // Tambahkan Router ke dalam constructor
    private pengajuanPinjamanService: PengajuanPinjamanService
  ) {} // Buat instance AuthService melalui dependency injection
  
  admin?: AdminDetailResponse;
  showLogoutModal = false;
  activeButton: number | null = null;

  ngOnInit() {
    this.refreshAdminDetail();
  }

  logout() {
    this.authService.logout();
  }

  onConfirmed(confirmed: boolean) {
    if (confirmed) {
      this.logout();
      console.log('Action confirmed');
    } else {
      // Cancel the action
      console.log('Action cancelled');
    }
    this.showLogoutModal = false;
  }

  navigateToListPengajuanPinjaman() {
    // Menggunakan Router untuk melakukan navigasi ke path /home
    this.router.navigate(['/pengajuan-pinjaman/list']);
  }
  navigateToMonitoring() {
    // Menggunakan Router untuk melakukan navigasi ke path /monitoring
    this.router.navigate(['/monitoring']);
  }

  refreshAdminDetail() {
    const hashedId: string | null = this.authService.getHashedId(); // Retrieve hashedId from AuthService
    if (!hashedId) {
      console.error('HashedId not found in localStorage');
      return;
    }
    this.pengajuanPinjamanService.getDetailAdmin(hashedId).subscribe({
      next: (dataAdmin) => {
        this.admin = dataAdmin;
        console.log(this.admin);
      },
      error: (error) => console.error('Error fetching admin data:', error)
    });
  }
  // isActive1: boolean = false;
  // isActive2: boolean = false;
  // isActive3: boolean = false;

  // toggleBorder(buttonNumber: number) {
  //   if (buttonNumber === 1) {
  //     // Jika tombol 1 diklik, toggle isActive1
  //     this.isActive1 = !this.isActive1;
  //   } else if (buttonNumber === 2) {
  //     // Jika tombol 2 diklik, toggle isActive2
  //     this.isActive2 = !this.isActive2;
  //   } else if (buttonNumber === 3) {
  //     // Jika tombol 3 diklik, toggle isActive3
  //     this.isActive3 = !this.isActive3;
  //   }
  
  //   // Memastikan hanya satu tombol yang aktif
  //   if (buttonNumber !== 1) {
  //     this.isActive1 = false; // Jika tombol lain diklik, nonaktifkan tombol 1
  //   }
  //   if (buttonNumber !== 2) {
  //     this.isActive2 = false; // Jika tombol lain diklik, nonaktifkan tombol 2
  //   }
  //   if (buttonNumber !== 3) {
  //     this.isActive3 = false; // Jika tombol lain diklik, nonaktifkan tombol 3
  //   }
  
  //   // Tombol yang aktif tetap aktif jika diklik lagi
  //   if (buttonNumber === 1 && this.isActive1) {
  //     this.isActive1 = true;
  //   }
  //   if (buttonNumber === 2 && this.isActive2) {
  //     this.isActive2 = true;
  //   }
  //   if (buttonNumber === 3 && this.isActive3) {
  //     this.isActive3 = true;
  //   }
  // }
  // toggleActiveButton(buttonNumber: number) {
  //   if (this.activeButton === buttonNumber) {
  //     // Jika tombol yang sama diklik dua kali, biarkan tombol tetap aktif
  //     return;
  //   }

  //   // Toggle tombol yang diklik
  //   this.activeButton = buttonNumber;
  // }
  setActiveButton(buttonNumber: number) {
    // Set activeButton to the clicked buttonNumber
    this.activeButton = buttonNumber;
  }

  isButtonActive(buttonNumber: number): boolean {
    // Check if the button is active
    return this.activeButton === buttonNumber;
  }
  
}