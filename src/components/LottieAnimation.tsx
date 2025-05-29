"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/animation.json"; // use correct filename

export default function LottieAnimation() {
  return (
    <div className="w-[400px] h-[400px]">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
