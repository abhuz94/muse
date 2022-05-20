import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    return { width: window.innerWidth, height: window.innerHeight };
  }

  return { width: 0, height: 0 };
};

export default function useResize() {
  const [dim, setDim] = useState(getWindowDimensions());

  useEffect(() => {
    const resizeHandler = () => setDim(getWindowDimensions());

    if (typeof window !== 'undefined') { window.addEventListener('resize', resizeHandler); }

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return dim;
}
