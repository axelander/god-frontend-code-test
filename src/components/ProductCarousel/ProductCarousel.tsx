import { Block, Click, Spacer, useTheme, View } from 'vcc-ui';
import { Car } from '../../types';
import { ProductCarouselItem } from './ProductCarouselItem';
import { useSpringCarousel } from 'react-spring-carousel';
import { ProductCarouselNavButton } from './ProductCarouselNavButton';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useMemo, useState } from 'react';

interface ProductCarouselProps {
  cars: Car[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ cars }) => {
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.fromL);
  const isMediumScreen = useMediaQuery(theme.breakpoints.fromM);

  const itemsPerSlide = useMemo(() => {
    if (isLargeScreen) return 4;
    if (isMediumScreen) return 3;
    return 1.5;
  }, [isLargeScreen, isMediumScreen]);

  const {
    carouselFragment,
    slideToNextItem,
    slideToPrevItem,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    gutter: 20,
    itemsPerSlide: itemsPerSlide,
    items: cars.map((car) => ({
      id: car.id,
      renderItem: <ProductCarouselItem key={car.id} car={car} />,
    })),
  });

  const [currentSlide, setCurrentSlide] = useState<{
    index: number;
    id: string;
  }>({ index: 0, id: cars[0].id });

  useListenToCustomEvent((event) => {
    if (event.eventName === 'onSlideStartChange') {
      setCurrentSlide(event.nextItem);
    }
  });

  return (
    <View paddingTop={10}>
      <Block style={{ position: 'relative', overflow: 'hidden' }}>
        {carouselFragment}
      </Block>

      <View
        direction={'row'}
        justifyContent="center"
        extend={{ fromL: { display: 'none' } }}
      >
        {cars.map((car) => (
          <Click key={car.id} onClick={() => slideToItem(car.id)}>
            <Block
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  currentSlide?.id === car.id
                    ? theme.color.foreground.primary
                    : 'rgb(235, 235, 235)',
                margin: 5,
              }}
            />
          </Click>
        ))}
      </View>

      <View
        direction={'row'}
        justifyContent="flex-end"
        extend={{ untilL: { display: 'none' } }}
      >
        <ProductCarouselNavButton
          direction="left"
          onClick={slideToPrevItem}
          alt="Go to previous slide"
        />
        <Spacer />
        <ProductCarouselNavButton
          direction="right"
          onClick={slideToNextItem}
          alt="Go to next slide"
        />
      </View>
    </View>
  );
};
