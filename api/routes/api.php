<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;

Route::prefix('categories')->group(function () {
    Route::get('/', CategoriesController::class . '@all');
    Route::get('/{id}', CategoriesController::class . '@get');
    Route::post('/', CategoriesController::class . '@create');
    Route::patch('/{id}', CategoriesController::class . '@update');
    Route::delete('/{id}', CategoriesController::class . '@delete');
});

Route::prefix('products')->group(function () {
    Route::get('/', ProductsController::class . '@search');
    Route::get('/{id}', ProductsController::class . '@get');
    Route::post('/', ProductsController::class . '@create');
    Route::patch('/{id}', ProductsController::class . '@update');
    Route::delete('/{id}', ProductsController::class . '@delete');
});
