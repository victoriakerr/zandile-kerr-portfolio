import { Download, Printer, Mail, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal, Section, Tag } from "./shared";
import { CV_PDF_URL, certifications, downloadCv, profileSummary, skillTags } from "@/lib/cv";

const experience = [
  {
    role: "Tutor Supervisor",
    org: "WeThinkCode_",
    period: "Oct 2025 – Aug 2026",
    points: [
      "Mentored peer tutors and supported students in Python and algorithmic problem-solving",
      "Coordinated technical modules and ensured quality in learning delivery",
    ],
  },
];

const skillGroups = [
  { label: "Frontend", items: "JavaScript · React · HTML5 · CSS3" },
  { label: "Backend", items: "Python · Java · FastAPI · Node.js · MVC" },
  { label: "Databases", items: "SQL · MySQL · MongoDB" },
  { label: "Cloud & DevOps", items: "Git · GitHub · Docker · Linux · CI/CD" },
  { label: "AI & Data", items: "Google AI Essentials · Prompt engineering · Data handling" },
  { label: "Collaboration", items: "Agile · SDLC · TDD · Postman · Selenium · JUnit · Playwright" },
];

const tabClass =
  "gradient-border rounded-full bg-secondary/40 px-4 py-2 text-sm data-[state=active]:bg-[image:var(--gradient-brand)] data-[state=active]:text-primary-foreground data-[state=active]:shadow-[var(--glow-pink)]";

export function CV() {
  return (
    <Section
      id="cv"
      eyebrow="Interactive Resume"
      title="My CV"
      subtitle="Explore my professional background interactively or download a PDF copy"
    >
      <Reveal>
        <div className="glass p-6 md:p-9">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Zandile Kerr</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Software Developer | AI Enthusiast
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" style={{ color: "var(--pink)" }} /> South Africa
                </span>
                <a
                  href="mailto:vickykerr20@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" style={{ color: "var(--purple)" }} />
                  vickykerr20@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="glow" onClick={downloadCv}>
                <Download /> Download PDF
              </Button>
              <Button variant="outlineGlow" onClick={() => window.print()}>
                <Printer /> Print
              </Button>
            </div>
          </div>

          <Tabs defaultValue="profile" className="mt-8 w-full">
            <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
              <TabsTrigger value="profile" className={tabClass}>
                Profile
              </TabsTrigger>
              <TabsTrigger value="experience" className={tabClass}>
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className={tabClass}>
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className={tabClass}>
                Skills
              </TabsTrigger>
              <TabsTrigger value="certifications" className={tabClass}>
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-0 space-y-4">
              {profileSummary.map((p) => (
                <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {skillTags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-0 space-y-5">
              {experience.map((e) => (
                <div key={e.role} className="gradient-border rounded-xl bg-secondary/25 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold">
                      {e.role} — <span className="gradient-text">{e.org}</span>
                    </h4>
                    <Tag>{e.period}</Tag>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--pink)" }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <div className="gradient-border rounded-xl bg-secondary/25 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold">WeThinkCode_</h4>
                  <Tag>2022 – 2024</Tag>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  System Development (Information Technology)
                </p>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.label} className="gradient-border rounded-xl bg-secondary/25 p-5">
                  <p className="text-sm font-semibold">{g.label}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{g.items}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="certifications" className="mt-0 grid gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <div key={c.name} className="gradient-border rounded-xl bg-secondary/25 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold">{c.name}</p>
                    <Tag>{c.badge}</Tag>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              ))}
            </TabsContent>
          </Tabs>

          <div className="mt-9">
            <h4 className="mb-4 inline-flex items-center gap-2 text-lg font-semibold">
              <FileText className="h-5 w-5" style={{ color: "var(--pink)" }} /> CV Preview
            </h4>
            <div className="gradient-border overflow-hidden rounded-xl bg-secondary/20">
              <object
                data={CV_PDF_URL}
                type="application/pdf"
                className="h-[36rem] w-full"
                aria-label="Zandile Kerr CV preview"
              >
                <div className="flex h-[18rem] flex-col items-center justify-center gap-3 p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    The PDF preview can&rsquo;t be displayed in this browser.
                  </p>
                  <Button variant="glow" onClick={downloadCv}>
                    <Download /> Download the CV instead
                  </Button>
                </div>
              </object>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
