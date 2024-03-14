-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Mar 2024 pada 02.12
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pengajuan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `account`
--

CREATE TABLE `account` (
  `account_id` bigint(20) NOT NULL,
  `account_name` varchar(255) DEFAULT NULL,
  `account_pin` varchar(255) DEFAULT NULL,
  `mpin` varchar(255) DEFAULT NULL,
  `id_user` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_admin` bigint(20) NOT NULL,
  `name_admin` varchar(255) DEFAULT NULL,
  `password_admin` varchar(255) DEFAULT NULL,
  `npp_admin` varchar(255) DEFAULT NULL,
  `username_admin` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_admin`, `name_admin`, `password_admin`, `npp_admin`, `username_admin`) VALUES
(1, 'Wahyu Khumairoh', '123456', 'T0672XX', 'admin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cabang`
--

CREATE TABLE `cabang` (
  `id_cabang` bigint(20) NOT NULL,
  `kode_cabang` varchar(255) DEFAULT NULL,
  `kota_cabang` varchar(255) DEFAULT NULL,
  `name_cabang` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cabang`
--

INSERT INTO `cabang` (`id_cabang`, `kode_cabang`, `kota_cabang`, `name_cabang`) VALUES
(1, '9000', 'JAKARTA', 'BNI HEAD OFFICE'),
(2, ' 9001', 'JAKARTA PUSAT', 'BNI JKT-SUDIRMAN BRANCH'),
(3, ' 9002', 'JAKARTA', 'BNI JKT-TANJUNG PRIOK BRANCH'),
(4, ' 9003', 'JAKARTA TIMUR', 'BNI JKT-JATINEGARA BRANCH'),
(5, ' 9004', 'JAKARTA', 'BNI JKT-MELAWAI RAYA BRANCH'),
(6, ' 9007', 'JAKARTA', 'BNI JKT-GAMBIR BRANCH'),
(7, ' 9008', 'JAKARTA', 'BNI JKT-DUKUH BAWAH BRANCH'),
(8, ' 9009', 'JAKARTA SELATAN', 'BNI JKT-TEBET BRANCH'),
(9, ' 9010', 'BANDUNG', 'BNI BDG-ASIA AFRIKA BRANCH'),
(10, ' 9011', 'JAKARTA SELATAN', 'BNI JKT-PASAR MAYESTIK BRANCH'),
(11, ' 9012', 'JAKARTA PUSAT', 'BNI JKT-KRAMAT BRANCH'),
(12, ' 9014', 'JAKARTA', 'BNI JKT-ROA MALAKA BRANCH'),
(13, ' 9015', 'JAKARTA PUSAT', 'BNI JKT-MENTENG BRANCH'),
(14, ' 9016', 'JAKARTA', 'BNI JKT-PECENONGAN BRANCH'),
(15, ' 9019', 'JAKARTA', 'BNI JKT-RAWAMANGUN BRANCH'),
(16, ' 9021', 'JAKARTA', 'BNI JKT-SENAYAN BRANCH'),
(17, ' 9023', 'JAKARTA', 'BNI JKT-HARMONI BRANCH'),
(18, ' 9024', 'BEKASI', 'BNI BEKASI-A. YANI BRANCH'),
(19, ' 9025', 'BOGOR', 'BNI BOGOR-JUANDA BRANCH'),
(20, ' 9029', 'SERANG', 'BNI SERANG-VETERAN BRANCH'),
(21, ' 9030', 'JAKARTA', 'BNIOPERATIONAL HEAD OFFICE OF CASH'),
(22, ' 9031', 'TANGERANG', 'BNI TANGERANG-DAAN MOGOT BRANCH'),
(23, ' 9035', 'GARUT', 'BNI GARUT-A. YANI BRANCH'),
(24, ' 9036', 'KARAWANG', 'BNI KARAWANG-TUPAREV BRANCH'),
(25, ' 9039', 'SUBANG', 'BNI SUBANG-OTISTA BRANCH'),
(26, ' 9040', 'BARABAI', 'BNI BARABAI-MURAKATA BRANCH'),
(27, ' 9041', 'TASIKMALAYA', 'BNI TASIKMALAYA-MUSTOFA BRANCH'),
(28, ' 9050', 'TARAKAN', 'BNI TARAKAN-Y. SUDARSO BRANCH'),
(29, ' 9056', 'BANDUNG', 'BNI BDG-TAMAN SARI BRANCH'),
(30, ' 9060', 'KEDIRI', 'BNI KEDIRI-BRAWIJAYA BRANCH'),
(31, ' 9063', 'JEMBER', 'BNI JEMBER-SUDIRMAN BRANCH'),
(32, ' 9064', 'BANYUWANGI', 'BNI BANYUWANGI-KATAMSO BRANCH'),
(33, ' 9065', 'GRESIK', 'BNI GRESIK-VETERAN BRANCH'),
(34, ' 9070', 'MALANG', 'BNI MALANG-B.RAHMAD BRANCH'),
(35, ' 9071', 'JEPARA', 'BNI JEPARA-PEMUDA BRANCH'),
(36, ' 9072', 'KUDUS', 'BNI KUDUS-A. YANI BRANCH'),
(37, ' 9073', 'PEKALONGAN', 'BNI PEKALONGAN-I.BONJOL BRANCH'),
(38, ' 9074', 'PATI', 'BNI PATI-SUDIRMAN BRANCH'),
(39, ' 9076', 'SURAKARTA', 'BNI SOLO-SLAMET RIYADI BRANCH'),
(40, ' 9080', 'PROBOLINGGO', 'BNI PROBOLINGGO-SUROYO BRANCH'),
(41, ' 9082', 'KEBUMEN', 'BNI KEBUMEN-PAHLAWAN BRANCH'),
(42, ' 9083', 'MAGELANG', 'BNI MAGELANG-PAHLAWAN BRANCH'),
(43, ' 9087', 'YOGYAKARTA', 'BNI YOGYAKARTA-TRIKORA BRANCH'),
(44, ' 9090', 'SEMARANG', 'BNI SEMARANG-MT. HARYONO BRANCH'),
(45, ' 9095', 'YOGYAKARTA', 'BNI DIY-UGM BRANCH'),
(46, ' 9100', 'SURAKARTA', 'BNI SURAKARTA-ARIFIN BRANCH'),
(47, ' 9107', 'SURABAYA', 'BNI SBY-TANJUNG PERAK BRANCH'),
(48, ' 9109', 'BOJONEGORO', 'BNI BOJONEGORO-SUDIRMANBRANCH'),
(49, ' 9110', 'SUKABUMI', 'BNI SUKABUMI-MARTADINATABRANCH'),
(50, ' 9111', 'JOMBANG', 'BNI JOMBANG-W. HASYIM BRANCH'),
(51, ' 9112', 'MOJOKERTO', 'BNI MOJOKERTO-MAJAPAHIT BRANCH'),
(52, ' 9113', 'PAMEKASAN', 'BNI PAMEKASAN-PNT.GERBANG BRANCH'),
(53, ' 9116', 'PASURUAN', 'BNI PASURUAN-A.YANI BRANCH'),
(54, ' 9117', 'BLITAR', 'BNI BLITAR-KENANGA BRANCH'),
(55, ' 9118', 'MADIUN', 'BNI MADIUN-SUTOMO BRANCH'),
(56, ' 9120', 'SURABAYA', 'BNI SURABAYA-GUB.SURYO BRANCH'),
(57, ' 9121', 'SURABAYA', 'BNI SBY-GRAHA PANGERAN BRANCH'),
(58, ' 9130', 'TEGAL', 'BNI TEGAL-SOETOYO BRANCH'),
(59, ' 9135', 'BUKITTINGGI', 'BNI BUKITTINGGI-P.KMRDEKAANBRANCH'),
(60, ' 9138', 'PAYAKUMBUH', 'BNI PAYAKUMBUH-VETERAN BRANCH'),
(61, ' 9140', 'CIREBON', 'BNI CIREBON-Y. SUDARSO BRANCH'),
(62, ' 9141', 'SELATPANJANG', 'BNI SELAT PANJANG-MERDEKA BRANCH'),
(63, ' 9143', 'PALEMBANG', 'BNI PALEMBANG-SUDIRMAN BRANCH'),
(64, ' 9144', 'LUBUKLINGGAU', 'BNI LUBUK LINGGAU-Y.SUDARSO BRANCH'),
(65, ' 9145', 'KOTABUMI', 'BNI KOTABUMI-R. INTAN BRANCH'),
(66, ' 9147', 'TANJUNGKARANG', 'BNI TJ.KARANG-KARTINI BRANCH'),
(67, ' 9149', 'JAKARTA BARAT', 'BNI JKT-KOTA BRANCH'),
(68, ' 9150', 'PURWOKERTO', 'BNI PURWOKERTO-SUDIRMANBRANCH'),
(69, ' 9151', 'SUNGAI PENUH', 'BNI SUNGAI PENUH-A.YANI BRANCH'),
(70, ' 9152', 'JAYAPURA', 'BNI JAYAPURA-A. YANI BRANCH'),
(71, ' 9153', 'BIREUEN', 'BNI BIREUN-JHN.ALAMSYAH BRANCH'),
(72, ' 9155', 'PADANGSIDIMPUAN', 'BNI P.SIDEMPUAN-LUMUMBA BRANCH'),
(73, ' 9156', 'SIGLI', 'BNI SIGLI-A.M. IBRAHIM BRANCH'),
(74, ' 9157', 'ASAHAN', 'BNI ASAHAN-SUDIRMAN BRANCH'),
(75, ' 9159', 'TEBING TINGGI', 'BNI TB.TINGGI-DELI BRANCH'),
(76, ' 9160', 'CILACAP', 'BNI CILACAP-A. YANI BRANCH'),
(77, ' 9165', 'BALIGE', 'BNI BALIGE-PN.NAGARI BRANCH'),
(78, ' 9167', 'GUNUNGSITOLI', 'BNI G.SITOLI-I. BONJOL BRANCH'),
(79, ' 9169', 'KABANJAHE', 'BNI KABANJAHE-VETERAN BRANCH'),
(80, ' 9170', 'BANDUNG', 'BNI BDG-MAJALAYA BRANCH'),
(81, ' 9171', 'MAKASSAR', 'BNI MAKASSAR-MATTOANGIN BRANCH'),
(82, ' 9173', 'KOTAMOBAGU', 'BNI KOTAMOBAGU-BOGANI BRANCH'),
(83, ' 9174', 'BAU-BAU', 'BNI BAUBAU-TENDEAN BRANCH'),
(84, ' 9177', 'PALOPO', 'BNI PALOPO-SUDIRMAN BRANCH'),
(85, ' 9178', 'PARE-PARE', 'BNI PAREPARE-SULAWESI BRANCH'),
(86, ' 9179', 'SENGKANG', 'BNI SENGKANG BRANCH'),
(87, ' 9184', 'TOLITOLI', 'BNI TOLITOLI-USM.BINOL BRANCH'),
(88, ' 9185', 'PARIGI', 'BNI PARIGI-TRANS SULAWESI BRANCH'),
(89, ' 9186', 'NUNUKAN', 'BNI NUNUKAN-A.YANI BRANCH'),
(90, ' 9189', 'MEDAN', 'BNI MEDAN-USU BRANCH'),
(91, ' 9192', 'KOTABARU', 'BNI KOTABARU-PULAU LAUT BRANCH'),
(92, ' 9194', 'KETAPANG-KALBAR', 'BNI KETAPANG-MERDEKA BRANCH'),
(93, ' 9198', 'PANGKALAN BUN', 'BNI PANGKLAN BUN-P.ANTASARIBRANCH'),
(94, ' 9199', 'DENPASAR', 'BNI KANWIL 08 DENPASAR REGIONAL'),
(95, ' 9200', 'TUBAN', 'BNI TUBAN-B.RAHMAD BRANCH'),
(96, ' 9204', 'BIMA', 'BNI BIMA-HASANUDDIN BRANCH'),
(97, ' 9205', 'SUMBAWA BESAR', 'BNI SUMBAWA BESAR-KARTINI'),
(98, ' 9215', 'SEMARANG', 'BNI KARANGAYU-SUDIRMAN BRANCH'),
(99, ' 9216', 'TULUNGAGUNG', 'BNI TLAGUNG-SUDIRMAN BRANCH');

-- --------------------------------------------------------

--
-- Struktur dari tabel `form_pengajuan`
--

CREATE TABLE `form_pengajuan` (
  `id_form_pengajuan_pinjaman` bigint(20) NOT NULL,
  `alamat_ktp_user_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `bunga_pinjaman_form_pengajuan_pinjaman` double DEFAULT NULL,
  `jangka_waktu_form_pengajuan_pinjaman` bigint(20) DEFAULT NULL,
  `jenis_kelamin_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `jumlah_pinjaman_form_pengajuan_pinjaman` bigint(20) DEFAULT NULL,
  `kecamatan_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `kelurahan_user_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `kode_pos_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `npwp_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `penghasilan_bersih_per_bulan_form_pengajuan_pinjaman` bigint(20) DEFAULT NULL,
  `tanggal_lahir_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `tempat_lahir_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `unit_bni_terderkat_form_pengajuan_pinjaman` varchar(255) DEFAULT NULL,
  `id_jenis_pinjaman` bigint(20) DEFAULT NULL,
  `id_user` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jenis_pinjaman`
--

CREATE TABLE `jenis_pinjaman` (
  `id_jenis_pinjaman` bigint(20) NOT NULL,
  `gambar_jenis_pinjaman` varchar(255) DEFAULT NULL,
  `icon_jenis_pinjaman` varchar(255) DEFAULT NULL,
  `name_jenis_pinjaman` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `jenis_pinjaman`
--

INSERT INTO `jenis_pinjaman` (`id_jenis_pinjaman`, `gambar_jenis_pinjaman`, `icon_jenis_pinjaman`, `name_jenis_pinjaman`) VALUES
(1, 'https://i.imgur.com/Ywn2QgH.png', 'https://i.imgur.com/MEcakIH.png', 'BNI_Griya'),
(2, 'https://i.imgur.com/NDTf5NC.png', 'https://i.imgur.com/GZWNMR7.png', 'BNI_Fleksi'),
(3, 'https://i.imgur.com/azUnAsh.png', 'https://i.imgur.com/MrKLSHu.png', 'BNI_Fleksi_Pensiun');

-- --------------------------------------------------------

--
-- Struktur dari tabel `promo`
--

CREATE TABLE `promo` (
  `id_promo` bigint(20) NOT NULL,
  `gambar_promo` varchar(255) DEFAULT NULL,
  `name_promo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `promo`
--

INSERT INTO `promo` (`id_promo`, `gambar_promo`, `name_promo`) VALUES
(1, 'blob:https://imgur.com/c70d655a-a7d9-47af-a1d0-a2d827d4e307', 'Promo Fleksi 1'),
(2, 'https://i.imgur.com/yjK6mpi.png', 'Promo Griya 1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` bigint(20) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `nik_user` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `name_user`, `nik_user`) VALUES
(1, 'Sarah Johnson', '4829610329478516'),
(2, 'Alex Wong', '7395124682053794'),
(3, 'Emily Rodriguez', '6158930247156832'),
(4, 'David Smith', '9264507315823496'),
(5, 'Samantha Lee', '3721948520637149'),
(6, 'Calestial Warrior', '8765209878192567');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_id`),
  ADD UNIQUE KEY `UK_mfisqiulqmeyv1vpx65qqcbvq` (`id_user`);

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indeks untuk tabel `cabang`
--
ALTER TABLE `cabang`
  ADD PRIMARY KEY (`id_cabang`);

--
-- Indeks untuk tabel `form_pengajuan`
--
ALTER TABLE `form_pengajuan`
  ADD PRIMARY KEY (`id_form_pengajuan_pinjaman`),
  ADD KEY `FKpkpoy9vudj1olbxjmt4g19qv2` (`id_jenis_pinjaman`),
  ADD KEY `FKl24wnhglox9dta3tex4wggflu` (`id_user`);

--
-- Indeks untuk tabel `jenis_pinjaman`
--
ALTER TABLE `jenis_pinjaman`
  ADD PRIMARY KEY (`id_jenis_pinjaman`);

--
-- Indeks untuk tabel `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`id_promo`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `account`
--
ALTER TABLE `account`
  MODIFY `account_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `cabang`
--
ALTER TABLE `cabang`
  MODIFY `id_cabang` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT untuk tabel `form_pengajuan`
--
ALTER TABLE `form_pengajuan`
  MODIFY `id_form_pengajuan_pinjaman` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jenis_pinjaman`
--
ALTER TABLE `jenis_pinjaman`
  MODIFY `id_jenis_pinjaman` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `promo`
--
ALTER TABLE `promo`
  MODIFY `id_promo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `FKr738a8wol7on2r69xf3iuvggx` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Ketidakleluasaan untuk tabel `form_pengajuan`
--
ALTER TABLE `form_pengajuan`
  ADD CONSTRAINT `FKl24wnhglox9dta3tex4wggflu` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `FKpkpoy9vudj1olbxjmt4g19qv2` FOREIGN KEY (`id_jenis_pinjaman`) REFERENCES `jenis_pinjaman` (`id_jenis_pinjaman`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
