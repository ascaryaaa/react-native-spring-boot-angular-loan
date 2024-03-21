export type FormResponse = FormPengajuanPinjaman[];
export type FormDetailResponse = FormPengajuanPinjaman;

export interface FormPengajuanPinjaman {
    idFormPengajuanPinjaman: number;
    formToJenis: JenisPinjaman;
    formToUser: User;
    formToAdmin: Admin;
    formToCabang: Cabang;
    jenisKelamin: string;
    tempatLahir: string | null; // Adjusted to reflect that "NULL" might be intended as a null value
    tanggalLahir: string; // Keeping as string to match JSON, consider converting to Date in application logic if needed
    alamatKtp: string;
    kodePos: string;
    kelurahan: string;
    kecamatan: string;
    npwp: string;
    unitBNI: string;
    penghasilanBersihPerbulan: number;
    jumlahPinjaman: number;
    jangkaWaktu: number;
    angsuranPerbulan: number;
    maksAngsuran: number | null; // Making nullable as indicated by the potential for null values
    hargaRumah: number;
    persentaseUangMuka: number;
    uangMuka: number | null;
    statusPengajuan: string;
    tanggalRealisasi: string | null; // Keeping as string to match JSON, consider converting to Date in application logic if needed
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