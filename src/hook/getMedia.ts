import { useEffect, useState } from 'react';

const useMediaWidth = () => {
  const [isPhoneWidth, setIsPhoneWidth] = useState<boolean>(false);

  useEffect(() => {
    setIsPhoneWidth(window.matchMedia('(max-width: 500px)').matches);
  }, [isPhoneWidth]);

  return isPhoneWidth;
};

export default useMediaWidth;
