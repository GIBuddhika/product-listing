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

        $total = $productsQ->count();

        if (isset($searchDetails['per_page'])) {
            $productsQ->take($searchDetails['per_page'])
                ->skip($searchDetails['per_page'] * ($searchDetails['page'] - 1));
        }

        $products = $productsQ->get();

        return [
            'total' => $total,
            'results' => $products
        ];
    }

    public function getById($productId)
    {
        return Product::with('images')->where('id', $productId)->firstOrFail();
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
