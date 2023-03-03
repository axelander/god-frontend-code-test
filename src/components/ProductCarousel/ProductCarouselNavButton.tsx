import Image from 'next/image';
import { Click } from 'vcc-ui';

interface ProductCarouselNavButtonProps {
  onClick: () => void;
  alt: string;
  direction: 'left' | 'right';
}

export const ProductCarouselNavButton: React.FC<
  ProductCarouselNavButtonProps
> = ({ onClick, alt, direction }) => {
  return (
    <Click onClick={onClick}>
      <Image
        src={'/images/chevron-circled.svg'}
        width={40}
        height={40}
        style={direction === 'left' ? { transform: 'rotate(180deg)' } : {}}
        alt={alt}
      />
    </Click>
  );
};
