import { useEffect } from 'react';

export const usePolling = (action: () => void, interval = 5000) => {
  useEffect(() => {
    const int_ = setInterval(() => {
      action();
    }, interval);

    return () => {
      clearInterval(int_);
    };
  }, [action]);
};
