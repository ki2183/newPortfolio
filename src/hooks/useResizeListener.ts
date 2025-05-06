// hooks/useResizeListener.ts
import { useEffect } from 'react';
import { useResizeStore } from '../store/resizeStore';

export const useResizeListener = (delay = 150) => {
  const setSize = useResizeStore(store => store.action.setSize);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSize(window.innerWidth, window.innerHeight);
      }, delay);
    };

    window.addEventListener('resize', handleResize);
    
    setSize(window.innerWidth, window.innerHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [setSize, delay]);
};
