import { useState, useEffect } from 'react';

/**
 * useDebounce hook
 * Delays the update of a value by a specified delay time.
 * Useful for search inputs to prevent excessive API calls.
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
