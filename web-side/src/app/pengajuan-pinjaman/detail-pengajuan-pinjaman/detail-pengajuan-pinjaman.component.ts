import { Component } from '@angular/core';
import { PengajuanPinjamanService } from '../pengajuan-pinjaman.service';
import { FormDetailResponse, FormPengajuanPinjaman } from '../pengajuan-pinjaman';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-pengajuan-pinjaman.component.html',
  styleUrl: './detail-pengajuan-pinjaman.component.css'
})
export class DetailPengajuanPinjamanComponent {
  form?: FormDetailResponse;

  constructor(private router: ActivatedRoute, private pengajuanPinjamanService: PengajuanPinjamanService) { }

  async ngOnInit() {
    this.refreshFormDetail();
  }

  async refreshFormDetail() {
    const id: number = this.router.snapshot.params['id'];
    try{
      this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
        next: (data) => {
          this.form = data;
          console.log(this.form);
        },
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  acceptPengajuan(id: number) {
    this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
      next: (currentData) => {
        const updatedData = {
          ...currentData,
          statusPengajuan: "Diterima"
        };
        this.pengajuanPinjamanService.updateStatusPengajuanPinjaman(id, updatedData).subscribe({
          next: (response) => {
            console.log("Status updated successfully", response);
            // Handle successful update here
          },
          error: (error) => {
            console.error("Error updating status:", error);
            // Handle error here
          }
        });
      },
      error: (error) => {
        console.error("Error fetching current data:", error);
        // Handle error here
      }
    });
  }
  rejectPengajuan(id: number) {
    this.pengajuanPinjamanService.getDetailPengajuanPinjaman(id).subscribe({
      next: (currentData) => {
        const updatedData = {
          ...currentData,
          statusPengajuan: "Ditolak"
        };
        this.pengajuanPinjamanService.updateStatusPengajuanPinjaman(id, updatedData).subscribe({
          next: (response) => {
            console.log("Status updated successfully", response);
            // Handle successful update here
          },
          error: (error) => {
            console.error("Error updating status:", error);
            // Handle error here
          }
        });
      },
      error: (error) => {
        console.error("Error fetching current data:", error);
        // Handle error here
      }
    });
  }
}
