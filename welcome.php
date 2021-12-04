<!-- Через 5 секунд после появления сообщения об отправке или ошибке — отправляемся на сайт --> 
<meta http-equiv='refresh' content='5; url=https://github.com/nazxc/LaserShop'> 
<meta charset="UTF-8" /> 
<!-- Начался блок PHP --> 
<?php
$to = "galya21134@gmail.com"; // емайл получателя данных из формы
$tema = "Заказан дизайн"; // тема полученного емайла

$name = "Имя: " $_POST['name']"<br>"; //полученное из формы name=phone

$email = "E-mail: " $_POST['email']"<br>"; //полученное из формы name=phone

$tel = "Номер телефона: " $_POST['tel']"<br>"; //полученное из формы name=phone

/*$message = "Сообщение: " $_POST['message']"<br>";*/

$headers = 'MIME-Version: 1.0' "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers = 'Content-type: text/html; charset=utf-8' "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $name, $email, $tel, /*$message,*/ $headers); //отправляет получателю на емайл значения переменных

/*if ($send == 'true')
{
echo '<div class="modal">Мы обязательно вам перезвоним!</div>';
} else {
echo '<center><p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p></center>';
} else {
http_response_code(403);
echo "Попробуйте еще раз";
}*/
?>

