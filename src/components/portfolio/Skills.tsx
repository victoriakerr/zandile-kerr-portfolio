import { Reveal, Section } from "./shared";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Skill = { name: string; level: number };

const groups: { id: string; label: string; skills: Skill[] }[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "React", level: 82 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 82 },
      { name: "FastAPI", level: 78 },
      { name: "Node.js", level: 75 },
      { name: "MVC", level: 80 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 76 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 72 },
      { name: "Linux", level: 80 },
      { name: "CI/CD", level: 74 },
    ],
  },
  {
    id: "ai",
    label: "AI & Data",
    skills: [
      { name: "Python for AI", level: 82 },
      { name: "Prompt engineering", level: 85 },
      { name: "Data handling (SQL)", level: 78 },
      { name: "Google AI Essentials", level: 88 },
    ],
  },
  {
    id: "collab",
    label: "Collaboration",
    skills: [
      { name: "Agile", level: 86 },
      { name: "SDLC", level: 84 },
      { name: "TDD", level: 78 },
      { name: "Postman", level: 80 },
      { name: "Selenium / JUnit / Playwright", level: 72 },
    ],
  },
];

function Bar({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium">{skill.name}</span>
          <span className="text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary/70">
          <div
            className="h-full rounded-full transition-[width] duration-1000 ease-out"
            style={{
              width: `${skill.level}%`,
              background: "var(--gradient-brand)",
              boxShadow: "var(--glow-pink)",
            }}
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills Matrix"
      subtitle="Languages, frameworks and practices I work with day to day."
    >
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          {groups.map((g) => (
            <TabsTrigger
              key={g.id}
              value={g.id}
              className="gradient-border rounded-full bg-secondary/40 px-4 py-2 text-sm data-[state=active]:bg-[image:var(--gradient-brand)] data-[state=active]:text-primary-foreground data-[state=active]:shadow-[var(--glow-pink)]"
            >
              {g.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {groups.map((g) => (
          <TabsContent key={g.id} value={g.id} className="mt-0">
            <div className="glass grid gap-6 p-6 md:grid-cols-2 md:p-9">
              {g.skills.map((s, i) => (
                <Bar key={s.name} skill={s} delay={i * 60} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
