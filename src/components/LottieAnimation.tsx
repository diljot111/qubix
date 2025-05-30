"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/animation.json"; // use correct filename

export default function LottieAnimation() {
  return (
    <div className="w-[700px] h-[700px] flex justify-center  ">
      <Lottie className=""  animationData={animationData} loop autoplay />
    </div>
  );
}
