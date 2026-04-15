import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";

const BRAND = "#E85D04";

export default function AtlantaChapter() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "syncosystem-embed-height" && iframeRef.current) {
        iframeRef.current.style.height = e.data.height + "px";
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
              style={{ background: `linear-gradient(135deg, ${BRAND}, #9A3412)` }}
            >
              SRG
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/syncosystem-run-global"
                className="text-lg font-bold text-slate-900 tracking-tight hover:underline"
              >
                Syncosystem Run <span style={{ color: BRAND }}>Global</span>
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-lg font-bold" style={{ color: BRAND }}>Atlanta</span>
            </div>
          </div>
          <Link
            to="/syncosystem-run-global"
            className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Chapters
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 lg:py-20" style={{ background: `linear-gradient(135deg, ${BRAND}08, ${BRAND}12, transparent)` }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: BRAND }}>
            <MapPin className="h-4 w-4" /> Atlanta, Georgia
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Syncosystem Run Global — <span style={{ color: BRAND }}>Atlanta</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your home chapter for events, community runs, the members-only hub,
            and everything Atlanta runners need. Join us or browse what&apos;s coming up.
          </p>
        </div>
      </section>

      {/* Embedded Public Page */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <iframe
              ref={iframeRef}
              src="https://syncosystem.com/run-club/Synco-Atlanta?embed=true"
              width="100%"
              height="900"
              style={{ border: "none", display: "block", minHeight: 600 }}
              allow="clipboard-write"
              title="Syncosystem Run Global — Atlanta Chapter"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: BRAND }}>
              SRG
            </div>
            <span className="text-white font-bold">Atlanta Chapter</span>
          </div>
          <p className="text-sm text-slate-400">
            Part of{" "}
            <Link to="/syncosystem-run-global" className="text-blue-400 hover:underline">
              Syncosystem Run Global
            </Link>
            {" "}&middot; Powered by{" "}
            <a href="https://syncosystem.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              SyncoSystem
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
