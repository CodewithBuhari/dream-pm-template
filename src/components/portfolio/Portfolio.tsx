import { useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { faq } from "./faq";
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from "framer-motion";
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
    highlight: "80% less time from PRD to sprint backlog",
    category: "AI Productivity · B2B Tool",
    year: "2025",
    role: "Product Manager · team of 5",
    stack: ["ChatGPT", "Notion", "Lovable"],
    headline: "Turning raw PRDs into sprint-ready plans in minutes.",
    problem:
      "Teams lose hours every sprint converting PRDs into backlogs, stories and estimates — and the output is still inconsistent.",
    approach:
      "Led a cross-functional team of 5 to design and launch the MVP. Authored the PRD and user flows for automated backlog generation and capacity-aware sprint planning.",
    outcome:
      "10 early users tested the MVP and reported an 80% reduction in time spent turning a PRD into a sprint-ready backlog.",
    image:
      "/images/sprint-maestro.webp",
    caseStudy: "https://imran-buhari.netlify.app/sprint-maestro",
    live: "https://sprintmaestro.lovable.app/",
    tint: "#2b1220", glow: "#e0659a",
  },
  {
    name: "Tiqra",
    highlight: "Waitlist stage, team of 7",
    category: "AI Market Intelligence · Startups",
    year: "2026",
    role: "Co-Founder & Product Manager",
    stack: ["Team of 7", "Gemini", "Vercel"],
    headline: "Truth-first validation so founders stop building the wrong thing.",
    problem:
      "Founders commit months and money to ideas validated by friends, gut feel, and vanity signals.",
    approach:
      "Co-founded Tiqra and lead product for a 7-person cross-functional team. Authored the PRD for its \"Truth Layer\", a real-time filter that screens out unreliable survey responses before AI feasibility analysis gives a Proceed / Pivot / Kill call.",
    outcome: "At waitlist stage, with design, engineering and data workstreams driving toward public launch.",
    image:
      "/images/tiqra.webp",
    caseStudy: "https://imran-buhari.netlify.app/tiqra",
    live: "https://tiqra-mvp.vercel.app/",
    tint: "#2a1c0c", glow: "#e3a33c",
  },
  {
    name: "AgroLynk",
    highlight: "#1 of 10 teams at Prodcademy Demo Day",
    category: "Agritech · Mobile MVP",
    year: "2025",
    role: "Product Manager",
    stack: ["Figma", "Lovable"],
    headline: "Connecting smallholder farmers to markets — built in a weekend.",
    problem:
      "Smallholder farmers lack reliable market access, timely crop advice, and a way to diagnose disease early.",
    approach:
      "Interviewed 20+ smallholder farmers and agricultural students, then scoped and prioritised crop disease detection, localised advisory and a community feed to ship a demo-ready MVP in one weekend.",
    outcome:
      "Ranked #1 of 10 teams at Prodcademy Demo Day, with 80% reported user satisfaction in early testing.",
    image:
      "/images/agrolynk.webp",
    caseStudy: "https://imran-buhari.netlify.app/agrolynk",
    live: "https://agrolynk.lovable.app/",
    tint: "#0f2318", glow: "#4cc27a",
  },
  {
    name: "ProjectPilot",
    highlight: "Tested by 5+ student teams",
    category: "Project planning · Student teams",
    year: "2026",
    role: "Product Owner",
    stack: ["Jira", "WhatsApp", "Google Drive"],
    headline: "Helping student teams plan projects and stay on track.",
    problem:
      "Student teams juggle deadlines, roles and tasks across scattered chats and files, and projects stall before the real work starts.",
    approach:
      "Served as Product Owner for a remote, cross-functional team of 8, coordinating the work across Jira, WhatsApp and Google Drive, and delivered it as my Fuse Varsity capstone. Ran a 30-respondent user survey and reshaped scope from the findings before development began.",
    outcome: "Tested by more than 5 student teams.",
    image: "",
    caseStudy: "",
    live: "",
    tint: "#0f1a2b", glow: "#6aa6f2",
  },
  {
    name: "Ceeravo",
    highlight: "Team of 23 · post-MVP",
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
    highlight: "In development",
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
    name: "Awwal Adepoju",
    context: "PM Learning Cohort",
  },
  {
    quote:
      "Working with Imran on AgroLynk showed me what focused execution looks like under pressure. He made the hard calls and kept us shipping.",
    name: "Abdul Samad Oyewole",
    context: "AgroLynk team",
  },
  {
    quote:
      "Sprint Maestro saved our team hours every sprint. The backlog quality improved noticeably and our engineers stopped pushing back on estimates.",
    name: "Yusuf Olagunju",
    context: "Sprint Maestro early user",
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
            <Award className="h-3.5 w-3.5 text-gold" /> AgroLynk, #1 of 10 at Prodcademy Demo Day
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

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/* Lenis instance, so the case-study sheet can pause page scrolling. */
let lenisInstance: Lenis | null = null;

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const on = () => setM(window.innerWidth < 810);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return m;
}

/* Visual for a card or sheet: the product screenshot, or a type panel
   for projects that don't have one yet. */
function ProjectVisual({ p, className = "" }: { p: Project; className?: string }) {
  if (p.image) {
    return (
      <div
        className="flex h-full w-full items-center justify-center p-2 sm:p-3"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${p.glow}26, transparent 70%), #0d0706` }}
      >
        <img
          src={p.image}
          alt={`${p.name} product screen`}
          width={1408}
          height={768}
          decoding="async"
          className={`block h-auto max-h-full w-auto max-w-full rounded-lg object-contain shadow-[0_12px_32px_-12px_rgba(0,0,0,0.7)] ${className}`}
        />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`flex h-full w-full items-end p-6 ${className}`}
      style={{ background: `radial-gradient(ellipse at 70% 15%, ${p.glow}40, transparent 65%), #120908` }}
    >
      <span
        className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.85]"
        style={{ color: p.glow }}
      >
        {p.name}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stacking card — compact by design so it always fits on screen.     */
/* The full story lives in the case-study sheet.                      */
/* ------------------------------------------------------------------ */

function WorkCard({
  p,
  index,
  total,
  isLast,
  isMobile,
  onOpen,
}: {
  p: Project;
  index: number;
  total: number;
  isLast: boolean;
  isMobile: boolean;
  onOpen: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Exit: shrink, tilt, soften and fade as the next card takes over.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.45, 0]);
  const mobileOpacity = useTransform(scrollYProgress, (v) => (v < 0.5 ? 1 - v * 1.2 : 0.4 - (v - 0.5) * 0.8));
  const blurPx = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  const id = slug(p.name);

  return (
    <motion.div
      ref={ref}
      className="sticky w-full will-change-transform"
      style={{
        top: isMobile ? 72 : 92 + index * 10,
        zIndex: 10 + index,
        scale: isLast ? 1 : scale,
        rotate: isLast || isMobile ? 0 : rotate,
        opacity: isLast ? 1 : isMobile ? mobileOpacity : opacity,
        filter: isLast || isMobile ? "none" : filter,
        marginBottom: isLast ? 0 : isMobile ? "10vh" : "20vh",
        transformOrigin: "center center",
      }}
    >
      <article
        className="relative overflow-hidden rounded-[2rem] border border-cream/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]"
        style={{ background: `linear-gradient(140deg, ${p.tint} 0%, #140908 80%)` }}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: p.glow }} />

        <div className="relative grid gap-4 p-4 sm:gap-6 sm:p-8 lg:h-[min(500px,calc(100svh-180px))] lg:min-h-[400px] lg:grid-cols-[minmax(0,1fr)_300px_170px] lg:gap-8 lg:p-9 xl:grid-cols-[minmax(0,1fr)_400px_190px]">
          {/* Left: pitch + name */}
          <div className="flex min-w-0 flex-col justify-between gap-6">
            <p className="hidden max-w-[34ch] text-[15px] leading-relaxed text-cream/70 sm:block">{p.headline}</p>
            <button type="button" onClick={() => onOpen(id)} className="group text-left">
              <span className="flex items-center gap-1 border-b border-cream/15 pb-3 text-sm tabular-nums">
                <span className="text-cream">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-cream/50">/ {String(total).padStart(2, "0")}</span>
                <span className="ml-auto text-xs font-medium" style={{ color: p.glow }}>
                  {p.category}
                </span>
              </span>
              <h3
                className="mt-3 font-semibold leading-[0.95] tracking-[-0.04em] text-cream transition-colors group-hover:text-gold"
                style={{ fontSize: `clamp(2.25rem, ${Math.min(6, 60 / Math.max(p.name.length, 8))}vw, 5.5rem)` }}
              >
                {p.name}
              </h3>
            </button>
          </div>

          {/* Middle: visual + the one action */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => onOpen(id)}
              aria-label={`Open the ${p.name} case study`}
              className="group relative block aspect-[16/8] overflow-hidden rounded-[1.25rem] border border-cream/10 sm:aspect-[16/10] lg:aspect-auto lg:min-h-0 lg:flex-1"
            >
              <ProjectVisual p={p} className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]" />
            </button>
            <button
              type="button"
              onClick={() => onOpen(id)}
              className="min-h-11 rounded-2xl border border-cream/10 bg-cream/[0.07] px-4 text-xs font-semibold uppercase tracking-[0.08em] text-cream transition-[background-color,transform] duration-200 hover:bg-cream/[0.12] active:scale-[0.98]"
            >
              View case study
            </button>
          </div>

          {/* Right: facts */}
          <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-[13px] sm:grid-cols-3 sm:text-sm lg:flex lg:flex-col lg:justify-between lg:gap-6">
            <div>
              <dt className="text-cream/55">Year</dt>
              <dd className="mt-1 font-medium text-cream">{p.year}</dd>
            </div>
            <div>
              <dt className="text-cream/55">Role</dt>
              <dd className="mt-1 font-medium text-cream">{p.role}</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-cream/55">Result</dt>
              <dd className="mt-1 font-medium leading-snug text-gold">{p.highlight}</dd>
            </div>
          </dl>
        </div>
      </article>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Case-study sheet — slides up, holds the full story.                */
/* ------------------------------------------------------------------ */

function CaseStudySheet({ id, onChange, onClose }: { id: string; onChange: (id: string) => void; onClose: () => void }) {
  const p = projects.find((x) => slug(x.name) === id);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    lenisInstance?.stop();
    closeBtn.current?.focus({ preventScroll: true });
    return () => {
      html.style.overflow = prevOverflow;
      lenisInstance?.start();
      prev?.focus?.({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const top = () => scroller.current?.scrollTo({ top: 0 });
    top();
    const raf = requestAnimationFrame(top);
    return () => cancelAnimationFrame(raf);
  }, [id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Tab" && scroller.current) {
        const root = scroller.current.parentElement!;
        const f = root.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!p) return null;
  const others = projects.filter((x) => x !== p);
  const headingId = `case-${id}`;

  return (
    <div className="fixed inset-0 z-[200]">
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className="absolute inset-x-0 bottom-0 top-3 flex flex-col overflow-hidden rounded-t-[1.75rem] border border-cream/10 bg-night shadow-[0_-24px_80px_rgba(0,0,0,0.5)] sm:inset-x-3 sm:top-6 lg:inset-x-6"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 32, mass: 0.9 }}
        onAnimationComplete={() => scroller.current?.scrollTo({ top: 0 })}
      >
        <div className="relative flex h-16 shrink-0 items-center gap-3 border-b border-cream/10 bg-night/90 px-4 backdrop-blur sm:px-6">
          <span aria-hidden="true" className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-cream/20" />
          <p className="truncate text-lg font-semibold tracking-tight">{p.name}</p>
          <span className="hidden text-sm text-cream/55 sm:inline">{p.year}</span>
          <div className="ml-auto flex items-center gap-2">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-cream/20 px-4 text-sm transition-colors hover:border-cream/60"
              >
                Open {p.name} <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink transition-colors hover:bg-gold-soft"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div ref={scroller} data-lenis-prevent className="flex-1 overflow-y-auto overscroll-contain">
          <article className="mx-auto max-w-[1200px] px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-12">
            <p className="text-sm font-medium" style={{ color: p.glow }}>
              {p.category} · {p.year}
            </p>
            <h2 id={headingId} className="mt-3 break-words text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
              {p.name}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {[p.role, ...p.stack].map((t) => (
                <span key={t} className="inline-flex h-8 items-center rounded-full bg-cream/[0.07] px-3.5 text-[13px] text-cream/85">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-[52ch] font-serif text-[clamp(1.4rem,2.4vw,2rem)] italic leading-snug text-cream/90">{p.headline}</p>

            <div className="mt-10 overflow-hidden rounded-[1.25rem] border border-cream/10">
              {p.image ? (
                <img src={p.image} alt={`${p.name} product screen`} className="block h-auto w-full" />
              ) : (
                <div className="aspect-[16/7]">
                  <ProjectVisual p={p} />
                </div>
              )}
            </div>

            <div className="mt-14 grid gap-10 border-t border-cream/10 pt-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
              <div className="space-y-9">
                {[
                  ["The problem", p.problem],
                  ["What I did", p.approach],
                  ["Outcome", p.outcome],
                ]
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <section key={k}>
                      <h3 className={`text-2xl font-semibold tracking-tight ${k === "Outcome" ? "text-gold" : ""}`}>{k}</h3>
                      <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-cream/75">{v}</p>
                    </section>
                  ))}
              </div>
              <aside className="self-start rounded-3xl bg-cream/[0.05] p-6 sm:p-8">
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-[15px]">
                  <div>
                    <dt className="text-cream/55">Year</dt>
                    <dd className="mt-1">{p.year}</dd>
                  </div>
                  <div>
                    <dt className="text-cream/55">Field</dt>
                    <dd className="mt-1">{p.category}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-cream/55">Role</dt>
                    <dd className="mt-1">{p.role}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-cream/55">Result</dt>
                    <dd className="mt-1 text-gold">{p.highlight}</dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#contact" onClick={onClose} className={btnGold}>
                    Work with Imran
                  </a>
                  {p.caseStudy && (
                    <a href={p.caseStudy} target="_blank" rel="noreferrer" className={btnGhost}>
                      Full write-up <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </aside>
            </div>

            <section aria-labelledby="more-work" className="mt-20">
              <h3 id="more-work" className="text-2xl font-semibold tracking-tight">
                More work
              </h3>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
                {others.map((o) => (
                  <li key={o.name}>
                    <button type="button" onClick={() => onChange(slug(o.name))} className="group block w-full text-left">
                      <span className="block aspect-[4/3] overflow-hidden rounded-2xl border border-cream/10">
                        <ProjectVisual p={o} className="transition-transform duration-500 group-hover:scale-[1.04]" />
                      </span>
                      <span className="mt-3 block text-lg font-semibold tracking-tight group-hover:text-gold">{o.name}</span>
                      <span className="block text-[13px] text-cream/55">{o.category}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </motion.div>
    </div>
  );
}

function Work() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState<string | null>(null);

  // Deep link: #case-<project> opens that case study; Back closes it.
  useEffect(() => {
    const read = () => {
      const m = window.location.hash.match(/^#case-(.+)$/);
      setOpen(m && projects.some((p) => slug(p.name) === m[1]) ? m[1] : null);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  const openCase = (id: string) => {
    if (window.location.hash !== `#case-${id}`) window.history.pushState(null, "", `#case-${id}`);
    setOpen(id);
  };
  const closeCase = () => {
    if (window.location.hash.startsWith("#case-")) window.history.pushState(null, "", window.location.pathname + window.location.search);
    setOpen(null);
  };
  useEffect(() => {
    const onPop = () => {
      if (!window.location.hash.startsWith("#case-")) setOpen(null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <section id="work" className="px-3 pt-24 sm:px-5 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="px-2 sm:px-0">
          <Heading sub="Each started as a fuzzy problem. Here's what I found, what I decided, and what shipped.">
            Selected <Serif gold>work.</Serif>
          </Heading>
        </div>
        <div className="relative mt-14 flex flex-col pb-24">
          {projects.map((p, i) => (
            <WorkCard
              key={p.name}
              p={p}
              index={i}
              total={projects.length}
              isLast={i === projects.length - 1}
              isMobile={isMobile}
              onOpen={openCase}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {open && <CaseStudySheet key="sheet" id={open} onChange={openCase} onClose={closeCase} />}
      </AnimatePresence>
    </section>
  );
}

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
    lenisInstance = lenis;
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
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
