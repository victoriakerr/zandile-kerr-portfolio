import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal, Section, Tag } from "./shared";

export function Timeline() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Experience & Education"
      subtitle="Mentoring, supervising and building — with a foundation from WeThinkCode_."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <article className="glass glass-hover h-full p-7">
            <span
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: "var(--gradient-brand-soft)" }}
            >
              <Briefcase className="h-5 w-5" style={{ color: "var(--pink)" }} />
            </span>
            <h3 className="font-display text-xl font-semibold">Tutor Supervisor</h3>
            <p className="mt-1 text-sm text-muted-foreground">WeThinkCode_ · Oct 2025 – Aug 2026</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--pink)" }}
                />
                Mentored peer tutors and supported students in Python and algorithmic
                problem-solving
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--purple)" }}
                />
                Coordinated technical modules and ensured quality in learning delivery
              </li>
            </ul>
          </article>
        </Reveal>

        <Reveal delay={90}>
          <article className="glass glass-hover h-full p-7">
            <span
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: "var(--gradient-brand-soft)" }}
            >
              <GraduationCap className="h-5 w-5" style={{ color: "var(--purple)" }} />
            </span>
            <h3 className="font-display text-xl font-semibold">WeThinkCode_</h3>
            <p className="mt-1 text-sm text-muted-foreground">2022 – 2024</p>
            <p className="mt-5 text-sm text-muted-foreground">
              System Development (Information Technology)
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Tag>Python</Tag>
              <Tag>Java</Tag>
              <Tag>Algorithms</Tag>
              <Tag>Peer learning</Tag>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
