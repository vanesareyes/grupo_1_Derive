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

-- Volcando estructura para tabla mydb.carts
CREATE TABLE IF NOT EXISTS `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `total` float NOT NULL DEFAULT 0,
  `confirmed_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_carts_users_id` (`users_id`),
  CONSTRAINT `fk_carts_users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla mydb.carts: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;

-- Volcando estructura para tabla mydb.cart_product
CREATE TABLE IF NOT EXISTS `cart_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `carts_id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  `unit_price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` float NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_cart_product_cart_id` (`carts_id`),
  KEY `fk_cart_product_product_id` (`products_id`),
  CONSTRAINT `fk_cart_product_cart_id` FOREIGN KEY (`carts_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `fk_cart_product_product_id` FOREIGN KEY (`products_id`) REFERENCES `products` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla mydb.cart_product: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;

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
  `price` float NOT NULL DEFAULT 0,
  `img` varchar(200) DEFAULT NULL,
  `img2` varchar(200) DEFAULT NULL,
  `img3` varchar(200) DEFAULT NULL,
  `img4` varchar(200) DEFAULT NULL,
  `img5` varchar(200) DEFAULT NULL,
  `categories_id` int(11) NOT NULL,
  `locations_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `stock` int(11) DEFAULT NULL,
  `destacado` tinyint(1) NOT NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`Id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `fk_products_categories1_idx` (`categories_id`),
  KEY `fk_products_locations1_idx` (`locations_id`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_locations1` FOREIGN KEY (`locations_id`) REFERENCES `locations` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla mydb.products: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`Id`, `name`, `price`, `img`, `img2`, `img3`, `img4`, `img5`, `categories_id`, `locations_id`, `description`, `created_at`, `updated_at`, `stock`, `destacado`, `deleted_at`) VALUES
	(8, 'Masaje relajante', 2500, 'https://images.pexels.com/photos/56884/wellness-massage-relax-relaxing-56884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/161477/treatment-finger-keep-hand-161477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/275768/pexels-photo-275768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/269110/pexels-photo-269110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 2, 3, 'Te ofrecemos unas variedad de masajes para soltar todos tus nudos', '2020-03-11 00:05:55', '2020-03-11 00:10:59', NULL, 0, NULL),
	(9, 'Desayuno', 800, 'https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1724194/pexels-photo-1724194.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://images.pexels.com/photos/1724194/pexels-photo-1724194.jpeg?auto=compress&cs=tinysrgb&dpr', 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 3, 3, 'Disfrutá un desayuno clásico en cafés históricos o una combinación de sabores en cafés delí y gourmet.', '2020-03-11 00:12:38', '2020-03-11 01:12:10', NULL, 1, NULL),
	(15, 'Sabores y sentidos', 1800, 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 3, 1, 'Explorá un mundo de sabores y sentidos a través de variadas degustaciones para compartir.', '2020-03-11 01:04:31', '2020-03-11 01:04:31', NULL, 0, NULL),
	(16, 'Día de campo', 3200, 'https://images.pexels.com/photos/2714627/pexels-photo-2714627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1038259/pexels-photo-1038259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1481284/pexels-photo-1481284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1297307/pexels-photo-1297307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/447440/summer-sun-sunset-yellow-447440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 4, 4, 'Disfrutá de un entorno natural con actividades al aire libre y gastronomía típica en las mejores estancias rurales con ambiente de época.', '2020-03-11 01:05:57', '2020-03-11 01:05:57', NULL, 0, NULL),
	(17, 'Luna de miel', 15000, 'https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1772973/pexels-photo-1772973.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1066801/pexels-photo-1066801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 4, 5, 'Rompé con la rutina y disfrutá de una escapada romántica en el medio de la naturaleza en un hotel con encanto.', '2020-03-11 01:07:41', '2020-03-11 01:12:24', NULL, 1, NULL),
	(18, 'Teatro con amig@s', 3000, 'https://images.pexels.com/photos/1443447/pexels-photo-1443447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 5, 3, 'Disfrutá del mejor teatro en la ciudad y degustá de la mejor selección de tapas y tragos.', '2020-03-11 01:09:38', '2020-03-11 01:09:38', NULL, 0, NULL),
	(19, 'Noche porteña', 1700, 'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3039671/pexels-photo-3039671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 5, 3, 'Un recorrido por las mejores disco porteñas, incluye entrada vip y tragos de autor.', '2020-03-11 01:11:12', '2020-03-11 01:12:26', NULL, 1, NULL),
	(20, 'Salto en paracaidas', 9000, 'https://images.pexels.com/photos/122829/pexels-photo-122829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/38447/parachute-skydiving-parachuting-jumping-38447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2162670/pexels-photo-2162670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2232707/pexels-photo-2232707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/39608/tandem-skydivers-skydivers-teamwork-cooperation-39608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, 1, 'Sentí la adrenalina en tu cuerpo con un salto  en paracaídas a más de 200 km/h.', '2020-03-11 18:44:41', '2020-03-11 18:44:41', NULL, 0, NULL),
	(21, 'Rafting', 3400, 'https://images.pexels.com/photos/1732278/pexels-photo-1732278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1732281/pexels-photo-1732281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1732284/pexels-photo-1732284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2348108/pexels-photo-2348108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1615766/pexels-photo-1615766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, 2, 'Dejate llevar por la corriente.', '2020-03-11 18:45:40', '2020-03-11 18:45:40', NULL, 0, NULL),
	(22, 'Día de spa', 3300, 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2462996/pexels-photo-2462996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/374148/pexels-photo-374148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 2, 3, 'Veni a disfrutar un dia de tratamientos corporales estéticos y de relajación en una atmósfera única.', '2020-03-11 18:47:06', '2020-03-11 18:47:06', NULL, 0, NULL);
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
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `surname_UNIQUE` (`surname`),
  UNIQUE KEY `id_UNIQUE` (`Id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `profile_img_UNIQUE` (`profile_img`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla mydb.users: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`Id`, `name`, `surname`, `email`, `password`, `phone`, `profile_img`, `created_at`, `updated_at`, `admin`) VALUES
	(1, 'Vanesa', 'Reyes', 'reyesvanesa@yahoo.com.ar', '$2b$10$.Ah1i', 2147483647, NULL, '2020-03-03 22:24:43', '2020-03-03 22:24:43', 1),
	(2, 'Jezabel', 'Amin', 'jezabel@hotmail.com', '$2b$10$rhJ8H', 1189332222, NULL, '2020-03-03 22:12:46', '2020-03-03 22:12:46', 0),
	(3, 'Cecilia', 'Gomez', 'cecilia@yahoo.com.ar', '$2b$10$HkOuU', 22229001, NULL, '2020-03-09 16:21:06', '2020-03-09 16:21:06', 0),
	(4, 'Estono', 'Melo', 'esperaba@hotmail.com', '$2b$10$lVxqG', 0, NULL, '2020-03-10 17:47:35', '2020-03-10 17:47:35', 1);
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla mydb.userstokens: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `userstokens` DISABLE KEYS */;
INSERT INTO `userstokens` (`token`, `created_at`, `updated_at`, `users_id`, `id`) VALUES
	('VrxLCJGKRO0QExeP5FGKVahbdHdvnIlaHu5if7x/BzEMy0K91oE9QtjRAjcnS8Is6flyV0A0kZ0RZ2swKEJHcw==', '2020-03-09 16:23:47', '2020-03-09 16:23:47', 3, 11),
	('LoRQ3EXFC6IEghjaaZD9b6pZ0w79KdRQMSn5kvWwuDizMzcPC/JFe8VgTAtZfGFU6gWB8EBUqRIxBowiYkwLiA==', '2020-03-11 00:10:17', '2020-03-11 00:10:17', 1, 18),
	('5z/wOf/Flp31N6Rc6KVqq3OdVfX0GUxqz/XkYHWOECqcb1DrbV+UCewFacGQvUFyMpzaThlbEYNvLJUORcsMsQ==', '2020-03-11 00:23:29', '2020-03-11 00:23:29', 1, 19);
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
