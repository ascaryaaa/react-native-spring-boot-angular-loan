export type FormResponse = FormPengajuanPinjaman[];
export type FormDetailResponse = FormPengajuanPinjaman;

export interface Pinjaman {
    idPinjaman: number;
    pinjamanToUser: User;
    pinjamanToForm: FormPengajuanPinjaman;
    pinjamanToAdmin: Admin;
    tanggalRealisasi: Date;
    status: string;
    sisaTagihan: number;
    totalBayarTagihan: number;
    tanggalBayarTagihan: Date;
}
  
export interface User {
    idUser: number;
    nameUser: string;
    nikUser: string;
}
  
export interface FormPengajuanPinjaman {
    idFormPengajuanPinjaman: number;
    formToJenis: JenisPinjaman;
    formToUser: User;
    jenisKelamin: string;
    tempatLahir: string;
    tanggalLahir: Date;
    alamatKtp: string;
    kodePos: string;
    kelurahan: string;
    kecamatan: string;
    npwp: string;
    unitBNI: string;
    penghasilanBersihPerbulan: number;
    jumlaPinjaman: number;
    jangkaWaktu: number;
    bungaPinjaman: number;
}
  
export interface JenisPinjaman {
    idJenisPinjaman: number;
    nameJenisPinjaman: string;
    gambarJenisPinjaman: string;
    iconJenisPinjaman: string;
}
  
export interface Admin {
    idAdmin: number;
    nameAdmin: string;
    nppAdmin: string;
}