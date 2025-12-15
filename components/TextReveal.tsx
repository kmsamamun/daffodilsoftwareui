import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { cn } from '../lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className }) => {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.8', 'start 0.2']
  });

  const words = text.split(' ');

  return (
    <p
      ref={element}
      className={cn(
        "flex flex-wrap leading-[1.2] tracking-tight",
        className
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} range={[start, end] as [number, number]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative mr-[0.25em] mt-[0.1em]">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default TextReveal;