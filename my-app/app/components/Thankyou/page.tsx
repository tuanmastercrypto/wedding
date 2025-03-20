'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
} from "@/components/ui/card";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function ThankyouPage() {
  const handleClick = () => {
    toast.success("Thank you");

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <Card className="fixed bottom-0 left-0 w-full md:relative overflow-hidden z-50">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardFooter>
        <Button className="w-full" onClick={handleClick}>
          Chúc mừng nào Bấm thử nhé
        </Button>
      </CardFooter>
    </Card>
  );
}
