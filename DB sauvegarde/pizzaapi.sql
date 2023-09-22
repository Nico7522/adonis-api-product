-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 22 sep. 2023 à 10:56
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pizzaapi`
--

-- --------------------------------------------------------

--
-- Structure de la table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(43, 'database/migrations/1000000000000_adresses', 1, '2023-08-29 13:30:11'),
(44, 'database/migrations/1587988332388_users', 1, '2023-08-29 13:30:11'),
(45, 'database/migrations/1592489784670_api_tokens', 1, '2023-08-29 13:30:12'),
(46, 'database/migrations/1692605170657_products', 1, '2023-08-29 13:30:12'),
(47, 'database/migrations/1692713192923_commands', 1, '2023-08-29 13:30:12'),
(48, 'database/migrations/1692713709807_command_products', 1, '2023-08-29 13:30:12'),
(49, 'database/migrations/1693388590381_likes', 2, '2023-08-30 09:45:29'),
(50, 'database/migrations/1693402136201_dislikes', 3, '2023-08-30 13:33:09');

-- --------------------------------------------------------

--
-- Structure de la table `adonis_schema_versions`
--

CREATE TABLE `adonis_schema_versions` (
  `version` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Structure de la table `adresses`
--

CREATE TABLE `adresses` (
  `id` int(10) UNSIGNED NOT NULL,
  `zip` int(11) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `adresses`
--

INSERT INTO `adresses` (`id`, `zip`, `street`, `city`, `number`, `created_at`, `updated_at`) VALUES
(1, 7100, 'Allée Verte', 'Charleroi', 25, '2023-08-29 13:53:03', '2023-08-29 13:53:03'),
(2, 44, 'sd', 'sdsd', 22, '2023-08-29 14:15:15', '2023-08-29 14:15:15'),
(3, 522, 'sds', 'dsd', 52, '2023-08-29 14:17:39', '2023-08-29 14:17:39'),
(4, 225, '22', 'fdfd', 22, '2023-08-29 14:44:57', '2023-08-29 14:44:57'),
(5, 7100, 'allée verte', 'la louvière', 777, '2023-08-31 14:34:06', '2023-08-31 14:34:06'),
(6, 7100, 'sdsd', 'sds', 25, '2023-08-31 14:36:30', '2023-08-31 14:36:30');

-- --------------------------------------------------------

--
-- Structure de la table `api_tokens`
--

CREATE TABLE `api_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `expires_at` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `api_tokens`
--

INSERT INTO `api_tokens` (`id`, `user_id`, `name`, `type`, `token`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'Opaque Access Token', 'opaque_token', 'fd7274f20f83a45c96964a6147e9154b4ff2740f33e524d1251ac6c4c21596a7', '2023-09-08', '2023-08-29 13:53:03', '2023-08-29 13:53:03'),
(2, 1, 'Opaque Access Token', 'opaque_token', '7672e251895d1ef25a2eeb1e896c92aa0e60e1107f8f05f00f7f8d3b11857e31', '2023-09-08', '2023-08-29 14:03:26', '2023-08-29 14:03:26'),
(3, 1, 'Opaque Access Token', 'opaque_token', 'f627b37807f7d03e25ebd68f3c7a385aa538718fe636a1a31ec5cc1f6aac83cb', '2023-09-08', '2023-08-29 14:07:38', '2023-08-29 14:07:38'),
(4, 3, 'Opaque Access Token', 'opaque_token', '2a2c630807b98b73c1efa811b131fa6c642279d993ccccec2f1872fb8933bc08', '2023-09-08', '2023-08-29 14:15:15', '2023-08-29 14:15:15'),
(5, 4, 'Opaque Access Token', 'opaque_token', '520e193aaa4d7c9e5c8610a48990d07a44912738ecaacafe3b7db359995abab2', '2023-09-08', '2023-08-29 14:17:39', '2023-08-29 14:17:39'),
(6, 5, 'Opaque Access Token', 'opaque_token', '191ae07aa11afe1e52a3f3cadd44f52f6a8b2c9e0f4d81eb38a094237c004ad7', '2023-09-08', '2023-08-29 14:44:57', '2023-08-29 14:44:57'),
(7, 1, 'Opaque Access Token', 'opaque_token', 'a4ed53a4302af80c24f507631808eea0e905897824865d5f67e06f4a70a6f01a', '2023-09-08', '2023-08-29 14:45:54', '2023-08-29 14:45:54'),
(8, 1, 'Opaque Access Token', 'opaque_token', 'bd618edb302a8e92a1fcd7fe87cd5ec83e0914bb978d814a2530ca2e32205cc9', '2023-09-09', '2023-08-30 09:59:47', '2023-08-30 09:59:47'),
(9, 1, 'Opaque Access Token', 'opaque_token', '60bb1428bfc97d7d790b9c33dc06fda3c6d6c5188a2c930095a5dd2ecce05580', '2023-09-09', '2023-08-30 14:01:38', '2023-08-30 14:01:38'),
(10, 1, 'Opaque Access Token', 'opaque_token', 'c3c8fccbebd4e26ca2dbcac684a5cdca80f4e8deb88a196ef932981f53f009fb', '2023-09-10', '2023-08-31 07:49:08', '2023-08-31 07:49:08'),
(11, 1, 'Opaque Access Token', 'opaque_token', 'f2b4d88db7e671df6cff5ebb86cea03620e7c5bd30753b1c94017d7e6b95f907', '2023-09-10', '2023-08-31 08:19:18', '2023-08-31 08:19:18'),
(12, 1, 'Opaque Access Token', 'opaque_token', 'c43690a12f25c897c2cfad4e8e9d1d82d602be09e10f16eb360f7b31d804da1f', '2023-09-10', '2023-08-31 08:23:34', '2023-08-31 08:23:34'),
(13, 1, 'Opaque Access Token', 'opaque_token', '996ba20377eb3aef279c253e5a6dfdcdcc2149c7e77a8464608d90862b648921', '2023-09-10', '2023-08-31 08:24:28', '2023-08-31 08:24:28'),
(14, 1, 'Opaque Access Token', 'opaque_token', 'ece3a653886141f519cd762a6ef62114f5adcf6a5db93c404c298cfdcca319e9', '2023-09-10', '2023-08-31 08:27:19', '2023-08-31 08:27:19'),
(15, 1, 'Opaque Access Token', 'opaque_token', '79f165a92db04ce3d6b577f4bf7b878cc02b4e9c31e10d2c7e0fec54ffcb8848', '2023-09-10', '2023-08-31 08:30:24', '2023-08-31 08:30:24'),
(16, 1, 'Opaque Access Token', 'opaque_token', '88545a0a78456d5c1c4bd30136ad673608dee46009f81362dd0b9574a149c307', '2023-09-10', '2023-08-31 08:40:37', '2023-08-31 08:40:37'),
(17, 1, 'Opaque Access Token', 'opaque_token', '51d01f5397beae1e9ae3753f24aa2b2cea52817b9ac96a610f0311d602030b52', '2023-09-10', '2023-08-31 08:53:12', '2023-08-31 08:53:12'),
(18, 1, 'Opaque Access Token', 'opaque_token', '4156939c5e1c0bef5aeed7a3a0765c762b957339f7c86f620a996c399f2d6ac4', '2023-09-10', '2023-08-31 09:02:26', '2023-08-31 09:02:26'),
(19, 1, 'Opaque Access Token', 'opaque_token', 'd7862130bb879c8c7d31fbfb5b6db19c620eb5824f7c0a9eb82ce0a86feabc6a', '2023-09-10', '2023-08-31 09:03:53', '2023-08-31 09:03:53'),
(20, 1, 'Opaque Access Token', 'opaque_token', '36b782df9cbb4e80223ee3ef8241f063ae55fc6c425e4f6f411ba564f2182a1a', '2023-09-10', '2023-08-31 09:43:29', '2023-08-31 09:43:29'),
(21, 1, 'Opaque Access Token', 'opaque_token', 'b68a165702433b6fb2edce2e0596a333bf7ef48b919adc312dedd096addb244d', '2023-09-10', '2023-08-31 09:48:26', '2023-08-31 09:48:26'),
(22, 1, 'Opaque Access Token', 'opaque_token', '946dde1f2cb6809947b00addff946a07f1011fe49ed9d4a96c6b0455584466dc', '2023-09-10', '2023-08-31 09:56:35', '2023-08-31 09:56:35'),
(23, 1, 'Opaque Access Token', 'opaque_token', '53802e2d9a43a5af81965ad72901939ad41222d063ecdc6fefb4e1dd48a3ff39', '2023-09-10', '2023-08-31 09:58:15', '2023-08-31 09:58:15'),
(24, 1, 'Opaque Access Token', 'opaque_token', '7bbf6c75bf62b8bf5a3f828e5c305359f7c1b6274c31c0df9feb5052565dbb7e', '2023-09-10', '2023-08-31 10:03:25', '2023-08-31 10:03:25'),
(25, 1, 'Opaque Access Token', 'opaque_token', 'fc83a16d204409c91822a8717ea24bffa56e6529174f773607db76af4fabd28e', '2023-09-10', '2023-08-31 10:11:11', '2023-08-31 10:11:11'),
(26, 1, 'Opaque Access Token', 'opaque_token', '77277851ac34bd1037a1021297da3d9cafc10c15a510324cffcd03c5e382332f', '2023-09-10', '2023-08-31 10:18:54', '2023-08-31 10:18:54'),
(27, 1, 'Opaque Access Token', 'opaque_token', '8ad81bad552c44b646d51e47928f84366ae9566d11874f54ed22bf064052df84', '2023-09-10', '2023-08-31 10:25:44', '2023-08-31 10:25:44'),
(28, 1, 'Opaque Access Token', 'opaque_token', '6247ddb2d500e6dcb95588299de4a056cdd7a50d9a2f7db5ac268ea85cfad01a', '2023-09-10', '2023-08-31 10:27:52', '2023-08-31 10:27:52'),
(29, 1, 'Opaque Access Token', 'opaque_token', '6314219ff3459fb9629251441e681ae955fbe26c8b493c7c1959953359c11b43', '2023-09-10', '2023-08-31 10:43:44', '2023-08-31 10:43:44'),
(30, 1, 'Opaque Access Token', 'opaque_token', 'cb239b2a0c65e6d9ecfef646a6e21fc584457d7a59beae07d85ed5ab69b12709', '2023-09-10', '2023-08-31 10:45:34', '2023-08-31 10:45:34'),
(31, 1, 'Opaque Access Token', 'opaque_token', '14802b44d4e210358c9df5c711132afc08831336b25fd065af033c1d470b65b0', '2023-09-10', '2023-08-31 10:56:15', '2023-08-31 10:56:15'),
(32, 1, 'Opaque Access Token', 'opaque_token', 'a23d36c3e9079e79a710f6b9d8f8c3b1fe2acb5b7588b0cb6b26109cb21c7ef7', '2023-09-10', '2023-08-31 12:50:32', '2023-08-31 12:50:32'),
(33, 1, 'Opaque Access Token', 'opaque_token', '26db149dc06d1d8ec6ac34f11a0022eefcb7c47dbb21b36f5f185d3638fe3c81', '2023-09-10', '2023-08-31 12:54:03', '2023-08-31 12:54:03'),
(34, 1, 'Opaque Access Token', 'opaque_token', 'f2f7dee1a0275cb13058bee6e6152a02fae4c04ea3d61e80e1f3509cb4278645', '2023-09-10', '2023-08-31 12:55:20', '2023-08-31 12:55:20'),
(35, 1, 'Opaque Access Token', 'opaque_token', 'ef80e668316c88e2008b6f2c9d2608f265bf238f9101bc644ca1126d260993d9', '2023-09-10', '2023-08-31 12:57:40', '2023-08-31 12:57:40'),
(36, 1, 'Opaque Access Token', 'opaque_token', '614e625a09e22bf66a4ff9c2f75e4aa898dd25571da7f5c96512a0214c0c9f1f', '2023-09-10', '2023-08-31 12:59:33', '2023-08-31 12:59:33'),
(37, 1, 'Opaque Access Token', 'opaque_token', '5a48d8693e7a4d520ca2f8dfd4e77d3c4050fe6ac678583255a3e43797bccedf', '2023-09-10', '2023-08-31 13:04:49', '2023-08-31 13:04:49'),
(38, 1, 'Opaque Access Token', 'opaque_token', 'ecdbf6ede84703cec40ed44c3ec1b26a6c4164a9272f1d66403049e05efb418f', '2023-09-10', '2023-08-31 13:06:52', '2023-08-31 13:06:52'),
(39, 1, 'Opaque Access Token', 'opaque_token', '041b903e24c50e2ff0d951405d66185f428e30c8144c3db6f703cb86a7aaed7c', '2023-09-10', '2023-08-31 13:09:04', '2023-08-31 13:09:04'),
(40, 1, 'Opaque Access Token', 'opaque_token', '8778d1af04303e8e30be67ff9210d5feb3e7421de083e26533e620550b31dc00', '2023-09-10', '2023-08-31 13:18:27', '2023-08-31 13:18:27'),
(41, 1, 'Opaque Access Token', 'opaque_token', '91a1b2bd45950bd5411be76d41d8c22cff3dea22aba5620f89b06fa1fae18b5c', '2023-09-10', '2023-08-31 13:20:32', '2023-08-31 13:20:32'),
(42, 1, 'Opaque Access Token', 'opaque_token', '223e0e706db38c2ac7d450f1be2223b783865f4fbc6dfc5231f3026799bcce76', '2023-09-10', '2023-08-31 14:24:52', '2023-08-31 14:24:52'),
(43, 1, 'Opaque Access Token', 'opaque_token', 'b32841c1173f1126ea36250afea526506b81db158290e49a06de443094d6eb38', '2023-09-10', '2023-08-31 14:26:50', '2023-08-31 14:26:50'),
(44, 6, 'Opaque Access Token', 'opaque_token', 'bc8fa447811d87e7d097eb470585219b7c15221cba394538ea27eb6bcbfde6b9', '2023-09-10', '2023-08-31 14:34:06', '2023-08-31 14:34:06'),
(45, 7, 'Opaque Access Token', 'opaque_token', 'b4b1979596eed1bd0922650cd426d74d5bb01c487bd466b5184a71047e21d937', '2023-09-10', '2023-08-31 14:36:30', '2023-08-31 14:36:30'),
(46, 1, 'Opaque Access Token', 'opaque_token', '43c9e397690fe88b6897efb5c5a743361822c71d0443c275156dd66bee2e737b', '2023-09-11', '2023-09-01 07:46:06', '2023-09-01 07:46:06'),
(47, 1, 'Opaque Access Token', 'opaque_token', '4b81007000317b1da32e504e6c7397cd1bd0c14a872c6c485567d8832a05dc37', '2023-09-11', '2023-09-01 09:18:08', '2023-09-01 09:18:08'),
(48, 1, 'Opaque Access Token', 'opaque_token', '5b65338b8f056e7158af9246c75fd9576aef53a49765b4ae24fbef224eba2f4e', '2023-09-11', '2023-09-01 09:23:03', '2023-09-01 09:23:03'),
(49, 1, 'Opaque Access Token', 'opaque_token', 'bc4e1ab7240fb132878b85de68aaf011a6a46c59cfea285f2a2d1546de429225', '2023-09-11', '2023-09-01 09:24:16', '2023-09-01 09:24:16'),
(50, 1, 'Opaque Access Token', 'opaque_token', '3047c0dd1abacc5dc357b69e2ed0dea05c0eaefaaa9c975a96310305f7273aa1', '2023-09-11', '2023-09-01 09:26:13', '2023-09-01 09:26:13'),
(51, 1, 'Opaque Access Token', 'opaque_token', '3fdc02c37e269968bba8a6dcb0ea57c1f5f013ef22c3fa26772dd106e82d2b6f', '2023-09-11', '2023-09-01 09:37:45', '2023-09-01 09:37:45'),
(52, 1, 'Opaque Access Token', 'opaque_token', '8f4bbc439c411d199401b7718878c2311774e10ba039e0df260d1020fa43b8af', '2023-09-11', '2023-09-01 09:55:09', '2023-09-01 09:55:09'),
(53, 1, 'Opaque Access Token', 'opaque_token', 'bf4603b8ed2f301a7ada2c9eeaad10dbf2e7c9df4bd4117e0cecd03c90b96123', '2023-09-11', '2023-09-01 12:42:28', '2023-09-01 12:42:28'),
(54, 1, 'Opaque Access Token', 'opaque_token', 'e6f2331e6cdd0fccaeefd9999d2cd0d9ae6c3ed4947168dc839ea24d2759ed01', '2023-09-11', '2023-09-01 13:06:30', '2023-09-01 13:06:30'),
(55, 1, 'Opaque Access Token', 'opaque_token', '19e45ce4118abcb231036bc1929bccc97df984e0d3852559f9b6794a15990654', '2023-09-11', '2023-09-01 13:55:58', '2023-09-01 13:55:58'),
(56, 1, 'Opaque Access Token', 'opaque_token', 'f19463769b08a16dbbcf64d53e1628f049e457fe409c915ba22b99c475e57644', '2023-09-13', '2023-09-03 08:22:10', '2023-09-03 08:22:10'),
(57, 1, 'Opaque Access Token', 'opaque_token', '1321478ced7220f58516630daf58f921dd4212cc66fc1f300d5263eee403f512', '2023-09-30', '2023-09-20 07:26:13', '2023-09-20 07:26:13');

-- --------------------------------------------------------

--
-- Structure de la table `commands`
--

CREATE TABLE `commands` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commands`
--

INSERT INTO `commands` (`id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-09-03 08:25:24', '2023-09-03 09:40:31'),
(2, 1, '2023-09-03 09:41:12', '2023-09-03 09:41:12'),
(3, 1, '2023-09-03 09:41:48', '2023-09-03 09:41:48'),
(4, 1, '2023-09-03 09:50:55', '2023-09-03 09:50:55');

-- --------------------------------------------------------

--
-- Structure de la table `command_products`
--

CREATE TABLE `command_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `command_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `command_products`
--

INSERT INTO `command_products` (`id`, `command_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 3, '2023-09-03 08:25:24', '2023-09-03 08:25:24'),
(2, 1, 2, 1, '2023-09-03 09:14:35', '2023-09-03 09:14:35'),
(3, 1, 3, 5, '2023-09-03 09:40:31', '2023-09-03 09:40:31'),
(4, 2, 4, 3, '2023-09-03 09:41:12', '2023-09-03 09:41:12'),
(5, 3, 1, 5, '2023-09-03 09:41:48', '2023-09-03 09:41:48'),
(6, 3, 2, 3, '2023-09-03 09:41:48', '2023-09-03 09:41:48'),
(7, 3, 4, 3, '2023-09-03 09:41:48', '2023-09-03 09:41:48'),
(8, 4, 1, 5, '2023-09-03 09:50:55', '2023-09-03 09:50:55'),
(9, 4, 2, 3, '2023-09-03 09:50:55', '2023-09-03 09:50:55'),
(10, 4, 4, 3, '2023-09-03 09:50:55', '2023-09-03 09:50:55');

-- --------------------------------------------------------

--
-- Structure de la table `dislikes`
--

CREATE TABLE `dislikes` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `dislikes`
--

INSERT INTO `dislikes` (`id`, `product_id`, `user_id`, `created_at`, `updated_at`) VALUES
(25, 7, 1, '2023-09-01 07:48:09', '2023-09-01 07:48:09'),
(26, 8, 1, '2023-09-01 07:48:11', '2023-09-01 07:48:11'),
(27, 6, 1, '2023-09-01 07:48:14', '2023-09-01 07:48:14'),
(28, 5, 1, '2023-09-01 07:48:16', '2023-09-01 07:48:16');

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

CREATE TABLE `likes` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `likes`
--

INSERT INTO `likes` (`id`, `product_id`, `user_id`, `created_at`, `updated_at`) VALUES
(57, 8, 1, '2023-09-01 07:48:12', '2023-09-01 07:48:12'),
(58, 7, 1, '2023-09-01 07:48:13', '2023-09-01 07:48:13'),
(59, 6, 1, '2023-09-01 07:48:13', '2023-09-01 07:48:13'),
(60, 5, 1, '2023-09-01 07:48:15', '2023-09-01 07:48:15'),
(89, 1, 1, '2023-09-20 07:44:52', '2023-09-20 07:44:52'),
(90, 2, 1, '2023-09-20 07:44:55', '2023-09-20 07:44:55'),
(91, 3, 1, '2023-09-20 07:44:56', '2023-09-20 07:44:56'),
(93, 4, 1, '2023-09-20 07:45:43', '2023-09-20 07:45:43');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `categorie` enum('pizza','dessert','boisson','autre') NOT NULL,
  `like` int(11) DEFAULT 0,
  `dislike` int(11) DEFAULT 0,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`, `categorie`, `like`, `dislike`, `img`, `created_at`, `updated_at`) VALUES
(1, 'Pizza Spicy Pepperoni Deluxe', 'Une pizza épicée avec une base de sauce tomate piquante, une généreuse portion de pepperoni tranché et de la mozzarella fondante.', 12, 'pizza', 7, 5, '/images/spicy_pepperoni.jpeg', '2023-08-29 13:30:23', '2023-09-20 07:44:52'),
(2, 'Pizza Végétarienne Méditerranéenne', 'Une pizza végétarienne inspirée de la cuisine méditerranéenne, garnie d\'olives Kalamata, de tomates séchées au soleil, de poivrons et de mozzarella fondante.', 10, 'pizza', 8, 3, '/images/vegetarian_mediterranean.jpeg', '2023-08-29 13:30:23', '2023-09-20 07:44:55'),
(3, 'Pizza Carnivore Suprême', 'Une pizza pour les amateurs de viande, avec du pepperoni, du jambon, du bacon croustillant et des saucisses italiennes sur une base de sauce tomate et de mozzarella.', 13, 'pizza', 8, 3, '/images/meat_lovers_supreme.jpeg', '2023-08-29 13:30:23', '2023-09-20 07:44:56'),
(4, 'Pizza Blanche aux Trois Fromages', 'Une pizza sans sauce tomate, mais avec une combinaison luxueuse de fromages : mozzarella fondante, ricotta crémeuse et parmesan râpé, le tout agrémenté d\'ail.', 11, 'pizza', 7, 4, '/images/three_cheese_white_pizza.jpeg', '2023-08-29 13:30:23', '2023-09-20 07:45:43'),
(5, 'Limonade Rafraîchissante', 'Une boisson pétillante et acidulée, parfaite pour se désaltérer par temps chaud.', 3, 'boisson', 6, 4, '/images/lemonade.jpg', '2023-08-29 13:30:23', '2023-09-01 07:48:16'),
(6, 'Thé Vert Citronné', 'Une infusion légère de thé vert associée à des notes rafraîchissantes de citron, idéale pour une pause détente.', 3, 'boisson', 7, 5, '/images/green_tea_lemon.jpg', '2023-08-29 13:30:23', '2023-09-01 07:48:14'),
(7, 'Smoothie Fruits Tropicaux', 'Un mélange exotique de mangue, d\'ananas et de banane pour une explosion de saveurs fruitées dans chaque gorgée.', 5, 'boisson', 5, 3, '/images/tropical_smoothie.jpg', '2023-08-29 13:30:23', '2023-09-01 07:48:13'),
(8, 'Café Glacé Mocha', 'Un délicieux mélange de café fort, de chocolat et de lait glacé, parfait pour les amateurs de café et de chocolat.', 5, 'boisson', 5, 3, '/images/iced_mocha.jpg', '2023-08-29 13:30:23', '2023-09-01 07:48:12');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `password` varchar(500) NOT NULL,
  `remember_me_token` varchar(255) DEFAULT NULL,
  `adresse_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `birthdate`, `password`, `remember_me_token`, `adresse_id`, `created_at`, `updated_at`) VALUES
(1, 'nicolas', 'd\'addabbo', 'nico.daddabbo7100@gmail.com', '0000-00-00', '$scrypt$n=16384,r=8,p=1$c0gnyxmSfaZ/NgF+sgYTZA$pLgk8BAK1+Yt8yvAVa191KEM/Wkvb0orXNDdKmW4nGt0YbHWnfPfBYJvr8ZksSgHr8ipm2GpmsOfai0o8Fp6yg', NULL, 1, '2023-08-29 13:53:03', '2023-08-29 13:53:03'),
(2, 'sqs', 'qsqs', 'qsqs@gmail.com', '0000-00-00', '$scrypt$n=16384,r=8,p=1$yFMdOQWVgLGuWTs5rIIs9w$nkpEWOWq0cAS5ld0cPunwbzTWuoh7AedH61AYUO9/8vxUPyZ8Q4LYPZ1QT+7HRaLbQKnhT0KDdvhyFvsUsDZFw', NULL, NULL, '2023-08-29 14:12:00', '2023-08-29 14:12:00'),
(3, 'sqsqs', 'qsqsq', 'sqss@gmail.com', '0000-00-00', '$scrypt$n=16384,r=8,p=1$gCnBVUsCrfdNxSyj1jzRRg$EwCdDLwyuhAXdmtvGdu5fChkJmXP7te8MN1kVdLQb1s0LMTiZ8euJkitY6flVAn3jA2LmB/GeimxwCsqrDyDAw', NULL, 2, '2023-08-29 14:15:15', '2023-08-29 14:15:15'),
(4, 'sqsqs', 'qsqs', 'qsqs@gmail.com', '0000-00-00', '$scrypt$n=16384,r=8,p=1$rnxnSzKSlKycc1Kn9B7zrQ$6qdaTItqYnZ4usgZiZAS95KVnC68MgbkcYRTQkhstLkOQr9e5j5Jpned9SzX5NZhQO4LehIPo+LNr7j38OC8hw', NULL, 3, '2023-08-29 14:17:39', '2023-08-29 14:17:39'),
(5, 'sqs', 'qsqs', 'qsqs@gmail.com', '0000-00-00', '$scrypt$n=16384,r=8,p=1$q0VURRbxkCrkLKHE31tAow$TFPiyP47h4+toaoF5m5NyFcjycBivsRWzJu18GhwDLyirvjpWcggLvNuTfG/ZTo9CrGoxW/kToj/tPJfiFGY/g', NULL, 4, '2023-08-29 14:44:57', '2023-08-29 14:44:57'),
(6, 'nico', 'd', 'test@gmail.com', '0000-00-00', '$scrypt$n=16384,r=8,p=1$/QcI8c+pUFayzweMQBIzgg$8nlJSzcE0ZzcN9lSMcRzTRl6Ychi9AySvbfB9iOviMvC3KHy6rQVQjbKnHj19JCoMpWAW1eSXQ8Rvs6BSR+sXQ', NULL, 5, '2023-08-31 14:34:06', '2023-08-31 14:34:06'),
(7, 'nico', 'd', 'test@hotmail.com', '0000-00-00', '$scrypt$n=16384,r=8,p=1$NeYlVehLMX9cY36AAJocpQ$bArqzh+boTTC3cxYQ+Zl73CtuJSknuB1W+DUuJ08C2x2LeAL/0vpfq9RSPjYGQxNfsXGyZi1vbNYhuze1IS5ng', NULL, 6, '2023-08-31 14:36:29', '2023-08-31 14:36:30');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `adresses`
--
ALTER TABLE `adresses`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `api_tokens`
--
ALTER TABLE `api_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `api_tokens_user_id_foreign` (`user_id`);

--
-- Index pour la table `commands`
--
ALTER TABLE `commands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commands_user_id_foreign` (`user_id`);

--
-- Index pour la table `command_products`
--
ALTER TABLE `command_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `command_products_command_id_foreign` (`command_id`),
  ADD KEY `command_products_product_id_foreign` (`product_id`);

--
-- Index pour la table `dislikes`
--
ALTER TABLE `dislikes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dislikes_product_id_foreign` (`product_id`),
  ADD KEY `dislikes_user_id_foreign` (`user_id`);

--
-- Index pour la table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_product_id_foreign` (`product_id`),
  ADD KEY `likes_user_id_foreign` (`user_id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_adresse_id_foreign` (`adresse_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT pour la table `adresses`
--
ALTER TABLE `adresses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `api_tokens`
--
ALTER TABLE `api_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT pour la table `commands`
--
ALTER TABLE `commands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `command_products`
--
ALTER TABLE `command_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `dislikes`
--
ALTER TABLE `dislikes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT pour la table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `api_tokens`
--
ALTER TABLE `api_tokens`
  ADD CONSTRAINT `api_tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `commands`
--
ALTER TABLE `commands`
  ADD CONSTRAINT `commands_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `command_products`
--
ALTER TABLE `command_products`
  ADD CONSTRAINT `command_products_command_id_foreign` FOREIGN KEY (`command_id`) REFERENCES `commands` (`id`),
  ADD CONSTRAINT `command_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Contraintes pour la table `dislikes`
--
ALTER TABLE `dislikes`
  ADD CONSTRAINT `dislikes_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `dislikes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_adresse_id_foreign` FOREIGN KEY (`adresse_id`) REFERENCES `adresses` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
