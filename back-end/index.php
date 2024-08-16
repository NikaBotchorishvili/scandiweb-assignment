<?php
require_once 'vendor/autoload.php';
require_once 'src/schema/schema.php';

use GraphQL\GraphQL;
use GraphQL\Error\FormattedError;
use GraphQL\Error\DebugFlag;

try {
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    $query = $input['query'];
    $variableValues = isset($input['variables']) ? $input['variables'] : null;

    $rootValue = null;
    $context = null;

    $result = GraphQL::executeQuery(schema: $schema, source: $query, rootValue: $rootValue, contextValue: $context, variableValues: $variableValues);
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
