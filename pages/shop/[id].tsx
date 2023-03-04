import { GetServerSideProps } from 'next';
import { Text, View } from 'vcc-ui';
import { Car } from '../../src/types';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const response = await fetch(
      `http://${ctx.req.headers.host}/api/cars.json`
    );
    const cars = (await response.json()) as Car[];
    const car = cars.find((c) => c.id === ctx.query.id);
    if (!car) throw new Error('Car not found');

    return {
      props: {
        car,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

type ShopCarProps = {
  car: Car;
};

function ShopCar({ car }: ShopCarProps) {
  return (
    <View alignItems="center" padding={10}>
      <Text variant="yang">Shop: {car.modelName}</Text>
    </View>
  );
}

export default ShopCar;
