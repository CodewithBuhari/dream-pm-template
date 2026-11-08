import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Award,
  BarChart3,
  Check,
  Copy,
  FileText,
  FlaskConical,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const EMAIL = "buhariimran01@gmail.com";
const LINKEDIN = "https://linkedin.com/in/imran-buhari-aa5aa838b";
const PHOTO = "https://imran-buhari.netlify.app/assets/images/imran-photo.jpg";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
];

const stats = [
  { value: "3", label: "AI & mobile products shipped, idea → live" },
  { value: "80%", label: "Less sprint-planning time with Sprint Maestro" },
  { value: "1st", label: "Hackathon win with AgroLynk" },
  { value: "4", label: "Product management certifications" },
];

const projects = [
  {
    name: "Sprint Maestro",
    category: "AI Productivity · B2B Tool",
    year: "2026",
    role: "Product Manager",
    stack: ["ChatGPT", "Notion", "Lovable"],
    headline: "Turning raw PRDs into sprint-ready plans in minutes.",
    problem:
      "Teams lose hours every sprint converting PRDs into backlogs, stories and estimates — and the output is still inconsistent.",
    approach:
      "Mapped the planning workflow with PMs and engineers, defined the PRD → backlog pipeline, and shipped an AI MVP that generates stories, acceptance criteria and estimates.",
    outcome: "Cuts sprint-planning time by ~80% with automated backlog creation and estimation.",
    image:
      "https://imran-buhari.netlify.app/assets/images/sprint_maestro_hero_new_1779022418718.png",
    caseStudy: "https://imran-buhari.netlify.app/sprint-maestro",
    live: "https://sprintmaestro.lovable.app/",
    tint: "#f3e6ea",
  },
  {
    name: "Tiqra",
    category: "AI Market Intelligence · Startups",
    year: "2026",
    role: "Product Manager",
    stack: ["Gemini", "Vercel"],
    headline: "Truth-first validation so founders stop building the wrong thing.",
    problem:
      "Founders commit months and money to ideas validated by friends, gut feel, and vanity signals.",
    approach:
      "Designed a validation flow that blends verified human feedback with AI feasibility reports, ending in a clear Proceed / Pivot / Kill recommendation.",
    outcome: "A live platform that gives founders a decision, not just data, before they build.",
    image:
      "https://imran-buhari.netlify.app/assets/images/tiqra_hero_landing_1779022691308.png",
    caseStudy: "https://imran-buhari.netlify.app/tiqra",
    live: "https://tiqra-mvp.vercel.app/",
    tint: "#f6ead5",
  },
  {
    name: "AgroLynk",
    category: "Agritech · Mobile MVP",
    year: "2025",
    role: "Product Manager",
    stack: ["Figma", "Lovable"],
    headline: "Connecting smallholder farmers to markets — built in a weekend.",
    problem:
      "Smallholder farmers lack reliable market access, timely crop advice, and a way to diagnose disease early.",
    approach:
      "Led discovery and scoping under hackathon pressure: crop-disease detection, localized advisory, and a community feed — prioritized ruthlessly to ship a demo-ready MVP.",
    outcome: "Won the hackathon and shipped a working mobile-first MVP.",
    image:
      "https://imran-buhari.netlify.app/assets/images/agrolynk_hero_1779022333927.png",
    caseStudy: "https://imran-buhari.netlify.app/agrolynk",
    live: "https://agrolynk.lovable.app/",
    tint: "#e3efe6",
  },
];

const services = [
  {
    icon: Target,
    title: "Product Strategy",
    body: "Clear direction, ruthless prioritization, and roadmaps that align teams around what matters.",
  },
  {
    icon: Sparkles,
    title: "AI Product Development",
    body: "Taking AI-powered products from concept to MVP — scoping what the model should and shouldn't do.",
  },
  {
    icon: FlaskConical,
    title: "Idea Validation",
    body: "Testing startup ideas with real users before you spend time and money building the wrong thing.",
  },
  {
    icon: FileText,
    title: "PRDs & Specs",
    body: "Requirements, user stories and acceptance criteria that engineers and designers actually enjoy using.",
  },
  {
    icon: Users,
    title: "User Research",
    body: "JTBD interviews, journey mapping and synthesis that ground decisions in real behavior.",
  },
  {
    icon: BarChart3,
    title: "Product Analytics",
    body: "Turning usage data into decisions that move activation, engagement and retention.",
  },
];

const process = [
  { step: "01", title: "Discover", body: "Talk to users, map the problem, find the real job to be done." },
  { step: "02", title: "Define", body: "Write the PRD, set success metrics, cut scope to the essential." },
  { step: "03", title: "Validate", body: "Prototype fast, test with real people, kill bad ideas early." },
  { step: "04", title: "Ship & learn", body: "Launch the MVP, read the numbers, iterate on what matters." },
];

const toolkit = {
  "Product": [
    "Product Strategy",
    "MVP Development",
    "Product Validation",
    "User Research",
    "User Journey Mapping",
    "Feature Prioritisation",
    "Wireframing",
  ],
  "Tools": ["Figma", "Notion", "Lovable", "ChatGPT", "Gemini", "Google AI Studio", "Antigravity", "Canva"],
  "Ways of working": ["Communication", "Collaboration", "Storytelling", "Critical Thinking", "Adaptability"],
};

const certifications = [
  { year: "2026", title: "Product Management", school: "IOTB Tech" },
  { year: "2026", title: "Product Management", school: "Fuse Varsity" },
  { year: "2026", title: "Product Management", school: "M4ace" },
  { year: "2025", title: "Product Management", school: "Prodcademy" },
];

const testimonials = [
  {
    quote:
      "Imran approaches product with a level of clarity and intentionality that's rare. He asks the right questions before writing a single line of spec.",
    name: "Cohort Member",
    context: "PM Learning Cohort",
  },
  {
    quote:
      "Working with Imran on AgroLynk showed me what focused execution looks like under pressure. He made the hard calls and kept us shipping.",
    name: "Teammate",
    context: "AgroLynk Hackathon",
  },
  {
    quote:
      "Sprint Maestro saved our team hours every sprint. The backlog quality improved noticeably and our engineers stopped pushing back on estimates.",
    name: "Early User",
    context: "Sprint Maestro Beta",
  },
];

const writing = [
  {
    title: "We built AgroLynk in a weekend and won — here's what happened",
    tag: "Case story",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_agrolynk-graduation-demoday-ugcPost-7407217609806393345-qByy",
  },
  {
    title: "You're not building an MVP to impress people. You're building it to be wrong early",
    tag: "MVPs",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_m4acelearningchallenge-learninginpublic-productmanagement-activity-7446266706613686272-2GlV",
  },
  {
    title: "Check the numbers to see where people struggle. Then talk to people to understand why",
    tag: "Analytics",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_m4acelearningchallenge-learninginpublic-productmanagement-activity-7449210462715473920-zPfY",
  },
  {
    title: "Every step in onboarding is a moment of trust",
    tag: "Onboarding",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_theproductnotebook-activity-7447779169721208832-xJ7O",
  },
  {
    title: "A successful product isn't the one with the most features or the biggest launch",
    tag: "Strategy",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_m4acelearningchallenge-learninginpublic-productmanagement-activity-7453212937407721472-L1fo",
  },
  {
    title: "I used to think the difference between a product and a feature was obvious",
    tag: "Fundamentals",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_m4acelearningchallenge-learninginpublic-productmanagement-activity-7445926281000497152-wNfH",
  },
];

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] ${
        dark ? "text-white/50" : "text-muted"
      }`}
    >
      <span className="h-px w-8 bg-accent" />
      {children}
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
  dark,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 max-w-xl text-lg leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition hover:bg-accent"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostButton({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition hover:border-ink hover:bg-white"
    >
      {children}
    </a>
  );
}

function Available({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="pulse-dot h-2 w-2 rounded-full bg-success" />
      Available for work
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-300 ${
          scrolled ? "border border-ink/10 bg-paper/80 shadow-sm backdrop-blur-xl" : "border border-transparent"
        }`}
      >
        <a href="#top" className="text-[15px] font-semibold tracking-tight">
          Imran Buhari<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Available className="hidden font-mono text-[11px] uppercase tracking-wider text-muted lg:inline-flex" />
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-accent sm:inline-block"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col rounded-3xl border border-ink/10 bg-paper p-3 shadow-lg md:hidden"
          >
            {[...navLinks, { label: "Contact", href: "#contact" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-medium hover:bg-paper-2"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="grain pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
          >
            <span className="rounded-full border border-ink/10 bg-white/60 px-3 py-1.5">
              <Available />
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Nigeria · Remote-friendly
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-8 text-[clamp(2.75rem,7.2vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
          >
            Product manager who takes{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">AI ideas</span> from
            whiteboard to <span className="font-serif font-normal italic tracking-[-0.02em]">shipped.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            I'm Imran Buhari. I help startups and product teams validate what to build, write the specs
            that get it built, and ship AI-powered products users actually come back to.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <PrimaryButton href="#work">See case studies</PrimaryButton>
            <GhostButton href={`mailto:${EMAIL}?subject=Let's%20work%20together`}>
              <Mail className="h-4 w-4" /> Start a conversation
            </GhostButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-accent-soft" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-2">
            <img
              src={PHOTO}
              alt="Portrait of Imran Buhari"
              className="aspect-[4/5] w-full object-cover object-top"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-xl shadow-ink/5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white">
              <Award className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Hackathon winner</div>
              <div className="text-xs text-muted">AgroLynk · 2025</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 border-t border-line md:mt-28 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.06}
            className={`py-7 pr-6 ${i % 2 === 1 ? "pl-6 border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line md:border-t-0" : ""
            } ${i === 2 ? "md:pl-6 md:border-l" : ""}`}
          >
            <div className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{s.value}</div>
            <div className="mt-2 max-w-[14rem] text-sm text-muted">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ToolsMarquee() {
  const items = [...toolkit.Tools, "PRDs", "JTBD", "User Interviews", "Roadmapping", "A/B Testing"];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-paper-2/60 py-5">
      <div className="animate-marquee flex w-max gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {t}
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="px-5 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Selected work"
            title={
              <>
                Products I've taken from <span className="font-serif font-normal italic">zero to live.</span>
              </>
            }
            sub="Each one started as a fuzzy problem. Here's what I found, what I decided, and what shipped."
          />
        </div>

        <div className="mt-16 flex flex-col gap-8 md:gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.name}>
              <article className="group grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white lg:grid-cols-2">
                <div
                  className={`relative flex items-center justify-center p-6 md:p-10 ${i % 2 ? "lg:order-2" : ""}`}
                  style={{ background: p.tint }}
                >
                  <span className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                    0{i + 1} / 0{projects.length}
                  </span>
                  <img
                    src={p.image}
                    alt={`${p.name} product screenshot`}
                    loading="lazy"
                    className="mt-6 w-full rounded-xl border border-ink/5 shadow-2xl shadow-ink/10 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.015]"
                  />
                </div>

                <div className="flex flex-col p-7 md:p-10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{p.category}</div>
                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.035em]">{p.name}</h3>
                  <p className="mt-2 text-lg text-muted">{p.headline}</p>

                  <dl className="mt-8 space-y-5 text-[15px] leading-relaxed">
                    {[
                      ["Problem", p.problem],
                      ["What I did", p.approach],
                      ["Outcome", p.outcome],
                    ].map(([k, v]) => (
                      <div key={k} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                        <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:pt-1">{k}</dt>
                        <dd className={k === "Outcome" ? "font-medium" : "text-ink/80"}>{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[p.role, p.year, ...p.stack].map((t) => (
                      <span key={t} className="rounded-full bg-paper px-3 py-1 text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <a
                      href={p.caseStudy}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-accent"
                    >
                      Read case study <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium transition hover:border-ink"
                    >
                      Try it live <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="rounded-t-[2.5rem] bg-ink px-5 py-24 text-white md:rounded-t-[4rem] md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          dark
          eyebrow="How I can help"
          title={
            <>
              Hire me for a role, <span className="font-serif font-normal italic text-accent">or a project.</span>
            </>
          }
          sub="Joining your team full-time, or partnering with founders on a defined engagement — the craft is the same."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">For companies</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Product Manager / Associate PM</h3>
              <p className="mt-3 text-white/60">
                Full-time or contract. I bring discovery, clear specs and a bias for shipping to AI, SaaS and
                emerging-market products.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-accent p-8 text-white">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">For founders</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Validate → spec → MVP</h3>
              <p className="mt-3 text-white/85">
                Fixed-scope engagements: idea validation sprints, PRD & roadmap packages, and AI MVP builds with
                no-code / AI tooling.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-4 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06} className="bg-ink">
              <div className="group h-full p-8 transition hover:bg-white/[0.03]">
                <s.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h4 className="mt-6 text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-white/55">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <Eyebrow dark>How I work</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="border-t border-white/15 pt-5">
                  <div className="font-mono text-xs text-accent">{p.step}</div>
                  <h4 className="mt-3 text-xl font-semibold">{p.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/55">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-ink px-5 pb-24 md:pb-36">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-paper px-6 py-16 text-ink md:px-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHead
              eyebrow="About"
              title={
                <>
                  Builder first. <span className="font-serif font-normal italic">Learning in public.</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
                <p>
                  I'm a product manager based in Nigeria, obsessed with turning ambiguous ideas into products
                  people rely on. My sweet spot is the messy beginning — where the problem isn't clear yet and
                  the cost of building the wrong thing is highest.
                </p>
                <p>
                  I combine strategic thinking with hands-on execution: I'll run the user interviews, write the
                  PRD, and prototype the MVP with modern AI tooling myself. I share what I learn every week on
                  LinkedIn.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-10">
            {Object.entries(toolkit).map(([label, items], i) => (
              <Reveal key={label} delay={i * 0.06}>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{label}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((t) => (
                    <span key={t} className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <Reveal>
            <Eyebrow>Certifications</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <Reveal key={c.school} delay={i * 0.05}>
                <div className="rounded-2xl border border-ink/10 bg-white p-5">
                  <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                    <span>{c.year}</span>
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <div className="mt-6 font-semibold">{c.school}</div>
                  <div className="text-sm text-muted">{c.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-5 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Kind words"
          title={
            <>
              What it's like to <span className="font-serif font-normal italic">work with me.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-8">
                <span className="font-serif text-6xl leading-none text-accent">“</span>
                <blockquote className="mt-2 flex-1 text-[17px] leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-paper-2 font-semibold">
                    {t.name[0]}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted">{t.context}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="px-5 pb-24 md:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Writing"
            title={
              <>
                Notes on building <span className="font-serif font-normal italic">products.</span>
              </>
            }
          />
          <GhostButton href={LINKEDIN} external>
            <Linkedin className="h-4 w-4" /> Follow on LinkedIn
          </GhostButton>
        </div>

        <ul className="mt-12 border-t border-line">
          {writing.map((w, i) => (
            <Reveal key={w.href} delay={i * 0.04}>
              <li>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-center gap-6 border-b border-line py-6 md:grid-cols-[8rem_1fr_auto]"
                >
                  <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:block">
                    {w.tag}
                  </span>
                  <span className="text-lg font-medium tracking-tight transition group-hover:text-accent md:text-xl">
                    {w.title}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="px-5 pb-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-white md:px-16 md:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <Reveal className="relative">
          <Eyebrow dark>
            <Available />
          </Eyebrow>
          <h2 className="mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Have a product to build — or a team to join?{" "}
            <span className="font-serif font-normal italic text-accent">Let's talk.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Open to product manager roles and freelance engagements. I usually reply within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Let's%20work%20together`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-ink"
            >
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-4 text-sm font-medium transition hover:border-white"
            >
              {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-4 text-sm font-medium transition hover:border-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 px-2 text-sm text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} Imran Buhari<span className="text-accent">.</span> Product Manager.
        </span>
        <a href="#top" className="font-mono text-[11px] uppercase tracking-[0.16em] hover:text-ink">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Portfolio() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, anchors: { offset: -80 } });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <ToolsMarquee />
        <Work />
        <Services />
        <About />
        <Testimonials />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}
