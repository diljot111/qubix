"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { ReactNode, useEffect } from "react";

type TypewriterEffectProps = {
  children: string;
  className?: string;
  cursorClassName?: string;
};

export const TypewriterEffect = ({
  children,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const letters = children.split("");

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.05),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <motion.div ref={scope} className="inline">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            className="dark:text-white text-black opacity-0 hidden"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};
