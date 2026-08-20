import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal, Section } from "./shared";

const details = [
  {
    Icon: Mail,
    label: "Email",
    value: "vickykerr20@gmail.com",
    href: "mailto:vickykerr20@gmail.com",
  },
  { Icon: Phone, label: "Phone", value: "+27 62 664 9400", href: "tel:+27626649400" },
  { Icon: MapPin, label: "Location", value: "South Africa" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "in/zandile-kerr",
    href: "https://www.linkedin.com/in/zandile-kerr",
  },
  { Icon: Github, label: "GitHub", value: "@victoriakerr", href: "https://github.com/victoriakerr" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      subject: form.subject || `Portfolio enquiry from ${form.name}`,
      body: `${form.message}\n\n— ${form.name} (${form.email})`,
    });
    window.location.href = `mailto:vickykerr20@gmail.com?${params.toString()}`;
    toast.success("Opening your email app to send the message.");
  };

  return (
    <Section
      id="contact"
      eyebrow="Say hello"
      title="Contact"
      subtitle="Open to opportunities, collaborations and community work across South Africa."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass h-full p-6 md:p-8">
            <ul className="space-y-5">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--gradient-brand-soft)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "var(--pink)" }} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="block truncate text-sm font-medium hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="block text-sm font-medium">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90} className="lg:col-span-3">
          <form onSubmit={submit} className="glass grid gap-5 p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity…"
              />
            </div>
            <Button type="submit" variant="glow" size="lg" className="justify-self-start">
              <Send /> Send message
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
