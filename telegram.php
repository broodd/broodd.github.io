<?php
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$text = $_POST['text'];
$token = "491084251:AAFan_3EM6-q7dg5dRUFqZ1p1OK6_fsrino";
$chat_id = "-253467583";
$arr = array(
	'Ім\'я: ' => $name,
	'Текст: ' => $text
);


// parse message to one variable
foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};



$errors = array();
$data = array();

if (empty($_POST['name'])) {
	$errors['name'] = 'Name is required.';
}
if (empty($_POST['text'])) {
	$errors['text'] = 'Text is required.';
}


if ( !empty($errors)) {
	$data['success'] = false;
	$data['errors']  = $errors;
} else {
	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
	$data['success'] = true;
	$data['message'] = 'Thank You! Your message has been sent.';
}

echo json_encode($data);

?>