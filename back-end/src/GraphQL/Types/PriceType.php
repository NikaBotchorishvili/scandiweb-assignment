<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;

use GraphQL\Type\Definition\ObjectType;

use App\GraphQL\Resolvers;

class PriceType extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'Price',
            'fields' => [
                'id' => Type::int(),
                'amount' => Type::float(),
                'currency_label' => Type::string(),
                'currency_symbol' => Type::string(),
            ],
        ]);
    }
}
