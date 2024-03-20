// import { Component } from '@angular/core';
// import { PengajuanPinjamanService } from '../pengajuan-pinjaman.service';
// import { FormDetailResponse, FormPengajuanPinjaman } from '../pengajuan-pinjaman';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-detail',
//   templateUrl: './detail-pengajuan-pinjaman.component.html',
//   styleUrl: './detail-pengajuan-pinjaman.component.css'
// })
// export class DetailPengajuanPinjamanComponent {
//   form?: FormDetailResponse;

//   constructor(private router: ActivatedRoute, private pengajuanPinjamanService: PengajuanPinjamanService) { }

//   async ngOnInit() {
//     this.refreshFormDetail();
//   }

//   async refreshFormDetail() {
//     const id: number = this.router.snapshot.params['id'];
//     try{
//       this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
//         next: (data) => {
//           this.form = data;
//           console.log(this.form);
//         },
//       })
//     } catch (error) {
//       console.error('Error fetching data:', error)
//     }
//   }
//   acceptPengajuan(id: number) {
//     this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
//       next: (currentData) => {
//         const updatedData = {
//           ...currentData,
//           statusPengajuan: "Diterima"
//         };
//         this.pengajuanPinjamanService.updateStatusPengajuanPinjaman(id, updatedData).subscribe({
//           next: (response) => {
//             console.log("Status updated successfully", response);
//             // Handle successful update here
//           },
//           error: (error) => {
//             console.error("Error updating status:", error);
//             // Handle error here
//           }
//         });
//       },
//       error: (error) => {
//         console.error("Error fetching current data:", error);
//         // Handle error here
//       }
//     });
//   }
//   rejectPengajuan(id: number) {
//     this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
//       next: (currentData) => {
//         const updatedData = {
//           ...currentData,
//           statusPengajuan: "Ditolak"
//         };
//         this.pengajuanPinjamanService.updateStatusPengajuanPinjaman(id, updatedData).subscribe({
//           next: (response) => {
//             console.log("Status updated successfully", response);
//             // Handle successful update here
//           },
//           error: (error) => {
//             console.error("Error updating status:", error);
//             // Handle error here
//           }
//         });
//       },
//       error: (error) => {
//         console.error("Error fetching current data:", error);
//         // Handle error here
//       }
//     });
//   }
// }

import { Component, ElementRef, ViewChild } from '@angular/core';
import { PengajuanPinjamanService } from '../pengajuan-pinjaman.service';
import { FormDetailResponse } from '../pengajuan-pinjaman';
import { ActivatedRoute } from '@angular/router';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// declare let jsPDF: new () => any;
// import jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-pengajuan-pinjaman.component.html',
  styleUrls: ['./detail-pengajuan-pinjaman.component.css'],
})
export class DetailPengajuanPinjamanComponent {
  form?: FormDetailResponse;
  showSLIKTable: boolean = false;
  slikGenerated: boolean = false;
  slikData: any[] = [];

  @ViewChild('slikTable') slikTable!: ElementRef;

  constructor(private router: ActivatedRoute, private pengajuanPinjamanService: PengajuanPinjamanService) { }

  ngOnInit(): void {
    this.refreshFormDetail();
  }

  refreshFormDetail(): void {
    const id: number = this.router.snapshot.params['id'];
    try {
      this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
        next: (data) => {
          this.form = data;
          console.log(this.form);
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  acceptPengajuan(id: number): void {
    this.updateStatusPengajuan(id, 'Diterima');
  }

  rejectPengajuan(id: number): void {
    this.updateStatusPengajuan(id, 'Ditolak');
  }

  private updateStatusPengajuan(id: number, status: string): void {
    this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
      next: (currentData) => {
        const updatedData = {
          ...currentData,
          statusPengajuan: status
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
       // Create PDF
   
    }
    //   this.slikGenerated = true; // Set slikGenerated to true to indicate that the table has been generated
    // } else {
    //   console.log("SLIK sudah digenerate sebelumnya.");
    // }
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
