<?php

class Database{

    public static $connection;

    public static function setUpConnection(){

        if (!isset(Database::$connection)) {
            Database::$connection = new mysqli("localhost", "root", "Dg$11029", "library_db", "3306");
        }
    }

    public static function iud($query) {
        $connection = self::getConnection(); // Ensure you have this method to get the connection
        if (mysqli_query($connection, $query)) {
            return true;
        } else {
            return mysqli_error($connection); // Return the error message
        }
    }

    public static function search($query){

        Database::setUpConnection();
        $resultset = Database::$connection->query($query);
        return $resultset;
    }
}

?>

