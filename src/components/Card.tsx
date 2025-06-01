import { cn } from "@/lib/utils";
import React from "react";

export const Card = ({
  className,
  children,
  backgroundImage,
}: {
  className?: string;
  children: React.ReactNode;
  backgroundImage?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-start justify-center rounded-2xl h-[250px] w-full p-6 overflow-hidden bg-white text-black dark:bg-qubix-midnight dark:text-white border-2 border-gray-50 dark:border-white/[0.1]",
        className
      )}
    >
      {/* Background image on hover */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-qubix-soft-pink opacity-90 mix-blend-multiply"></div>
        </div>
      )}

      {/* Overlay to improve readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-qubix-midnight/50 group-hover:bg-black/40 z-10 transition-colors duration-300" />
      )}

      <div className="relative flex flex-col gap-2 z-20">{children}</div>
    </div>
  );
};
