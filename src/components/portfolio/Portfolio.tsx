import { useEffect, useState } from "react";

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
  },
];

const milestones = [
  { icon: "🏆", title: "Hackathon Winner", body: "Recognized for innovative agritech solution with AgroLynk." },
  { icon: "🤖", title: "AI Product Builder", body: "Built AI-powered PM and validation tools used by real teams." },
  { icon: "📚", title: "PM Cohort Member", body: "Active member of a structured PM learning cohort." },
  { icon: "✍️", title: "Learning in Public", body: "Sharing product insights consistently on LinkedIn." },
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

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="font-display text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white">
        {children}
      </span>
      <span className="h-[3px] w-16 bg-brand-gradient rounded-full" />
    </div>
  );
}

function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/60 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20">
          <a href="#top" className="font-display font-extrabold text-xl tracking-tight">
            <span className="text-brand-gradient">IB</span>
            <span className="text-white">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70 font-medium">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#writing" className="hover:text-white transition">Writing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden relative w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
          >
            <span className="block w-4 h-[2px] bg-white relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-[2px] before:bg-white after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-4 after:h-[2px] after:bg-white" />
          </button>
        </div>
      </header>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/95 pt-24 px-6 md:hidden"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col gap-6 font-display text-3xl font-bold">
            {["Work", "About", "Skills", "Writing", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-white">
                {l}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

function Asterisk() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full opacity-70">
      <defs>
        <linearGradient id="ast-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff4d8d" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#ast-grad)"
        strokeWidth="1.5"
        fill="none"
        transform="translate(200 200)"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x="-8"
            y="-170"
            width="16"
            height="340"
            rx="8"
            transform={`rotate(${(360 / 8) * i})`}
          />
        ))}
      </g>
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <Kicker>Product Manager</Kicker>
          <h1 className="font-display font-extrabold leading-[0.9] tracking-tight mt-6 text-[clamp(3.5rem,12vw,10rem)]">
            <span className="block text-white">Imran</span>
            <span className="block text-outline text-white">Buhari.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed">
            I build products that solve real problems. Currently obsessed with AI,
            validation tools, and what's next.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="gradient-border rounded-full px-8 py-4 font-display font-bold text-sm tracking-widest uppercase text-white hover:bg-white/5 transition"
            >
              See My Work →
            </a>
            <a
              href="#contact"
              className="rounded-full px-8 py-4 font-display font-bold text-sm tracking-widest uppercase text-white/80 hover:text-white transition"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-3xl overflow-hidden border border-white/10 bg-card">
            <img
              src="https://imran-buhari.netlify.app/assets/images/imran-photo.jpg"
              alt="Imran Buhari"
              className="w-full h-full object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-white">
                Builder · Learning in Public
              </span>
              <span className="w-10 h-10 rounded-full bg-brand-gradient flex-shrink-0" />
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-40 h-40 md:w-56 md:h-56 pointer-events-none hidden md:block">
            <Asterisk />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-20 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <Kicker>What I Do</Kicker>
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 text-[clamp(2.5rem,7vw,6rem)]">
          How I create <span className="text-outline text-white">value.</span>
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-16 text-lg text-white/70 leading-relaxed">
          <p>
            👋 Hello! I'm <span className="text-white font-semibold">Imran Buhari</span> — a
            creative and driven product manager with a passion for building AI-powered
            products. I thrive on turning imaginative ideas into digital realities,
            constantly blending product strategy, user insights, and technology. I have a
            strong foundation in idea validation and product analytics, plus a keen eye
            for simple design and user-centered interfaces.
          </p>
          <div className="space-y-6">
            <p>
              Based in Nigeria, I specialize in crafting engaging products and digital
              platforms. My approach combines strategic thinking with robust,
              user-centered design.
            </p>
            <p>
              I'm highly motivated and dedicated to staying at the forefront of modern
              product practices, ensuring every product I touch is built with the highest
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section id="skills" className="px-6 md:px-10 py-20 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <Kicker>Specialties</Kicker>
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 text-[clamp(2.5rem,7vw,6rem)]">
          A range of <span className="text-outline text-white">skills.</span>
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {specialties.map((s, i) => (
            <div
              key={s.title}
              className="group bg-background p-8 md:p-10 hover:bg-card transition-colors"
            >
              <div className="font-display text-sm font-bold text-white/40 group-hover:text-brand-gradient transition">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-4">
                {s.title}
              </h3>
              <p className="text-white/60 mt-4 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-20 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Selected Work</Kicker>
            <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 text-[clamp(2.5rem,7vw,6rem)]">
              Selected <span className="text-outline text-white">Products.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            A collection of projects built at the intersection of AI and product.
          </p>
        </div>

        <div className="mt-16 space-y-8 md:space-y-12">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center rounded-3xl border border-white/10 bg-card overflow-hidden ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} mockup`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-white/50">
                  {p.tag}
                </span>
                <h3 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4">
                  {p.name}
                </h3>
                <p className="text-white/70 mt-5 leading-relaxed">{p.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.meta.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 text-white/70"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={p.caseStudy}
                    target="_blank"
                    rel="noreferrer"
                    className="gradient-border rounded-full px-6 py-3 font-display font-bold text-xs tracking-widest uppercase text-white hover:bg-white/5 transition"
                  >
                    View Case Study →
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-6 py-3 font-display font-bold text-xs tracking-widest uppercase text-white/70 hover:text-white transition"
                  >
                    View Live ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Milestones() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <Kicker>Milestones</Kicker>
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 text-[clamp(2.5rem,7vw,6rem)]">
          I take <span className="text-outline text-white">pride</span> in my work.
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-white/10 bg-card p-8 hover:border-white/25 transition"
            >
              <div className="text-4xl">{m.icon}</div>
              <h3 className="font-display text-xl font-bold text-white mt-6">{m.title}</h3>
              <p className="text-white/60 mt-3 text-sm leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <Kicker>Toolkit</Kicker>
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 text-[clamp(2.5rem,7vw,6rem)]">
          What I work <span className="text-outline text-white">with.</span>
        </h2>
        <div className="mt-16 space-y-12">
          {toolkit.map((group) => (
            <div key={group.label}>
              <div className="font-display text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                {group.label}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/85 hover:border-white/40 hover:bg-white/5 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <Kicker>Training</Kicker>
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 text-[clamp(2.5rem,7vw,6rem)]">
          Sharpening my <span className="text-outline text-white">craft.</span>
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c) => (
            <div
              key={c.school}
              className="rounded-2xl border border-white/10 bg-card p-8 relative overflow-hidden"
            >
              <span className="font-display text-sm font-bold text-brand-gradient">
                {c.year}
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-4">{c.title}</h3>
              <p className="text-white/60 mt-2">{c.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="px-6 md:px-10 py-20 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Writing</Kicker>
            <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 text-[clamp(2.5rem,7vw,6rem)]">
              Thoughts on <span className="text-outline text-white">product.</span>
            </h2>
          </div>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="font-display text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition"
          >
            View All Posts →
          </a>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writing.map((w) => (
            <a
              key={w.href}
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-card p-8 flex flex-col justify-between hover:border-white/30 transition min-h-[220px]"
            >
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-gradient">
                  LinkedIn
                </span>
                <p className="font-display text-lg font-bold text-white mt-4 leading-snug">
                  {w.title}
                </p>
              </div>
              <span className="mt-6 text-sm text-white/50 group-hover:text-white transition">
                Read on LinkedIn →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <Kicker>Words</Kicker>
        <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 text-[clamp(2.5rem,7vw,6rem)]">
          People say <span className="text-outline text-white">about</span> me.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name + t.context}
              className="rounded-2xl border border-white/10 bg-card p-8 flex flex-col"
            >
              <span className="font-display text-5xl text-brand-gradient leading-none">
                "
              </span>
              <p className="text-white/80 leading-relaxed mt-4 flex-1">{t.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center font-display font-bold text-black">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-white/50">{t.context}</div>
                </div>
              </div>
            </div>
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
      className="px-6 md:px-10 pt-20 md:pt-32 pb-12 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto">
        <Kicker>Contact</Kicker>
        <h2 className="font-display font-extrabold leading-[0.9] tracking-tight mt-6 text-[clamp(3rem,10vw,9rem)]">
          <span className="block text-white">Let's build</span>
          <span className="block text-outline text-white">together.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-white/70">
          Open to PM roles, consulting, and collabs. Whether you have a question or just
          want to say hi — my inbox is always open.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="gradient-border rounded-full px-8 py-4 font-display font-bold text-sm tracking-widest uppercase text-white hover:bg-white/5 transition"
          >
            ✉ {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-8 py-4 font-display font-bold text-sm tracking-widest uppercase text-white/80 hover:text-white transition border border-white/15"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <span className="font-display font-bold tracking-widest uppercase">
            IB — Imran Buhari
          </span>
          <span>© {new Date().getFullYear()} · Built with intention.</span>
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Work />
        <Milestones />
        <Toolkit />
        <Certifications />
        <Writing />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
