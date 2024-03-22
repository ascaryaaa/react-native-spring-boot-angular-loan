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
  currentPage: number = 1;
  totalPages: number = 1;
  totalPagesArray: number[] = [];

  constructor(private pengajuanPinjamanService: PengajuanPinjamanService) {}

  ngOnInit() {
    this.refreshFormList();
  }

  async refreshFormList() {
    try {
      this.pengajuanPinjamanService.getListPengajuanPinjaman().subscribe({
        next: (data) => {
          this.forms = data;
          this.filterForms(); // Memfilter data sebelum perhitungan jumlah halaman dan navigasi
          this.calculateTotalPages();
          this.navigateToPage(this.currentPage); // Hapus pemanggilan ini
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

  filterForms(): void {
    this.filteredForms = this.forms.filter(form =>
      form.formToUser.nameUser.toLowerCase().includes(this.searchText.trim().toLowerCase())
    );
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredForms.length / this.pageSize); // Menggunakan this.filteredForms.length
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  navigateToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      const startIndex = (page - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.currentPage = page;
      // Menggunakan data yang telah difilter sebelumnya, bukan memotong data baru
      this.filteredForms = this.filteredForms.slice(startIndex, endIndex);
    }
  }

  search(): void {
    this.filterForms();
    this.calculateTotalPages();
    this.navigateToPage(1);
  }

  changePageSize(): void {
    this.calculateTotalPages();
    this.navigateToPage(1);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.navigateToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.navigateToPage(this.currentPage + 1);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.navigateToPage(this.currentPage);
    }
  }
}
