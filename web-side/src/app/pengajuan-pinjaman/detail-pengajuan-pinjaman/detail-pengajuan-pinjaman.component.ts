import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { PengajuanPinjamanService } from '../pengajuan-pinjaman.service';
import { AdminDetailResponse, FormDetailResponse } from '../pengajuan-pinjaman';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Pinjaman } from '../../monitoring/monitoring';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-pengajuan-pinjaman.component.html',
  styleUrls: ['./detail-pengajuan-pinjaman.component.css']
})
export class DetailPengajuanPinjamanComponent implements OnInit {
  [x: string]: any;
  form?: FormDetailResponse;
  admin?: AdminDetailResponse;
  showSLIKTable: boolean = false;
  slikGenerated: boolean = false;
  slikData: any[] = [];
  currentDate: Date | undefined;
  formattedDate: string | undefined;

  @ViewChild('slikTable') slikTable!: ElementRef;

  constructor(
    private router: ActivatedRoute,
    private pengajuanPinjamanService: PengajuanPinjamanService,
    private authService: AuthService,
  ) { 
    this.currentDate = new Date();
    this.formattedDate = this.currentDate.toISOString();
  }

  ngOnInit() {
    this.refreshFormDetail();
    this.refreshAdminDetail();
  }

  refreshFormDetail() {
    const id: number = +this.router.snapshot.params['id'];
    this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
      next: (data) => {
        this.form = data;
        console.log(this.form);
      },
      error: (error) => console.error('Error fetching form data:', error)
    });
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

  createFormPengajuan() {
    if (!this.form) {
      console.error("Form data is not loaded.");
      return;
    }
  
    const data: any = {
      // Populate the new form with data from the current form detail
      formToJenis: this.form.formToJenis,
      formToUser: this.form.formToUser,
      formToAdmin: this.form.formToAdmin,
      formToCabang: this.form.formToCabang,
      jenisKelamin: this.form.jenisKelamin,
      tempatLahir: this.form.tempatLahir,
      tanggalLahir: this.form.tanggalLahir,
      alamatKtp: this.form.alamatKtp,
      kodePos: this.form.kodePos,
      kelurahan: this.form.kelurahan,
      kecamatan: this.form.kecamatan,
      npwp: this.form.npwp,
      unitBNI: this.form.unitBNI,
      penghasilanBersihPerbulan: this.form.penghasilanBersihPerbulan,
      jumlahPinjaman: this.form.jumlahPinjaman,
      jangkaWaktu: this.form.jangkaWaktu,
      angsuranPerbulan: this.form.angsuranPerbulan,
      maksAngsuran: this.form.maksAngsuran,
      hargaRumah: this.form.hargaRumah,
      persentaseUangMuka: this.form.persentaseUangMuka,
      uangMuka: this.form.uangMuka,
      statusPengajuan: "New", // Set the status to a default value for new form
      tanggalRealisasi: null // Set to null or omit if not applicable for new form
    };
  
    this.pengajuanPinjamanService.createPengajuanPinjaman(data).subscribe({
      next: (response) => {
        console.log("New pengajuan pinjaman created successfully", response);
        // Refresh form detail after creating the form
        this.refreshFormDetail();
      },
      error: (error) => {
        console.error("Error creating new pengajuan pinjaman:", error);
      }
    });
  }

  showConfirmationModalTerima = false;
  terima(confirmed: boolean) {
    if (confirmed) {
      this.createPinjamanAndChangeStatus()
      console.log('Action confirmed');
    } else {
      // Cancel the action
      console.log('Action cancelled');
    }
    this.showConfirmationModalTerima = false;
  }
  showConfirmationModalTolak = false;
  tolak(confirmed: boolean) {
    if (confirmed) {
      this.rejectPengajuan()
      console.log('Action confirmed');
    } else {
      // Cancel the action
      console.log('Action cancelled');
    }
    this.showConfirmationModalTolak = false;
  }
  showDownloadModal = false; // Set to true initially to display popup

  download(confirmed: boolean) {
    if (confirmed) {
      this.rejectPengajuan()
      console.log('Action confirmed');
    } else {
      // Cancel the action
      console.log('Action cancelled');
    }
    this.showDownloadModal = false; // Hide popup after download
    // this.downloadSLIK();
  }

  createPinjamanAndChangeStatus() {
    if (!this.form) {
      console.error("Form data is not loaded.");
      return;
    }
    const id: number = +this.router.snapshot.params['id'];

    const minimalPinjamanData: Pinjaman = {
      idPinjaman: null,
      pinjamanToForm: this.form,
      nameUser: this.form?.formToUser.nameUser ?? null,
      nikUser: this.form?.formToUser.nikUser ?? null,
      statusTagihan: "Hijau",
      kolektabilitas: 0,
      deskripsiPembayaran: "test",
      amountsSisaPokok: null,
      rebatesSisaPokok: null,
      payoffsSisaPokok: null,
      amountsBungaBerjalan: null,
      rebatesBungaBerjalan: null,
      payoffsBungaBerjalan: null,
      totalAmounts: null,
      totalRebates: null,
      totalPayoffs: null,
      sisaTagihan: null,
      totalBayarTagihan: null,
      tanggalBayarTagihan: null
  };
  
    this.pengajuanPinjamanService.createPinjamanMinimal(minimalPinjamanData).subscribe({
      next: (response) => {
        console.log("Minimal Pinjaman created successfully", response);
        const updatedData = {
          ...this.form,
          statusPengajuan: "Diterima",
          formToAdmin: this.admin,
          tanggalRealisasi: this.formattedDate,
          
        };
        this.pengajuanPinjamanService.updateStatusPengajuanPinjaman(id, updatedData).subscribe({
          next: (response) => {
            console.log("Status updated successfully", response);
            this.refreshFormDetail();
          },
          error: (error) => {
            console.error("Error updating status:", error);
          }
        });
      },
      error: (error) => console.error("Error creating minimal Pinjaman:", error)
    });
    
  }

  createPengajuanPinjaman(data: any) {
    this.pengajuanPinjamanService.createPengajuanPinjaman(data).subscribe({
      next: (response) => console.log("New pengajuan pinjaman created successfully", response),
      error: (error) => console.error("Error creating new pengajuan pinjaman:", error)
    });
  }

  rejectPengajuan() {
    if (!this.form || !this.form.idFormPengajuanPinjaman) {
      console.error("Form data or ID is not available.");
      return;
    }
    const id: number = this.form.idFormPengajuanPinjaman;
  
    this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
      next: (currentData) => {
        const updatedData = {
          ...currentData,
          statusPengajuan: "Ditolak",
          formToAdmin: this.admin,
        };
        this.pengajuanPinjamanService.updateStatusPengajuanPinjaman(id, updatedData).subscribe({
          next: (response) => {
            console.log("Status updated successfully", response);
          },
          error: (error) => {
            console.error("Error updating status:", error);
          }
        });
      },
      error: (error) => {
        console.error("Error fetching current data:", error);
      }
    });
  }
  generateSLIK(): void {
    if (!this.slikGenerated) {
      const slikData = [
        {
          fasilitas: 'Plafon Efektif',
          kredit: '2.263.328,00',
          lc: '0,00',
          fasilitasLain: '0,00',
          total: '2.263.328,00',
          kualitas: '1 / Januari 2020'
        },
        {
          fasilitas: 'Baki Debet',
          kredit: '2.263.328,00',
          lc: '0,00',
          fasilitasLain: '0,00',
          total: '2.263.328,00',
          kualitas: '1 / Januari 2020'
        }
      ];
  
      this.slikData = slikData; // Assign slikData to slikData property

      this.showSLIKTable = true; // Show the SLIK table
   
    }
  }
  downloadSLIK(){
    //pdf generate table to pdf
    var doc = new jsPDF()
    autoTable(doc, {html:"#slik-debitur",
    theme: 'grid',
    })
    doc.save("SLIK-Debitur")
  }
      
} 
