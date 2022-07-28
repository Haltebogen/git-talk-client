import { useEffect, useState } from 'react';

const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (isShown && event.key === 'Escape') {
        setIsShown(false);
      }
    };
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [isShown]);

  return {
    isShown,
    openModal: () => setIsShown(true),
    closeModal: () => setIsShown(false),
  };
};

export default useModal;
