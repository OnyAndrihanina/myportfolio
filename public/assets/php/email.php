<?php
mb_internal_encoding("UTF-8");

$to = 'rabenjarijaonaoa@gmail.com';
$subject = 'Message from Cryptex';

$name = "";
$email = "";
$phone = "";
$message = "";
$body = "";

if( isset($_POST['name']) ){
    $name = $_POST['name'];
    $body .= "Name: " . $name . "\n\n";
}
if( isset($_POST['subject']) ){
    $subject = $_POST['subject'];
}
if( isset($_POST['email']) ){
    $email = $_POST['email'];
    $body .= "Email: " . $email . "\n\n";
}
if( isset($_POST['phone']) ){
    $phone = $_POST['phone'];
    $body .= "Phone: " . $phone . "\n\n";
}
if( isset($_POST['message']) ){
    $message = $_POST['message'];
    $body .= "Message: " . $message . "\n\n";
}

$headers = 'From: ' . $email . "\r\n";

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if(mb_send_mail($to, $subject, $body, $headers)) {
        echo '<div class="status-icon valid"><i class="fa fa-check"></i></div>';
    } else {
        echo '<div class="status-icon invalid"><i class="fa fa-times"></i></div>';
    }
} else {
    echo '<div class="status-icon invalid"><i class="fa fa-times"></i></div>';
}
?>
