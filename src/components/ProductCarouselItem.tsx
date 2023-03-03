import Image from 'next/image';
import { Block, Link, Text, useTheme, View } from 'vcc-ui';
import { Car } from '../types';

export const ProductCarouselItem: React.FC<{ car: Car }> = ({ car }) => {
  const theme = useTheme();

  return (
    <View>
      <Text
        subStyle="emphasis"
        variant="bates"
        extend={{
          textTransform: 'uppercase',
          color: theme.color.foreground.secondary,
        }}
      >
        {car.bodyType}
      </Text>
      <Text as="h3">
        <Text subStyle="emphasis">{car.modelName} </Text>
        <Text extend={{ color: theme.color.foreground.secondary }}>
          {car.modelType}
        </Text>
      </Text>

      <Block extend={{ position: 'relative' }}>
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          layout="responsive"
          width="100%"
          height="75%"
        />
      </Block>

      <View spacing={4} direction="row" justifyContent="center">
        <Link href={`/learn/${car.id}`} arrow="right">
          Learn
        </Link>
        <Link href={`/shop/${car.id}`} arrow="right">
          Shop
        </Link>
      </View>
    </View>
  );
};
