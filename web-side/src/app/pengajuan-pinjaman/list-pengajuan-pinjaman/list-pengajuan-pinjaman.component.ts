import { Component } from '@angular/core';
import { FormPengajuanPinjaman } from '../pengajuan-pinjaman';
import { PengajuanPinjamanService } from '../pengajuan-pinjaman.service';

@Component({
  selector: 'app-list-pengajuan-pinjaman',
  templateUrl: './list-pengajuan-pinjaman.component.html',
  styleUrls: ['./list-pengajuan-pinjaman.component.css'],
})
export class ListPengajuanPinjamanComponent {
  forms: FormPengajuanPinjaman[] = [];
  filteredForms: FormPengajuanPinjaman[] = [];
  searchText: string = '';
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;
  totalPagesArray: number[] = [];
  selectedStatus: string = ''; // Properti untuk menyimpan status pengajuan yang dipilih
  selectedDate: string = '';
  selectedDateRange: { start: string | null; end: string | null } = {
    start: null,
    end: null,
  };
  sortDirection: 'asc' | 'desc' = 'asc';
  loading = true;

  constructor(private pengajuanPinjamanService: PengajuanPinjamanService) {}

  ngOnInit() {
    const currentDate = new Date();
    const oneMonthAgo = new Date();
    // oneMonthAgo.setMonth(currentDate.getMonth() - 1);
    // this.selectedDateRange.start = this.formatDate(oneMonthAgo);
    // this.selectedDateRange.end = this.formatDate(currentDate);

    // Panggil metode untuk mengambil data dan menyesuaikan tampilan
    this.refreshFormList();
    this.loadData();
    this.search();
  }

  async refreshFormList() {
    try {
      this.pengajuanPinjamanService.getListPengajuanPinjaman().subscribe({
        next: (data) => {
          this.forms = data;
          this.filterForms(); // Memfilter data sebelum perhitungan jumlah halaman dan navigasi
          this.calculateTotalPages();
          this.navigateToPage(1); // Perbarui tampilan ke halaman pertama setelah perubahan data
          this.loading = false; // Hentikan loading setelah selesai mengambil data
        },
        error: (error) => {
          console.error('Error fetching data:', error);
          this.loading = false; // Hentikan loading jika terjadi kesalahan
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.loading = false; // Hentikan loading jika terjadi kesalahan
    }
  }

  filterForms(): void {
    this.filteredForms = this.forms.filter((form) =>
      form.formToUser.nameUser
        .toLowerCase()
        .includes(this.searchText.trim().toLowerCase())
    );
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredForms.length / this.pageSize);
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
      endIndex = Math.min(endIndex, this.filteredForms.length);

      this.currentPage = page;

      // Preserve filtered data and slice appropriately
      this.filteredForms = this.filteredForms.slice(startIndex, endIndex);
      // this.filteredForms = this.forms.slice(startIndex, startIndex + this.pageSize);
    }
  }

  navigateToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      const startIndex = (page - 1) * this.pageSize;
      this.currentPage = page;
      // Recalculate data slice based on updated currentPage and pageSize
      this.filteredForms = this.forms.slice(
        startIndex,
        startIndex + this.pageSize
      );
    }
  }

  search(): void {
    // Filter data sesuai dengan input search
    let filteredBySearch = this.forms.filter(
      (form) =>
        form.cif.toLowerCase().includes(this.searchText.trim().toLowerCase()) ||
        form.formToUser.nameUser
          .toLowerCase()
          .includes(this.searchText.trim().toLowerCase()) ||
        form.formToUser.nikUser
          .toLowerCase()
          .includes(this.searchText.trim().toLowerCase())
    );

    // Jika ada status yang dipilih, filter data berdasarkan status pengajuan
    if (this.selectedStatus !== '') {
      filteredBySearch = filteredBySearch.filter(
        (form) => form.statusPengajuan === this.selectedStatus
      );
    }

    // Setelah memfilter data, perbarui jumlah halaman dan navigasi
    this.filteredForms = filteredBySearch;
    this.calculateTotalPages();
    this.searchTopage(1); // Navigasikan ke halaman pertama setelah pencarian
  }

  // Fungsi filter berdasarkan status pengajuan
  filterByStatus(): void {
    // Filter data berdasarkan status pengajuan
    let filteredByStatus = this.forms;
    if (this.selectedStatus !== '') {
      filteredByStatus = filteredByStatus.filter(
        (form) => form.statusPengajuan === this.selectedStatus
      );
    }

    // Jika ada input pencarian, filter data berdasarkan pencarian
    if (this.searchText.trim() !== '') {
      filteredByStatus = filteredByStatus.filter(
        (form) =>
          form.cif
            .toLowerCase()
            .includes(this.searchText.trim().toLowerCase()) ||
          form.formToUser.nameUser
            .toLowerCase()
            .includes(this.searchText.trim().toLowerCase()) ||
          form.formToUser.nikUser
            .toLowerCase()
            .includes(this.searchText.trim().toLowerCase())
      );
    }

    // Setelah memfilter data, perbarui jumlah halaman dan navigasi
    this.filteredForms = filteredByStatus;
    this.calculateTotalPages();
    this.searchTopage(1); // Navigasikan ke halaman pertama setelah filtering
  }

  // filterByDateRange(): void {
  //   // Filter data berdasarkan rentang tanggal
  //   let filteredByDateRange = this.forms;
  //   if (
  //     this.selectedDateRange &&
  //     this.selectedDateRange.start !== null &&
  //     this.selectedDateRange.end !== null
  //   ) {
  //     const startDate = new Date(this.selectedDateRange.start);
  //     const endDate = new Date(this.selectedDateRange.end);

  //     filteredByDateRange = filteredByDateRange.filter((form) => {
  //       if (form.tanggalRealisasi) {
  //         const formDate = new Date(form.tanggalRealisasi);
  //         return formDate >= startDate && formDate <= endDate;
  //       }
  //       return false;
  //     });
  //   }

  //   // Jika ada input pencarian, filter data berdasarkan pencarian
  //   if (this.searchText.trim() !== '') {
  //     filteredByDateRange = filteredByDateRange.filter(
  //       (form) =>
  //         form.cif
  //           .toLowerCase()
  //           .includes(this.searchText.trim().toLowerCase()) ||
  //         form.formToUser.nameUser
  //           .toLowerCase()
  //           .includes(this.searchText.trim().toLowerCase()) ||
  //         form.formToUser.nikUser
  //           .toLowerCase()
  //           .includes(this.searchText.trim().toLowerCase())
  //     );
  //   }

  //   // Jika ada status yang dipilih, filter data berdasarkan status pengajuan
  //   if (this.selectedStatus !== '') {
  //     filteredByDateRange = filteredByDateRange.filter(
  //       (form) => form.statusPengajuan === this.selectedStatus
  //     );
  //   }

  //   // Setelah memfilter data, perbarui jumlah halaman dan navigasi
  //   this.filteredForms = filteredByDateRange;
  //   this.calculateTotalPages();
  //   this.searchTopage(1); // Navigasikan ke halaman pertama setelah filtering
  // }

  // // Helper function to format date as YYYY-MM-DD
  // formatDate(date: Date): string {
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const day = date.getDate().toString().padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // }

  // resetFilters(): void {
  //   // Reset selectedStatus to empty string
  //   this.selectedStatus = '';

  //   // Reset selectedDateRange to null
  //   this.selectedDateRange = { start: null, end: null };

  //   // Call filter functions to update data based on reset filters
  //   this.filterByStatus();
  //   this.filterByDateRange();
  // }

  changePageSize(): void {
    this.totalPages = Math.ceil(this.filteredForms.length / this.pageSize);
    this.totalPagesArray = Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
    // Ensure current page is valid after changing page size
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    this.navigateToPage(this.currentPage);

    // Call search() whenever pageSize changes
    this.search();
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
    console.log('Search text:', this.searchText); // Cetak nilai yang dicari
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
    this.filteredForms.sort((a, b) => {
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
        return (item.formToUser.nameUser || '').toLowerCase();
      case 'cif':
        return (item.idFormPengajuanPinjaman || '').toString().toLowerCase();
      case 'nik':
        return (item.formToUser.nikUser || '').toLowerCase();
      case 'jenis_pengajuan':
        return (item.formToJenis.nameJenisPinjaman || '').toLowerCase();
      case 'status_pengajuan':
        return (item.statusPengajuan || '').toLowerCase();
      case 'admin':
        return (item.formToAdmin?.nameAdmin || '').toLowerCase();
      case 'tanggal_realisasi':
        return (item.tanggalRealisasi || '').toLowerCase();
      default:
        return '';
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
      },
    });
  }
}
