import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const windowExists = typeof window !== `undefined`;
  console.log(windowExists)
  let h = 0;
  let w = 0;
  if (windowExists) {
    console.log(window, "WINDOW")
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
  }, [windowExists]);

  return { width, height };
};

export default useWindowSize;