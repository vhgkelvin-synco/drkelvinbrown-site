import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, MapPin, Users, ChevronRight } from "lucide-react";

const BRAND = "#E85D04";
const BRAND_DARK = "#9A3412";

export default function EnterpriseDemo() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    const script = document.createElement("script");
    script.src = "https://syncosystem.com/widget/enterprise-widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm" style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}>
              SRG
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Syncosystem Run <span style={{ color: BRAND }}>Global</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#chapters" className="text-slate-600 hover:text-slate-900 transition-colors">Chapters</a>
            <Link to="/syncosystem-run-global/atlanta" className="text-slate-600 hover:text-slate-900 transition-colors">Atlanta Chapter</Link>
          </div>
          <Link
            to="/"
            className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> drkelvinbrown.com
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${BRAND}08, ${BRAND}15, transparent)` }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: `${BRAND}08` }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: BRAND }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: BRAND }}>
                Run with Purpose Everywhere
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] mb-6">
              One global community.{" "}
              <span style={{ color: BRAND }}>Your local chapter.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">
              Syncosystem Run Global brings runners together across cities with
              organized chapters, local events, and a shared mission: move more,
              live better. Find your nearest chapter and start running with us.
            </p>
            <a
              href="#chapters"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              style={{ background: BRAND }}
            >
              Find Your Chapter <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "5 Cities", desc: "Active chapters across the US with plans to expand internationally." },
              { icon: Users, title: "Open to All", desc: "Walkers, joggers, and competitive runners — every pace has a place." },
              { icon: MapPin, title: "Locally Led", desc: "Each chapter has its own schedule, leadership, and personality." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${BRAND}15` }}>
                    <Icon className="h-6 w-6" style={{ color: BRAND }} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Widget */}
      <section id="chapters" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Your Chapter</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Select a location below to see upcoming events, meet the community, and join.
              Each chapter is your gateway to everything — events, messaging, the members-only hub, and more.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              id="syncosystem-enterprise-widget"
              ref={widgetRef}
              data-slug="syncosystem-admin"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: BRAND }}>
              SRG
            </div>
            <span className="text-white font-bold">Syncosystem Run Global</span>
          </div>
          <p className="text-sm text-slate-400">
            Powered by{" "}
            <a href="https://syncosystem.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              SyncoSystem
            </a>
          </p>
          <p className="text-xs text-slate-500 mt-4">&copy; {new Date().getFullYear()} Syncosystem Run Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
