import { useQuery } from "@tanstack/react-query";
import { Code2, ExternalLink, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Section, Tag } from "./shared";
import { githubQueries, type GhRepo } from "@/lib/github";

function techStack(repo: GhRepo) {
  const items = new Set<string>();
  if (repo.language) items.add(repo.language);
  for (const t of repo.topics ?? []) items.add(t);
  return Array.from(items).slice(0, 5);
}

function ProjectCard({ repo, delay }: { repo: GhRepo; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="glass glass-hover flex h-full flex-col p-6">
        <h3 className="font-display text-lg font-semibold break-words">
          {repo.name.replace(/[-_]/g, " ")}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
          {repo.description ?? "No description provided on GitHub yet."}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techStack(repo).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-1">
            <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
          </span>
          <span>Updated {new Date(repo.pushed_at).toLocaleDateString()}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild size="sm" variant="glow">
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <Code2 /> View Code
            </a>
          </Button>
          {repo.homepage ? (
            <Button asChild size="sm" variant="outlineGlow">
              <a href={repo.homepage} target="_blank" rel="noreferrer">
                <ExternalLink /> Live Demo
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="outlineGlow" disabled>
              <ExternalLink /> Live Demo
            </Button>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { data, isLoading, isError } = useQuery(githubQueries.repos());
  const repos = (data ?? []).slice().sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Projects"
      subtitle="Every public repository on github.com/victoriakerr, loaded live."
    >
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass h-56 animate-pulse p-6" />
          ))}
        </div>
      ) : isError ? (
        <p className="glass p-6 text-sm text-muted-foreground">
          Couldn&rsquo;t load repositories right now.{" "}
          <a
            className="underline"
            href="https://github.com/victoriakerr?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Browse them on GitHub
          </a>
          .
        </p>
      ) : repos.length === 0 ? (
        <p className="glass p-6 text-sm text-muted-foreground">No public repositories yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, i) => (
            <ProjectCard key={r.id} repo={r} delay={(i % 3) * 80} />
          ))}
        </div>
      )}
    </Section>
  );
}
