-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 09 2020 г., 15:23
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bot`
--

-- --------------------------------------------------------

--
-- Структура таблицы `links`
--

CREATE TABLE `links` (
  `id` int(11) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `oldprice` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `worker` varchar(255) NOT NULL,
  `worker_id` bigint(20) NOT NULL,
  `fio` varchar(255) NOT NULL,
  `name20` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `plochad` varchar(255) NOT NULL,
  `jilplochad` varchar(255) NOT NULL,
  `kuhna` varchar(255) NOT NULL,
  `etaj` varchar(255) NOT NULL,
  `postroen` varchar(255) NOT NULL,
  `opisanie` text NOT NULL,
  `jk` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `balance` int(255) NOT NULL,
  `platform` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `links`
--

INSERT INTO `links` (`id`, `order_id`, `name`, `price`, `oldprice`, `image`, `worker`, `worker_id`, `fio`, `name20`, `adress`, `plochad`, `jilplochad`, `kuhna`, `etaj`, `postroen`, `opisanie`, `jk`, `type`, `balance`, `platform`, `status`, `date`) VALUES
(22, '73bd19846711', '234234', 234234, 0, '234234', '234234', 234234, '234234', '234234', '234234', '', '', '', '', '', '', '', 1, 1, 'DROM', '0', ''),
(23, 'f291737d1695', '3453453', 45345, 0, '345345', '345345', 345345, '345345', '345345', '345345', '', '', '', '', '', '', '', 2, 1, 'OLX.KZ', '0', ''),
(24, 'e1c5efd5b98a', '1-комн. квартира, 41 м²', 10000, 0, 'https://cdn-p.cian.site/images/1/020/529/kvartira-sanktpeterburg-prospekt-slavy-925020135-1.jpg', '3453453', 345345, 'sdfsdf', 'sdfsdf', 'sdfsdf', '41 м²', '20 м²', '12 м²', '8 из 17', '2010', 'Сдается однокомнатная квартира от собственника. ТОЛЬКО!!!!!Гражданам РФ!!!! Желательно семьям. Можно с домашними животными при их правильном воспитании. Все необходимое есть. Тихо и чисто. На длительный срок. Есть отличный балкон для покурить и хранения колес. Окна во двор- никакого шума и пыли. Парк, магазины и торговые центры совсем рядом. Есть возможность взять паркинг в аренду. Сама Парковка в закрытом дворе.', 'в ЖК «Славбург»', 1, 1, 'CIAN', '0', ''),
(25, '2444dbe31cf6', '35tter', 353345, 0, '345345', '345345', 345345, '345345', '345345', '345345', '345345', '345345', '345345', '345345', '345345', '345345', '345345', 1, 1, 'CIAN', '0', ''),
(26, 'b252174456ab', 'ТЕСТ', 100, 0, 'https://28.img.avito.st/640x480/9482315428.jpg', '345345', 345345, 'Петров', 'Иван', 'Москва', '', '', '', '', '', '', '', 1, 1, 'OLX.KZ', '4', ''),
(27, 'b189e0c1dd8f', 'dsfsdfsdf', 2342, 23423, 'https://i.imgur.com/lnrDucN.jpg', '345345', 345345, 'sdf', 'sdf', 'sdfsdf', '', '', '', '', '', '', '', 1, 1, 'DROM', '0', ''),
(28, 'df87e24155e1', 'Холодильник', 1000, 15000, 'https://im0-tub-ru.yandex.net/i?id=ba79d9e85faa885cce86b23f476efa5f&n=13', '234234', 234234, 'аврапр', 'апрапр', 'Москва', '', '', '', '', '', '', '', 1, 1, 'MVIDEO', '0', ''),
(29, '753e3c110c5d', 'ываыва', 345345, 34535, '345345', '345345', 345345, '35345', '35345', '345345', '', '', '', '', '', '', '', 1, 1, 'MVIDEO', '0', ''),
(30, 'd9197dbff760', 'ываыва', 345345, 34535, '345345', '345345', 345345, '35345', '35345', '345345', '', '', '', '', '', '', '', 1, 1, 'MVIDEO', '0', ''),
(31, '6c756436ec75', 'werwer', 35345, 345345, '345345', '345345', 345345, '', '', '345345', '', '', '', '', '', '', '', 1, 1, 'MVIDEO', '0', ''),
(32, '8cd0c1faeb2c', '', 3453, 0, '', '345', 345345, '', '', 'Москва - Новосибирск 1', '', '', '', '', '', '', '', 1, 1, 'BLABLACAR', '4', '27.10.2020'),
(33, 'c88a719d2c7d', '', 3453, 0, '', '345', 345345, '', '', 'Москва - Новосибирск 1', '', '', '', '', '', '', '', 1, 1, 'BLABLACAR', '4', '27.10.2020'),
(34, '7aea8ac72f12', '345345', 345345, 345345, '345345', '345345', 35345, '', '', '345345', '', '', '', '', '', '', '', 1, 1, 'MVIDEO', '0', ''),
(35, 'df66e41b836a', '345345', 345345, 345345, '345345', '345345', 345345, '', '', '345345', '', '', '', '', '', '', '', 1, 1, 'MVIDEO', '0', ''),
(36, 'b26a0be4d325', '', 234234, 0, '', '234234', 234234, '', '', '2344234', '', '', '', '', '', '', '', 1, 1, 'BLABLACAR', '0', '234234');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `pass`) VALUES
(1, 'test', 'test2');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `links`
--
ALTER TABLE `links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
