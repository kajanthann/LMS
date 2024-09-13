<?php
class Database {
    private $host = "localhost"; // Your database host
    private $user = "root";      // Your database username
    private $pass = "";          // Your database password
    private $dbname = "your_database_name"; // Your database name

    public $conn;

    public function __construct() {
        // Establish a connection
        $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->dbname);

        // Check for connection errors
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }