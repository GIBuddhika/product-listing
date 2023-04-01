<?php

namespace App\Interfaces;

interface ProductRepoInterface
{
    public function search(array $searchDetails);
    public function getById($productId);
    public function delete($productId);
    public function create(array $productDetails);
    public function update($productId, array $newDetails);
}
