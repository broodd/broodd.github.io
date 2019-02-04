<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone   = $_POST['phone'];

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                                               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'obris2@mail.ua'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'tractor22'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('obris2@mail.ua'); // от кого будет уходить письмо?
$mail->addAddress('pidgurdkiy2000@gmail.com');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка з echopark сайта';
$mail->Body    = 'Ім`я: ' .$name . '<br>
                  Телефон: ' .$phone;


$errors = array();
$data = array();

// function isValidEmail($name){ 
//  $pattern = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$"; 

//  if (eregi($pattern, $name)){ 
//     return true; 
//  } 
//  else { 
//     return false; 
//  }    
// } 

if ( empty($phone) ) {
  $errors['0'] = true;
  // $errors['0'] = 'Write your question, please.';
}
if ( empty($name) ) {
  $errors['1'] = true;
  // $errors['1'] = 'Please enter a valid e-mail address.';
}


if ( !empty($errors) ) {
  $data['success'] = false;
  $data['errors']  = $errors;
} else {
  if(!$mail->send()) {
    $data['success'] = false;
  } else {
    $mail->addAddress('svyatddev@gmail.com'); 
    $mail->send();
    $data['success'] = true;
  }
}

// echo filter_var('fredyl.com', FILTER_VALIDATE_EMAIL);

echo json_encode($data);


?>