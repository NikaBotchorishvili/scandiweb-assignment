<?php

namespace App\GraphQL;

use Throwable;
use RuntimeException;
use GraphQL\Type\Schema;
use App\GraphQL\Query;
use GraphQL\GraphQL as GraphQLBase;

class Controller
{
    public static function handle()
    {
        try {
            $queryType = Query::defineQueries();

            $schema = new Schema([
                'query' => $queryType
            ]);

            $output = self::executeQuery($schema);
        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                    'trace' => $e->getTraceAsString(),
                ],
            ];
        }

        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode($output);
    }

    private static function executeQuery($schema)
    {
        try {
            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get the php://input');
            }

            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;
            $rootValue = ['prefix' => 'You said: '];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, null, $variableValues);

            return $result->toArray();
        } catch (Throwable $e) {

            return [
                'errors' => [
                    [
                        'message' => 'An error occurred during query execution.',
                        'details' => $e->getMessage(),
                        'trace' => $e->getTraceAsString(),
                    ],
                ],
            ];
        }
    }
}
