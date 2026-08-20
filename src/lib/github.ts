export const GITHUB_USER = "victoriakerr";

export type GhUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
};

export type GhRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
};

export type GhEvent = {
  type: string;
  created_at: string;
  payload?: { commits?: unknown[] };
};

async function gh<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub request failed (${res.status})`);
  return (await res.json()) as T;
}

export const githubQueries = {
  user: () => ({
    queryKey: ["gh", "user", GITHUB_USER],
    queryFn: () => gh<GhUser>(`/users/${GITHUB_USER}`),
    staleTime: 5 * 60_000,
  }),
  repos: () => ({
    queryKey: ["gh", "repos", GITHUB_USER],
    queryFn: () => gh<GhRepo[]>(`/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`),
    staleTime: 5 * 60_000,
  }),
  events: () => ({
    queryKey: ["gh", "events", GITHUB_USER],
    queryFn: () => gh<GhEvent[]>(`/users/${GITHUB_USER}/events/public?per_page=100`),
    staleTime: 5 * 60_000,
  }),
};

export type ContributionDay = { date: string; count: number };

/** Builds the last `weeks` weeks of activity from public events + repo pushes. */
export function buildContributions(
  events: GhEvent[] = [],
  repos: GhRepo[] = [],
  weeks = 26,
): ContributionDay[] {
  const counts = new Map<string, number>();
  const add = (iso: string, n: number) => {
    const day = iso.slice(0, 10);
    counts.set(day, (counts.get(day) ?? 0) + n);
  };

  for (const e of events) {
    const commits = e.payload?.commits?.length ?? 0;
    add(e.created_at, e.type === "PushEvent" ? Math.max(1, commits) : 1);
  }
  for (const r of repos) add(r.pushed_at, 1);

  const days: ContributionDay[] = [];
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  // align grid to end of current week (Saturday)
  const end = new Date(today);
  end.setUTCDate(end.getUTCDate() + (6 - end.getUTCDay()));
  const total = weeks * 7;

  for (let i = total - 1; i >= 0; i--) {
    const d = new Date(end);
    d.setUTCDate(end.getUTCDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ date: key, count: d > today ? 0 : (counts.get(key) ?? 0) });
  }
  return days;
}

export function streaks(days: ContributionDay[]) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    if (d.count > 0) {
      run += 1;
      longest = Math.max(longest, run);
    } else {
      run = 0;
    }
  }

  const todayKey = new Date().toISOString().slice(0, 10);
  const upToToday = days.filter((d) => d.date <= todayKey);
  let current = 0;
  for (let i = upToToday.length - 1; i >= 0; i--) {
    const count = upToToday[i]?.count ?? 0;
    if (count > 0) current += 1;
    else if (i === upToToday.length - 1) continue; // today not yet active
    else break;
  }


  const total = days.reduce((s, d) => s + d.count, 0);
  return { current, longest, total };
}
