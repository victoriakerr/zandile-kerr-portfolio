import { Github, Linkedin, Mail, Download, FolderGit2, Images, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./shared";

const cv = `Zandile Kerr — Software Developer & AI Enthusiast
South Africa | vickykerr20@gmail.com | +27 62 664 9400
LinkedIn: https://www.linkedin.com/in/zandile-kerr
GitHub: https://github.com/victoriakerr

PROFILE
Curious and adaptable Software Developer with hands-on experience in full-stack
development and technical mentorship. CAPACITI AI Skills Accelerator participant.
Active in the South African tech community.

EXPERIENCE
Tutor Supervisor — WeThinkCode_ | Oct 2025 - Aug 2026
- Mentored peer tutors and supported students in Python and algorithmic problem-solving
- Coordinated technical modules and ensured quality in learning delivery

EDUCATION
WeThinkCode_ | 2022-2024 — System Development (Information Technology)

SKILLS
Python, Java, JavaScript, SQL, HTML5, CSS3, React, FastAPI, Node.js, MongoDB, MySQL,
Git, GitHub, Docker, Postman, Linux, Selenium, JUnit, Playwright, TDD, CI/CD, SDLC, MVC, Agile

CERTIFICATES
Google AI Essentials V1 (Coursera, Aug 2026); Software Engineer 99th percentile (TestGorilla, Jun 2026);
Clean Code 98th percentile (TestGorilla, Jun 2026); Problem Solving 93rd percentile (TestGorilla, Jun 2026);
Coding: Entry-Level Algorithms 61st percentile (TestGorilla, Jun 2026);
Job Application Essentials (IBM, Oct 2023); CAPACITI AI Skills Accelerator Participant (2026)
`;

function downloadCv() {
  const blob = new Blob([cv], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Zandile-Kerr-CV.txt";
  a.click();
  URL.revokeObjectURL(url);
}

const socials = [
  { href: "https://www.linkedin.com/in/zandile-kerr", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com/victoriakerr", label: "GitHub", Icon: Github },
  { href: "mailto:vickykerr20@gmail.com", label: "Email", Icon: Mail },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "var(--gradient-brand)", opacity: 0.22 }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5">
        <Reveal>
          <span className="gradient-border inline-flex items-center gap-2 rounded-full bg-secondary/40 px-4 py-1.5 text-xs tracking-widest uppercase">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--pink)", boxShadow: "var(--glow-pink)" }}
            />
            Based in South Africa
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-5xl leading-[1.05] font-bold md:text-7xl">
            Zandile <span className="gradient-text">Kerr</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 font-display text-xl text-foreground/90 md:text-2xl">
            Software Developer &amp; AI Enthusiast
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            Full-stack developer and community builder. CAPACITI AI Skills Accelerator participant.
            Active in the South African tech community.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="glow" size="lg">
              <a href="#projects">
                <FolderGit2 /> View Projects
              </a>
            </Button>
            <Button asChild variant="outlineGlow" size="lg">
              <a href="#gallery">
                <Images /> View Gallery
              </a>
            </Button>
            <Button asChild variant="outlineGlow" size="lg">
              <a href="#contact">
                <Send /> Contact Me
              </a>
            </Button>
            <Button variant="outlineGlow" size="lg" onClick={downloadCv}>
              <Download /> Download CV
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
