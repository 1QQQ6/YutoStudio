1. Залить скрипт на хост
2. Создать бота в телеграмм, добавить его в нудную конфу
3. прописать параметры в файле config.php
3. залить базу bot.php
4. в файле config.php в  $cfg->set_connections(array('development' => 'mysql://root:root@localhost/bot;charset=utf8')); заменить "root:root" на логин:пароль от базы
5.В базе в таблице Users укажите логин и пароль для пользователя для доступа к генератору