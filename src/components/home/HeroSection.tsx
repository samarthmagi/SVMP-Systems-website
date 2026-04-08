import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animated node network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const nodeCount = 35;
    const rect = canvas.getBoundingClientRect();

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(135, 96, 24, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.fillStyle = "rgba(135, 96, 24, 0.12)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden noise-overlay">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.04),transparent_60%)] pointer-events-none" />

      <div className="container max-w-4xl relative z-10 py-32 md:py-40">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-8 transition-all duration-700 delay-100"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(12px)" }}>
            SVMP Systems
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-foreground leading-[1.05] mb-10 tracking-tight">
          <span className="block overflow-hidden">
            <span
              className="block transition-all duration-1000 delay-200"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(100%)" }}
            >
              Control-layer
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block transition-all duration-1000 delay-[400ms]"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(100%)" }}
            >
              software for
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block transition-all duration-1000 delay-[600ms] text-primary"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(100%)" }}
            >
              LLM workflows
            </span>
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-12 transition-all duration-1000"
          data-delay="800"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)" }}
        >
          Structure inputs. Govern sessions. Validate outputs. The missing infrastructure between your organization and the models it depends on.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-[1000ms]"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)" }}
        >
          <Link
            to="/cs"
            className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-md bg-foreground text-background hover:bg-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Explore SVMP-CS
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
          <Link
            to="/research"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-md border border-border text-foreground hover:bg-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-0.5"
          >
            Read our research
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
