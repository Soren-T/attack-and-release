import { useState, useEffect } from 'react';

const windowExists = typeof window !== `undefined`;

const useWindowSize = () => {
  let h = 0;
  let w = 0;
  if (windowExists) {
    const { innerHeigth, innerWidth } = window;
    [ h, w ] = [ innerHeigth, innerWidth];
  }
  const [width, setWidth] = useState(w);
  const [height, setHeight] = useState(h);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if(windowExists) {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  return { width, height };
};

export default useWindowSize;