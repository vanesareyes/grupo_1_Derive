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
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla mydb.carts: ~64 rows (aproximadamente)
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` (`id`, `users_id`, `created_at`, `updated_at`, `deleted_at`, `total`, `confirmed_at`) VALUES
	(1, NULL, '2020-03-18 14:47:19', '2020-03-18 14:47:19', NULL, 0, NULL),
	(2, NULL, '2020-03-18 14:48:49', '2020-03-18 14:48:49', NULL, 0, NULL),
	(3, NULL, '2020-03-18 14:50:58', '2020-03-18 14:50:58', NULL, 0, NULL),
	(4, NULL, '2020-03-18 15:03:39', '2020-03-18 15:03:39', NULL, 0, NULL),
	(5, NULL, '2020-03-18 15:03:54', '2020-03-18 15:03:54', NULL, 0, NULL),
	(6, NULL, '2020-03-18 15:03:57', '2020-03-18 15:03:57', NULL, 0, NULL),
	(7, NULL, '2020-03-18 15:04:15', '2020-03-18 15:04:15', NULL, 0, NULL),
	(8, NULL, '2020-03-18 15:04:21', '2020-03-18 15:04:21', NULL, 0, NULL),
	(9, NULL, '2020-03-18 15:05:36', '2020-03-18 15:05:36', NULL, 0, NULL),
	(10, NULL, '2020-03-18 15:05:39', '2020-03-18 15:05:39', NULL, 0, NULL),
	(11, NULL, '2020-03-18 15:06:04', '2020-03-18 15:06:04', NULL, 0, NULL),
	(12, NULL, '2020-03-18 15:06:17', '2020-03-18 15:06:17', NULL, 0, NULL),
	(13, NULL, '2020-03-18 15:07:05', '2020-03-18 15:07:05', NULL, 0, NULL),
	(14, NULL, '2020-03-18 15:10:17', '2020-03-18 15:10:17', NULL, 0, NULL),
	(15, NULL, '2020-03-18 15:10:30', '2020-03-18 15:10:30', NULL, 0, NULL),
	(16, NULL, '2020-03-18 15:12:00', '2020-03-18 15:12:00', NULL, 0, NULL),
	(17, NULL, '2020-03-18 15:12:02', '2020-03-18 15:12:02', NULL, 0, NULL),
	(18, NULL, '2020-03-18 15:14:34', '2020-03-18 15:14:34', NULL, 0, NULL),
	(19, NULL, '2020-03-18 15:15:12', '2020-03-18 15:15:12', NULL, 0, NULL),
	(20, NULL, '2020-03-18 15:15:16', '2020-03-18 15:15:16', NULL, 0, NULL),
	(21, NULL, '2020-03-18 15:19:43', '2020-03-18 15:19:43', NULL, 0, NULL),
	(22, NULL, '2020-03-18 15:19:56', '2020-03-18 15:19:56', NULL, 0, NULL),
	(23, NULL, '2020-03-18 15:21:14', '2020-03-18 15:21:14', NULL, 0, NULL),
	(24, NULL, '2020-03-18 15:21:41', '2020-03-18 15:21:41', NULL, 0, NULL),
	(25, NULL, '2020-03-18 15:23:05', '2020-03-18 15:23:05', NULL, 0, NULL),
	(26, NULL, '2020-03-18 15:23:12', '2020-03-18 15:23:12', NULL, 0, NULL),
	(27, NULL, '2020-03-18 15:24:32', '2020-03-18 15:24:32', NULL, 0, NULL),
	(28, NULL, '2020-03-18 15:25:39', '2020-03-18 15:25:39', NULL, 0, NULL),
	(29, NULL, '2020-03-18 15:27:32', '2020-03-18 15:27:32', NULL, 0, NULL),
	(30, NULL, '2020-03-18 15:30:03', '2020-03-18 15:30:03', NULL, 0, NULL),
	(31, NULL, '2020-03-18 15:40:17', '2020-03-18 15:40:17', NULL, 0, NULL),
	(32, NULL, '2020-03-18 15:40:20', '2020-03-18 15:40:20', NULL, 0, NULL),
	(33, NULL, '2020-03-18 15:40:27', '2020-03-18 15:40:27', NULL, 0, NULL),
	(34, NULL, '2020-03-18 15:42:54', '2020-03-18 15:42:54', NULL, 0, NULL),
	(35, NULL, '2020-03-18 16:01:06', '2020-03-18 16:01:06', NULL, 0, NULL),
	(36, NULL, '2020-03-18 16:01:13', '2020-03-18 16:01:13', NULL, 0, NULL),
	(37, NULL, '2020-03-18 16:01:17', '2020-03-18 16:01:17', NULL, 0, NULL),
	(38, NULL, '2020-03-18 16:03:17', '2020-03-18 16:03:17', NULL, 0, NULL),
	(39, NULL, '2020-03-18 16:03:28', '2020-03-18 16:03:28', NULL, 0, NULL),
	(40, NULL, '2020-03-18 16:03:34', '2020-03-18 16:03:34', NULL, 0, NULL),
	(41, NULL, '2020-03-18 16:03:36', '2020-03-18 16:03:36', NULL, 0, NULL),
	(42, NULL, '2020-03-18 16:05:18', '2020-03-18 16:05:18', NULL, 0, NULL),
	(43, NULL, '2020-03-18 16:06:42', '2020-03-18 16:06:42', NULL, 0, NULL),
	(44, NULL, '2020-03-18 16:14:38', '2020-03-18 16:14:38', NULL, 0, NULL),
	(45, NULL, '2020-03-18 16:14:41', '2020-03-18 16:14:41', NULL, 0, NULL),
	(46, NULL, '2020-03-18 16:14:48', '2020-03-18 16:14:48', NULL, 0, NULL),
	(47, NULL, '2020-03-18 16:18:34', '2020-03-18 16:18:34', NULL, 0, NULL),
	(48, NULL, '2020-03-18 16:21:02', '2020-03-18 16:21:02', NULL, 0, NULL),
	(49, NULL, '2020-03-18 16:34:22', '2020-03-18 16:34:22', NULL, 0, NULL),
	(50, NULL, '2020-03-18 16:35:37', '2020-03-18 16:35:37', NULL, 0, NULL),
	(51, NULL, '2020-03-18 16:36:48', '2020-03-18 16:36:48', NULL, 0, NULL),
	(52, NULL, '2020-03-18 16:38:59', '2020-03-18 16:38:59', NULL, 0, NULL),
	(53, NULL, '2020-03-18 16:41:39', '2020-03-18 16:41:39', NULL, 0, NULL),
	(54, NULL, '2020-03-18 16:44:46', '2020-03-18 16:44:46', NULL, 0, NULL),
	(55, NULL, '2020-03-18 16:44:48', '2020-03-18 16:44:48', NULL, 0, NULL),
	(56, NULL, '2020-03-18 19:39:31', '2020-03-18 19:39:31', NULL, 0, NULL),
	(57, NULL, '2020-03-18 19:39:43', '2020-03-18 19:39:43', NULL, 0, NULL),
	(58, NULL, '2020-03-18 19:39:45', '2020-03-18 19:39:45', NULL, 0, NULL),
	(59, NULL, '2020-03-18 19:39:45', '2020-03-18 19:39:45', NULL, 0, NULL),
	(60, NULL, '2020-03-18 19:51:50', '2020-03-18 19:51:50', NULL, 0, NULL),
	(61, NULL, '2020-03-18 19:53:40', '2020-03-18 19:53:40', NULL, 0, NULL),
	(62, NULL, '2020-03-18 19:53:55', '2020-03-18 19:53:55', NULL, 0, NULL),
	(63, NULL, '2020-03-18 19:58:58', '2020-03-18 19:58:58', NULL, 0, NULL),
	(64, NULL, '2020-03-18 20:44:49', '2020-03-18 20:44:49', NULL, 0, NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;

-- Volcando estructura para tabla mydb.cart_product
CREATE TABLE IF NOT EXISTS `cart_product` (
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `unit_price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` float NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  KEY `fk_cart_product_cart_id` (`cart_id`),
  KEY `fk_cart_product_product_id` (`product_id`),
  CONSTRAINT `fk_cart_product_cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `fk_cart_product_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla mydb.cart_product: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
INSERT INTO `cart_product` (`cart_id`, `product_id`, `unit_price`, `quantity`, `subtotal`, `updated_at`, `created_at`) VALUES
	(11, 8, 0, 1, 1, '2020-03-18 16:41:39', '2020-03-18 16:41:39'),
	(11, 9, 0, 1, 800, '2020-03-18 16:44:48', '2020-03-18 16:44:48'),
	(11, 17, 0, 1, 15000, '2020-03-18 19:39:45', '2020-03-18 19:39:45');
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
	(8, 'Masaje relajante', 2500, 'https://images.pexels.com/photos/56884/wellness-massage-relax-relaxing-56884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/161477/treatment-finger-keep-hand-161477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/275768/pexels-photo-275768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/269110/pexels-photo-269110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 2, 3, 'Te ofrecemos unas variedad de masajes para soltar todos tus nudos', '2020-03-11 00:05:55', '2020-03-18 14:42:42', 20, 0, '2020-03-18 14:42:42'),
	(9, 'Desayuno', 800, 'https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1724194/pexels-photo-1724194.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://images.pexels.com/photos/1724194/pexels-photo-1724194.jpeg?auto=compress&cs=tinysrgb&dpr', 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 3, 3, 'Disfrutá un desayuno clásico en cafés históricos o una combinación de sabores en cafés delí y gourmet.', '2020-03-11 00:12:38', '2020-03-11 01:12:10', NULL, 1, NULL),
	(15, 'Sabores y sentidos', 1800, 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 3, 1, 'Explorá un mundo de sabores y sentidos a través de variadas degustaciones para compartir.', '2020-03-11 01:04:31', '2020-03-11 01:04:31', NULL, 0, NULL),
	(16, 'Día de campo', 3200, 'https://images.pexels.com/photos/2714627/pexels-photo-2714627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1038259/pexels-photo-1038259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1481284/pexels-photo-1481284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1297307/pexels-photo-1297307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/447440/summer-sun-sunset-yellow-447440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 4, 4, 'Disfrutá de un entorno natural con actividades al aire libre y gastronomía típica en las mejores estancias rurales con ambiente de época.', '2020-03-11 01:05:57', '2020-03-11 01:05:57', NULL, 0, NULL),
	(17, 'Luna de miel', 15000, 'https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1772973/pexels-photo-1772973.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1066801/pexels-photo-1066801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 4, 5, 'Rompé con la rutina y disfrutá de una escapada romántica en el medio de la naturaleza en un hotel con encanto.', '2020-03-11 01:07:41', '2020-03-11 01:12:24', NULL, 1, NULL),
	(18, 'Teatro con amig@s', 3000, 'https://images.pexels.com/photos/1443447/pexels-photo-1443447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 5, 3, 'Disfrutá del mejor teatro en la ciudad y degustá de la mejor selección de tapas y tragos.', '2020-03-11 01:09:38', '2020-03-11 01:09:38', NULL, 0, NULL),
	(19, 'Noche porteña', 1700, 'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3039671/pexels-photo-3039671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 5, 3, 'Un recorrido por las mejores disco porteñas, incluye entrada vip y tragos de autor.', '2020-03-11 01:11:12', '2020-03-11 01:12:26', NULL, 1, NULL),
	(20, 'Salto en paracaidas', 9000, 'https://images.pexels.com/photos/122829/pexels-photo-122829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/38447/parachute-skydiving-parachuting-jumping-38447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2162670/pexels-photo-2162670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2232707/pexels-photo-2232707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/39608/tandem-skydivers-skydivers-teamwork-cooperation-39608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, 1, 'Sentí la adrenalina en tu cuerpo con un salto  en paracaídas a más de 200 km/h.', '2020-03-11 18:44:41', '2020-03-11 18:44:41', NULL, 0, NULL),
	(21, 'Rafting', 3400, 'https://images.pexels.com/photos/1732278/pexels-photo-1732278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1732281/pexels-photo-1732281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1732284/pexels-photo-1732284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2348108/pexels-photo-2348108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1615766/pexels-photo-1615766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 1, 2, 'Dejate llevar por la corriente.', '2020-03-11 18:45:40', '2020-03-18 14:42:02', NULL, 1, '2020-03-18 14:42:02'),
	(22, 'Día de spa', 3300, 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2462996/pexels-photo-2462996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/374148/pexels-photo-374148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 2, 3, 'Veni a disfrutar un dia de tratamientos corporales estéticos y de relajación en una atmósfera única.', '2020-03-11 18:47:06', '2020-03-11 18:47:06', NULL, 0, NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando estructura para tabla mydb.users
CREATE TABLE IF NOT EXISTS `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `surname` varchar(15) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` int(15) DEFAULT NULL,
  `profile_img` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

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

-- Volcando datos para la tabla mydb.userstokens: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `userstokens` DISABLE KEYS */;
INSERT INTO `userstokens` (`token`, `created_at`, `updated_at`, `users_id`, `id`) VALUES
	('VrxLCJGKRO0QExeP5FGKVahbdHdvnIlaHu5if7x/BzEMy0K91oE9QtjRAjcnS8Is6flyV0A0kZ0RZ2swKEJHcw==', '2020-03-09 16:23:47', '2020-03-09 16:23:47', 3, 11);
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
