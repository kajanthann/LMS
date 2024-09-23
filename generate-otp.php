<?php 
session_start();
include "connection.php"; 
 
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 
 
require "mail/PHPMailer.php"; 
require "mail/SMTP.php"; 
require "mail/Exception.php"; 
 
$email = $_GET["email"]; 

function generateOTP($length = 6) {
    $otp = '';
    for ($i = 0; $i < $length; $i++) {
        $otp .= random_int(0, 9);
    }
    return $otp;
}

$otp = generateOTP(6);

// Store OTP in session
$_SESSION['otp'] = $otp;
 
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
            $mail->Subject = 'Your otp code is'; 
            $mail->Body = ' 


               <h1 style="padding-top: 30px;">OTP</h1>
               <p style = "font-size: 30px; color: black; font-weight: bold; text-align: center;">Shelf Loom</p> 

               <div style="max-width: 600px; margin: 0 auto; padding: 20px; text-align: left;">
                 
                  <p>here is your otp.</p>
                  <h1>'.$otp.'</h1>
        
                  
                  <div>
                        <p style="margin: 0px;">If you have problems or questions regarding your account, please contact us.</p>
                        <p style="margin: 0px;">Call: [tel_num]</p>
                  </div>

                  <div>
                        <p style="margin-bottom: 0px;">Best regards,</p>
                        <p style="margin: 0px;">Shelf Loom</p>
                  </div>
               </div>';

 
            $mail->send(); 
            echo 'Check the email for otp'; 
        } catch (Exception $e) { 
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"; 
        } 
   
