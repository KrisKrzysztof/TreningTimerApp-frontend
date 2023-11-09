-- --------------------------------------------------------
-- Host:                         localhost
-- Wersja serwera:               10.4.27-MariaDB - mariadb.org binary distribution
-- Serwer OS:                    Win64
-- HeidiSQL Wersja:              12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Zrzut struktury tabela megak_training.trainings
CREATE TABLE IF NOT EXISTS `trainings` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(25) NOT NULL,
  `description` tinytext DEFAULT NULL,
  `numberOfSeries` int(2) unsigned NOT NULL,
  `exerciseOne` varchar(30) NOT NULL,
  `pauseOne` int(3) unsigned NOT NULL,
  `exerciseTwo` varchar(30) DEFAULT NULL,
  `pauseTwo` int(3) unsigned DEFAULT NULL,
  `exerciseThree` varchar(30) DEFAULT NULL,
  `pauseThree` int(3) unsigned DEFAULT NULL,
  `exerciseFour` varchar(30) DEFAULT NULL,
  `pauseFour` int(3) unsigned DEFAULT NULL,
  `exerciseFive` varchar(30) DEFAULT NULL,
  `pauseFive` int(3) DEFAULT NULL,
  `exerciseSix` varchar(30) DEFAULT NULL,
  `pauseSix` int(3) unsigned DEFAULT NULL,
  `exerciseSeven` varchar(30) DEFAULT NULL,
  `pauseSeven` int(3) unsigned DEFAULT NULL,
  `exerciseEight` varchar(30) DEFAULT NULL,
  `pauseEight` int(3) unsigned DEFAULT NULL,
  `exerciseNine` varchar(30) DEFAULT NULL,
  `pauseNine` int(3) unsigned DEFAULT NULL,
  `exerciseTen` varchar(30) DEFAULT NULL,
  `pauseTen` int(3) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Zrzucanie danych dla tabeli megak_training.trainings: ~5 rows (około)
INSERT INTO `trainings` (`id`, `name`, `description`, `numberOfSeries`, `exerciseOne`, `pauseOne`, `exerciseTwo`, `pauseTwo`, `exerciseThree`, `pauseThree`, `exerciseFour`, `pauseFour`, `exerciseFive`, `pauseFive`, `exerciseSix`, `pauseSix`, `exerciseSeven`, `pauseSeven`, `exerciseEight`, `pauseEight`, `exerciseNine`, `pauseNine`, `exerciseTen`, `pauseTen`) VALUES
	('079e7c45-3a6f-48be-a418-a0bea7b4e5b0', 'Hopsasa', 'Hop hop hop', 2, '20 podskoków', 60, NULL, NULL, '30 pajacyków', 120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('protected', '180 pompek + 90 brzuszków', 'Trening wzmacnia mięśnie rąk i klatki piersiowej', 4, '15 pompek standardowych', 120, '15 pompek z podwyższeniem', 120, '15 pompek szerokich', 120, '30 brzuszków', 180, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('protected2', 'TRENING DEMONSTRACYJNY', 'Do szybkiego testowania funkcjonalności sekcji treningu i czasomierza', 2, '10 podskoków na lewej nodze', 2, '10 podskoków na prawej nodze', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('q251285a-f959-4e6e-b61e-36038ef6a8ca', 'Testowy', NULL, 2, '20 podskoków', 5, '30 przysiadów', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	('r3f3b640-1abd-45b9-9696-1c02ac01c377', 'Test duży', 'Jakiś opis', 10, 'jeden', 1, 'dwa', 2, 'trzy', 1, 'cztery', 1, 'pięć', 2, 'sześć', 1, 'siedem', 1, 'osiem', 1, 'dzwiewięć', 1, 'dziesięć', 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
