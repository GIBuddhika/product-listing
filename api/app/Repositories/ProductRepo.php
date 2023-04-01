<?php

namespace App\Repositories;

use App\Interfaces\ProductRepoInterface;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;

class ProductRepo implements ProductRepoInterface
{
    public function search($searchDetails)
    {
        $productsQ = Product::query();
        $productsQ->with('images');

        if (isset($searchDetails['category_id'])) {
            $productsQ->whereHas('categories', function (Builder $query) use ($searchDetails) {
                $query->where('id', $searchDetails['category_id']);
            });
        }

        return $productsQ->get();
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
