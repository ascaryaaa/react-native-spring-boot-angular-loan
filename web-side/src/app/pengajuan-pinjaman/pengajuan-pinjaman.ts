export type FormResponse = FormPengajuanPinjaman[];
export type FormDetailResponse = FormPengajuanPinjaman;

export interface Pinjaman {
    idPinjaman: number | null;
    pinjamanToUser: User;
    pinjamanToForm: FormPengajuanPinjaman;
    pinjamanToAdmin: Admin | null;
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
    formToAdmin: Admin;
    jenisKelamin: string;
    tempatLahir: string;
    tanggalLahir: string; 
    alamatKtp: string;
    kodePos: string;
    kelurahan: string;
    kecamatan: string;
    npwp: string;
    unitBNI: string;
    penghasilanBersihPerbulan: number;
    jumlahPinjaman: number; 
    jangkaWaktu: number;
    bungaPinjaman: number;
    maksimalPinjaman: number; 
    angsuranPerbulan: number; 
    hargaRumah: number; 
    persentaseUangMuka: number; 
    uangMuka: number; 
    statusPengajuan: string | null;
    tanggalRealisasi: string | null;
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
    usernameAdmin: string,
    password: string,
    profilepictAdmin: string,
}