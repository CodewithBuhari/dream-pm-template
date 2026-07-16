import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Bot,
  BookOpen,
  PenTool,
  Mail,
  ArrowUpRight,
  Quote,
  Linkedin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "buhariimran01@gmail.com";
const LINKEDIN = "https://linkedin.com/in/imran-buhari-aa5aa838b";

const specialties = [
  {
    title: "Product Strategy",
    body: "My core expertise. Defining direction, prioritizing ruthlessly, and aligning teams around what matters to ship successful products.",
  },
  {
    title: "AI-Powered Products",
    body: "Building tools that use artificial intelligence to make founders and product teams faster, sharper, and highly productive.",
  },
  {
    title: "PRDs & Documentation",
    body: "Writing clear, actionable product requirements, user stories, and specs that engineering and design teams actually love.",
  },
  {
    title: "User Research",
    body: "Jobs-To-Be-Done, user interviews, feedback loops, and synthesis that ground product decisions in real human behavior.",
  },
  {
    title: "Idea Validation",
    body: "Helping founders test startup ideas before spending time or money building the wrong thing, validating early and fast.",
  },
  {
    title: "Product Analytics",
    body: "Turning complex user behavior data into clear product decisions that move the needle on growth, engagement, and retention.",
  },
];

const projects = [
  {
    name: "AgroLynk",
    tag: "Agritech · Mobile MVP",
    body: "A mobile-first Agritech MVP connecting farmers to markets. Features smart crop disease detection, a localized agricultural advisory system, and an interactive community feed for smallholder farmers.",
    meta: ["Product Manager", "2025", "Figma & Lovable"],
    image:
      "https://imran-buhari.netlify.app/assets/images/agrolynk_hero_1779022333927.png",
    caseStudy: "https://imran-buhari.netlify.app/agrolynk",
    live: "https://agrolynk.lovable.app/",
    typeLabel: "MOBILE MVP",
  },
  {
    name: "Sprint Maestro",
    tag: "AI Productivity · PM Tool",
    body: "An AI-powered tool that transforms raw Product Requirement Documents (PRDs) into comprehensive, sprint-ready plans in minutes. Cuts sprint planning time by 80% through automated backlog creation and estimations.",
    meta: ["Product Manager", "2026", "ChatGPT & Notion"],
    image:
      "https://imran-buhari.netlify.app/assets/images/sprint_maestro_hero_new_1779022418718.png",
    caseStudy: "https://imran-buhari.netlify.app/sprint-maestro",
    live: "https://sprintmaestro.lovable.app/",
    typeLabel: "PM TOOL",
  },
  {
    name: "Tiqra",
    tag: "AI Market Intelligence · Startups",
    body: "A truth-first validation platform that replaces startup guesswork with verified human feedback and AI feasibility reports. Helps founders analyze market demand and determine feasibility — Proceed, Pivot, or Kill.",
    meta: ["Product Manager", "2026", "Vercel & Gemini"],
    image:
      "https://imran-buhari.netlify.app/assets/images/tiqra_hero_landing_1779022691308.png",
    caseStudy: "https://imran-buhari.netlify.app/tiqra",
    live: "https://tiqra-mvp.vercel.app/",
    typeLabel: "AI PLATFORM",
  },
];

const milestones = [
  { icon: Award, title: "Hackathon Winner", body: "Recognized for innovative agritech solution with AgroLynk." },
  { icon: Bot, title: "AI Product Builder", body: "Built AI-powered PM and validation tools used by real teams." },
  { icon: BookOpen, title: "PM Cohort Member", body: "Active member of a structured PM learning cohort." },
  { icon: PenTool, title: "Learning in Public", body: "Sharing product insights consistently on LinkedIn." },
];

const toolkit = [
  {
    label: "Product Skills",
    items: [
      "User Research",
      "MVP Development",
      "Product Thinking",
      "Product Validation",
      "Wireframing",
      "Product Strategy",
      "User Journey Mapping",
      "Feature Prioritisation",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Figma",
      "Lovable",
      "Notion",
      "ChatGPT",
      "Gemini",
      "Canva",
      "Google AI Studio",
      "Antigravity",
    ],
  },
  {
    label: "Soft Skills",
    items: ["Communication", "Collaboration", "Storytelling", "Critical Thinking", "Adaptability"],
  },
];

const certifications = [
  { year: "2025", title: "Product Manager", school: "Prodcademy" },
  { year: "2026", title: "Product Manager", school: "M4ace" },
  { year: "2026", title: "Product Manager", school: "Fuse Varsity" },
  { year: "2026", title: "Product Manager", school: "IOTB Tech" },
];

const writing = [
  {
    title: "We built AgroLynk in a weekend and won — here's what happened",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_agrolynk-graduation-demoday-ugcPost-7407217609806393345-qByy",
  },
  {
    title: "A successful product isn't the one with the most features, the best design, or the biggest launch",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_m4acelearningchallenge-learninginpublic-productmanagement-activity-7453212937407721472-L1fo",
  },
  {
    title: "Check the numbers to see where people are struggling. Then talk to people to understand why",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_m4acelearningchallenge-learninginpublic-productmanagement-activity-7449210462715473920-zPfY",
  },
  {
    title: "Every step in onboarding is a moment of trust",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_theproductnotebook-activity-7447779169721208832-xJ7O",
  },
  {
    title: "You're not building an MVP to impress people. You're building it to be wrong early and correct it quickly",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_m4acelearningchallenge-learninginpublic-productmanagement-activity-7446266706613686272-2GlV",
  },
  {
    title: "I used to think the difference between a product and a feature was obvious",
    href: "https://www.linkedin.com/posts/imran-buhari-aa5aa838b_m4acelearningchallenge-learninginpublic-productmanagement-activity-7445926281000497152-wNfH",
  },
];

const testimonials = [
  {
    quote:
      "Imran approaches product with a level of clarity and intentionality that's rare. He asks the right questions before writing a single line of spec.",
    initial: "A",
    name: "Cohort Member",
    context: "PM Learning Cohort",
  },
  {
    quote:
      "Working with Imran on AgroLynk showed me what focused execution looks like under pressure. He made the hard calls and kept us shipping.",
    initial: "T",
    name: "Teammate",
    context: "AgroLynk Hackathon",
  },
  {
    quote:
      "Sprint Maestro saved our team hours every sprint. The backlog quality improved noticeably and our engineers stopped pushing back on estimates.",
    initial: "U",
    name: "Early User",
    context: "Sprint Maestro Beta",
  },
];

function AsteriskStar() {
  return (
    <div className="w-full h-full animate-[spin_30s_linear_infinite] flex items-center justify-center pointer-events-none select-none">
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-[420px]">
        <defs>
          <linearGradient id="star-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff4d8d" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <g stroke="url(#star-grad)" strokeWidth="2" fill="none" transform="translate(200 200)">
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="-5"
              y="-175"
              width="10"
              height="350"
              rx="5"
              transform={`rotate(${(360 / 8) * i})`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const words = containerRef.current.querySelectorAll(".reveal-word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 55%",
        scrub: 0.5,
      },
    });

    tl.to(words, {
      opacity: 1,
      stagger: 0.05,
      ease: "none",
    });
  }, [text]);

  const words = text.split(" ");
  return (
    <p
      ref={containerRef}
      className="text-xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-black tracking-tight"
    >
      {words.map((word, i) => (
        <span key={i} className="reveal-word opacity-15 mr-2.5 inline-block">
          {word}
        </span>
      ))}
    </p>
  );
}

function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-transparent mix-blend-difference pointer-events-none">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20 pointer-events-auto">
          <a
            href="#top"
            className="font-display font-extrabold text-2xl tracking-tight text-white select-none hover:opacity-85 transition-opacity cursor-pointer"
          >
            IB
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close Menu" : "Open Menu"}
            className="relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 cursor-pointer group"
          >
            {open ? (
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute w-6 h-[1.5px] bg-white rotate-45" />
                <span className="absolute w-6 h-[1.5px] bg-white -rotate-45" />
              </div>
            ) : (
              <>
                <span className="block w-6 h-[1.5px] bg-white" />
                <span className="block w-4 h-[1.5px] bg-white group-hover:w-6 transition-all duration-300" />
              </>
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col gap-8 font-display text-4xl md:text-6xl font-bold text-center tracking-wider">
              {["HOME", "PROJECTS", "CONTACT"].map((link, i) => {
                const hrefs = ["#top", "#work", "#contact"];
                return (
                  <motion.a
                    key={link}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    href={hrefs[i]}
                    onClick={() => setOpen(false)}
                    className="text-white hover:text-white/60 transition-colors cursor-pointer"
                  >
                    {link}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full flex items-center justify-center px-8 md:px-16 overflow-hidden bg-black"
    >
      <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center">
        <div className="flex flex-col items-start text-left z-10">
          <div className="inline-block relative mb-8">
            <span className="font-display text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white">
              IMRAN BUHARI
            </span>
            <div className="h-[2px] w-full bg-brand-gradient mt-1" />
          </div>

          <h1 className="font-display font-extrabold leading-[0.9] tracking-tight text-[clamp(2.5rem,8vw,6.5rem)] uppercase select-none">
            <span className="block text-white">Product</span>
            <span className="block text-outline text-white">& Manager</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-sans">
            I build products that solve real problems. Currently obsessed with AI,
            validation tools, and what's next.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="gradient-border rounded-full px-8 py-4 font-display font-bold text-xs tracking-widest uppercase text-white hover:bg-white/5 transition inline-block cursor-pointer"
            >
              LET'S TALK
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-square max-w-[400px] lg:max-w-[500px] mx-auto hidden lg:flex items-center justify-center">
          <AsteriskStar />
        </div>
      </div>
    </section>
  );
}

function About() {
  const aboutPara1 =
    "👋 Hello! I'm Imran Buhari — a creative and driven product manager with a passion for building AI-powered products. I thrive on turning imaginative ideas into digital realities, constantly blending product strategy, user insights, and technology. Based in Nigeria, I specialize in crafting engaging products and digital platforms.";
  const aboutPara2 =
    "My approach combines strategic thinking with robust, user-centered design. I'm highly motivated and dedicated to staying at the forefront of modern product practices, ensuring every product I touch is built with the highest standards. I have a strong foundation in idea validation and product analytics, plus a keen eye for simple design and user-centered interfaces.";

  return (
    <section id="about" className="bg-white text-black px-8 md:px-24 py-24 md:py-36 rounded-t-[48px] md:rounded-t-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollRevealText text={aboutPara1} />
        <div className="h-8" />
        <ScrollRevealText text={aboutPara2} />

        <div className="mt-28 border-t border-black/10 pt-8">
          <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-black/50">
            SERVICES IN DETAIL
          </span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cardStyles = [
    { bg: "bg-black text-white", num: "text-white/40", body: "text-white/60", stroke: "text-outline text-white" },
    { bg: "bg-[#f4f4f4] text-black", num: "text-black/30", body: "text-black/60", stroke: "text-outline text-black" },
    { bg: "bg-white text-black", num: "text-black/30", body: "text-black/60", stroke: "text-outline text-black" },
    { bg: "bg-black text-white", num: "text-white/40", body: "text-white/60", stroke: "text-outline text-white" },
    { bg: "bg-[#f4f4f4] text-black", num: "text-black/30", body: "text-black/60", stroke: "text-outline text-black" },
    { bg: "bg-white text-black", num: "text-black/30", body: "text-black/60", stroke: "text-outline text-black" },
  ];

  return (
    <section className="relative">
      {specialties.map((s, i) => {
        const style = cardStyles[i];
        const parts = s.title.split(" ");
        const firstPart = parts.slice(0, Math.ceil(parts.length / 2)).join(" ");
        const secondPart = parts.slice(Math.ceil(parts.length / 2)).join(" ");

        return (
          <div
            key={s.title}
            className={`w-full py-20 md:py-28 px-8 md:px-24 ${style.bg} border-b border-black/5`}
          >
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-start">
              <div className="flex items-start gap-6">
                <span className={`font-display text-base md:text-lg font-bold ${style.num} select-none`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight">
                  <span className="block">{firstPart}</span>
                  {secondPart && <span className={`block ${style.stroke}`}>{secondPart}</span>}
                </h3>
              </div>
              <p className={`font-sans text-base md:text-lg leading-relaxed ${style.body}`}>
                {s.body}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current || !scrollSectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const scrollWidth = scrollSectionRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = scrollWidth - viewportWidth;

      if (scrollDistance > 0) {
        const pin = gsap.to(scrollSectionRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${scrollDistance * 1.2}`,
            scrub: 0.5,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const idx = Math.min(
                projects.length - 1,
                Math.max(0, Math.floor(progress * projects.length))
              );
              setActiveIndex(idx);
            },
          },
        });

        return () => {
          pin.scrollTrigger?.kill();
          pin.kill();
        };
      }
    });

    return () => {
      mm.revert();
    };
  }, []);

  const cardBgs = [
    "bg-[#f5c6a5]", // AgroLynk (peach matching screenshot 100%)
    "bg-[#d7bbf5]", // Sprint Maestro (purple matching screenshot 100%)
    "bg-[#e6e6e6]", // Tiqra (gray matching screenshot 100%)
  ];

  return (
    <div
      ref={containerRef}
      id="work"
      className="relative bg-white lg:h-screen flex flex-col justify-between py-16 lg:py-24"
    >
      {/* Header */}
      <div className="w-full px-8 md:px-24 flex flex-col md:flex-row md:items-end justify-between gap-6 z-20">
        <div className="flex flex-col items-start text-left">
          <span className="font-sans text-[13px] md:text-[14px] font-bold tracking-wider text-black uppercase">
            SELECTED WORK
          </span>
          <p className="max-w-[400px] text-gray-500 text-xs md:text-sm font-sans mt-2.5 leading-relaxed">
            A showcase of my selected projects—designed to inspire, engage, and deliver real results.
          </p>
        </div>
        <div>
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:scale-[1.02] transition-transform duration-300">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="block bg-white text-black font-sans font-bold text-[10px] md:text-[11px] tracking-wider uppercase px-6 py-2.5 rounded-full select-none"
            >
              EXPLORE ALL
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track — no overflow-hidden so GSAP translateX isn't clipped */}
      <div
        ref={scrollSectionRef}
        className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch lg:items-center overflow-x-auto lg:overflow-x-visible snap-y lg:snap-x snap-mandatory w-full h-auto pt-6 pb-6 lg:pt-0 lg:pb-0 pl-8 md:pl-24"
      >
        {projects.map((p, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={p.name}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setActiveIndex(activeIndex === i ? -1 : i);
                }
              }}
              className={`w-[85vw] md:w-[75vw] lg:w-[42vw] max-w-[580px] aspect-[1.5/1] flex-shrink-0 rounded-3xl ${cardBgs[i]} p-6 md:p-8 flex items-center justify-center relative overflow-hidden snap-center cursor-pointer group hover:shadow-2xl transition-all duration-500`}
            >
              {/* Pill badge in top-right */}
              <span className="absolute top-5 right-5 bg-black text-white text-[9px] md:text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider select-none z-10">
                {p.typeLabel}
              </span>

              {/* Centered Mockup */}
              <div className="w-[85%] h-[80%] flex items-center justify-center">
                {p.tag.toLowerCase().includes("mobile") ? (
                  <div className="relative h-[85%] aspect-[9/19] rounded-[24px] overflow-hidden border-[4px] border-black bg-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute top-1.5 inset-x-0 h-3 flex justify-center items-center z-10">
                      <span className="w-10 h-2 bg-black rounded-full" />
                    </div>
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover pt-2" />
                  </div>
                ) : (
                  <div className="relative w-[90%] aspect-[1.6/1] rounded-xl overflow-hidden border border-black/10 bg-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="h-5 bg-gray-100 border-b border-gray-200 flex items-center gap-1 px-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                    <img src={p.image} alt={p.name} className="w-full h-[calc(100%-20px)] object-cover" />
                  </div>
                )}
              </div>

              {/* Blurry details overlay shown only on the active card */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-500 flex flex-col justify-center p-6 md:p-10 z-20 text-white ${
                  isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <span className="font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {p.tag}
                </span>
                <h3 className="font-sans text-lg md:text-xl font-bold text-white uppercase mt-2 tracking-tight">
                  {p.name}
                </h3>
                <p className="text-white/70 mt-2.5 text-[11px] md:text-[13px] leading-relaxed font-sans max-w-md">
                  {p.body}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.meta.map((m) => (
                    <span
                      key={m}
                      className="text-[9px] md:text-[10px] px-2.5 py-0.5 rounded-full border border-white/10 text-white/40"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={p.caseStudy}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-4 py-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black bg-white hover:bg-white/90 transition cursor-pointer"
                  >
                    Case Study →
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-4 py-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white hover:text-black hover:bg-white transition border border-white/15 cursor-pointer"
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        {/* Right-side spacer so last card scrolls fully into view */}
        <div className="flex-shrink-0 w-8 md:w-24 lg:w-24 h-1" />
      </div>

      <div className="hidden lg:block h-6" />
    </div>
  );
}

function MilestonesToolkitCertifications() {
  return (
    <section className="relative bg-black text-white px-8 md:px-24 py-24 md:py-36 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/50">
            MILESTONES & IMPACT
          </span>
          <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] uppercase mt-2">
            I take <span className="text-outline text-white">pride</span> in my work.
          </h2>

          <div className="mt-12 space-y-6">
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition cursor-pointer"
                >
                  <div className="text-brand-pink p-2 bg-white/5 rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{m.title}</h3>
                    <p className="text-white/60 mt-2 text-sm leading-relaxed">{m.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/50">
              TOOLKIT & METHODOLOGY
            </span>
            <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] uppercase mt-2">
              My <span className="text-outline text-white">Tools.</span>
            </h2>

            <div className="mt-12 space-y-8">
              {toolkit.map((group) => (
                <div key={group.label}>
                  <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    {group.label}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs md:text-sm font-medium text-white/80 hover:border-white/30 hover:bg-white/5 transition cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-12">
            <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-6">
              TRAINING & CERTIFICATIONS
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((c) => (
                <div key={c.school} className="p-5 rounded-xl border border-white/10 bg-[#0a0a0a] cursor-pointer hover:border-white/20 transition">
                  <span className="font-display text-xs font-bold text-brand-gradient">
                    {c.year}
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-2">{c.title}</h4>
                  <p className="text-white/50 text-xs mt-1">{c.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="relative overflow-hidden py-14 bg-white border-y border-black/10 select-none">
      <div className="flex flex-col gap-6">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-[marquee_35s_linear_infinite] flex gap-12 text-6xl md:text-8xl lg:text-9xl font-display font-black text-black uppercase tracking-wider">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                DESIGN <span className="text-black/90">✳</span> INSPIRE <span className="text-black/90">✳</span> CREATE <span className="text-black/90">✳</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-[marquee_40s_linear_infinite_reverse] flex gap-12 text-6xl md:text-8xl lg:text-9xl font-display font-black text-black uppercase tracking-wider">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                CREATE <span className="text-black/90">✳</span> DESIGN <span className="text-black/90">✳</span> INSPIRE <span className="text-black/90">✳</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}

function KudosFeedback() {
  return (
    <section className="relative bg-black text-white px-8 md:px-24 py-24 md:py-36 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-brand-pink p-2 bg-white/5 rounded-xl">
            <Quote className="w-5 h-5" />
          </span>
          <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/50">
            KUDOS & FEEDBACK
          </span>
        </div>
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] uppercase mt-6">
          Words <span className="text-outline text-white">from</span> colleagues.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name + t.context}
              className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-8 flex flex-col justify-between hover:border-brand-pink/30 hover:scale-[1.02] transition-all duration-300 shadow-xl cursor-pointer"
            >
              <p className="text-white/80 leading-relaxed text-sm md:text-base italic font-sans">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center font-display font-bold text-black text-sm">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-white/40">{t.context}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SharingInsights() {
  return (
    <section className="relative bg-[#060606] text-white px-8 md:px-24 py-24 md:py-36 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-brand-cyan p-2 bg-white/5 rounded-xl">
                <Linkedin className="w-5 h-5" />
              </span>
              <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/50">
                SHARING INSIGHTS
              </span>
            </div>
            <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] uppercase mt-6">
              My <span className="text-outline text-white">Writing.</span>
            </h2>
          </div>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="font-display text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition flex items-center gap-1 cursor-pointer"
          >
            VIEW ALL <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writing.map((w) => (
            <a
              key={w.href}
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-white/10 bg-[#0c0c0c] p-8 flex flex-col justify-between hover:border-brand-cyan/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[180px]"
            >
              <div className="flex justify-between items-start gap-4">
                <p className="font-display text-base md:text-lg font-bold text-white leading-snug group-hover:text-brand-cyan transition-colors">
                  {w.title}
                </p>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-brand-cyan transition-colors flex-shrink-0" />
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/40 group-hover:text-white transition">
                <span>Read on LinkedIn</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white px-8 md:px-24 pt-24 md:pt-36 pb-16 border-t border-white/10"
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/50">
          GET IN TOUCH
        </span>
        <h2 className="font-display font-extrabold leading-[0.9] tracking-tight text-[clamp(2.5rem,8vw,6.5rem)] uppercase mt-2">
          <span className="block text-white">Let's build</span>
          <span className="block text-outline text-white">together.</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg text-white/50 leading-relaxed font-sans">
          Open to PM roles, consulting, and collabs. Whether you have a question or just
          want to say hi — my inbox is always open.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="gradient-border rounded-full px-8 py-4 font-display font-bold text-xs tracking-widest uppercase text-white hover:bg-white/5 transition inline-block cursor-pointer"
          >
            <Mail className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-8 py-4 font-display font-bold text-xs tracking-widest uppercase text-white/70 hover:text-white transition border border-white/15 inline-block cursor-pointer"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 text-sm">
          <div className="col-span-2 flex flex-col justify-between h-full">
            <span className="font-display font-extrabold text-3xl tracking-tight text-white select-none">
              IB
            </span>
            <span className="text-white/40 text-xs mt-8 leading-relaxed">
              © {new Date().getFullYear()} · Imran Buhari. <br />
              Built with intention.
            </span>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white/40 mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>Product Strategy</li>
              <li>AI-Powered Products</li>
              <li>Idea Validation</li>
              <li>Product Analytics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white/40 mb-4">
              CONNECT
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition">
                  Email
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <Nav open={open} setOpen={setOpen} />

      <main className="relative">
        <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
          <Hero />
        </div>

        <div className="relative z-10 bg-white rounded-t-[48px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
          <About />
          <Services />
          <SelectedWork />
          <MilestonesToolkitCertifications />
          <Marquee />
          <KudosFeedback />
          <SharingInsights />
          <Contact />
        </div>
      </main>
    </div>
  );
}
