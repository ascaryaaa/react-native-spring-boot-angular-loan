export type ListPinjamanResponse = Pinjaman[];
export type DetailPinjamanResponse = Pinjaman;
export type AdminDetailResponse = Admin;

export interface Pinjaman {
    idPinjaman: number | null;
    pinjamanToForm: FormPengajuanPinjaman | null; // Updated to allow null
    nameUser: string | null; // Updated to allow null
    nikUser: string | null; // Updated to allow null
    statusTagihan: string | null; // Updated to allow null
    kolektabilitas: number | null; // Updated to allow null
    deskripsiPembayaran: string | null; // Updated to allow null
    amountsSisaPokok: number | null;
    rebatesSisaPokok: number | null;
    payoffsSisaPokok: number | null;
    amountsBungaBerjalan: number | null;
    rebatesBungaBerjalan: number | null;
    payoffsBungaBerjalan: number | null;
    totalAmounts: number | null;
    totalRebates: number | null;
    totalPayoffs: number | null;
    sisaTagihan: number | null;
    totalBayarTagihan: number | null;
    tanggalBayarTagihan: string | null;
    hashedIdPinjaman: string | null;
}

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
    hashedIdForm: string;
}

export interface User {
    idUser: number;
    nameUser: string;
    nikUser: string;
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