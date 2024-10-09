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

// Define the pattern for validating the user ID
$pattern = "/^LIBU-[0-9]{4}[0-9]{6}$/"; 

// Check if the membership ID matches the format "LIBU-YYYYXXXXXX"
if (preg_match($pattern, $memID)) {

    // Check if the member ID already exists
    $rs = Database::search("SELECT * FROM `member` WHERE `member_id` = '$memID'"); 
    $num = $rs->num_rows; 

    if($num > 0){ 
        echo("User has been already registered with the given membership ID"); 
    } else { 
        // Insert the new member details into the database
        Database::iud("INSERT INTO `member`(`member_id`,`nic`,`fname`,`lname`,`mobile`,`address`,`email`,`password`) VALUES 
        ('$memID','$nic','$fname','$lname','$phoneNumber','$address','$email','$password')"); 
        echo("success"); 
    }

} else {
    // If the ID does not match the required format
    echo("Invalid membership ID format. Please use 'LIBU-YYYYXXXXXX' format.");
}

?>
