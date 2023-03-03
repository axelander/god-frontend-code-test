import { useEffect, useState } from 'react';
import { Col, Grid, Row } from 'vcc-ui';
import { ProductCarousel } from '../src/components/ProductCarousel';
import { Car } from '../src/types';

function Home() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch('/api/cars.json')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <Grid>
      <Row>
        <Col size={12}>
          <ProductCarousel cars={cars} />
        </Col>
      </Row>
    </Grid>
  );
}

export default Home;
