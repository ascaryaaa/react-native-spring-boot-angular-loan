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
pageSize: number = 10;
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sort direction is ascending

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
  changePageSize(): void {
    // Lakukan apa pun yang diperlukan saat jumlah entri per halaman berubah
    this.refreshFormList(); // Contoh: refresh data ketika jumlah entri per halaman berubah
  }

  sortByName(): void {
    this.filteredForms.sort((a, b) => {
      const nameA = a.formToUser.nameUser.toLowerCase();
      const nameB = b.formToUser.nameUser.toLowerCase();
      if (nameA < nameB) return this.sortDirection === 'asc' ? -1 : 1;
      if (nameA > nameB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    // Toggle sort direction
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  
}
sortData(column: string): void {
  switch (column) {
    case 'name':
      this.filteredForms.sort((a, b) => {
        const nameA = a.formToUser.nameUser.toLowerCase();
        const nameB = b.formToUser.nameUser.toLowerCase();
        if (nameA < nameB) return this.sortDirection === 'asc' ? -1 : 1;
        if (nameA > nameB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;})
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      break;
    case 'cif':
      this.filteredForms.sort((a, b) => {
        return this.sortDirection === 'asc' ? a.idFormPengajuanPinjaman - b.idFormPengajuanPinjaman : b.idFormPengajuanPinjaman - a.idFormPengajuanPinjaman;
      });
      break;
    case 'nik':
      this.filteredForms.sort((a, b) => {
        const nameA = a.formToUser.nikUser.toLowerCase();
        const nameB = b.formToUser.nikUser.toLowerCase();
        if (nameA < nameB) return this.sortDirection === 'asc' ? -1 : 1;
        if (nameA > nameB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;})
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      break;
    case 'jenis_pengajuan':
      this.filteredForms.sort((a, b) => {
        const nameA = a.formToJenis.nameJenisPinjaman.toLowerCase();
        const nameB = b.formToJenis.nameJenisPinjaman.toLowerCase();
        if (nameA < nameB) return this.sortDirection === 'asc' ? -1 : 1;
        if (nameA > nameB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;})
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      break;
    case 'status_pengajuan':
      this.filteredForms.sort((a, b) => {
        const nameA = a.statusPengajuan.toLowerCase();
        const nameB = b.statusPengajuan.toLowerCase();
        if (nameA < nameB) return this.sortDirection === 'asc' ? -1 : 1;
        if (nameA > nameB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;})
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      break;
    case 'admin':
     
      break;
    // Add cases for other columns if needed
    default:
      break;
  }
}

}