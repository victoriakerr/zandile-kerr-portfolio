import { useEffect, useRef, useState } from "react";
import { Upload, X, Trash2, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Section } from "./shared";

type Photo = { id: string; src: string; caption: string };

const STORAGE_KEY = "zk-gallery-photos";

const seed: Photo[] = [
  { id: "s1", src: "", caption: "Snowflake AI Workshop — Cape Town" },
  { id: "s2", src: "", caption: "AWS Summit — Johannesburg" },
  { id: "s3", src: "", caption: "Women in AI — Cape Town" },
  { id: "s4", src: "", caption: "CAPACITI AI Skills Accelerator" },
  { id: "s5", src: "", caption: "BBD Software Event — Johannesburg" },
  { id: "s6", src: "", caption: "WeThinkCode_ tutoring sessions" },
];

function readFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [active, setActive] = useState<Photo | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPhotos(JSON.parse(raw) as Photo[]);
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  const persist = (next: Photo[]) => {
    setPhotos(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage full — photos stay for this session */
    }
  };

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    const added: Photo[] = [];
    for (const file of Array.from(files)) {
      if (!file.type.startsWith("image/")) continue;
      added.push({
        id: `${Date.now()}-${file.name}`,
        src: await readFile(file),
        caption: file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
      });
    }
    persist([...added, ...photos]);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const placeholders = photos.length ? [] : seed;

  return (
    <Section
      id="gallery"
      eyebrow="Moments & Memories"
      title="Gallery"
      subtitle="Snapshots from workshops, bootcamps, speaking engagements, and community events"
    >
      <Reveal className="mb-8">
        <div className="glass flex flex-wrap items-center justify-between gap-4 p-5">
          <p className="text-sm text-muted-foreground">
            Add your own photos from Snowflake, AWS, Women in AI and CAPACITI — they stay saved in
            this browser.
          </p>
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => void onFiles(e.target.files)}
            />
            <Button variant="glow" onClick={() => inputRef.current?.click()}>
              <Upload /> Upload photos
            </Button>
          </div>
        </div>
      </Reveal>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {photos.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 70}>
            <figure
              className="group glass relative cursor-zoom-in overflow-hidden transition-all hover:shadow-[var(--glow-pink)]"
              style={{ borderColor: "transparent" }}
              onClick={() => setActive(p)}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="w-full rounded-[inherit] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity group-hover:opacity-100"
                style={{ border: "2px solid var(--pink)" }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-[color-mix(in_oklab,var(--background)_80%,transparent)] p-3 text-xs opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {p.caption}
              </figcaption>
              <button
                aria-label="Remove photo"
                className="absolute top-3 right-3 rounded-full bg-[color-mix(in_oklab,var(--background)_75%,transparent)] p-2 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  persist(photos.filter((x) => x.id !== p.id));
                }}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </figure>
          </Reveal>
        ))}

        {placeholders.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 70}>
            <div
              className="glass glass-hover flex flex-col items-center justify-center gap-3 p-8 text-center"
              style={{ minHeight: i % 2 ? 200 : 260 }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-brand-soft)" }}
              >
                <ImagePlus className="h-5 w-5" style={{ color: "var(--pink)" }} />
              </span>
              <p className="text-sm font-medium">{p.caption}</p>
              <p className="text-xs text-muted-foreground">Upload a photo for this moment</p>
            </div>
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
              src={active.src}
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
