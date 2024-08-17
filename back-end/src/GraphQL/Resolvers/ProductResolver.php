<?php

namespace App\GraphQL\Resolvers;

use App\Models\ProductModel;

use Throwable;

class ProductResolver{
    public static function index(): array
    {
        try {
            $categories = ProductModel::all();

            return $categories;
        } catch (Throwable $e) {
            throw $e;
        }
    }
}