<?php

namespace App\Interfaces;

interface CategoryRepoInterface
{
    public function getAll();
    public function getById($categoryId);
    public function delete($categoryId);
    public function create(array $categoryDetails);
    public function update($categoryId, array $newDetails);
}
