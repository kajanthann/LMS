<?php 
include "connection.php"; 
 
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 
 
require "mail/PHPMailer.php"; 
require "mail/SMTP.php"; 
require "mail/Exception.php"; 
 
$email = $_GET["email"]; 
 
if(empty($email)){ 
    echo("Please enter your email address"); 
}else{ 
   echo("mkl");

    $rs = Database::search("SELECT * FROM `member` WHERE `email`='$email'"); 
    $num = $rs->num_rows; 
 
    if($num > 0){ 
 
        $row = $rs->fetch_assoc(); 
        $vcode = uniqid(); 
 
        Database::iud("UPDATE `member` SET `vcode` = '$vcode' WHERE `id`='".$row["id"]."'"); 
        $mail = new PHPMailer(true); 
        try { 
            $mail->isSMTP(); 
            $mail->Host = 'smtp.gmail.com'; 
            $mail->SMTPAuth = true; 
            $mail->Username = 'dulakshigamma@gmail.com'; 
            $mail->Password = 'ovvrqsxjkwcqmqdv';//app password 
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
            $mail->Port = 465; 
            $mail->setFrom('dulakshigamma@gmail.com', 'Dulakshi Gammanpila'); 
            $mail->addAddress($email); 
            $mail->isHTML(true); 
            $mail->Subject = 'Reset Your account password'; 
            $mail->Body = ' 
 
<table style = "width: 100%; font-family: sans-serif;"> 
 <tbody> 
    <tr> 
      <td align = "center"> 
 
         <table style = "max-width: 600px;"> 
            <tr> 
               <td align="center"> 
                  <a href="#" style = "font-size: 35px; color: black; font-weight: bold; text-decora on: none;">Super 
Mart</a> 
                  <hr> 
               </td> 
            </tr> 
 
            <tr> 
               <td> 
                  <h1 style = "font-size: 25px; font-weight: bold; line-height: 45px;">Reset Your Password</h1> 
                  <p style = "margin-bo om: 24px;">Click the below bu on to reset your password</p> 
 
                  <div> 
                     <a href="http://localhost/LMS/reset-password.php?code='.$vcode.'" style="display: inline-block; 
background-color: #ff6d33; color:white; border-radius: 8px; padding: 15px; text-decora on: none;"><span>Reset 
Password</span></a> 
                  </div> 
                  <p style="margin-top: 24px;">If you didn\'t requested to reset password, please ignore this email</p> 
                  <hr> 
               </td> 
            </tr> 
            <tr> 
               <td aign="center"> 
                  <p align = "center">&copy; 2024 SuperMart.lk </p> 
               </td> 
            </tr> 
         </table> 
 
      </td> 
    </tr> 
 </tbody> 
 
</table>'; 
 
            $mail->send(); 
            echo 'Check the email'; 
        } catch (Exception $e) { 
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"; 
        } 
    }else { 
        echo("User not found with the given email"); 
    } 
}