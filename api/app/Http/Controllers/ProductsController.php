<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductCreateRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Interfaces\ProductRepoInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function search(Request $request)
    {
        $searchDetails = [
            'category_id' => $request->category_id,
            'per_page' => $request->per_page,
            'page' => $request->page,
        ];
        try {
            $products = $this->getProductRepoInterface()->search($searchDetails);
            return response($products, 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    public function create(ProductCreateRequest $request)
    {
        try {
            $data = [
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'quantity' => $request->quantity,
            ];
            $product = $this->getProductRepoInterface()->create($data);
            return response($product, 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    public function get(int $id)
    {
        try {
            $product = $this->getProductRepoInterface()->getById($id);
            return response($product, 200);
        } catch (ModelNotFoundException $th) {
            return response([], 404);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    public function update(ProductUpdateRequest $request, string $id)
    {
        try {
            $data = [
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'quantity' => $request->quantity,
            ];
            $product = $this->getProductRepoInterface()->update($id, $data);
            return response($product, 200);
        } catch (ModelNotFoundException $th) {
            return response([], 404);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    public function delete(string $id)
    {
        try {
            $this->getProductRepoInterface()->delete($id);
            return response([], 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    private function getProductRepoInterface(): ProductRepoInterface
    {
        return app(ProductRepoInterface::class);
    }
}
