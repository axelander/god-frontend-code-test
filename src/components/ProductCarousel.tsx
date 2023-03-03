import { View } from 'vcc-ui';
import { Car } from '../types';
import { ProductCarouselItem } from './ProductCarouselItem';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

interface ProductCarouselProps {
  cars: Car[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ cars }) => {
  return (
    <div style={{ position: 'relative' }}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={cars.length}
        visibleSlides={4}
      >
        <Slider>
          {cars.map((car, index) => (
            <Slide key={car.id} index={index}>
              <View extend={{ paddingInline: 8 }}>
                <ProductCarouselItem key={car.id} car={car} />
              </View>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};
