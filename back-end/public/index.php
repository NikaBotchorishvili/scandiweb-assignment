<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
define('BASE_PATH', dirname(__DIR__) . '/');
require_once BASE_PATH . '/vendor/autoload.php';
require_once BASE_PATH . '/src/Middleware/Cors.php';
require_once BASE_PATH . '/src/config/Database.php';

use function App\Helpers\base_path;

use Dotenv\Dotenv;
use App\Middleware;
use App\GraphQL\Controller;


$dotenv = Dotenv::createImmutable(BASE_PATH);

$dotenv->load();
Middleware\Cors::handle();
$dispatcher = FastRoute\simpleDispatcher(function (FastRoute\RouteCollector $r) {
    $r->post('/graphql', [new Controller, 'handle']);
});
$routeInfo = $dispatcher->dispatch(
    $_SERVER['REQUEST_METHOD'],
    $_SERVER['REQUEST_URI']
);
switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        if (preg_match('/\.(?:css|js|png|jpg|jpeg|gif|ico)$/', $_SERVER['REQUEST_URI'])) {
            setMimeType($_SERVER['REQUEST_URI']);
            readfile(base_path('public' . $_SERVER['REQUEST_URI']));
            exit;
        }

   
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        $allowedMethods = $routeInfo[1];
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];
        echo $handler($vars);
        break;
}

function setMimeType($filename)
{
    $mime_types = [
        'css' => 'text/css',
        'js' => 'application/javascript',
        'png' => 'image/png',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'gif' => 'image/gif',
        'ico' => 'image/x-icon',
    ];

    $ext = pathinfo($filename, PATHINFO_EXTENSION);

    if (array_key_exists($ext, $mime_types)) {
        header('Content-Type: ' . $mime_types[$ext]);
    } else {
        header('Content-Type: application/octet-stream');
    }
}
