<?php

namespace App\Models;

use ReflectionClass;
use App\Config\Database;

abstract class Model
{
    protected Database $db;
    protected static string $table;

    public function __construct()
    {
        $this->db = new Database();

        if (!isset(static::$table)) {
            static::$table = strtolower((new ReflectionClass($this))->getShortName()) . 's';
        }
    }

    public static function all(): array
    {
        return (new static)->db->query('SELECT * FROM ' . static::$table)->get();
    }

    public static function findOne(string $value, ?string $column = 'id'): ?array
    {
        return (new static)->db->query(
            'SELECT * FROM ' . static::$table . ' WHERE ' . $column . ' = :value LIMIT 1',
            [
                'value' => $value,
            ]
        )->fetchOrFail();
    }
    public static function findAll(string $value, ?string $column = 'id'): ?array
    {
        return (new static)->db->query(
            'SELECT * FROM ' . static::$table . ' WHERE ' . $column . ' = :value',
            [
                'value' => $value,
            ]
        )->fetchOrFail();
    }
}
