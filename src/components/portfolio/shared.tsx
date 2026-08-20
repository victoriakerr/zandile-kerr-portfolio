import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("section-pad scroll-mt-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="mb-10 md:mb-14">
          {eyebrow ? (
            <span className="gradient-border inline-flex rounded-full bg-secondary/50 px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-medium"
      style={{
        background: "var(--gradient-brand-soft)",
        border: "1px solid color-mix(in oklab, var(--pink) 35%, transparent)",
      }}
    >
      {children}
    </span>
  );
}
