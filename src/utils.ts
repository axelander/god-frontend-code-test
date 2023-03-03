import { BodyType, Car } from './types';

export const groupCarsByBodyType = (cars: Car[]) =>
  cars.reduce<Record<BodyType, Car[]>>((group, car) => {
    group[car.bodyType] = group[car.bodyType] ?? [];
    group[car.bodyType].push(car);
    return group;
  }, {} as Record<BodyType, Car[]>);
