<?php

use App\Http\Controllers\CategoriesController;
use Illuminate\Support\Facades\Route;

Route::prefix('categories')->group(function () {
    Route::get('/', CategoriesController::class . '@all');
    Route::get('/{id}', CategoriesController::class . '@get');
    Route::post('/', CategoriesController::class . '@create');
    Route::patch('/{id}', CategoriesController::class . '@update');
    Route::delete('/{id}', CategoriesController::class . '@delete');
});
