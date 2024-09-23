<?php 
include "connection.php"; 
 
$memID = $_POST["memID"]; 
$nic = $_POST["nic"]; 
$address = $_POST["address"]; 
$phoneNumber = $_POST["phoneNumber"]; 
$email = $_POST["email"]; 
$fname = $_POST["fname"]; 
$lname = $_POST["lname"]; 
$password = $_POST["password"]; 
 

    $rs = Database::search("SELECT * FROM `member` WHERE `member_id` = '$memID'"); 
    $num = $rs->num_rows; 
    if($num > 0){ 
        echo("User has been already registered with the given membership ID"); 
    }else{ 
        Database::iud("INSERT INTO `member`(`member_id`,`nic`,`fname`,`lname`,`mobile`,`address`,`email`,`password`) VALUES 
('$memID','$nic','$fname','$lname','$phoneNumber','$address','$email','$password')"); 
        echo("success"); 
    } 
