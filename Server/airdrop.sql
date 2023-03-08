-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2023 at 09:50 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `airdrop`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `refrellCode` varchar(100) NOT NULL,
  `referralParent` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `username`, `email`, `password`, `address`, `refrellCode`, `referralParent`) VALUES
(14, 'Ammar', 'ammar9087', 'ammar@gmail.com', '123456', 'asdasddddddddddddddddddasdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd', '', ''),
(15, 'Hassan', 'Hassan asif', 'hassan@gmail.com', '123456', '0xC9ea92cB3E7636417cD062A7e449cB69045Ab07C', '', ''),
(16, 'Ammar Siddiqui', 'Ammar1441', 'ammarsiddiqui622@gmail.com', '123456', 'asdsadsadsaasdddddddddddddddd342222222222222222222222222222222222222222222222', 'All/ammarsiddiqui622@gmail.com/Friends', ''),
(17, 'rohan', 'rohan123', 'rohan123@gmail.com', '123456', '', 'All/rohan123@gmail.com/Friends', ''),
(18, 'rohan', 'rohan1441', 'rohan12sdfsd3@gmail.com', '123456', '', 'All/rohan12sdfsd3@gmail.com/Friends', 'All/ammarsiddiqui622@gmail.com/Friends'),
(19, 'Sheikh', 'Sheikh123', 'Sheikh@gmail.com', '123456', '', 'All/Sheikh@gmail.com/Friends', 'All/ammarsiddiqui622@gmail.com/Friends');

-- --------------------------------------------------------

--
-- Table structure for table `wallet_data`
--

CREATE TABLE `wallet_data` (
  `image` longblob NOT NULL,
  `email` varchar(50) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallet_data`
--

INSERT INTO `wallet_data` (`image`, `email`, `id`) VALUES
(0x626c6f623a687474703a2f2f6c6f63616c686f73743a333030302f65663332343061662d393037662d343930362d393066652d323261396336353633343533, 'ammar@gmail.com', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_data`
--
ALTER TABLE `wallet_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `wallet_data`
--
ALTER TABLE `wallet_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
