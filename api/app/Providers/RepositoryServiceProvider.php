<?php

namespace App\Providers;

use App\Interfaces\CategoryRepoInterface;
use App\Repositories\CategoryRepo;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(CategoryRepoInterface::class, CategoryRepo::class);
    }

    public function boot(): void
    {
        //
    }
}
