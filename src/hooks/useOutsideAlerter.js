import { useEffect, useRef, useState } from 'react';

const useOutsideAlerter = initialisVisible => {
  const [isShow, setIsShow] = useState(initialisVisible);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(!isShow);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isShow, setIsShow };
};

export default useOutsideAlerter;
