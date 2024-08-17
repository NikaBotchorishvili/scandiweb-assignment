<?php
namespace App\GraphQL\Resolvers;

use Throwable;
use App\Models\Category;
class CategoriesResolver
{
    public static function index(): array
    {
        try {
            $categories = Category::all();

            return $categories;
        } catch (Throwable $e) {
            throw $e;
        }
    }
}
