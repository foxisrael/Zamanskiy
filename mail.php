<?php
    header('Content-Type:text/html; charset="UTF-8"');
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];
    $to = 'mail@zamanskiy.ru';
    $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
    $message = "
    Пользователь ввел следующие данные:
    Имя: $name
    Email: $email
    Текст сообщения: $text";
    mail($to, $subject, $message);

    echo "Ваше сообщение успешно отправлено!";
