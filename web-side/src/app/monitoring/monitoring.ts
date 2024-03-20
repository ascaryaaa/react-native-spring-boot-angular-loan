export type ListPinjamanResponse = Pinjaman[];
export type DetailPinjamanResponse = Pinjaman;

export interface Pinjaman {
    idPinjaman: number;
    pinjamanToUser: PinjamanToUser;
    pinjamanToForm: PinjamanToForm;
    pinjamanToAdmin: PinjamanToAdmin;
    statusTagihan: string;
    kolektabilitas: string;
    deskripsiPembayaran: string;
    amountsSisaPokok: number;
    rebatesSisaPokok: number;
    payoffsSisaPokok: number;
    amountsBungaBerjalan: number;
    rebatesBungaBerjalan: number;
    payoffsBungaBerjalan: number;
    totalAmounts: number;
    totalRebates: number;
    totalPayoffs: number;
    sisaTagihan: number;
    totalBayarTagihan: number;
    tanggalBayarTagihan: string;
    alamat: string;
  }
  
  export interface PinjamanToUser {
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
    statusPengajuan: string;
    tanggalRealisasi: string;
  }
  
  export interface FormToJenis {
    idJenisPinjaman: number;
    nameJenisPinjaman: string;
    gambarJenisPinjaman: string;
    iconJenisPinjaman: string;
  }
  
  export interface PinjamanToAdmin {
    idAdmin: number;
    nameAdmin: string;
    nppAdmin: string;
    usernameAdmin: string;
    passwordAdmin: string;
    profilepictAdmin: null;
  }
  