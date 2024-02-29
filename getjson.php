<?php

include "config.php";

$link = Links::find(['order_id'=>$_GET['order_id']]);
if($link == null){
    echo 'Такого номера нет в системе!';
    exit();
}
if($link->status == ''){
    echo '{"type":0}';
}else{
    echo '{"type":'.$link->status.'}';
}
