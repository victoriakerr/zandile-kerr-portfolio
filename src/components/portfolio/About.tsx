import { Reveal, Section, Tag } from "./shared";
import { profileSummary, skillTags } from "@/lib/cv";
import profileAsset from "@/assets/zandile-profile.jpg.asset.json";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12">
        <Reveal className="md:col-span-2">
          <div className="relative mx-auto w-fit">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full blur-2xl"
              style={{ background: "var(--gradient-brand)", opacity: 0.35 }}
            />
            <div
              className="relative flex h-56 w-56 items-center justify-center rounded-full p-[3px] md:h-64 md:w-64"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-purple)" }}
            >
              <img
                src={profileAsset.url}
                alt="Zandile Kerr in graduation cap and WeThinkCode_ sash"
                loading="lazy"
                className="h-full w-full rounded-full object-cover object-top"
              />
            </div>

            <span className="glass absolute -top-2 -left-6 px-3 py-1.5 text-xs font-medium">
              Tutor Supervisor
            </span>
            <span className="glass absolute -right-4 bottom-6 px-3 py-1.5 text-xs font-medium">
              AI Learner
            </span>
            <span className="glass absolute -bottom-3 left-2 px-3 py-1.5 text-xs font-medium">
              Software Engineer
            </span>
          </div>
        </Reveal>


        <div className="md:col-span-3">
          <Reveal>
            <h3 className="text-2xl font-bold md:text-3xl">
              Bridging <span className="gradient-text">Technology</span> &amp; Human Potential
            </h3>
          </Reveal>

          <div className="mt-5 space-y-4">
            {profileSummary.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delay={i * 60}>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap gap-2">
              {skillTags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
