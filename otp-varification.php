<?php
session_start();

// Store OTP and expiration time in session
$userotp = $_POST['userotp'];

if (isset($_SESSION['otp'])) {
    $otp = $_SESSION['otp'];
    
} 

$_SESSION['otp_expiry'] = time() + (5 * 60); // OTP expires in 5 minutes

// To validate OTP
if ($userotp== $_SESSION['otp'] && time() < $_SESSION['otp_expiry']) {
    echo 'success';
} else {
    echo 'OTP is invalid or expired!';
}

?>
