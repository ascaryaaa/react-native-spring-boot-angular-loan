import { Component } from '@angular/core';
import { FormPengajuanPinjaman } from '../pengajuan-pinjaman';
import { PengajuanPinjamanService } from '../pengajuan-pinjaman.service';

@Component({
  selector: 'app-list-pengajuan-pinjaman',
  templateUrl: './list-pengajuan-pinjaman.component.html',
  styleUrls: ['./list-pengajuan-pinjaman.component.css']
})
export class ListPengajuanPinjamanComponent {
  forms: FormPengajuanPinjaman[] = [];
  filteredForms: FormPengajuanPinjaman[] = [];
  searchText: string = '';

  constructor(private pengajuanPinjamanService: PengajuanPinjamanService) {}

  ngOnInit() {
    this.refreshFormList();
  }

  async refreshFormList() {
    try {
      this.pengajuanPinjamanService.getListPengajuanPinjaman().subscribe({
        next: (data) => {
          this.forms = data;
          this.filteredForms = data; // Initialize filteredForms with all forms
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  search(): void {
    this.filteredForms = this.forms.filter(form =>
      form.formToUser.nameUser.toLowerCase().includes(this.searchText.trim().toLowerCase())
    );
  }
}
