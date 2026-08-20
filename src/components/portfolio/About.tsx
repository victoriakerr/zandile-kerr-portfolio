import { Sparkles, GraduationCap, Users, Code2 } from "lucide-react";
import { Reveal, Section } from "./shared";

const highlights = [
  { Icon: Code2, label: "Full-stack development", value: "Python · Java · React" },
  { Icon: Users, label: "Technical mentorship", value: "WeThinkCode_ tutor supervisor" },
  { Icon: Sparkles, label: "AI acceleration", value: "CAPACITI AI Skills Accelerator" },
  { Icon: GraduationCap, label: "Education", value: "System Development (IT)" },
];

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="glass glass-hover h-full p-7 md:p-9">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Curious and adaptable Software Developer with hands-on experience in full-stack
              development and technical mentorship. Previously served as a Tutor Supervisor at
              WeThinkCode_. I&rsquo;m passionate about learning, teaching, and showing up for the
              tech community across South Africa.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:col-span-2">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 70}>
              <div className="glass glass-hover flex items-center gap-4 p-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-brand-soft)" }}
                >
                  <h.Icon className="h-5 w-5" style={{ color: "var(--pink)" }} />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{h.label}</span>
                  <span className="block text-xs text-muted-foreground">{h.value}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
