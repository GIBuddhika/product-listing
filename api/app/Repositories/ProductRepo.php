<?php

namespace App\Repositories;

use App\Interfaces\ProductRepoInterface;
use App\Models\Product;

class ProductRepo implements ProductRepoInterface
{
    public function search($searchDetails)
    {
        return Product::all();
    }

    public function getById($productId)
    {
        return Product::findOrFail($productId);
    }

    public function delete($productId)
    {
        Product::destroy($productId);
    }

    public function create(array $productDetails)
    {
        $product = new Product();

        $product->name = $productDetails['name'];
        $product->description = $productDetails['description'];
        $product->price = $productDetails['price'];
        $product->quantity = $productDetails['quantity'];

        $product->save();

        return $product->fresh();
    }

    public function update($productId, array $newDetails)
    {
        $product = Product::findOrFail($productId);

        if (isset($newDetails['name'])) {
            $product->name = $newDetails['name'];
        }
        if (isset($newDetails['description'])) {
            $product->description = $newDetails['description'];
        }
        if (isset($newDetails['price'])) {
            $product->price = $newDetails['price'];
        }
        if (isset($newDetails['quantity'])) {
            $product->quantity = $newDetails['quantity'];
        }

        $product->save();

        return $product->fresh();
    }
}
