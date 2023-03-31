<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('categories')->insert(
            [
                [
                    'id' => 1,
                    'name' => 'Style and Fashion',
                ],
                [
                    'id' => 2,
                    'name' => 'Sports',
                ],
                [
                    'id' => 3,
                    'name' => 'Health',
                ],
                [
                    'id' => 4,
                    'name' => 'Pets',
                ],
                [
                    'id' => 5,
                    'name' => 'Home and Garden',
                ],
                [
                    'id' => 6,
                    'name' => 'Automobile',
                ],
            ]
        );
    }
}
