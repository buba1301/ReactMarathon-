import { useEffect, useState } from 'react';

const useDebounce = (seacrchValue: string, delay: number): string => {
  const [debounceValue, setDeabounceValue] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeabounceValue(seacrchValue);
    }, delay);

    return () => clearInterval(handler);
  }, [seacrchValue]);

  return debounceValue;
};

export default useDebounce;
