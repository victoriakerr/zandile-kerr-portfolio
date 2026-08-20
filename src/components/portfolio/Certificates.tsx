import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Section, Tag } from "./shared";
import { certifications } from "@/lib/cv";

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Credentials"
      title="Licenses & Certifications"
      subtitle="Verified assessments and programmes completed."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
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
              <h3 className="mt-5 text-base font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <BadgeCheck className="h-3.5 w-3.5" style={{ color: "var(--purple)" }} /> {c.date}
              </p>
              <Button asChild variant="outlineGlow" size="sm" className="mt-6 w-full">
                <a href={c.url} target="_blank" rel="noreferrer">
                  <ExternalLink /> View Credential
                </a>
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
