import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      scroller.scrollTo(hash, {
        smooth: true,
        offset: 0, // No offset since there is no header
        duration: 500,
      });
    }
  }, [location]);
};

export default useScrollToSection;
