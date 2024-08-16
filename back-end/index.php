<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *"); // Allows requests from any origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allows specified HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization");
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/schema/Schema.php';
require_once __DIR__ . '/src/Middleware/Cors.php';

use GraphQL\GraphQL;
use GraphQL\Error\FormattedError;
use GraphQL\Error\DebugFlag;
use App\Middleware;

Middleware\Cors::handle();

try {
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    $query = $input['query'];
    $variableValues = isset($input['variables']) ? $input['variables'] : null;

    $rootValue = null;
    $context = null;

    $result = GraphQL::executeQuery(
        schema: $schema,
        source: $query,
        rootValue: $rootValue,
        contextValue: $context,
        variableValues: $variableValues
    );
    $output = $result->toArray();
} catch (\Exception $e) {
    $output = [
        'errors' => [
            FormattedError::createFromException($e, DebugFlag::INCLUDE_DEBUG_MESSAGE)
        ]
    ];
}

header('Content-Type: application/json');
echo json_encode($output);
