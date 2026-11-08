import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { faq } from "@/components/portfolio/faq";

const SITE = "https://imran-buhari-portfolio.vercel.app";
const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Person", "@id": "https://imran-buhari-portfolio.vercel.app/#person", "name": "Imran Buhari", "jobTitle": "Product Manager", "url": "https://imran-buhari-portfolio.vercel.app", "image": "https://imran-buhari-portfolio.vercel.app/images/imran-hero-wide.jpg", "email": "mailto:buhariimran01@gmail.com", "description": "Product manager who builds user-centered products with empathy at the core, from ideation to MVP launch, with every decision backed by real human data.", "sameAs": ["https://linkedin.com/in/imran-buhari-aa5aa838b"], "knowsAbout": ["Product management", "Product strategy", "AI product development", "User research", "Idea validation", "MVP development", "PRDs", "Product analytics", "Agile sprint planning"], "hasCredential": [{"@type": "EducationalOccupationalCredential", "name": "Product Management", "recognizedBy": {"@type": "Organization", "name": "IOTB Tech"}}, {"@type": "EducationalOccupationalCredential", "name": "Product Management", "recognizedBy": {"@type": "Organization", "name": "Fuse Varsity"}}, {"@type": "EducationalOccupationalCredential", "name": "Product Management", "recognizedBy": {"@type": "Organization", "name": "M4ace"}}, {"@type": "EducationalOccupationalCredential", "name": "Product Management", "recognizedBy": {"@type": "Organization", "name": "Prodcademy"}}], "award": "AgroLynk ranked #1 of 10 teams at Prodcademy Demo Day (2025)"}, {"@type": "ProfilePage", "@id": "https://imran-buhari-portfolio.vercel.app/#profile", "url": "https://imran-buhari-portfolio.vercel.app", "name": "Imran Buhari — Product Manager", "mainEntity": {"@id": "https://imran-buhari-portfolio.vercel.app/#person"}}, {"@type": "ItemList", "name": "Products by Imran Buhari", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@type": "SoftwareApplication", "name": "Sprint Maestro", "applicationCategory": "BusinessApplication", "url": "https://sprintmaestro.lovable.app/", "description": "AI sprint planning tool; 10 early users reported an 80% reduction in time turning a PRD into a sprint-ready backlog.", "creator": {"@id": "https://imran-buhari-portfolio.vercel.app/#person"}}}, {"@type": "ListItem", "position": 2, "item": {"@type": "SoftwareApplication", "name": "Tiqra", "applicationCategory": "BusinessApplication", "url": "https://tiqra-mvp.vercel.app/", "description": "AI-powered startup validation platform co-founded by Imran Buhari; its Truth Layer filters unreliable survey responses before AI feasibility analysis. Waitlist stage.", "creator": {"@id": "https://imran-buhari-portfolio.vercel.app/#person"}}}, {"@type": "ListItem", "position": 3, "item": {"@type": "SoftwareApplication", "name": "AgroLynk", "applicationCategory": "MobileApplication", "url": "https://agrolynk.lovable.app/", "description": "AI-powered agritech platform; ranked #1 of 10 teams at Prodcademy Demo Day, 80% reported user satisfaction in early testing.", "creator": {"@id": "https://imran-buhari-portfolio.vercel.app/#person"}}}]}]};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <p className="mt-4 text-white/60">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full border border-white/20 px-6 py-2.5 text-sm text-white hover:bg-white/5 transition"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-white">Something went wrong</h1>
        <p className="mt-2 text-sm text-white/50">{error instanceof Error ? error.message : String(error)}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90 transition"
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/5 transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Imran Buhari — Product Manager · AI & 0→1 Products" },
      {
        name: "description",
        content:
          "Imran Buhari is a product manager who takes AI products from idea to launch — strategy, PRDs, user research and validation. Creator of AgroLynk, Sprint Maestro and Tiqra. Open to full-time roles and freelance projects.",
      },
      { name: "author", content: "Imran Buhari" },
      {
        name: "keywords",
        content:
          "Imran Buhari, Product Manager, AI Products, User-Centered Design, MVP Development, Idea Validation, Agritech, Sprint Maestro, Tiqra, AgroLynk, Ceeravo",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: SITE },
      { property: "og:image", content: `${SITE}/images/imran-hero-wide.jpg` },
      { name: "twitter:image", content: `${SITE}/images/imran-hero-wide.jpg` },
      { property: "og:title", content: "Imran Buhari — Product Manager" },
      {
        property: "og:description",
        content:
          "Product manager building AI-powered products, validation tools, and what's next.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Imran Buhari — Product Manager" },
      {
        name: "twitter:description",
        content: "Product manager building AI-powered products and validation tools.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          ...jsonLd,
          "@graph": [
            ...jsonLd["@graph"],
            {
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
