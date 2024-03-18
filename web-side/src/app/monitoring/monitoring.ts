export type ListPinjamanResponse = Pinjaman[];
export type DetailPinjamanResponse = Pinjaman;

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
    maksimalPinjaman: number; // Added to match JSON structure
    angsuranPerbulan: number; // Added to match JSON structure
    hargaRumah: number; // Added to match JSON structure
    persentaseUangMuka: number; // Added to match JSON structure
    uangMuka: number; // Added to match JSON structure
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
    usernameAdmin: string; // Added to match JSON structure
    passwordAdmin: string; // Added to match JSON structure
    profilepictAdmin: string | null; // Added to match JSON structure
}