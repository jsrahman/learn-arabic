"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { audioService } from "@/lib/audioService";

export const triggerConfetti = () => {
  audioService.playSuccessSound();

  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ["#10b981", "#059669", "#f59e0b", "#fbbf24", "#d97706"],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const ConfettiTrigger = () => {
  useEffect(() => {
    triggerConfetti();
  }, []);

  return null;
};

