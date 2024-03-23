-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Mar 2024 pada 17.14
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
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_admin` bigint(20) NOT NULL,
  `name_admin` varchar(255) DEFAULT NULL,
  `password_admin` varchar(255) DEFAULT NULL,
  `npp_admin` varchar(255) DEFAULT NULL,
  `username_admin` varchar(255) DEFAULT NULL,
  `profilepict_admin` varchar(255) DEFAULT NULL,
  `hashed_id_admin` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_admin`, `name_admin`, `password_admin`, `npp_admin`, `username_admin`, `profilepict_admin`, `hashed_id_admin`) VALUES
(1, 'Wahyu Khumairoh', '123456', 'T067XX1', 'admin', 'https://i.ibb.co/XV9CQW8/wahuy.jpg', '6fe9413dbf558f7037c4118942eca8843d32e308609c14ca88360a8825bee4ba'),
(2, 'Saitama Sensei', '123456', 'T067XX2', 'admin2', 'https://i.ibb.co/D9hm8rc/saitama.jpg', 'f9cbd142dd698f4d0c9682522983259087bcf5a9f63c0606ceb58301b59aebf7'),
(3, 'Dustin Tiffani', '123456', 'T067003', 'admin3', 'https://i.ibb.co/kyk9drV/dustin2.jpg', 'f592f448e4aea668193f619e38ee33df043533152410ac3599f66b7c85d4068a');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
