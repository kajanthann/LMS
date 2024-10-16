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

// Define the pattern for validating the user ID in the format "U-XXXX-XXXX"
$patternMemID = "/^U-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/";

// Define the pattern for validating the password
$patternPassword = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/";

// Check if the membership ID matches the format "U-XXXX-XXXX"
if (preg_match($patternMemID, $memID)) {
    // Check if the password matches the required pattern
    if (preg_match($patternPassword, $password)) {
        // Check if the member ID already exists
        $rs = Database::search("SELECT * FROM `member` WHERE `member_id` = '$memID'");
        $num = $rs->num_rows;

        if ($num > 0) {
            echo("User has already been registered with the given membership ID");
        } else {
            // Insert the new member details into the database
            Database::iud("INSERT INTO `member`(`member_id`, `nic`, `fname`, `lname`, `mobile`, `address`, `email`, `password`) VALUES 
            ('$memID', '$nic', '$fname', '$lname', '$phoneNumber', '$address', '$email', '$password')");
            echo("success");
        }
    } else {
        // If the password does not match the required pattern
        echo("Invalid password. Password must be at least 5 characters long, include at least one uppercase letter, one lowercase letter, and one number.");
    }
} else {
    // If the membership ID does not match the required format
    echo("Invalid membership ID format. Please use 'U-XXXX-XXXX' format.");
}
?>
