import { CalendarDays, MapPin } from "lucide-react";
import { Reveal, Section, Tag } from "./shared";

const events = [
  {
    name: "Snowflake AI Workshop",
    location: "Cape Town",
    date: "2026",
    type: "Workshop",
    description:
      "Hands-on session on data cloud fundamentals and building AI-ready data pipelines with Snowflake.",
  },
  {
    name: "AWS Summit",
    location: "Johannesburg",
    date: "Attended",
    type: "Summit",
    description:
      "Cloud architecture, serverless and AI/ML tracks with the broader South African AWS community.",
  },
  {
    name: "BBD Software Event",
    location: "Johannesburg",
    date: "Attended",
    type: "Industry",
    description:
      "Software engineering practices, clean code and career growth conversations with BBD engineers.",
  },
  {
    name: "Women in AI",
    location: "Cape Town / Johannesburg",
    date: "Attended",
    type: "Community",
    description:
      "Celebrating and connecting women building with artificial intelligence across South Africa.",
  },
  {
    name: "Africa Tech Festival 2026",
    location: "Cape Town",
    date: "Upcoming",
    type: "Conference",
    description:
      "The continent's largest technology gathering — innovation, infrastructure and African startups.",
  },
];

export function Events() {
  return (
    <Section
      id="events"
      eyebrow="Community"
      title="SA Tech Events"
      subtitle="Recent and upcoming technology events shaping South Africa's innovation ecosystem"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <Reveal key={e.name} delay={(i % 3) * 80}>
            <article className="glass glass-hover flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{e.name}</h3>
                <Tag>{e.type}</Tag>
              </div>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" style={{ color: "var(--pink)" }} /> {e.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" style={{ color: "var(--purple)" }} />{" "}
                  {e.date}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{e.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
