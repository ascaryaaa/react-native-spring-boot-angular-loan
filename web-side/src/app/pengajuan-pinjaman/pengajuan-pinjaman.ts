export type FormResponse = FormPengajuanPinjaman[];
export type FormDetailResponse = FormPengajuanPinjaman;
export type AdminDetailResponse = Admin;

export interface FormPengajuanPinjaman {
    idFormPengajuanPinjaman: number;
    formToJenis: JenisPinjaman;
    formToUser: User;
    formToAdmin: Admin | null;
    formToCabang: Cabang; // Added formToCabang based on JSON
    jenisKelamin: string;
    tempatLahir: string | null; // Updated to allow null
    tanggalLahir: string; // No change
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
    maksAngsuran: number; // Changed from maksimalPinjaman
    angsuranPerbulan: number;
    hargaRumah: number;
    persentaseUangMuka: number;
    uangMuka: number | null; // Updated to allow null
    statusPengajuan: string;
    tanggalRealisasi: string | null; // Updated to allow null
}

export interface JenisPinjaman {
    idJenisPinjaman: number;
    nameJenisPinjaman: string;
    bungaPinjaman: number;
    gambarJenisPinjaman: string;
    iconJenisPinjaman: string;
}

export interface User {
    idUser: number;
    nameUser: string;
    nikUser: string;
}

export interface Admin {
    idAdmin: number;
    hashedIdAdmin: number;
    nameAdmin: string;
    nppAdmin: string;
    usernameAdmin: string;
    passwordAdmin: string;
    profilepictAdmin: string | null;
}

export interface Cabang {
    idCabang: number;
    nameCabang: string;
    kotaCabang: string;
    kodeCabang: string;
}