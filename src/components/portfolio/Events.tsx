import { CalendarDays, MapPin, Users, ExternalLink, ImageUp } from "lucide-react";
import womenInAiImg from "@/assets/event-women-in-ai.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Reveal, Section, Tag } from "./shared";

const events = [
  {
    name: "Snowflake AI Workshop",
    location: "Cape Town",
    date: "2026",
    attendees: "150+ attendees",
    type: "Workshop",
    url: "https://www.snowflake.com",
    topics: ["Data Cloud", "AI Pipelines"],
    description:
      "Hands-on session on data cloud fundamentals and building AI-ready data pipelines with Snowflake.",
  },
  {
    name: "AWS Summit",
    location: "Johannesburg",
    date: "Attended",
    attendees: "5 000+ attendees",
    type: "Summit",
    url: "https://aws.amazon.com/summits",
    topics: ["Cloud", "Serverless", "AI/ML"],
    description:
      "Cloud architecture, serverless and AI/ML tracks with the broader South African AWS community.",
  },
  {
    name: "BBD Software Event",
    location: "Johannesburg",
    date: "Attended",
    attendees: "200+ attendees",
    type: "Industry",
    url: "https://www.bbdsoftware.com",
    topics: ["Clean Code", "Careers"],
    description:
      "Software engineering practices, clean code and career growth conversations with BBD engineers.",
  },
  {
    name: "Women in AI",
    location: "Cape Town / Johannesburg",
    date: "Attended",
    attendees: "300+ attendees",
    type: "Community",
    image: womenInAiImg.url,
    url: "https://www.womeninai.co",
    topics: ["AI", "Women in Tech"],
    description:
      "Celebrating and connecting women building with artificial intelligence across South Africa.",
  },
  {
    name: "CAPACITI AI Skills Accelerator",
    location: "South Africa",
    date: "2026",
    attendees: "Cohort programme",
    type: "Programme",
    url: "https://www.capaciti.org.za",
    topics: ["AI", "Upskilling"],
    description:
      "Intensive AI skills accelerator building practical, job-ready artificial intelligence capability.",
  },
  {
    name: "WeThinkCode_ tutoring sessions",
    location: "Johannesburg",
    date: "Ongoing",
    attendees: "Peer learners",
    type: "Mentorship",
    url: "https://www.wethinkcode.co.za",
    topics: ["Mentorship", "Peer Learning"],
    description:
      "Supervising and tutoring peer-learning sessions, supporting students through the curriculum.",
  },
  {
    name: "Africa Tech Festival 2026",
    location: "Cape Town",
    date: "Upcoming",
    attendees: "15 000+ attendees",
    type: "Conference",
    url: "https://www.africatechfestival.com",
    topics: ["Innovation", "Startups", "Infrastructure"],
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
            <article className="glass glass-hover flex h-full flex-col overflow-hidden">
              <div className="group relative h-44 overflow-hidden rounded-t-[var(--radius-xl)]">
                {"image" in e && e.image ? (
                  <img
                    src={e.image}
                    alt={`${e.name} in ${e.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex h-full w-full flex-col items-center justify-center gap-2"
                    style={{ background: "var(--gradient-brand-soft)" }}
                  >
                    <ImageUp className="h-7 w-7" style={{ color: "var(--pink)" }} />
                    <span className="gradient-text text-xl font-extrabold tracking-tight">
                      {e.name
                        .split(" ")
                        .slice(0, 3)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "var(--gradient-brand)" }}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{e.name}</h3>
                  <Tag>{e.type}</Tag>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" style={{ color: "var(--purple)" }} />
                    {e.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" style={{ color: "var(--pink)" }} /> {e.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" style={{ color: "var(--purple)" }} />
                    {e.attendees}
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">{e.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {e.topics.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <Button asChild variant="outlineGlow" className="mt-6 w-full">
                  <a href={e.url} target="_blank" rel="noreferrer">
                    <ExternalLink /> View Event Page
                  </a>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
