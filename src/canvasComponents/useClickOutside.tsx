"use client";

import React, { useEffect, MutableRefObject } from "react";

export default function useOnClickOutside({
  ref,
  handler
}: {
  ref: MutableRefObject<any>;
  handler: (event: MouseEvent | TouchEvent) => void;
}) {
  useEffect(() => {
    // Verifica que el código solo se ejecute en el lado del cliente
    if (typeof document === 'undefined') {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      // No hacer nada si se hace clic en el elemento del ref o en los elementos descendientes
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
