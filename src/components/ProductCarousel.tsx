import { Car } from '../types';

interface ProductCarouselProps {
  cars: Car[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ cars }) => {
  console.log(cars);
  return null;
};
