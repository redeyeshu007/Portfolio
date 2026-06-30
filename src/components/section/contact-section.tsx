import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Icons } from "@/components/icons";
import ContactForm from "@/components/section/contact-form";
import { DATA } from "@/data/resume";

const links = [
  {
    label: "Email",
    href: `mailto:${DATA.contact.email}`,
    icon: Icons.email,
    external: false,
  },
  {
    label: "LinkedIn",
    href: DATA.contact.social.LinkedIn.url,
    icon: Icons.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: DATA.contact.social.GitHub.url,
    icon: Icons.github,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          The projects on this portfolio represent only a small part of my
          journey. If you&apos;re interested in collaborating, discussing
          technology, exploring opportunities, or building something ambitious
          together, let&apos;s connect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <link.icon className="size-4" />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="my-4 h-px w-full max-w-md bg-border" />

        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
          Let&apos;s Start Something
        </h3>

        <ContactForm />

        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Whether it&apos;s a project, opportunity, startup idea, or simply a
          conversation about technology, I&apos;d love to hear from you.
        </p>

        <p className="mx-auto max-w-lg font-medium text-foreground text-balance">
          The best projects often begin with a single message.
        </p>
      </div>
    </div>
  );
}

