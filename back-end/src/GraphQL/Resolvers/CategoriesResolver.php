<?php
namespace App\GraphQL\Resolvers;

use Throwable;
use App\Models\CategoryModel;
class CategoriesResolver
{
    public static function index(): array
    {
        try {
            $categories = CategoryModel::all();

            return $categories;
        } catch (Throwable $e) {
            throw $e;
        }
    }
    public static function find(string $id): array
    {
        try {
            $categories = CategoryModel::findOne($id);

            return $categories;
        } catch (Throwable $e) {
            throw $e;
        }
    }
    public static function findAll(string $id): array
    {
        try {
            $categories = CategoryModel::findAll($id);

            return $categories;
        } catch (Throwable $e) {
            throw $e;
        }
    }
}
