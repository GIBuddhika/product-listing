<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('products')->insert(
            [
                [
                    'id' => 1,
                    'name' => 'Straight Regular Fashion Trousers',
                    'description' => '2023 Spring Men\'s Elastic Jean Straight Regular Fashion Trousers Men Jeans 28-40',
                    'price' => 46.56,
                    'quantity' => 100,
                ],
                [
                    'id' => 2,
                    'name' => 'PUMA Sneakers',
                    'description' => 'PUMA Men\s Pacer Future Wide Sneakers',
                    'price' => 37.99,
                    'quantity' => 50,
                ],
                [
                    'id' => 3,
                    'name' => 'Whitening Pills',
                    'description' => '1000mg Glutathione Capsules Skin Health Anti-Aging Enhanced Whitening Pills',
                    'price' => 19.99,
                    'quantity' => 500,
                ],
                [
                    'id' => 4,
                    'name' => 'Dogs Tablets',
                    'description' => 'Joint Supplement for Adult Dogs Tablets Various Sizes- DIRECT',
                    'price' => 22.50,
                    'quantity' => 1000,
                ],
                [
                    'id' => 5,
                    'name' => 'Oral health dog bowl',
                    'description' => 'Licki Mat Oh bowl. Oral health dog bowl. Green and grey. New',
                    'price' => 15,
                    'quantity' => 20,
                ],
                [
                    'id' => 6,
                    'name' => '100% Cotton Cushion',
                    'description' => 'Handmade Home Sweet Home 100% Cotton Cushion Cover.Various sizes',
                    'price' => 7,
                    'quantity' => 45,
                ],
                [
                    'id' => 7,
                    'name' => 'Queen Mattress',
                    'description' => 'Modway 10” Cooling Gel-Infused Ventilated Memory Foam Queen Mattress',
                    'price' => 414.75,
                    'quantity' => 5,
                ],
            ]
        );
    }
}
