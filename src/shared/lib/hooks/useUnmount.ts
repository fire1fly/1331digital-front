import { useEffect } from 'react';
import useLatest from '../hooks/useLatest';
import { isFunction } from '../utils';

const useUnmount = (fn: () => void) => {
  if (!isFunction(fn)) {
    console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

export default useUnmount;
