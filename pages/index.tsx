import { useEffect, useState } from 'react';
import { ProductCarousel } from '../src/components/ProductCarousel';
import { Car } from '../src/types';

function Home() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch('/api/cars.json')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return <ProductCarousel cars={cars} />;
}

export default Home;
