import { useState } from 'react';
import { Block, Col, Grid, LoadingBar, Row, Text, View } from 'vcc-ui';
import { ProductCarousel } from '../src/components/ProductCarousel';
import { TabFilter } from '../src/components/TabFilter';
import { useGetCars } from '../src/hooks/useGetCars';
import { groupCarsByBodyType } from '../src/utils';

function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { cars, loading, error } = useGetCars();

  if (loading)
    return (
      <Block extend={{ position: 'fixed', top: 0, left: 0, width: '100%' }}>
        <LoadingBar isLoading={loading} />
      </Block>
    );

  if (error) {
    return <Text>Failed to fetch cars :(</Text>;
  }

  if (!cars) return <Text>No cars</Text>;

  const groupedByBodyType = groupCarsByBodyType(cars);
  const filterItems = [
    { id: 'all', text: `All (${cars.length})` },
    { id: 'suv', text: `SUV (${groupedByBodyType['suv'].length})` },
    {
      id: 'estate',
      text: `Estate (${groupedByBodyType['estate'].length})`,
    },
    { id: 'sedan', text: `Sedan (${groupedByBodyType['sedan'].length})` },
  ];

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
