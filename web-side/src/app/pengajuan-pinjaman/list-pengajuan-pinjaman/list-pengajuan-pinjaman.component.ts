import { Component } from '@angular/core';
import { FormPengajuanPinjaman, FormResponse } from '../pengajuan-pinjaman';
import { Observable } from 'rxjs';
import { PengajuanPinjamanService } from '../pengajuan-pinjaman.service';
import { listPengajuanPinjaman } from '../../config/api';

@Component({
  selector: 'app-list-pengajuan-pinjaman',
  templateUrl: './list-pengajuan-pinjaman.component.html',
  styleUrl: './list-pengajuan-pinjaman.component.css'
})
export class ListPengajuanPinjamanComponent {
  forms: FormPengajuanPinjaman[] = [];

  constructor(private pengajuanPinjamanService: PengajuanPinjamanService) { }

  async ngOnInit() {
    this.refreshFormList();
  }

  async refreshFormList() {
    try{
      this.pengajuanPinjamanService.getListPengajuanPinjaman().subscribe({
        next: (data) => {
          this.forms = data;
          console.log(this.forms); // For debugging
        },
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

}

