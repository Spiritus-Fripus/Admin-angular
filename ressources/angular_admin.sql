-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 07 juin 2024 à 09:49
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `angular_admin`
--

-- --------------------------------------------------------

--
-- Structure de la table `delay`
--

DROP TABLE IF EXISTS `delay`;
CREATE TABLE IF NOT EXISTS `delay` (
  `id` int NOT NULL AUTO_INCREMENT,
  `justify` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `id_latecomer` int NOT NULL,
  `id_validator` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_ latecomer` (`id_latecomer`),
  KEY `FK_id_validator` (`id_validator`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Teacher'),
(3, 'Student');

-- --------------------------------------------------------

--
-- Structure de la table `supporting_doc`
--

DROP TABLE IF EXISTS `supporting_doc`;
CREATE TABLE IF NOT EXISTS `supporting_doc` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `id_delay` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_delay` (`id_delay`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `id_role` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_role` (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `firstname`, `lastname`, `id_role`) VALUES
(1, 'admin@admin.com', '$2y$10$PcJBIKoi3O0KYyR1FREcl.Wk6DM.UYsUeHcfH80/eMO72TLlkuYl.', 'Johny', 'Doe', 1),
(2, 'prof@prof.com', '$2y$10$wsf/0NcHAULgWmn5.EPvKeCktvTxytOKGqXKPqVSjYGdJLniefhrq', 'Eikichi', 'Onizuka', 2),
(3, 'student@student.com', '$2y$10$MopubNftJbVnzKxMQ5DI7ennObmMfoI5mTHi/IjJAbSoqb4pRa3pi', 'Loïc', 'Desousa', 3);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `delay`
--
ALTER TABLE `delay`
  ADD CONSTRAINT `FK_id_ latecomer` FOREIGN KEY (`id_latecomer`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `FK_id_validator` FOREIGN KEY (`id_validator`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `supporting_doc`
--
ALTER TABLE `supporting_doc`
  ADD CONSTRAINT `FK_id_delay` FOREIGN KEY (`id_delay`) REFERENCES `delay` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_id_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
