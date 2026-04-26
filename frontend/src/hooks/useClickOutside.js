import { useEffect } from 'react';

/**
 * useClickOutside hook
 * Triggers a callback when a click is detected outside of a referenced element.
 * Useful for modals and dropdown menus.
 */
function useClickOutside(ref, callback) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
