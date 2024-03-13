-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Mar 2024 pada 10.03
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

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cabang`
--
ALTER TABLE `cabang`
  ADD PRIMARY KEY (`id_cabang`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cabang`
--
ALTER TABLE `cabang`
  MODIFY `id_cabang` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
