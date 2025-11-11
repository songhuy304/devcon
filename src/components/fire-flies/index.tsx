import React, { useEffect, useRef } from "react";

interface FireflyOptions {
  amount: number;
  color: string;
  speed: number;
  radius: number;
  topZoneRatio?: number; // Tỷ lệ vùng trên màn hình (0-1)
  lifespan?: number; // Thời gian tồn tại (ms)
}

interface FireflyProps extends Partial<FireflyOptions> {
  className?: string;
  style?: React.CSSProperties;
}

const FirefliesCanvas: React.FC<FireflyProps> = ({
  amount = 30,
  color = "rgba(236, 196, 94, 1)",
  speed = 0.8,
  radius = 2,
  topZoneRatio = 0.6, // 70% tập trung ở vùng trên
  lifespan = 10000, // 10 giây
  className = "",
  style = {},
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Random number generator with types
    const random = (max: number, min: number, isInt?: boolean): number => {
      return isInt
        ? Math.floor(Math.random() * (max - min) + min)
        : Number((Math.random() * (max - min) + min).toFixed(3));
    };

    // Set opacity for color
    const setOpacity = (color: string, opacity: string): string => {
      const colors = color.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\S+)\)$/);
      if (!colors) return color;
      return `rgba(${colors[1]}, ${colors[2]}, ${colors[3]}, ${opacity})`;
    };

    class Firefly {
      x: number;
      y: number;
      radius: number;
      veer: boolean;
      angle: number;
      rate: number;
      speed: number;
      opacity: number;
      flare: boolean;
      color: string;
      birthTime: number;
      lifespan: number;
      topZone: boolean;

      constructor(options: FireflyOptions) {
        // 70% chance to spawn in top zone
        this.topZone = Math.random() < (options.topZoneRatio || 0.5);

        const topAreaHeight = window.innerHeight * 0.4; // Top 40% of screen

        this.x = random(window.innerWidth, options.radius, true);
        this.y = this.topZone
          ? random(topAreaHeight, 0, true)
          : random(window.innerHeight, topAreaHeight, true);

        this.radius = random(options.radius + 0.5, options.radius - 0.5);
        this.veer = false;
        this.angle = random(360, 0, true);
        this.rate = random(20 / 1000, 3 / 1000); // Slower flicker rate
        this.speed = random(options.speed, options.speed / 5);
        this.opacity = random(0.8, 0.2); // Start with moderate opacity
        this.flare = this.opacity > 0.5;
        this.color = options.color;
        this.birthTime = Date.now();
        this.lifespan = options.lifespan || 5000;
      }

      fly(): void {
        // Change direction more gradually
        if (Math.random() * 360 < 3) {
          this.veer = !this.veer;
        }

        // Slower, more graceful movement
        this.angle -= this.veer ? -this.speed * 0.5 : this.speed * 0.5;
        this.x += Math.sin((Math.PI / 180) * this.angle) * this.speed;
        this.y +=
          Math.cos((Math.PI / 180) * this.angle) *
          this.speed *
          (this.topZone ? 0.7 : 1);

        // Boundary checks with slower rebound
        if (this.x < 0 || this.x > window.innerWidth) {
          this.angle = 180 - this.angle;
        }

        if (this.y < 0 || this.y > window.innerHeight) {
          this.angle = -this.angle;
          // Keep more in top zone
          if (this.y < 0) this.y = 0;
          if (this.y > window.innerHeight * 0.6 && this.topZone) {
            this.y = window.innerHeight * 0.6;
          }
        }
      }

      flicker(): void {
        // Slower, more natural flickering
        if (this.opacity >= 0.9 || this.opacity <= 0.1) {
          this.flare = !this.flare;
        }

        this.opacity -= this.flare ? -this.rate : this.rate;
        this.color = setOpacity(this.color, this.opacity.toFixed(3));
      }

      isAlive(currentTime: number): boolean {
        return currentTime - this.birthTime < this.lifespan;
      }
    }

    const options: FireflyOptions = {
      amount,
      color,
      speed,
      radius,
      topZoneRatio,
      lifespan,
    };

    let fireflies: Firefly[] = Array.from(
      { length: options.amount },
      () => new Firefly(options)
    );

    const resizeCanvas = (): void => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const redraw = (): void => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Remove dead fireflies and replace them
      const currentTime = Date.now();
      fireflies = fireflies.filter((f) => f.isAlive(currentTime));

      while (fireflies.length < options.amount) {
        fireflies.push(new Firefly(options));
      }

      fireflies.forEach((firefly) => {
        firefly.fly();
        firefly.flicker();

        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle =
          firefly.y < window.innerHeight * 0.4
            ? setOpacity(color, (firefly.opacity * 1.2).toFixed(3)) // Brighter in top zone
            : firefly.color;
        ctx.shadowBlur = firefly.radius * 4;
        ctx.shadowColor = setOpacity(color, (firefly.opacity * 0.8).toFixed(3));
        ctx.fill();
      });
    };

    let animationFrameId: number;
    const render = (): void => {
      redraw();
      animationFrameId = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    render();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [amount, color, speed, radius, topZoneRatio, lifespan]);

  const defaultStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",

    ...style,
  };

  return <canvas ref={canvasRef} className={className} style={defaultStyle} />;
};

export default FirefliesCanvas;
