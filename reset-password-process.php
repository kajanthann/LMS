<?php 
include "connection.php"; 
 
$pw = $_POST["pw"]; 
$cpw = $_POST["cpw"]; 
$vcode = $_POST["vcode"]; 
 
if(empty($vcode)){ 
    echo("Please resend a forgot password email"); 
}else{ 
  
    $rs = Database::search("SELECT * FROM `member` WHERE `vcode`= '$vcode'"); 
    $num = $rs->num_rows; 
 
    if($num > 0){ 
        $row = $rs->fetch_assoc(); 
        Database::iud("UPDATE `member` SET `password` = '$pw', `vcode` = NULL WHERE `id` = '".$row["id"]."' "); 
        echo("success"); 
    }else{ 
        echo($num); 
    } 
}