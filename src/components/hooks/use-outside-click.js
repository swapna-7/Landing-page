import React, { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // Check if the clicked target is outside the referenced element
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    // Attach event listeners
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
