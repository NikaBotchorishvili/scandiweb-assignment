<?php

echo "Commented out this code just so I don't accidentally run it again. Uncomment it to run it again.";

// $host = getenv("DB_HOST");
// $username = getenv("DB_USERNAME");
// $password = getenv("DB_PASSWORD");
// $dbname =  getenv("DB_NAME");

// try {
//     $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "Connected successfully\n";

//     // Load JSON data from a file
//     $jsonData = file_get_contents('./data.json');
//     $data = json_decode($jsonData, true);

//     // Insert categories
//     foreach ($data['data']['categories'] as $category) {
//         $stmt = $conn->prepare("INSERT INTO categories (name) VALUES (:name)
//                                 ON DUPLICATE KEY UPDATE name=:name");
//         $stmt->execute([':name' => $category['name']]);
//     }

//     // Insert products
//     foreach ($data['data']['products'] as $product) {
//         // Get category ID
//         $stmt = $conn->prepare("SELECT id FROM categories WHERE name=:category");
//         $stmt->execute([':category' => $product['category']]);
//         $categoryId = $stmt->fetchColumn();

//         // Insert product
//         $stmt = $conn->prepare("INSERT INTO products (sku, name, inStock, description, category_id, brand)
//                                 VALUES (:sku, :name, :inStock, :description, :category_id, :brand)
//                                 ON DUPLICATE KEY UPDATE name=:name, inStock=:inStock, description=:description, category_id=:category_id, brand=:brand");
//         $stmt->execute([
//             ':sku' => $product['id'],  // Save the original alphanumeric ID in the 'sku' field
//             ':name' => $product['name'],
//             ':inStock' => $product['inStock'],
//             ':description' => $product['description'],
//             ':category_id' => $categoryId,
//             ':brand' => $product['brand']
//         ]);

//         // Get the auto-incremented product ID
//         $productId = $conn->lastInsertId();

//         // Insert galleries
//         foreach ($product['gallery'] as $image_url) {
//             $stmt = $conn->prepare("INSERT INTO galleries (product_id, image_url) VALUES (:product_id, :image_url)");
//             $stmt->execute([':product_id' => $productId, ':image_url' => $image_url]);
//         }

//         // Insert attributes and attribute items
//         foreach ($product['attributes'] as $attribute) {
//             $stmt = $conn->prepare("INSERT INTO attributes (product_id, name, type) VALUES (:product_id, :name, :type)
//                                     ON DUPLICATE KEY UPDATE name=:name, type=:type");
//             $stmt->execute([
//                 ':product_id' => $productId,
//                 ':name' => $attribute['name'],
//                 ':type' => $attribute['type']
//             ]);

//             $attributeId = $conn->lastInsertId();

//             // Insert attribute items
//             foreach ($attribute['items'] as $item) {
//                 $stmt = $conn->prepare("INSERT INTO attribute_items (attribute_id, displayValue, value)
//                                         VALUES (:attribute_id, :displayValue, :value)");
//                 $stmt->execute([
//                     ':attribute_id' => $attributeId,
//                     ':displayValue' => $item['displayValue'],
//                     ':value' => $item['value']
//                 ]);
//             }
//         }

//         // Insert prices
//         foreach ($product['prices'] as $price) {
//             $stmt = $conn->prepare("INSERT INTO prices (product_id, amount, currency_label, currency_symbol)
//                                     VALUES (:product_id, :amount, :currency_label, :currency_symbol)");
//             $stmt->execute([
//                 ':product_id' => $productId,
//                 ':amount' => $price['amount'],
//                 ':currency_label' => $price['currency']['label'],
//                 ':currency_symbol' => $price['currency']['symbol']
//             ]);
//         }
//     }

//     echo "Data inserted successfully!";
// } catch (PDOException $e) {
//     echo "Connection failed: " . $e->getMessage();
// }