import { Award, BadgeCheck } from "lucide-react";
import { Reveal, Section, Tag } from "./shared";

const certificates = [
  { name: "Google AI Essentials V1", issuer: "Coursera", date: "Issued Aug 2026", badge: "AI" },
  {
    name: "Software Engineer",
    issuer: "TestGorilla",
    date: "Issued Jun 2026",
    badge: "99th percentile",
  },
  { name: "Clean Code", issuer: "TestGorilla", date: "Issued Jun 2026", badge: "98th percentile" },
  {
    name: "Problem Solving",
    issuer: "TestGorilla",
    date: "Issued Jun 2026",
    badge: "93rd percentile",
  },
  {
    name: "Coding: Entry-Level Algorithms",
    issuer: "TestGorilla",
    date: "Issued Jun 2026",
    badge: "61st percentile",
  },
  { name: "Job Application Essentials", issuer: "IBM", date: "Issued Oct 2023", badge: "Career" },
  {
    name: "CAPACITI AI Skills Accelerator",
    issuer: "CAPACITI",
    date: "2026",
    badge: "Participant",
  },
];

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Credentials"
      title="Licenses & Certificates"
      subtitle="Verified assessments and programmes completed."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 80}>
            <article className="gradient-border glass glass-hover flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-brand-soft)" }}
                >
                  <Award className="h-5 w-5" style={{ color: "var(--pink)" }} />
                </span>
                <Tag>{c.badge}</Tag>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <BadgeCheck className="h-3.5 w-3.5" style={{ color: "var(--purple)" }} /> {c.date}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
