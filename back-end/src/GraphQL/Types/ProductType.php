<?php
namespace App\GraphQL\Types;
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use App\GraphQL\Resolvers;


class ProductType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Product',
            'fields' => [
                'id' => Type::int(),
                'name' => Type::string(),
                'brand' => Type::string(),
                'description' => Type::string(),
                'inStock' => Type::boolean(),
                "sku" => Type::string(),
                'category' => [
                    'type' => new CategoryType(),
                    'resolve' => function ($product) {
                        return Resolvers\CategoriesResolver::find($product['category_id']);
                    }
                ],
                'prices' => [
                    'type' => Type::listOf(new PriceType()),
                    'resolve' => function ($product) {
                        $prices = Resolvers\PriceResolver::findAll($product['id']);

                        return $prices;
                    }
                ],
            ],
        ]);
    }
}
