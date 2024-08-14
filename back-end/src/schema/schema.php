<?php
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Schema;

class CategoryType extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'Category',
            'fields' => [
                'id' => Type::int(),
                'name' => Type::string()
            ]
        ]);
    }
}
$rootQuery = new ObjectType([
    'name' => 'Query',
    'fields' => [
        'hello' => [
            'type' => Type::string(),
            'resolve' => function() {
                return 'Hello, World!';
            }
        ]
    ]
]);

$schema = new Schema([
    'query' => $rootQuery
]);
?>