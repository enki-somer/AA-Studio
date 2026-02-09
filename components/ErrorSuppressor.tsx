'use client';

import { useEffect } from 'react';

export default function ErrorSuppressor() {
  useEffect(() => {
    // Suppress known Lottie SVG filter NaN errors
    const originalError = console.error;
    console.error = (...args: any[]) => {
      const errorMessage = String(args[0] || '');
      
      // Suppress SVG filter/attribute NaN errors from Lottie animations
      if (
        (errorMessage.includes('feOffset') ||
         errorMessage.includes('feGaussianBlur') ||
         errorMessage.includes('feColorMatrix') ||
         errorMessage.includes('feComposite') ||
         errorMessage.includes('feFlood') ||
         errorMessage.includes('feMorphology') ||
         errorMessage.includes('attribute')) &&
        (errorMessage.includes('NaN') || 
         errorMessage.includes('Expected number') ||
         errorMessage.includes('Expected length'))
      ) {
        return;
      }
      
      // Call original console.error for other errors
      originalError.apply(console, args);
    };

    // Also suppress browser errors at window level
    const originalWindowError = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      const msg = String(message);
      if (
        msg.includes('feOffset') || 
        msg.includes('lottie') ||
        msg.includes('SVG') ||
        msg.includes('Expected number')
      ) {
        return true; // Prevent default error handling
      }
      if (originalWindowError) {
        return originalWindowError(message, source, lineno, colno, error);
      }
      return false;
    };

    return () => {
      console.error = originalError;
      window.onerror = originalWindowError;
    };
  }, []);

  return null;
}
