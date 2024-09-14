

<?php 
include "connection.php"; 
session_start(); 
 
$username = $_POST["username"]; 
$password = $_POST["password"]; 
 
$result = Database::search("SELECT * FROM `staff` WHERE `staff_id`='".$username."' AND `password`='".$password."'"); 
    
$num_of_rows = $result->num_rows; 
if($num_of_rows == 1){ 
    $data = $result->fetch_assoc(); 
    $_SESSION["member"] = $data; 
    echo "success"; 
}else{ 
    echo "Invalid email or password"; 
} 
