import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  /** Fração do elemento visível para disparar (0–1). */
  threshold?: number;
  /** Margem do root — negativo dispara um pouco antes de entrar totalmente. */
  rootMargin?: string;
  /** Se true, revela apenas uma vez e para de observar. */
  once?: boolean;
}

/**
 * Revela um elemento quando ele entra na viewport, via IntersectionObserver.
 * Devolve uma ref para anexar ao elemento e um booleano `isVisible`.
 *
 * Respeita `prefers-reduced-motion`: nesse caso já inicia visível.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  // Threshold 0: seções mais altas que a viewport (celular, com os cards em
  // uma coluna só) nunca chegariam a exibir uma fração do próprio tamanho e
  // ficariam presas em opacity: 0.
  threshold = 0,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Sem suporte a IntersectionObserver ou movimento reduzido → mostra direto.
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
