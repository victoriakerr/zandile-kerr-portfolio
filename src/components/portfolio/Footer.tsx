import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-2">
        <div>
          <p className="text-lg font-bold">
            <span className="gradient-text">Zandile Kerr</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Software Developer &amp; AI Enthusiast — technical mentor and community builder.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Premium technology portfolio — Software Developer, Technical Mentor, AI Facilitator, and
            Learning Experience Professional.
          </p>
        </div>

        <div className="md:justify-self-end md:text-right">
          <div className="flex gap-3 md:justify-end">
            <a
              href="https://www.linkedin.com/in/zandile-kerr"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/victoriakerr"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:vickykerr20@gmail.com"
              aria-label="Email"
              className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm font-medium">
            <span className="gradient-text">Built with Loveable by Zandile Kerr © 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
