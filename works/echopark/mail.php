<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$input = $_POST['data'];

echo ($input);

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                                               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'obris2@mail.ua'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'tractor22'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('obris2@mail.ua'); // от кого будет уходить письмо?
$mail->addAddress('YOUREMAIL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка з сайта';
$text = $input;
// $mail->Body    = 'Ім`я: ' .$name . '<br>
//                   Телефон: ' .$phone;


$errors = array();
$data = array();

// if ( empty($name) ) {
//   $errors['0'] = true;
//   // $errors['0'] = 'Write your question, please.';
// }
// if ( empty($phone) || !$matches) {
//   $errors['1'] = true;
//   // $errors['1'] = 'Please enter a valid e-mail address.';
// }
// if ( empty($acept) ) {
//   $errors['2'] = true;
//   // $errors['1'] = 'Please enter a valid e-mail address.';
// }

if ( !empty($errors) ) {
  $data['success'] = false;
  $data['errors']  = $errors;
} else {
  if(!$mail->send()) {
    $data['success'] = false;
  } else {
    $data['success'] = true;
  }
}

// echo json_encode($text);


?>