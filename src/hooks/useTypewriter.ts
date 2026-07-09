import { useEffect, useRef, useState } from 'react';

interface TypewriterOptions {
  /** Velocidade de digitação de cada caractere, em ms. */
  typeSpeed?: number;
  /** Velocidade ao apagar cada caractere, em ms. */
  deleteSpeed?: number;
  /** Pausa após terminar de digitar uma frase, em ms. */
  pauseAfterType?: number;
  /** Pausa após apagar completamente, antes da próxima frase, em ms. */
  pauseAfterDelete?: number;
}

/**
 * Efeito de máquina de escrever: digita cada frase caractere a caractere,
 * pausa, apaga, e avança para a próxima frase em loop infinito.
 *
 * Respeita `prefers-reduced-motion`: nesse caso devolve a primeira frase
 * completa e estática, sem animar.
 */
export function useTypewriter(
  phrases: string[],
  {
    typeSpeed = 90,
    deleteSpeed = 45,
    pauseAfterType = 1600,
    pauseAfterDelete = 500,
  }: TypewriterOptions = {}
): string {
  const [text, setText] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phrases.length === 0) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setText(phrases[0]);
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = phrases[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        setText(current.slice(0, charIndex));

        if (charIndex === current.length) {
          deleting = true;
          timeoutRef.current = setTimeout(tick, pauseAfterType);
          return;
        }
        timeoutRef.current = setTimeout(tick, typeSpeed);
      } else {
        charIndex -= 1;
        setText(current.slice(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeoutRef.current = setTimeout(tick, pauseAfterDelete);
          return;
        }
        timeoutRef.current = setTimeout(tick, deleteSpeed);
      }
    };

    timeoutRef.current = setTimeout(tick, typeSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.join('|'), typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return text;
}
