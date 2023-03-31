<?php

namespace App\Repositories;

use App\Interfaces\CategoryRepoInterface;
use App\Models\Category;

class CategoryRepo implements CategoryRepoInterface
{
    public function getAll()
    {
        return Category::all();
    }

    public function getById($categoryId)
    {
        return Category::findOrFail($categoryId);
    }

    public function delete($categoryId)
    {
        Category::destroy($categoryId);
    }

    public function create(array $CategoryDetails)
    {
        $category = new Category();
        $category->name = $CategoryDetails['name'];
        $category->save();

        return $category->fresh();
    }

    public function update($categoryId, array $newDetails)
    {
        $category = Category::findOrFail($categoryId);
        if (isset($newDetails['name'])) {
            $category->name = $newDetails['name'];
        }
        $category->save();

        return $category->fresh();
    }
}
