import { useState } from "react";
import { X, ImageUp } from "lucide-react";
import { Reveal, Section } from "./shared";
import snowflakeImg from "@/assets/event-snowflake.jpg.asset.json";
import womenInAiImg from "@/assets/event-women-in-ai.jpg.asset.json";
import awsSummitImg from "@/assets/event-aws-summit.jpg.asset.json";

type GalleryItem = { caption: string; image: string | null };

const galleryItems: GalleryItem[] = [
  { caption: "Snowflake AI Workshop — Cape Town", image: snowflakeImg.url },
  { caption: "Women in AI — Cape Town", image: womenInAiImg.url },
  { caption: "AWS Summit — Johannesburg", image: awsSummitImg.url },
  { caption: "BBD Software Event — Johannesburg", image: null },
  { caption: "CAPACITI AI Skills Accelerator", image: null },
  { caption: "WeThinkCode_ tutoring sessions", image: null },
];

function initials(caption: string) {
  return caption
    .split(" ")
    .slice(0, 3)
    .map((w) => w[0])
    .join("");
}

export function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <Section
      id="gallery"
      eyebrow="Moments & Memories"
      title="Gallery"
      subtitle="Snapshots from workshops, bootcamps, community events, and memorable tech moments"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, i) => (
          <Reveal key={item.caption} delay={(i % 3) * 80}>
            <article
              className={`group glass relative overflow-hidden rounded-[var(--radius-xl)] ${item.image ? "cursor-zoom-in" : "glass-hover"}`}
              style={{ minHeight: 320 }}
              onClick={() => item.image && setActive(item)}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: 320 }}
                />
              ) : (
                <div
                  className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 px-6"
                  style={{ background: "var(--gradient-brand-soft)" }}
                >
                  <ImageUp className="h-8 w-8" style={{ color: "var(--pink)" }} />
                  <span className="gradient-text text-2xl font-extrabold tracking-tight">
                    {initials(item.caption)}
                  </span>
                  <p className="text-center text-sm font-medium">{item.caption}</p>
                </div>
              )}

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: "var(--gradient-brand)" }}
              />

              {item.image ? (
                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-[color-mix(in_oklab,var(--background)_80%,transparent)] p-4 text-sm opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[color-mix(in_oklab,var(--background)_88%,transparent)] p-5 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <button
            aria-label="Close lightbox"
            className="absolute top-5 right-5 rounded-full bg-secondary/70 p-3"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="gradient-border max-h-full max-w-4xl overflow-hidden rounded-2xl">
            <img
              src={active.image!}
              alt={active.caption}
              className="max-h-[80vh] w-full object-contain"
            />
            <figcaption className="p-4 text-center text-sm text-muted-foreground">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  );
}
