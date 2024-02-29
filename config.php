<?php
session_start();
require_once $_SERVER['DOCUMENT_ROOT'].'/activerecord/ActiveRecord.php';
ini_set('display_errors', 'Off'); // теперь сообщений НЕ будет
// initialize ActiveRecord
ActiveRecord\Config::initialize(function($cfg)
{
    $cfg->set_model_directory($_SERVER['DOCUMENT_ROOT']. '/models');
    $cfg->set_connections(array('development' => 'mysql://root:root@localhost/bot;charset=utf8'));

    // you can change the default connection with the below
    //$cfg->set_default_connection('production');
});


/**Токен бота для отправки уведомлений*/
$token = '1246250454:AAGgLEwaXKnBB6aPaVgRCZ9M43ts-pLtlH8';
/**ID чата оператора*/
$operator_chat_id = '-487852185';


function APIRequest($method, $params,$token)
{
    $ch = curl_init("https://api.telegram.org/bot" . $token . "/" . $method);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
    $result = curl_exec($ch);
    curl_close($ch);

    return $result;
}
//Если нужно переделать под индивидуальный проект или провести интеграцию с вашим текущим проектом, напишите продавцу

?>
