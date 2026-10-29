import { useEffect } from 'react';

// Espera a la fuente para que la animación del nombre se vea con Archivo y no con la de
// reserva. Si tarda demasiado (conexión lenta), muestra el nombre ya ensanchado, sin animación.
export function useNameReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const animate = () => {
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-ready')));
    };
    const skip = () => root.classList.remove('js');

    if (!document.fonts) {
      skip();
      return;
    }

    let cancelled = false;
    const timeout = new Promise<'timeout'>((resolve) => setTimeout(resolve, 1200, 'timeout'));
    Promise.race([document.fonts.load('800 1em Archivo'), timeout]).then(
      (result) => {
        if (cancelled) return;
        result === 'timeout' ? skip() : animate();
      },
      () => {
        if (!cancelled) skip();
      },
    );

    return () => {
      cancelled = true;
    };
  }, []);
}
