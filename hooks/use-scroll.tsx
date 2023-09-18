'use client';

import { useEffect, useState } from 'react';

type Position = { left: number; top: number };

export default function useScroll(dom: Element | Document) {
  const [scroll, setScroll] = useState<Position>();

  useEffect(() => {
    const handleScroll = () => {
      let newPosition: Position;
      if (!dom) return;

      if (dom === document) {
        if (dom.scrollingElement) {
          newPosition = {
            top: dom.scrollingElement.scrollTop,
            left: dom.scrollingElement.scrollLeft,
          };
        } else {
          newPosition = {
            left: Math.max(
              window.pageXOffset,
              document.documentElement.scrollLeft,
              document.body.scrollLeft,
            ),
            top: Math.max(
              window.pageYOffset,
              document.documentElement.scrollTop,
              document.body.scrollTop,
            ),
          };
        }
      } else {
        newPosition = {
          top: (dom as Element).scrollTop,
          left: (dom as Element).scrollLeft,
        };
      }
      setScroll(newPosition);
    };

    dom.addEventListener('scroll', handleScroll);
    return () => {
      dom.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scroll;
}
