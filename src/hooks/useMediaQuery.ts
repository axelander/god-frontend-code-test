import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query.replace('@media ', ''));
    // Initial match
    setMatches(matchQueryList.matches);

    const onQueryMatchChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    matchQueryList.addEventListener('change', onQueryMatchChange);

    return () => {
      matchQueryList.removeEventListener('change', onQueryMatchChange);
    };
  }, [query]);

  return matches;
};
