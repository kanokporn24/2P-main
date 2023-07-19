-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 18, 2023 at 04:33 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imagrurl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `imagrurl`) VALUES
(1, 'kfc', 'แซนเดอร์ส เบอร์เกอร์ฮิต', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/THITE20230515204352191368/detail/583353614e5048eea1782a680061a8e3_1684991242441504521.webp'),
(2, 'ฉ่อย noodle express - ศิริราช-วังหลัง', 'ข้าวหน้าเป็ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/THITE20210601052401146392/detail/menueditor_item_c62702efc3204525bde80b79619bb0da_1624366827309600662.webp'),
(3, ' (ฮะจิบัง ราเมน) - บางลำพู', 'กิมจิ ราเมน', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/THITE20230703161206017260/detail/2bbf9221589c4afdbb87ef04d16208f0_1688400724578764145.webp'),
(4, 'จิฟุ้ง อาหารเวียดนาม - ตลาดพลู', 'ปอเปี๊ยกุ้งสด 2ชิ้น', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/THITE2022052601544871685/detail/menueditor_item_26cf2d65d5e14e80a7f900a153ab5577_1653530057920433307.webp'),
(5, 'ตี๋เปิ้ลก่วยเตี๋ยวต้มยำสุโขทัย - สวนมะลิ', 'ก่วยเตี๋ยวต้มยำสุโขทัย', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/THITE2023012904344735610/detail/menueditor_item_f926f07f974c4f4eab7cf697a1ff0a36_1675041220476598700.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
