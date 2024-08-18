<?php

namespace App\GraphQL\Resolvers;

use App\Models\PriceModel;

use Throwable;

class PriceResolver
{
    public static function index(): array
    {
        try {
            $prices = PriceModel::all();

            return $prices;
        } catch (Throwable $e) {
            throw $e;
        }
    }
    public static function findAll(string $product_id): array
    {
        try {
            $prices = PriceModel::findAll(value: $product_id, column: 'product_id');
            error_log(print_r($prices, true));
            
            return $prices;
        } catch (Throwable $e) {
            throw $e;
        }
    }
}
