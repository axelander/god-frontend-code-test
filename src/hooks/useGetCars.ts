import { useEffect, useState } from 'react';
import { Car } from '../types';

type UseGetCarsResponse = {
  cars?: Car[];
  loading: boolean;
  error?: Error;
};

export const useGetCars = (): UseGetCarsResponse => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [cars, setCars] = useState<Car[]>();

  useEffect(() => {
    fetch('/api/cars.json')
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }, []);

  return { cars, loading, error };
};
