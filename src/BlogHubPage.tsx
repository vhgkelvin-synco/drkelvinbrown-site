import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  Linkedin,
  Menu,
  Stethoscope,
  X,
} from "lucide-react";
import { useState } from "react";
import { blogAggregate, type AggregatedArticle } from "./generated/blog-aggregate";

const NAV_LINKS = [
  { label: "About", hash: "#about" },
  { label: "Ventures", hash: "#ventures" },
  { label: "Books", hash: "#books" },
  { label: "Run Club", hash: "#runclub" },
  { label: "Blog", to: "/blog" },
  { label: "Speaking", hash: "#speaking" },
  { label: "Contact", hash: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-white tracking-tight">
          Dr. Kelvin Brown<span className="text-brand-teal">, MD, MPH</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm text-brand-teal hover:text-white transition-colors font-semibold"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={`/${l.hash}`}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ),
          )}
          <a
            href="https://www.linkedin.com/in/drkelvinbrown"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-teal text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-teal/90 transition-colors"
          >
            <Linkedin className="h-4 w-4" /> Connect
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-brand-navy border-t border-white/5 px-6 pb-6 pt-4 space-y-4">
          {NAV_LINKS.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className="block text-brand-teal hover:text-white transition-colors font-semibold"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={`/${l.hash}`}
                className="block text-slate-300 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
}

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function ArticleCard({ article, readLabel }: { article: AggregatedArticle; readLabel: string }) {
  return (
    <a
      href={article.canonicalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:border-brand-teal/30 transition-all flex flex-col"
    >
      {article.heroImage ? (
        <div className="aspect-[16/9] overflow-hidden bg-slate-100">
          <img
            src={article.heroImage}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-brand-navy via-brand-blue/30 to-brand-teal/20" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        {article.category && (
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-wide mb-3">
            {article.category}
          </span>
        )}
        <h3 className="font-bold text-brand-navy text-lg leading-snug mb-3 group-hover:text-brand-teal transition-colors">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
        )}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            {article.date && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {formatDate(article.date)}
              </span>
            )}
            {article.readTime && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {article.readTime}
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-teal">
            {readLabel} <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="col-span-full bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-10 text-center">
      <BookOpen className="h-10 w-10 text-slate-300 mx-auto mb-3" />
      <p className="text-sm text-slate-500">
        Fresh {label} articles are on the way. Check back soon.
      </p>
    </div>
  );
}

function BlogSection({
  id,
  kicker,
  title,
  description,
  articles,
  readLabel,
  emptyLabel,
}: {
  id: string;
  kicker: string;
  title: string;
  description: string;
  articles: AggregatedArticle[];
  readLabel: string;
  emptyLabel: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-20 last:mb-0">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-12 bg-brand-gold" />
        <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">{kicker}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">{title}</h2>
      <p className="text-slate-600 max-w-2xl leading-relaxed mb-10">{description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length === 0 ? (
          <EmptyState label={emptyLabel} />
        ) : (
          articles.map((a) => <ArticleCard key={`${a.source}-${a.slug}`} article={a} readLabel={readLabel} />)
        )}
      </div>
    </section>
  );
}

function BlogFooter() {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-lg font-bold text-white">
            Dr. Kelvin Brown<span className="text-brand-teal">, MD, MPH</span>
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Articles published on SyncoSystem and Precision Health &middot; all rights reserved
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
          <a href="https://syncosystem.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            SyncoSystem
          </a>
          <a
            href="https://www.precisionhealthandweightloss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Precision Health
          </a>
          <Link to="/" className="hover:text-white transition-colors">
            Back to drkelvinbrown.com
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function BlogHubPage() {
  const location = useLocation();
  const precision = blogAggregate.sources["precision-health"].articles;
  const synco = blogAggregate.sources.syncosystem.articles;

  useEffect(() => {
    document.title = "Blog — Dr. Kelvin Brown, MD, MPH";

    // Scroll to hash anchor if present in URL (e.g. /blog#precision-articles).
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.hash]);

  useEffect(() => {
    const allArticles = [...precision, ...synco];
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Articles by Dr. Kelvin Brown",
      description:
        "Articles from Precision Health and SyncoSystem authored or curated by Dr. Kelvin Brown, MD, MPH.",
      url: "https://drkelvinbrown.com/blog",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: allArticles.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: a.canonicalUrl,
          name: a.title,
        })),
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [precision, synco]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue/40 to-brand-navy" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">
              Articles & Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Writing at the intersection of <span className="text-gradient">medicine &amp; technology</span>.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            A curated hub of articles authored and published across my two companies —
            Precision Health &amp; Weight Loss Centers and SyncoSystem. Each piece links to the
            original post on its source site.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#precision-articles"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-lg border border-white/15 transition-colors"
            >
              <Stethoscope className="h-4 w-4 text-brand-teal" /> Precision Health articles
            </a>
            <a
              href="#syncosystem-articles"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-lg border border-white/15 transition-colors"
            >
              <BookOpen className="h-4 w-4 text-brand-teal" /> SyncoSystem articles
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <BlogSection
          id="precision-articles"
          kicker="Precision Health"
          title="Precision Health related articles"
          description="Evidence-based writing on weight management, GLP-1 medications, testosterone replacement, lab work, nutrition, and physician-led care — published on precisionhealthandweightloss.com."
          articles={precision}
          readLabel="Read on Precision Health"
          emptyLabel="Precision Health"
        />

        <BlogSection
          id="syncosystem-articles"
          kicker="SyncoSystem"
          title="SyncoSystem related articles"
          description="Deep dives on health record portability, FHIR interoperability, patient data ownership, and the technology powering the SyncoSystem platform — published on syncosystem.com."
          articles={synco}
          readLabel="Read on SyncoSystem"
          emptyLabel="SyncoSystem"
        />

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-brand-navy mb-2">Want the full story behind the writing?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Learn more about my work across medicine, technology, and community on the home page.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-teal/90 transition-colors shrink-0"
          >
            Back to drkelvinbrown.com <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}
