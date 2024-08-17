<?php

namespace App\GraphQL;


use GraphQL\Type\Definition\Type;
use  App\GraphQL\Types\CategoryType;
use GraphQL\Type\Definition\ObjectType;
class Query
{
    public static function defineQueries()
    {
        $categoryType = new CategoryType();
        return new ObjectType([
            'name' => 'Query',
            'fields' => [
                'echo' => [
                    'type' => Type::string(),
                    'args' => [
                        'message' => ['type' => Type::string()],
                    ],
                    'resolve' => static fn ($rootValue, array $args): string => $rootValue['prefix'] . $args['message'],
                ],
                'categories' => [
                    'type' => Type::listOf($categoryType),
                    'resolve' => static fn () => Resolvers\CategoriesResolver::index(),
                ],
            ],
        ]);
    }
}