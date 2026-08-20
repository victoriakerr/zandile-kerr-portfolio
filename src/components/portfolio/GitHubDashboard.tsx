import { useQuery } from "@tanstack/react-query";
import { Flame, GitBranch, Trophy, Activity, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Section } from "./shared";
import { buildContributions, githubQueries, streaks, GITHUB_USER } from "@/lib/github";

function StatCard({
  Icon,
  label,
  value,
  delay,
}: {
  Icon: typeof Flame;
  label: string;
  value: string | number;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="glass glass-hover p-6">
        <span
          className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ background: "var(--gradient-brand-soft)" }}
        >
          <Icon className="h-5 w-5" style={{ color: "var(--pink)" }} />
        </span>
        <p className="font-display text-3xl font-bold">
          <span className="gradient-text">{value}</span>
        </p>
        <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{label}</p>
      </div>
    </Reveal>
  );
}

function cellStyle(count: number) {
  if (count <= 0) return { background: "color-mix(in oklab, var(--foreground) 8%, transparent)" };
  const opacity = count >= 6 ? 1 : count >= 4 ? 0.8 : count >= 2 ? 0.6 : 0.4;
  return {
    background: `color-mix(in oklab, var(--pink) ${opacity * 100}%, var(--purple))`,
    opacity: 0.35 + opacity * 0.65,
  };
}

export function GitHubDashboard() {
  const user = useQuery(githubQueries.user());
  const repos = useQuery(githubQueries.repos());
  const events = useQuery(githubQueries.events());

  const days = buildContributions(events.data ?? [], repos.data ?? []);
  const { current, longest, total } = streaks(days);

  const weeks: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

  const failed = user.isError && repos.isError;

  return (
    <Section
      id="github"
      eyebrow="Live data"
      title="GitHub Dashboard"
      subtitle="Live repository statistics and contribution activity"
    >
      <div className="grid gap-6">
        <Reveal>
          <div className="glass glass-hover flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center md:p-8">
            <img
              src={user.data?.avatar_url ?? `https://github.com/${GITHUB_USER}.png`}
              alt={`${GITHUB_USER} GitHub avatar`}
              loading="lazy"
              width={88}
              height={88}
              className="h-22 w-22 rounded-2xl object-cover"
              style={{ boxShadow: "var(--glow-purple)" }}
            />
            <div className="flex-1">
              <p className="font-display text-xl font-bold">{user.data?.name ?? "Zandile Kerr"}</p>
              <p className="text-sm text-muted-foreground">@{GITHUB_USER}</p>
              {user.data?.bio ? (
                <p className="mt-2 max-w-lg text-sm text-muted-foreground">{user.data.bio}</p>
              ) : null}
            </div>
            <Button asChild variant="glow">
              <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">
                View Profile <ExternalLink />
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            Icon={GitBranch}
            label="Public Repos"
            value={user.data?.public_repos ?? repos.data?.length ?? "—"}
            delay={0}
          />
          <StatCard Icon={Activity} label="Total Contributions" value={total || "—"} delay={70} />
          <StatCard Icon={Flame} label="Current Streak" value={`${current}d`} delay={140} />
          <StatCard Icon={Trophy} label="Longest Streak" value={`${longest}d`} delay={210} />
        </div>

        <Reveal>
          <div className="glass p-6 md:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold">Contribution Activity</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                Less
                {[0, 1, 3, 5, 7].map((c) => (
                  <span key={c} className="h-3 w-3 rounded-[3px]" style={cellStyle(c)} />
                ))}
                More
              </div>
            </div>
            {failed ? (
              <p className="text-sm text-muted-foreground">
                GitHub activity is temporarily unavailable — please try again in a moment.
              </p>
            ) : (
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-1">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-1">
                      {week.map((d) => (
                        <span
                          key={d.date}
                          title={`${d.date}: ${d.count} contribution${d.count === 1 ? "" : "s"}`}
                          className="h-3 w-3 rounded-[3px] transition-transform hover:scale-125"
                          style={cellStyle(d.count)}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
