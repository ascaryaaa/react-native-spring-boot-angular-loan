import { Component, OnInit } from '@angular/core';
// import { AuthService } from './../auth/auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

export type FormResponse = FormPengajuan[];

export interface Pinjaman {
  idPinjaman: number;
  pinjamanToUser: User;
  pinjamanToForm: FormPengajuan;
  pinjamanToAdmin: Admin;
  tanggalRealisasi: Date;
  status: string;
  sisaTagihan: number;
  totalBayarTagihan: number;
  tanggalBayarTagihan: Date;
}

export interface User {
  idUser: number;
  nameUser: string;
  nikUser: string;
}

export interface FormPengajuan {
  idFormPengajuanPinjaman: number;
  formToJenis: JenisPinjaman;
  formToUser: User;
  jenisKelamin: string;
  tempatLahir: string;
  tanggalLahir: Date;
  alamatKtp: string;
  kodePos: string;
  kelurahan: string;
  kecamatan: string;
  npwp: string;
  unitBNI: string;
  penghasilanBersihPerbulan: number;
  jumlaPinjaman: number;
  jangkaWaktu: number;
  bungaPinjaman: number;
}

export interface JenisPinjaman {
  idJenisPinjaman: number;
  nameJenisPinjaman: string;
  gambarJenisPinjaman: string;
  iconJenisPinjaman: string;
}

export interface Admin {
  idAdmin: number;
  nameAdmin: string;
  nppAdmin: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, CommonModule, DetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router
  ) {} // Injeksi Router

  navigateToDetail() {
    // Menggunakan Router untuk melakukan navigasi ke path /detail
    this.router.navigate(['/detail']);
  }

  form: FormResponse = [];
  async fetchAdminDataAsync(url: string): Promise<FormResponse> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: FormResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Fetching error:', error);
      throw error;
    }
  }

  apiUrl = 'http://localhost:8083/loan/v1/form/get-form';
  
  async ngOnInit() {
    this.refreshAdminList();
  }

  async refreshAdminList() {
    try {
      this.form = await this.fetchAdminDataAsync(this.apiUrl);
      console.log(this.form); // Process your users here
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}
