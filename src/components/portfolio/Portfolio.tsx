import { useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { faq } from "./faq";
import { motion, AnimatePresence, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Award,
  Check,
  Copy,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const EMAIL = "buhariimran01@gmail.com";
const LINKEDIN = "https://linkedin.com/in/imran-buhari-aa5aa838b";
const PHOTO = "/images/imran-hero-wide.jpg";
const RESUME = "/buhari-imran-resume.pdf";
const HERO = "/images/imran-hero-wide.jpg";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
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
    tint: "#2b1220", glow: "#e0659a",
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
    tint: "#2a1c0c", glow: "#e3a33c",
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
      "Interviewed 20+ smallholder farmers and agricultural students, then scoped and prioritised crop disease detection, localised advisory and a community feed to ship a demo-ready MVP in one weekend.",
    outcome: "Won the hackathon and shipped a working mobile-first MVP.",
    image:
      "https://imran-buhari.netlify.app/assets/images/agrolynk_hero_1779022333927.png",
    caseStudy: "https://imran-buhari.netlify.app/agrolynk",
    live: "https://agrolynk.lovable.app/",
    tint: "#0f2318", glow: "#4cc27a",
  },
  {
    name: "ProjectPilot",
    category: "Project planning · Student teams",
    year: "2026",
    role: "Product Owner",
    stack: ["Jira", "WhatsApp", "Google Drive"],
    headline: "Helping student teams plan projects and stay on track.",
    problem:
      "Student teams juggle deadlines, roles and tasks across scattered chats and files, and projects stall before the real work starts.",
    approach:
      "Served as Product Owner for a remote, cross-functional team of 8, coordinating the work across Jira, WhatsApp and Google Drive, and delivered it as my Fuse Varsity capstone.",
    outcome: "Tested by more than 5 student teams.",
    image: "",
    caseStudy: "",
    live: "",
    tint: "#0f1a2b", glow: "#6aa6f2",
  },
  {
    name: "Ceeravo",
    category: "Healthcare · Platform",
    year: "In development",
    role: "Team lead",
    stack: ["Team of 23"],
    headline: "Helping people reach the right hospital for their treatment.",
    problem:
      "People often don't know which hospitals have the equipment their treatment needs, and lose time getting to the wrong place.",
    approach:
      "Leading a team of 23 people to build a platform that connects patients to their chosen hospital, and to hospitals with the right equipment.",
    outcome: "Post-MVP stage, still in development.",
    image: "",
    caseStudy: "",
    live: "",
    tint: "#0b2223", glow: "#3fc4b5",
  },
  {
    name: "Edukate UIL",
    category: "Education · Learning platform",
    year: "2026",
    role: "Product Manager",
    stack: ["Web app (PWA)"],
    headline: "One place for course materials, instead of scattered WhatsApp groups.",
    problem:
      "Course materials were shared through WhatsApp, so students lost files and struggled to find what they needed.",
    approach:
      "Designed a learning platform, installable as a web app, for a university faculty to replace WhatsApp as the way course materials reach students.",
    outcome: "Still in development.",
    image: "",
    caseStudy: "",
    live: "",
    tint: "#2a150b", glow: "#ee8c4f",
  },
];

const services = [
  {
    title: "Product Strategy",
    body: "Clear direction, ruthless prioritization, and roadmaps that align teams around what matters.",
  },
  {
    title: "AI Product Development",
    body: "Taking AI-powered products from concept to MVP — scoping what the model should and shouldn't do.",
  },
  {
    title: "Idea Validation",
    body: "Testing startup ideas with real users before you spend time and money building the wrong thing.",
  },
  {
    title: "PRDs & Specs",
    body: "Requirements, user stories and acceptance criteria that engineers and designers actually enjoy using.",
  },
  {
    title: "User Research",
    body: "JTBD interviews, journey mapping and synthesis that ground decisions in real behavior.",
  },
  {
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
/* Motion: Emil Kowalski's strong ease-out; one hero entrance + one    */
/* scroll moment (the project stack). Nothing else moves on scroll.     */
/* ------------------------------------------------------------------ */

const easeOut = [0.23, 1, 0.32, 1] as const;

const Serif = ({ children, gold }: { children: ReactNode; gold?: boolean }) => (
  <span className={`font-serif font-normal italic tracking-[-0.01em] ${gold ? "text-gold" : ""}`}>{children}</span>
);

function Heading({ children, sub, light }: { children: ReactNode; sub?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-balance text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
        {children}
      </h2>
      {sub && (
        <p className={`mt-5 max-w-xl text-lg leading-relaxed ${light ? "text-muted-dark" : "text-muted"}`}>{sub}</p>
      )}
    </div>
  );
}

const btnGold =
  "group inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-gold-soft active:scale-[0.97]";
const btnGhost =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-medium text-cream transition-[border-color,background-color,transform] duration-200 ease-[var(--ease-out)] hover:border-cream/60 hover:bg-cream/5 active:scale-[0.97]";

function Available() {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="pulse-dot h-2 w-2 rounded-full bg-success" />
      Available for work
    </span>
  );
}

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={`mx-auto flex h-14 max-w-[1400px] items-center justify-between rounded-full px-5 md:px-10 transition-[background-color,border-color] duration-300 ${
          scrolled ? "border border-cream/10 bg-night/80 backdrop-blur-xl" : "border border-transparent"
        }`}
      >
        <a href="#top" className="text-[15px] font-semibold tracking-tight">
          Imran Buhari<span className="text-gold">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {RESUME && <a
            href={RESUME}
            download
            className="hidden min-h-10 items-center gap-1.5 rounded-full border border-cream/20 px-4 text-sm text-cream transition-colors hover:border-cream/60 lg:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>}
          <a
            href="#contact"
            className="hidden min-h-10 items-center rounded-full bg-gold px-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft sm:inline-flex"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="mx-auto mt-2 flex max-w-6xl origin-top flex-col rounded-3xl border border-cream/10 bg-night-2 p-3 shadow-2xl md:hidden"
          >
            {[...navLinks, { label: "Contact", href: "#contact" }, ...(RESUME ? [{ label: "Download resume", href: RESUME }] : [])].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-medium hover:bg-cream/5"
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

/* Hero — after reference "Strategy Meets Design": the portrait's own studio
   backdrop is the ground, a gold display line splits around him. */
function Hero() {
  const enter = (delay: number, x = 0) => ({
    initial: { opacity: 0, x, y: x ? 0 : 16 },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.9, delay, ease: easeOut },
  });

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0e0302]">
      <motion.img
        src={HERO}
        alt="Imran Buhari in a navy suit, arms crossed"
        fetchPriority="high"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
        className="absolute inset-x-0 bottom-0 -z-10 h-[74svh] w-full object-cover object-[50%_0%] [mask-image:linear-gradient(to_bottom,transparent,black_22%)] md:[mask-image:none] md:h-[100svh] md:object-[50%_15%]"
      />
      {/* floor fade into the page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[46svh] bg-gradient-to-t from-night via-night/80 to-transparent md:h-48 md:via-transparent" />

      <h1 className="pointer-events-none relative mx-auto mt-28 flex w-full max-w-[1400px] flex-col px-5 font-display text-[clamp(4.5rem,10.5vw,10.5rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.01em] text-gold md:mt-[22svh] md:flex-row md:justify-between md:px-10">
        <span className="sr-only">Imran Buhari, </span>
        <motion.span {...enter(0.25, -32)} className="block">
          Product
        </motion.span>
        <motion.span {...enter(0.33, 32)} className="block">
          Manager
        </motion.span>
      </h1>

      <div className="relative mx-auto mt-auto grid w-full max-w-[1400px] gap-8 px-5 pb-10 md:grid-cols-[1fr_auto_1fr] md:px-10 md:pb-14">
        <motion.div {...enter(0.55)} className="max-w-sm self-end">
          <p className="text-[17px] leading-relaxed text-cream/85">
            I build user-centered products with empathy at the core. I take ideas from ideation to MVP launch, and every decision along the way is backed by real human data.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className={btnGold}>
              See the work <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className={btnGhost}>
              Book a call
            </a>
          </div>
        </motion.div>
        <div className="hidden md:block" />
        <motion.dl
          {...enter(0.65)}
          className="hidden self-end text-right text-sm leading-relaxed text-cream/70 md:block"
        >
          <dt className="sr-only">Status</dt>
          <dd className="text-cream">
            <Available />
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="mt-1 flex items-center justify-end gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Works remote
          </dd>
          <dt className="sr-only">Recognition</dt>
          <dd className="mt-1 flex items-center justify-end gap-1.5">
            <Award className="h-3.5 w-3.5 text-gold" /> AgroLynk, hackathon winner 2025
          </dd>
        </motion.dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Work — the page's one scroll moment: cards deal onto a stack.       */
/* ------------------------------------------------------------------ */

type Project = (typeof projects)[number];

function StackCard({ p, i, total, progress }: { p: Project; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const depth = total - 1 - i;
  const scale = useTransform(progress, [start, 1], [1, 1 - depth * 0.03]);
  const dim = useTransform(progress, [start, 1], [0, Math.min(depth * 0.12, 0.5)]);

  return (
    <div className="sticky top-20 mb-[45svh] flex items-start last:mb-6 md:top-28 md:mb-[40svh] md:h-[calc(100svh-7rem)] md:last:mb-0">
      <motion.article
        style={{ scale, top: i * 18, background: `linear-gradient(140deg, ${p.tint} 0%, #140908 85%)` }}
        className="relative grid w-full origin-top md:h-full md:max-h-[680px] overflow-hidden rounded-[2rem] border border-cream/10 shadow-[0_-24px_60px_-24px_rgba(0,0,0,0.75)] lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="relative flex flex-col p-6 md:overflow-y-auto md:p-10">
          <p className="text-sm font-medium" style={{ color: p.glow }}>
            {p.category} · {p.year}
          </p>
          <h3 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">{p.name}</h3>
          <p className="mt-2 text-lg text-cream/75">{p.headline}</p>

          <dl className="mt-6 hidden space-y-4 text-[15px] leading-relaxed md:block">
            {[
              ["Problem", p.problem],
              ["What I did", p.approach],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4">
                <dt className="font-semibold text-cream">{k}</dt>
                <dd className="text-cream/75">{v}</dd>
              </div>
            ))}
            {p.outcome && (
              <div className="grid grid-cols-[6.5rem_1fr] gap-4">
                <dt className="font-semibold text-gold">Outcome</dt>
                <dd className="font-medium text-cream">{p.outcome}</dd>
              </div>
            )}
          </dl>
          <div className="mt-5 space-y-3 text-[15px] leading-relaxed md:hidden">
            {!p.image && (
              <>
                <p className="text-cream/75">
                  <span className="font-semibold text-cream">Problem: </span>
                  {p.problem}
                </p>
                <p className="text-cream/75">
                  <span className="font-semibold text-cream">What I did: </span>
                  {p.approach}
                </p>
              </>
            )}
            {p.outcome && (
              <p className="font-medium">
                <span className="text-gold">Outcome: </span>
                {p.outcome}
              </p>
            )}
          </div>

          {p.image && <img
            src={p.image}
            alt={`${p.name} landing page`}
            loading="lazy"
            className="mt-6 w-full rounded-xl border border-cream/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] lg:hidden"
          />}

          {(p.caseStudy || p.live) && (
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              {p.caseStudy && (
                <a href={p.caseStudy} target="_blank" rel="noreferrer" className={btnGold}>
                  Read the {p.name} case study <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className={btnGhost}>
                  Open {p.name} <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
          {!p.caseStudy && !p.live && (
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {[p.role, ...p.stack].map((t) => (
                <span key={t} className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/70">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="relative hidden items-center p-8 lg:flex">
          {p.image ? (
            <img
              src={p.image}
              alt={`${p.name} landing page`}
              loading="lazy"
              className="w-full rounded-xl border border-cream/10 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.7)]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-end rounded-xl border border-cream/10 p-8"
              style={{ background: `radial-gradient(ellipse at 70% 20%, ${p.glow}33, transparent 65%)` }}
            >
              <span
                className="font-display text-[clamp(4rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.85]"
                style={{ color: p.glow }}
              >
                {p.name}
              </span>
            </div>
          )}
        </div>

        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
      </motion.article>
    </div>
  );
}

function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="work" className="px-5 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Heading sub="Each started as a fuzzy problem. Here's what I found, what I decided, and what shipped.">
          Selected <Serif gold>work.</Serif>
        </Heading>
        <div ref={ref} className="relative mt-14 pb-24">
          {projects.map((p, i) => (
            <StackCard key={p.name} p={p} i={i} total={projects.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Services() {
  return (
    <section id="services" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Heading sub="Join your team, or partner with you on a defined engagement — the craft is the same.">
          Hire me for a role, <Serif gold>or a project.</Serif>
        </Heading>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-cream/10 md:grid-cols-2">
          <div className="bg-night-2 p-8 md:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">For companies</h3>
            <p className="mt-2 text-muted">Product Manager or Associate PM — full-time or contract.</p>
            <ul className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              {services.slice(0, 3).map((s) => (
                <li key={s.title} className="py-4">
                  <span className="font-medium">{s.title}</span>
                  <span className="block text-[15px] leading-relaxed text-muted">{s.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gold p-8 text-ink md:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">For founders</h3>
            <p className="mt-2 text-ink/70">Fixed-scope engagements: validate, spec, then build the MVP.</p>
            <ul className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
              {services.slice(3).map((s) => (
                <li key={s.title} className="py-4">
                  <span className="font-medium">{s.title}</span>
                  <span className="block text-[15px] leading-relaxed text-ink/70">{s.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-24 text-2xl font-semibold tracking-tight">How a project runs</h3>
        <ol className="mt-8 grid gap-8 md:grid-cols-4">
          {process.map((p) => (
            <li key={p.title} className="border-t border-cream/15 pt-5">
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 pb-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-cream text-ink lg:grid-cols-[0.8fr_1.2fr]">
        <img
          src={PHOTO}
          alt="Imran Buhari portrait"
          loading="lazy"
          className="h-[440px] w-full object-cover object-[50%_25%] lg:h-full"
        />
        <div className="px-6 py-14 md:px-12 md:py-16">
          <Heading light>
            How I create <Serif>value.</Serif>
          </Heading>
          <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              I build products with the people I build them for. For AgroLynk, I spoke directly with farmers and
              agricultural students, and what they told me shaped what we built.
            </p>
            <p>
              I have led teams at different scales. I led 23 people on Ceeravo, a healthcare product that helps people
              reach the hospital they need, including hospitals with the right equipment for their treatment. It is
              currently in development. I also served as Product Owner for a remote, cross-functional team of 8 on
              ProjectPilot, a planning assistant for student teams, coordinating the work across Jira, WhatsApp and
              Google Drive.
            </p>
            <p>
              I care about clear problems, honest feedback and shipping early, so decisions are tested against real
              people instead of assumptions.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {Object.entries(toolkit).map(([label, items]) => (
              <div key={label}>
                <h3 className="text-sm font-semibold">{label}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">{items.join(" · ")}</p>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold">Training</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">
                Product management training: Prodcademy (2025), M4ace, Fuse Varsity and IOTB Tech (2026).
              </p>
            </div>
            {RESUME && <a
              href={RESUME}
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-[background-color,transform] duration-200 hover:bg-ink/85 active:scale-[0.97]"
            >
              <Download className="h-4 w-4" /> Download resume (PDF)
            </a>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-5 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <Heading>
          What it's like to <Serif gold>work with me.</Serif>
        </Heading>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-cream/10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col bg-night p-8">
              <blockquote className="flex-1 font-serif text-2xl leading-snug text-cream/90">“{t.quote}”</blockquote>
              <figcaption className="mt-8 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted"> — {t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="px-5 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading>
            Notes on building <Serif gold>products.</Serif>
          </Heading>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className={btnGhost}>
            <Linkedin className="h-4 w-4" /> Follow on LinkedIn
          </a>
        </div>

        <ul className="mt-12 border-t border-cream/10">
          {writing.map((w) => (
            <li key={w.href}>
              <a
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[1fr_auto] items-center gap-6 border-b border-cream/10 py-6 md:grid-cols-[9rem_1fr_auto]"
              >
                <span className="hidden text-sm text-muted md:block">{w.tag}</span>
                <span className="text-lg font-medium tracking-tight transition-colors group-hover:text-gold md:text-xl">
                  {w.title}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="px-5 pb-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Heading>
          Questions, <Serif gold>answered.</Serif>
        </Heading>
        <div className="border-t border-cream/10">
          {faq.map((f) => (
            <details key={f.q} className="group border-b border-cream/10 py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                <h3>{f.q}</h3>
                <span className="text-2xl leading-none text-gold transition-transform duration-200 ease-[var(--ease-out)] group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
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
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-cream/10 bg-[radial-gradient(ellipse_at_top,#3a130c,#140908_65%)] px-6 py-20 text-center md:px-16 md:py-28">
        <p className="text-sm text-cream/80">
          <Available />
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl text-balance font-display text-[clamp(3.25rem,9vw,8rem)] font-extrabold uppercase leading-[0.86] text-gold">
          Let's build what's next
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream/75">
          Open to product manager roles and freelance projects. I reply within 24 hours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${EMAIL}?subject=Let's%20work%20together`} className={btnGold}>
            <Mail className="h-4 w-4" /> Email Imran
          </a>
          <button onClick={copy} className={btnGhost} aria-live="polite">
            {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : EMAIL}
          </button>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className={btnGhost}>
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          {RESUME && (
            <a href={RESUME} download className={btnGhost}>
              <Download className="h-4 w-4" /> Resume
            </a>
          )}
        </div>
      </div>

      <footer className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 px-2 text-sm text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} Imran Buhari<span className="text-gold">.</span> Product Manager.
        </span>
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
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <ToolsMarquee />
        <Work />
        <Services />
        <About />
        <Testimonials />
        <Writing />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}

function ToolsMarquee() {
  const items = [...toolkit.Tools, "PRDs", "JTBD interviews", "Roadmapping", "A/B testing"];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-cream/10 py-5" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm text-muted">
            {t}
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
