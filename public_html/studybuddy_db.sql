-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 09, 2015 at 10:28 PM
-- Server version: 5.5.42-cll-lve
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `studybuddy_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sb_administrator`
--

CREATE TABLE IF NOT EXISTS `tbl_sb_administrator` (
  `administratorID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `type` varchar(250) NOT NULL,
  `dateLogin` date NOT NULL,
  `active` int(1) DEFAULT '0',
  PRIMARY KEY (`administratorID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_sb_administrator`
--

INSERT INTO `tbl_sb_administrator` (`administratorID`, `userName`, `password`, `name`, `type`, `dateLogin`, `active`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Administrator', 'Administrator', '2015-09-06', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sb_class`
--

CREATE TABLE IF NOT EXISTS `tbl_sb_class` (
  `classID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `additionalInformation` longtext,
  `active` int(1) DEFAULT '0',
  `createDate` datetime NOT NULL,
  `notShow` int(11) NOT NULL,
  PRIMARY KEY (`classID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tbl_sb_class`
--

INSERT INTO `tbl_sb_class` (`classID`, `name`, `additionalInformation`, `active`, `createDate`, `notShow`) VALUES
(2, 'PSYC', '', 1, '2015-08-23 13:24:12', 0),
(3, 'COSC', '', 1, '2015-08-23 03:56:16', 0),
(4, 'ECON', '', 1, '2015-09-03 00:46:06', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sb_configure`
--

CREATE TABLE IF NOT EXISTS `tbl_sb_configure` (
  `configureID` int(11) NOT NULL AUTO_INCREMENT,
  `confName` varchar(250) NOT NULL,
  `confKey` varchar(250) NOT NULL,
  `confValue` varchar(250) NOT NULL,
  `changeAble` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`configureID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tbl_sb_configure`
--

INSERT INTO `tbl_sb_configure` (`configureID`, `confName`, `confKey`, `confValue`, `changeAble`) VALUES
(1, 'Site Name', 'SITE_NAME', 'Website', 0),
(2, 'Site Header', 'HEADER', 'Website', 0),
(3, 'Footer Name', 'FOOTER', '&copy  2011 All Rights Reserved.', 0),
(4, 'Admin Header Name', 'ADMIN_HEADER', 'Administrator Website', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sb_groups`
--

CREATE TABLE IF NOT EXISTS `tbl_sb_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `topic_name` varchar(255) NOT NULL,
  `class_id` int(11) NOT NULL,
  `class_number` varchar(20) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `on_date` varchar(255) NOT NULL,
  `room` varchar(255) DEFAULT NULL,
  `start_time` varchar(255) NOT NULL,
  `end_time` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `location_latlng` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL,
  `last_updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=54 ;

--
-- Dumping data for table `tbl_sb_groups`
--

INSERT INTO `tbl_sb_groups` (`id`, `topic_name`, `class_id`, `class_number`, `user_id`, `on_date`, `room`, `start_time`, `end_time`, `location`, `location_latlng`, `created`, `last_updated`) VALUES
(40, 'test topic 2 - test5', 2, '08', 15, '2015-09-08', '25', '10:00', '12:00', 'Hanover, Hanover, NH, USA', '43.70472385835329,-72.2900390625', '2015-09-08 07:58:44', '0000-00-00 00:00:00'),
(44, 'Group', 2, '08', 6, '2015-09-09', '12', '10:00', '12:00', 'Webster Hall, Hanover, NH 03755, USA', '43.70441749616957,-72.28914320468903', '2015-09-08 21:16:54', '0000-00-00 00:00:00'),
(45, 'Topic', 3, '04', 13, '2015-09-09', '12', '10:00', '12:00', 'Main St., Hanover, Hanover, NH 03755, USA', '43.703620559358164,-72.28932291269302', '2015-09-08 21:22:40', '0000-00-00 00:00:00'),
(47, '...', 2, '10', 2, '2015-09-09', '12', '10:00', '16:00', 'Webster Hall, Hanover, NH 03755, USA', '43.70440198411863,-72.28921294212341', '2015-09-08 22:11:25', '2015-09-09 09:48:34'),
(48, 'Econ', 4, '16', 2, '2015-09-09', '12', '14:30', '16:15', 'Webster Hall, Hanover, NH 03755, USA', '43.70392886463658,-72.28845655918121', '2015-09-08 22:12:49', '0000-00-00 00:00:00'),
(49, 'test data 1', 2, '08', 6, '2015-09-30', '121', '12:00', '17:45', 'Webster Hall, Hanover, NH 03755, USA', '43.70428822897544,-72.28870064020157', '2015-09-09 05:06:00', '2015-09-09 08:32:16'),
(50, 'test new', 3, '16', 6, '2015-09-12', '12', '10:00', '12:00', 'Webster Hall, Hanover, NH 03755, USA', '43.70470446838808,-72.28814005851746', '2015-09-09 08:13:32', '2015-09-09 08:30:51'),
(51, 'Finance', 4, '16', 2, '2015-09-09', '201', '15:15', '16:30', 'Hanover, Hanover, NH, USA', '43.70651546407617,-72.28923439979553', '2015-09-09 09:50:10', '0000-00-00 00:00:00'),
(52, 'Bob', 3, '76', 0, '2015-09-09', '10', '10:00', '12:00', 'Webster Hall, Hanover, NH 03755, USA', '43.704010303501995,-72.28870868682861', '2015-09-09 17:52:29', '0000-00-00 00:00:00'),
(53, 'Tt', 4, '05', 18, '2015-09-09', '7', '10:00', '23:30', 'Webster Hall, Hanover, NH 03755, USA', '43.703967645062484,-72.28815615177155', '2015-09-09 17:57:12', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sb_lecturer`
--

CREATE TABLE IF NOT EXISTS `tbl_sb_lecturer` (
  `lecturerID` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(250) DEFAULT NULL,
  `lastName` varchar(250) DEFAULT NULL,
  `additionalInformation` longtext,
  `active` int(1) DEFAULT '0',
  `createDate` datetime NOT NULL,
  `notShow` int(11) NOT NULL,
  PRIMARY KEY (`lecturerID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tbl_sb_lecturer`
--

INSERT INTO `tbl_sb_lecturer` (`lecturerID`, `firstName`, `lastName`, `additionalInformation`, `active`, `createDate`, `notShow`) VALUES
(2, 'Hany', 'Farid', '', 1, '2015-08-23 08:43:05', 0),
(3, 'John', 'Pfister', '', 1, '2015-08-30 18:28:49', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sb_users`
--

CREATE TABLE IF NOT EXISTS `tbl_sb_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) NOT NULL,
  `mname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `gender` varchar(50) NOT NULL,
  `class_year` varchar(50) DEFAULT NULL,
  `term` varchar(50) DEFAULT NULL,
  `class_name_custom` varchar(255) NOT NULL,
  `rp_hash` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `tbl_sb_users`
--

INSERT INTO `tbl_sb_users` (`id`, `fname`, `mname`, `lname`, `email`, `password`, `profile_pic`, `gender`, `class_year`, `term`, `class_name_custom`, `rp_hash`, `created`, `active`) VALUES
(1, 'test', 't', 'test', 'test@dartmouth.edu', '0e7517141fb53f21ee439b355b5a1d0a', '', 'female', '2015', 'Winter', '', 'f402545652d29cdf5bcd772376297b8c', '2015-08-28 19:49:45', 1),
(2, 'Elijah', '', 'Moreno', 'elijah.s.moreno.15@dartmouth.edu', '478b3a1d2dd5df110adfd87bbbb493f5', '1440984259WIN_20150815_170516.JPG', 'male', '2015', 'Fall', 'Econ 22', '', '2015-08-29 16:09:17', 1),
(3, 'john', 'test', 'test', 'sforsunil@dartmouth.edu', '9f792568f5709ce4b8b32158d8603337', '1440928398arrow-logo.jpg', 'male', '2015', 'Summer', '', '', '2015-08-30 02:53:18', 1),
(4, 'John', '', 'Neth', 'john@dartmouth.edu', '890ba20dd65eb08d73347bb8479bcadd', '1440932854Penguins.jpg', 'male', '2015', 'Summer', '', '', '2015-08-30 04:07:34', 1),
(5, 'John', '', 'Neth', 'rahul.ratnam@dartmouth.edu', '7a1065e67b01290aa55beed96edaaaaf', '1440947117Penguins.jpg', 'male', '2014', 'Spring', '', '', '2015-08-30 08:05:17', 1),
(6, 'Robinrrt', 'Bansal', 'Williams', 'robin@dartmouth.edu', '0e7517141fb53f21ee439b355b5a1d0a', '1441596995Chrysanthemum.jpg', 'male', '2015', 'Winter', '', '', '2015-08-30 20:10:11', 1),
(7, 'Brian', 'H', 'Kim', 'brian.h.kim.15@dartmouth.edu', '599afe9221f4999d16c285738597f784', '', 'male', '2015', 'Winter', '', '', '2015-08-31 13:41:09', 1),
(8, 'test', '', 'test', 'test123@dartmouth.edu', '890ba20dd65eb08d73347bb8479bcadd', '', 'male', '2015', 'Spring', '', '', '2015-08-31 18:33:11', 1),
(9, 'test', '', 'test', 'test2@dartmouth.edu', '890ba20dd65eb08d73347bb8479bcadd', '', 'male', '2013', 'Spring', '', '', '2015-08-31 18:34:38', 1),
(10, 'test', '', 'test', 'test2123@dartmouth.edu', '890ba20dd65eb08d73347bb8479bcadd', '', 'male', '2013', 'Spring', '', '', '2015-08-31 18:36:03', 1),
(11, 'fgfg', 'fgfg', 'fgfg', 'ratnam@dartmouth.edu', '890ba20dd65eb08d73347bb8479bcadd', '', 'male', '2015', 'Spring', 'test1', '', '2015-08-31 19:49:17', 1),
(12, 'Map', '', 'Testin', 'map@dartmouth.edu', 'f43b530bdce2a6fc55d7c0372d0fc5d0', '144108076910690128_10153014148462418_4008808921553706236_n.jpg', 'male', '2015', 'Winter', '', '', '2015-08-31 21:12:49', 1),
(13, 'Mike', '', 'Surname', 'mike@dartmouth.edu', 'f43b530bdce2a6fc55d7c0372d0fc5d0', '', 'male', '2015', 'Spring', '', '', '2015-09-03 21:35:50', 1),
(14, 'test', '', 'test', 'test1@dartmouth.edu', '0e7517141fb53f21ee439b355b5a1d0a', '', 'female', '2020', 'Summer', '', '', '2015-09-04 21:07:01', 1),
(15, 'test', '', 'test1', 'test5@dartmouth.edu', '0e7517141fb53f21ee439b355b5a1d0a', '1441617963Hydrangeas.jpg', 'male', '2015', 'Summer', '', '', '2015-09-05 00:51:14', 1),
(16, '', '', '', '', '890ba20dd65eb08d73347bb8479bcadd', '', '', '', 'Spring', '', '', '2015-09-05 00:53:58', 1),
(17, 'Brian', 'H', 'Kim', 'brian.h.kim.16@dartmouth.edu', '3248b0b3589407490994e06a85037247', '1441578398bookup logo2 full.png', 'female', '2017', 'Fall', 'Econ 20 vollrath', '', '2015-09-06 15:26:38', 1),
(18, 'J', '', 'A', 'jacob.k.ammon.15@dartmouth.edu', '2e8cb1c747e72d32feab903c09bb501a', '', 'male', '2015', 'Fall', '', '', '2015-09-09 14:52:44', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sb_user_courses`
--

CREATE TABLE IF NOT EXISTS `tbl_sb_user_courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `course_num` varchar(2) NOT NULL,
  `lecturer_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `last_updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- Dumping data for table `tbl_sb_user_courses`
--

INSERT INTO `tbl_sb_user_courses` (`id`, `user_id`, `course_num`, `lecturer_id`, `department_id`, `created`, `last_updated`) VALUES
(1, 1, '02', 2, 2, '2015-08-28 19:49:45', '2015-08-28 19:49:45'),
(2, 1, '02', 2, 3, '2015-08-28 19:49:45', '2015-08-28 19:49:45'),
(3, 2, '10', 2, 2, '2015-08-29 16:09:17', '2015-09-09 09:48:19'),
(4, 2, '13', 2, 3, '2015-08-29 16:09:17', '2015-09-09 09:48:19'),
(5, 3, '19', 2, 3, '2015-08-30 02:53:18', '2015-08-30 02:53:18'),
(6, 3, '19', 2, 2, '2015-08-30 02:53:18', '2015-08-30 02:53:18'),
(7, 4, '02', 2, 2, '2015-08-30 04:07:34', '2015-08-30 04:07:34'),
(8, 4, '12', 2, 2, '2015-08-30 04:07:34', '2015-08-30 04:07:34'),
(9, 5, '03', 2, 2, '2015-08-30 08:05:17', '2015-09-05 09:19:22'),
(10, 5, '05', 3, 4, '2015-08-30 08:05:17', '2015-09-05 09:19:22'),
(11, 6, '06', 3, 2, '2015-08-30 20:10:11', '2015-09-06 20:48:43'),
(12, 6, '08', 3, 2, '2015-08-30 20:10:11', '2015-09-06 20:48:43'),
(13, 7, '05', 2, 2, '2015-08-31 13:41:09', '2015-08-31 13:41:09'),
(14, 7, '18', 3, 3, '2015-08-31 13:41:09', '2015-08-31 13:41:09'),
(15, 8, '16', 2, 2, '2015-08-31 18:33:11', '2015-08-31 18:33:11'),
(16, 8, '17', 2, 3, '2015-08-31 18:33:11', '2015-08-31 18:33:11'),
(17, 9, '04', 2, 3, '2015-08-31 18:34:38', '2015-08-31 18:34:38'),
(18, 9, '04', 3, 2, '2015-08-31 18:34:38', '2015-08-31 18:34:38'),
(19, 10, '14', 2, 2, '2015-08-31 18:36:03', '2015-08-31 18:36:03'),
(20, 10, '12', 3, 3, '2015-08-31 18:36:03', '2015-08-31 18:36:03'),
(21, 11, '', 0, 0, '2015-08-31 19:49:17', '2015-08-31 19:49:17'),
(22, 11, '', 0, 0, '2015-08-31 19:49:17', '2015-08-31 19:49:17'),
(23, 12, '01', 2, 2, '2015-08-31 21:12:49', '2015-08-31 21:12:49'),
(24, 12, '02', 3, 3, '2015-08-31 21:12:49', '2015-08-31 21:12:49'),
(25, 13, '02', 2, 2, '2015-09-03 21:35:50', '2015-09-03 21:35:50'),
(26, 13, '04', 3, 3, '2015-09-03 21:35:50', '2015-09-03 21:35:50'),
(27, 13, '09', 3, 4, '2015-09-03 21:35:50', '2015-09-03 21:35:50'),
(28, 14, '04', 2, 2, '2015-09-04 21:07:01', '2015-09-04 21:07:01'),
(29, 14, '05', 3, 3, '2015-09-04 21:07:01', '2015-09-04 21:07:01'),
(30, 14, '06', 3, 4, '2015-09-04 21:07:01', '2015-09-04 21:07:01'),
(31, 15, '06', 3, 2, '2015-09-05 00:51:14', '2015-09-07 02:26:03'),
(32, 15, '08', 3, 2, '2015-09-05 00:51:14', '2015-09-07 02:26:03'),
(33, 15, '17', 3, 2, '2015-09-05 00:51:14', '2015-09-07 02:26:03'),
(34, 16, '01', 3, 4, '2015-09-05 00:53:58', '2015-09-05 02:04:07'),
(35, 16, '02', 2, 4, '2015-09-05 00:53:58', '2015-09-05 02:04:07'),
(36, 16, '03', 3, 4, '2015-09-05 00:53:58', '2015-09-05 02:04:07'),
(37, 16, '04', 3, 2, '2015-09-05 00:53:58', '2015-09-05 02:03:58'),
(39, 15, '18', 2, 3, '2015-09-05 02:18:47', '2015-09-07 02:26:03'),
(40, 6, '16', 3, 3, '2015-09-05 04:32:35', '2015-09-06 20:48:43'),
(41, 5, '17', 3, 3, '2015-09-05 09:19:22', '2015-09-05 09:19:22'),
(45, 17, '10', 2, 2, '2015-09-06 15:26:38', '2015-09-07 11:13:49'),
(46, 17, '13', 3, 3, '2015-09-06 15:26:38', '2015-09-07 11:13:49'),
(47, 17, '16', 3, 4, '2015-09-06 15:26:38', '2015-09-07 11:13:49'),
(48, 17, '17', 3, 4, '2015-09-06 15:26:38', '2015-09-07 11:13:49'),
(49, 6, '19', 2, 4, '2015-09-06 20:48:43', '2015-09-06 20:48:43'),
(50, 2, '16', 2, 4, '2015-09-06 21:50:13', '2015-09-09 09:48:19'),
(51, 18, '76', 3, 3, '2015-09-09 14:52:44', '2015-09-09 14:52:44'),
(52, 18, '05', 3, 4, '2015-09-09 14:52:44', '2015-09-09 14:52:44');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sm_join_group`
--

CREATE TABLE IF NOT EXISTS `tbl_sm_join_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=48 ;

--
-- Dumping data for table `tbl_sm_join_group`
--

INSERT INTO `tbl_sm_join_group` (`id`, `user_id`, `group_id`, `created`) VALUES
(32, 6, 40, '2015-09-08 08:16:53'),
(36, 6, 44, '2015-09-08 21:16:54'),
(37, 13, 45, '2015-09-08 21:22:40'),
(39, 2, 47, '2015-09-08 22:11:25'),
(40, 2, 48, '2015-09-08 22:12:49'),
(41, 6, 49, '2015-09-09 05:06:00'),
(42, 6, 50, '2015-09-09 08:13:32'),
(43, 2, 51, '2015-09-09 09:50:10'),
(44, 0, 52, '2015-09-09 17:52:29'),
(46, 18, 52, '2015-09-09 17:55:00'),
(47, 18, 53, '2015-09-09 17:57:12');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
