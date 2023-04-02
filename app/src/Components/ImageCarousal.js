import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ images }) => {
    return (
        <Carousel showThumbs={false} width={400} showArrows infiniteLoop autoPlay>
            {
                images.length > 0 ?
                    images.map((image) =>
                        <div key={image.id}>
                            <img src={image.location} alt='test' />
                        </div>
                    )
                    : 'no images'
            }
        </Carousel>
    );
}

export default ImageCarousel;