-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.11-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para mydb
CREATE DATABASE IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mydb`;

-- Volcando estructura para tabla mydb.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla mydb.categories: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`Id`, `category`) VALUES
	(1, 'Aventura'),
	(2, 'Bienestar'),
	(3, 'Gastronomía'),
	(4, 'Escapada'),
	(5, 'Cultura');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Volcando estructura para tabla mydb.locations
CREATE TABLE IF NOT EXISTS `locations` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla mydb.locations: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` (`Id`, `location`) VALUES
	(1, 'Mar del Plata'),
	(2, 'Mendoza'),
	(3, 'CABA'),
	(4, 'Luján'),
	(5, 'Bariloche');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;

-- Volcando estructura para tabla mydb.products
CREATE TABLE IF NOT EXISTS `products` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `img` varchar(200) DEFAULT NULL,
  `img2` varchar(200) DEFAULT NULL,
  `img3` varchar(200) DEFAULT NULL,
  `img4` varchar(200) DEFAULT NULL,
  `img5` varchar(200) DEFAULT NULL,
  `categories_id` int(11) NOT NULL,
  `locations_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `destacado` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `fk_products_categories1_idx` (`categories_id`),
  KEY `fk_products_locations1_idx` (`locations_id`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_locations1` FOREIGN KEY (`locations_id`) REFERENCES `locations` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla mydb.products: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`Id`, `name`, `price`, `img`, `img2`, `img3`, `img4`, `img5`, `categories_id`, `locations_id`, `description`, `created_at`, `updated_at`, `destacado`) VALUES
	(1, 'Salto en paracaídas', 3000, 'https://images.pexels.com/photos/122829/pexels-photo-122829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/38447/parachute-skydiving-parachuting-jumping-38447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2162670/pexels-photo-2162670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2232707/pexels-photo-2232707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/39608/tandem-skydivers-skydivers-teamwork-cooperation-39608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, 5, 'Sentí la adrenalina en tu cuerpo con un salto  en paracaídas a más de 200 km/h.', '2020-03-03 15:30:18', '2020-03-03 15:30:18', 0),
	(2, 'Día de spa', 4000, 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2462996/pexels-photo-2462996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/374148/pexels-photo-374148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 2, 4, 'Veni a disfrutar un dia de tratamientos corporales estéticos y de relajación en una atmósfera única', '2020-03-05 21:39:27', '2020-03-08 12:33:50', 0),
	(7, 'Rafting', 3000, '', '', '', '', '', 1, 2, 'Dejate llevar por la corriente', '2020-03-08 15:07:09', '2020-03-08 15:07:09', 0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando estructura para tabla mydb.users
CREATE TABLE IF NOT EXISTS `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `surname` varchar(15) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(12) NOT NULL,
  `phone` int(15) NOT NULL,
  `profile_img` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `surname_UNIQUE` (`surname`),
  UNIQUE KEY `id_UNIQUE` (`Id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `profile_img_UNIQUE` (`profile_img`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla mydb.users: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`Id`, `name`, `surname`, `email`, `password`, `phone`, `profile_img`, `created_at`, `updated_at`, `admin`) VALUES
	(1, 'Vanesa', 'Reyes', 'reyesvanesa@yahoo.com.ar', '$2b$10$.Ah1i', 2147483647, NULL, '2020-03-03 22:24:43', '2020-03-03 22:24:43', 1),
	(2, 'Jezabel', 'Amin', 'jezabel@hotmail.com', '$2b$10$rhJ8H', 1189332222, NULL, '2020-03-03 22:12:46', '2020-03-03 22:12:46', 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Volcando estructura para tabla mydb.userstokens
CREATE TABLE IF NOT EXISTS `userstokens` (
  `token` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `users_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `users_id` (`users_id`),
  CONSTRAINT `users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla mydb.userstokens: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `userstokens` DISABLE KEYS */;
INSERT INTO `userstokens` (`token`, `created_at`, `updated_at`, `users_id`, `id`) VALUES
	('T8Mlqpa5W7W30RmODMIA+7ItPQ90YesLBQLAN0EIMhujxyiACH4GeeEA+ZPw9bdgjvmlL7oUUW/zNia2G1eLzQ==', '2020-03-06 13:56:27', '2020-03-06 13:56:27', 1, 1),
	('6zsXwNLAG9xJWS6VHTlS+z6foXgvMHG8ExYjcfLcPohauEPFpDs39g4FGeykTxKqHVFO4F/gYicGPZPE6g7rWw==', '2020-03-08 11:34:57', '2020-03-08 11:34:57', 2, 3),
	('BjEM4LjJ5RF6kBAEml1hkxvN0hojb/PrgldSyCEscidM75DfK4+mnDAEAjhhkCe7+nwe/DOse0y53VLkHNmjhw==', '2020-03-08 11:52:16', '2020-03-08 11:52:16', 2, 4),
	('9z4+gFtWj3Fh/sZPSsC/LdmOorqfrMT11/PFM8GqbSOt+CgXl6wNTHkUOUqRuI3ODv5NnUw5waehSCRKWytG2g==', '2020-03-08 11:56:53', '2020-03-08 11:56:53', 2, 5),
	('F7dEGIT4fQVixhecOzoiDdiN1jh1X8TBmqFHP0YERJcvIQG52FHU56f6o5Bfnd5mf++WCYGT7kJBBly3grTHoA==', '2020-03-08 11:59:49', '2020-03-08 11:59:49', 2, 6),
	('BZ1Herfu4Y+27HVfs9KQ70Og5YHrAJ+1IqQDsz6PZKPQZ6Xz4ZQoC+p6UCMk0RJH8MbmcP4mQrBPB9ahcXbvng==', '2020-03-08 12:02:12', '2020-03-08 12:02:12', 2, 7),
	('mE19GgeZsE6UKrNagTH1LY9mW36jY4EaH1ZL7vmf2ENRSkqIHb4xgxBu5FsqbFGqCho5g/cy02Q6UwBODxzeBA==', '2020-03-08 12:09:25', '2020-03-08 12:09:25', 2, 8),
	('ASo0vmB7qUL+oh7pfspBGD3WqSGGPQH19JxGWx9yIkj1IGBJof9uzU9sqcvvqoamzSShHm1es+74mNaTCox4QQ==', '2020-03-08 12:12:19', '2020-03-08 12:12:19', 2, 9),
	('RcxIfHnyg7eOYQSFGe/UOYoj2nR9TitrJm6hi8/hOpjuD1Pz35qD5ONbpaz4uh0DmiZQyk5aodTQUY2hZWlr2Q==', '2020-03-08 14:41:58', '2020-03-08 14:41:58', 2, 10);
/*!40000 ALTER TABLE `userstokens` ENABLE KEYS */;

-- Volcando estructura para tabla mydb.user_product
CREATE TABLE IF NOT EXISTS `user_product` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `products_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_user_product_products_idx` (`products_id`),
  KEY `fk_user_product_users1_idx` (`users_id`),
  CONSTRAINT `fk_user_product_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_product_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla mydb.user_product: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
