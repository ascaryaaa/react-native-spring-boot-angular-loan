import { Component } from '@angular/core';
// import { SidebarComponent } from '../sidebar/sidebar.component';
import {Pinjaman} from '../monitoring';
import {MonitoringService} from '../monitoring.service'

@Component({
  selector: 'app-monitoring',
  templateUrl: './list-monitoring.component.html',
  styleUrl: './list-monitoring.component.css',
})
export class ListMonitoringComponent {
  pinjamans: Pinjaman[] = [];
  filteredPinjaman: Pinjaman[] = [];
  // filteredMonitoring: ListMonitoringComponent[] = [];
  searchText: string = '';
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;
  totalPagesArray: number[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';
  loading = true;

  constructor(private monitoringService: MonitoringService) {}

  ngOnInit() {
    this.refreshFormList();
    this.loadData();
  }

  async refreshFormList() {
    try {
      this.monitoringService.getListMonitoringPinjaman().subscribe({
        next: (data) => {
          this.pinjamans = data;
          this.filterForms();
          this.calculateTotalPages();
          this.navigateToPage(this.currentPage); // Hapus pemanggilan ini
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  filterForms(): void {
    this.filteredPinjaman = this.pinjamans.filter((pinjaman) =>
      pinjaman.pinjamanToForm?.formToUser.nameUser
        .toLowerCase()
        .includes(this.searchText.trim().toLowerCase())
    );
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredPinjaman.length / this.pageSize);
    this.totalPagesArray = Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
  }

  searchTopage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      const startIndex = (page - 1) * this.pageSize;
      let endIndex = startIndex + this.pageSize;

      // Adjust endIndex to prevent out-of-bounds access
      endIndex = Math.min(endIndex, this.filteredPinjaman.length);

      this.currentPage = page;

      // Preserve filtered data and slice appropriately
      this.filteredPinjaman = this.filteredPinjaman.slice(startIndex, endIndex);
      // this.filteredForms = this.forms.slice(startIndex, startIndex + this.pageSize);
    }
  }

  navigateToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      const startIndex = (page - 1) * this.pageSize;
      this.currentPage = page;
      // Recalculate data slice based on updated currentPage and pageSize
      this.filteredPinjaman = this.pinjamans.slice(
        startIndex,
        startIndex + this.pageSize
      );
    }
  }

  search(): void {
    if (this.searchText.trim() !== '') {
      this.filteredPinjaman = this.pinjamans.filter(
        (pinjaman) =>
          pinjaman.pinjamanToForm?.cif
            .toLowerCase()
            .includes(this.searchText.trim().toLowerCase()) ||
          pinjaman.pinjamanToForm?.formToUser.nameUser
            .toLowerCase()
            .includes(this.searchText.trim().toLowerCase()) ||
          pinjaman.pinjamanToForm?.formToUser.nikUser
            .toLowerCase()
            .includes(this.searchText.trim().toLowerCase())
      );
    } else {
      // Jika input pencarian kosong, tampilkan semua data
      this.filteredPinjaman = this.pinjamans;
    }
  }

  changePageSize(): void {
    this.totalPages = Math.ceil(this.filteredPinjaman.length / this.pageSize);
    // Check for remaining data... (existing code)
    this.totalPagesArray = Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
    this.currentPage = 1; // Reset current page to 1
    this.navigateToPage(1); // Update data for the first page

    // Setelah memfilter data, perbarui jumlah halaman dan navigasi
    this.calculateTotalPages();
    this.searchTopage(1); // Navigasikan ke halaman pertama setelah pencarian
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
    this.filteredPinjaman.sort((a, b) => {
      const nameA = (a.pinjamanToForm?.formToUser.nameUser || '').toLowerCase();
      const nameB = (b.pinjamanToForm?.formToUser.nameUser || '').toLowerCase();
      if (nameA < nameB) return this.sortDirection === 'asc' ? -1 : 1;
      if (nameA > nameB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    // Toggle sort direction
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  sortData(column: string): void {
    this.filteredPinjaman.sort((a, b) => {
      const valueA = this.getPropertyValue(a, column);
      const valueB = this.getPropertyValue(b, column);

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  getPropertyValue(item: any, column: string): string {
    switch (column) {
      case 'name':
        return (item.pinjamanToForm?.formToUser.nameUser || '').toLowerCase();
      case 'cif':
        return (item.pinjamanToForm?.idFormPengajuanPinjaman || '')
          .toString()
          .toLowerCase();
      case 'nik':
        return (item.pinjamanToForm?.formToUser.nikUser || '').toLowerCase();
      case 'kolektabilitas':
        return (item.kolektabilitas || '').toString().toLowerCase();
      case 'jenis_pengajuan':
        return (
          item.pinjamanToForm?.formToJenis.nameJenisPinjaman || ''
        ).toLowerCase();
      // Add cases for other columns if needed
      default:
        return '';
    }
  }

  loadData() {
    this.loading = true;
    this.monitoringService.getListMonitoringPinjaman().subscribe({
      next: (response) => {
        this.pinjamans = response;
        this.loading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.loading = false;
      },
    });
  }
}
