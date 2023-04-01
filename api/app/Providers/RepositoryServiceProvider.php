<?php

namespace App\Providers;

use App\Interfaces\CategoryRepoInterface;
use App\Interfaces\ProductRepoInterface;
use App\Repositories\CategoryRepo;
use App\Repositories\ProductRepo;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(CategoryRepoInterface::class, CategoryRepo::class);
        $this->app->bind(ProductRepoInterface::class, ProductRepo::class);
    }

    public function boot(): void
    {
        //
    }
}
