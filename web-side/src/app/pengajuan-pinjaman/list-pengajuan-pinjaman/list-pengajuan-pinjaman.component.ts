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
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;
  totalPagesArray: number[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';
  loading = true;

  constructor(private pengajuanPinjamanService: PengajuanPinjamanService) {}

  ngOnInit() {
    this.refreshFormList();
    this.loadData();
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
    this.totalPages = Math.ceil(this.filteredForms.length / this.pageSize);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  
//   navigateToPage(page: number): void {
//     const totalPagesAfterChange = Math.ceil(this.filteredForms.length / this.pageSize);
//     if (page >= 1 && page <= totalPagesAfterChange) {
//         const startIndex = (page - 1) * this.pageSize;
//         const endIndex = startIndex + this.pageSize;
//         this.currentPage = page;
//         this.filteredForms = this.forms.slice(startIndex, startIndex + this.pageSize);
//     }
// }

navigateToPage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    const startIndex = (page - 1) * this.pageSize;
    this.currentPage = page;
    // Recalculate data slice based on updated currentPage and pageSize
    this.filteredForms = this.forms.slice(startIndex, startIndex + this.pageSize);
  }
}
// search(): void {
//   this.filteredForms = this.forms.filter(form =>
//     form.formToUser.nameUser.toLowerCase().includes(this.searchText.trim().toLowerCase())
//   );
  search(): void {
    this.filterForms();
    this.calculateTotalPages();
    this.navigateToPage(1);
  }

  changePageSize(): void {
    this.totalPages = Math.ceil(this.filteredForms.length / this.pageSize);
    // Check for remaining data... (existing code)
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.currentPage = 1; // Reset current page to 1
    this.navigateToPage(1); // Update data for the first page
  }
  
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1; // Kurangi currentPage
      this.navigateToPage(this.currentPage); // Perbarui tampilan ke halaman sebelumnya
    }
  }

  nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage += 1; // Tambahkan currentPage
    this.navigateToPage(this.currentPage); // Perbarui tampilan ke halaman berikutnya
  }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.navigateToPage(this.currentPage);
    }
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
        this.filteredForms.sort((a, b) => {
          const nameA = (a.formToAdmin?.nameAdmin || '').toLowerCase(); // Use empty string as default value
          const nameB = (b.formToAdmin?.nameAdmin || '').toLowerCase(); // Use empty string as default value
          if (nameA < nameB) return this.sortDirection === 'asc' ? -1 : 1;
          if (nameA > nameB) return this.sortDirection === 'asc' ? 1 : -1;
          return 0;
        });
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      break;
      case 'tanggal_realisasi':
        this.filteredForms.sort((a, b) => {
          const nameA = (a.tanggalRealisasi || '').toLowerCase(); // Use empty string as default value
          const nameB = (b.tanggalRealisasi || '').toLowerCase(); // Use empty string as default value
          if (nameA < nameB) return this.sortDirection === 'asc' ? -1 : 1;
          if (nameA > nameB) return this.sortDirection === 'asc' ? 1 : -1;
          return 0;
        });
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      break;
    // Add cases for other columns if needed
    default:
      break;
  }
}

loadData() {
  this.loading = true;
  this.pengajuanPinjamanService.getListPengajuanPinjaman().subscribe({
    next: (response) => {
      this.forms = response;
      this.loading = false;
    },
    error: (error) => {
      console.error('There was an error!', error);
      this.loading = false;
    }
  });
}
}

