<?php

class Database {
    private string $db_host;
    private string $username;
    private string $password;
    private string $dbname;
    private ?PDO $conn = null;

    public function __construct() 
    {

        $this->db_host = getenv("DB_HOST");
        $this->username = getenv("DB_USERNAME");
        $this->password = getenv("DB_PASSWORD");
        $this->dbname = getenv("DB_NAME");
        try{
            $this->conn = new PDO("mysql:host=$this->db_host;dbname=$this->dbname", $this->username, $this->password);
            
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        }catch(PDOException $e){
            echo "Connection failed: " . $e->getMessage();
            throw new Exception("Connection failed: " . $e->getMessage());
        }
    }

    public function getConnection(): ?PDO{
        return $this->conn;
    }
}