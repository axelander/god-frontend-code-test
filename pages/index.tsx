import { useEffect, useState } from 'react';
import { Col, Grid, Row, View } from 'vcc-ui';
import { ProductCarousel } from '../src/components/ProductCarousel';
import { TabFilter } from '../src/components/TabFilter';
import { Car } from '../src/types';
import { groupCarsByBodyType } from '../src/utils';

function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    fetch('/api/cars.json')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  if (!cars.length) return null;

  const groupedByBodyType = groupCarsByBodyType(cars);
  const filterItems = [
    { id: 'all', text: `All (${cars.length})`, value: 'all' },
  ];

  filterItems.push(
    ...Object.values(groupedByBodyType).map((group) => ({
      id: group[0].bodyType,
      text: `${group[0].bodyType} (${group.length})`,
      value: group[0].bodyType,
    }))
  );

  const filteredCars =
    selectedFilter === 'all'
      ? cars
      : cars.filter((car) => car.bodyType === selectedFilter);

  return (
    <Grid>
      <Row>
        <Col size={12}>
          <View paddingTop={10}>
            <TabFilter
              items={filterItems}
              activeItemId={selectedFilter}
              onItemClick={(value) => setSelectedFilter(value)}
            />
          </View>
        </Col>
      </Row>
      <Row>
        <Col size={12}>
          <ProductCarousel cars={filteredCars} />
        </Col>
      </Row>
    </Grid>
  );
}

export default Home;
