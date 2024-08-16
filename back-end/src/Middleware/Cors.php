<?php
namespace App\Middleware;

class Cors {
    public static function handle() {
        header("Access-Control-Allow-Origin: " . getenv('ALLOW_ORIGINS'));
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(204);
            exit();
        }
    }
}