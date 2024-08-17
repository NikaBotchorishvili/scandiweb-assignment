<?php

namespace App\GraphQL;


use GraphQL\Type\Definition\Type;
use App\GraphQL\Types;
use GraphQL\Type\Definition\ObjectType;
class Query
{
    public static function defineQueries()
    {
        $categoryType = new Types\CategoryType();
        $productType = new Types\ProductType();
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
                'products' => [
                    'type' => Type::listOf($productType),
                    'resolve' => static fn () => Resolvers\ProductResolver::index(),
                ],
            ],
        ]);
    }
}