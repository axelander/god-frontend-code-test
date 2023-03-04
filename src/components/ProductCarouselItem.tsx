import Image from 'next/image';
import { Block, Link, Text, useTheme, View } from 'vcc-ui';
import { Car } from '../types';

export const ProductCarouselItem: React.FC<{ car: Car }> = ({ car }) => {
  const theme = useTheme();

  return (
    <View flex={1}>
      <View paddingBottom={2}>
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
        <View extend={{ fromL: { flexDirection: 'row' } }}>
          <Text
            as="h3"
            subStyle="emphasis"
            extend={{ marginRight: '5px', whiteSpace: 'nowrap' }}
          >
            {car.modelName}
          </Text>
          <Text
            extend={{
              color: theme.color.foreground.secondary,
              whiteSpace: 'nowrap',
            }}
          >
            {car.modelType}
          </Text>
        </View>
      </View>

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
