

<?php 
include "connection.php"; 
session_start(); 
 
$username = $_POST["username"]; 
$password = $_POST["password"]; 
$rememberme = $_POST["rememberme"];
 
$result = Database::search("SELECT * FROM `member` WHERE `member_id`='".$username."' AND `password`='".$password."'"); 
    
$num_of_rows = $result->num_rows; 
if($num_of_rows == 1){ 
    $data = $result->fetch_assoc(); 
    $_SESSION["member"] = $data; 

    if ($rememberme == "true") {

        setcookie("username", $username, time() + (60 * 60 * 24 * 365));
        setcookie("password", $password, time() + (60 * 60 * 24 * 365));
    } else {

        setcookie("username", "", -1);
        setcookie("password", "", -1);
    }

    echo "success"; 
}else{ 
    echo "Invalid email or password"; 
} 
