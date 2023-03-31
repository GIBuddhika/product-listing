<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('images')->insert(
            [
                [
                    'entity' => 'product',
                    'entity_id' => 1,
                    'location' => 'https://i.ebayimg.com/images/g/vIIAAOSwzQhj9dTK/s-l1600.png',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 1,
                    'location' => 'https://i.ebayimg.com/images/g/OCcAAOSw79hj9dSX/s-l1600.png',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 2,
                    'location' => 'https://images.puma.net/images/386453/01/sv04/fnd/PNA/.jpg',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 2,
                    'location' => 'https://images.puma.net/images/386453/01/sv02/fnd/PNA/.jpg',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 2,
                    'location' => 'https://images.puma.net/images/386453/04/sv03/fnd/PNA/.jpg',
                ],
                [
                    'entity' => 'category',
                    'entity_id' => 1,
                    'location' => 'https://i.ebayimg.com/thumbs/images/g/u2EAAOSwDh1e7xmY/s-l225.webp',
                ],
                [
                    'entity' => 'category',
                    'entity_id' => 2,
                    'location' => 'https://i.ebayimg.com/thumbs/images/g/RloAAOSwK2Re7xma/s-l225.webp',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 3,
                    'location' => 'https://i.ebayimg.com/images/g/Fe0AAOSwd2BjkFdd/s-l1600.jpg',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 3,
                    'location' => 'https://i.ebayimg.com/images/g/olYAAOSwGBNitXIs/s-l1600.jpg',
                ],
                [
                    'entity' => 'category',
                    'entity_id' => 3,
                    'location' => 'https://www.heinens.com/wp-content/uploads/2022/08/Heinens-Health-And-Beauty-products-800x550-1.jpg',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 4,
                    'location' => 'https://i.ebayimg.com/images/g/JksAAOSwiw9jKyG6/s-l1600.jpg',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 5,
                    'location' => 'https://i.ebayimg.com/images/g/vwEAAOSwrCVj~40a/s-l1600.jpg',
                ],
                [
                    'entity' => 'category',
                    'entity_id' => 5,
                    'location' => 'https://i.ebayimg.com/thumbs/images/g/ukAAAOSwmCZjFt~1/s-l960.webp',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 6,
                    'location' => 'https://i.ebayimg.com/images/g/~FIAAOSw1Upgis3f/s-l1600.jpg',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 6,
                    'location' => 'https://i.ebayimg.com/images/g/p8IAAOSwnipWahDb/s-l500.jpg',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 7,
                    'location' => 'https://i.ebayimg.com/images/g/oQoAAOSwiRFjKCV2/s-l1600.jpg',
                ],
                [
                    'entity' => 'product',
                    'entity_id' => 7,
                    'location' => 'https://i.ebayimg.com/images/g/ML0AAOSwijhjKCV5/s-l1600.jpg',
                ],
                [
                    'entity' => 'category',
                    'entity_id' => 6,
                    'location' => 'https://i.ebayimg.com/thumbs/images/g/LjoAAOSwXNBfNyUm/s-l960.webp',
                ],
            ]
        );
    }
}
