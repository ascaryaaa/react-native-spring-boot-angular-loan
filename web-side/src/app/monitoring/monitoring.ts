export type ListPinjamanResponse = Pinjaman[];
export type DetailPinjamanResponse = Pinjaman;

export interface Pinjaman {
    idPinjaman: number | null;
    pinjamanToUser: User;
    pinjamanToForm: FormPengajuanPinjaman;
    pinjamanToAdmin: Admin | null;
    tanggalRealisasi: String | null;
    status: string | null;
    sisaTagihan: number | null;
    totalBayarTagihan: number | null;
    tanggalBayarTagihan: String | null;
    kolektabilitas: string | null;
    amountsSisaPokok: number | null;
    rebatesSisaPokok: number | null;
    payoffsSisaPokok: number | null;
    amountsBungaBerjalan: number | null;
    rebatesBungaBerjalan: number | null;
    payoffsBungaBerjalan: number | null;
    totalAmounts: number | null;
    totalRebates: number | null;
    totalPayoffs: number | null;
    deskripsiPembayaran: string | null;
}

export interface User {
    idUser: number;
    nameUser: string;
    nikUser: string;
  }
  
  export interface PinjamanToForm {
    idFormPengajuanPinjaman: number;
    formToJenis: FormToJenis;
    formToUser: PinjamanToUser;
    formToAdmin: null;
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
}

export interface JenisPinjaman {
    idJenisPinjaman: number;
    nameJenisPinjaman: string;
    gambarJenisPinjaman: string;
    iconJenisPinjaman: string;
  }
  
  export interface PinjamanToAdmin {
    idAdmin: number;
    nameAdmin: string;
    nppAdmin: string;
    usernameAdmin: string ;
    passwordAdmin: string ;
    profilepictAdmin: string | null;
}
