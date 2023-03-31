<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryCreateRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Interfaces\CategoryRepoInterface;
use \Illuminate\Database\Eloquent\ModelNotFoundException;

class CategoriesController extends Controller
{
    public function all()
    {
        try {
            $categories = $this->getCategoryRepoInterface()->getAll();
            return response($categories, 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    public function create(CategoryCreateRequest $request)
    {
        try {
            $data = [
                'name' => $request->name,
            ];
            $category = $this->getCategoryRepoInterface()->create($data);
            return response($category, 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    public function get(int $id)
    {
        try {
            $category = $this->getCategoryRepoInterface()->getById($id);
            return response($category, 200);
        } catch (ModelNotFoundException $th) {
            return response([], 404);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    public function update(CategoryUpdateRequest $request, string $id)
    {
        try {
            $data = [
                'name' => $request->name,
            ];
            $category = $this->getCategoryRepoInterface()->update($id, $data);
            return response($category, 200);
        } catch (ModelNotFoundException $th) {
            return response($th->getMessage(), 404);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    public function delete(string $id)
    {
        try {
            $this->getCategoryRepoInterface()->delete($id);
            return response([], 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 500);
        }
    }

    private function getCategoryRepoInterface(): CategoryRepoInterface
    {
        return app(CategoryRepoInterface::class);
    }
}
