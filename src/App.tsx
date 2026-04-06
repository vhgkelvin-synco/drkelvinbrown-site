import {
  Menu, X, ArrowRight, ExternalLink, Mail, MapPin, BookOpen,
  Stethoscope, Code2, Heart, Trophy, Users, Lightbulb, ChevronRight,
  Linkedin, Instagram, Globe, Activity,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Books", href: "#books" },
  { label: "Run Club", href: "#runclub" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-white tracking-tight">
          Dr. Kelvin Brown<span className="text-brand-teal">, MD, MPH</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
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
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue/40 to-brand-navy" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">
              Physician &middot; Founder &middot; Visionary
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6">
            Building the future of{" "}
            <span className="text-gradient">health ownership</span>{" "}
            through medicine & technology.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
            I'm Dr. Kelvin Brown — a physician, surgeon, public health expert, marathoner,
            and the founder of{" "}
            <a href="https://syncosystem.com" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline font-medium">
              SyncoSystem
            </a>
            , a health technology platform that puts people in control of their medical records.
            For over 23 years, I've been on a mission to improve health outcomes — one patient, one community, one innovation at a time.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#ventures"
              className="inline-flex items-center gap-2 bg-brand-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-teal/90 transition-colors"
            >
              Explore My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Get in Touch <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-14 text-sm text-slate-400">
            <div className="flex items-center gap-2"><Stethoscope className="h-4 w-4 text-brand-teal" /> Licensed Physician & Surgeon</div>
            <div className="flex items-center gap-2"><Code2 className="h-4 w-4 text-brand-teal" /> Health Tech Founder & CEO</div>
            <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-brand-teal" /> Marathoner & Run Club Leader</div>
            <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-brand-teal" /> Published Author</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">About</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Where medicine meets mission.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I'm a physician, surgeon, and public health expert with an unwavering belief:
                every person deserves ownership of their health data and access to quality care —
                regardless of where they live, who they work for, or what they can afford.
              </p>
              <p>
                That belief led me to found <strong>Precision Health and Weight Loss Centers</strong>,
                which has served thousands of patients across Atlanta for over 18 years.
                It drove me to create <strong>SyncoSystem</strong>,
                a technology platform that unifies medical records and puts patients — not systems — in control.
                And it keeps me lacing up for marathons and leading the{" "}
                <strong>Running with Precision</strong> run club,
                because health isn't just clinical — it's a lifestyle.
              </p>
              <p>
                I hold an MD from the University of Alabama at Birmingham School of Medicine
                and an MPH from Emory University, with a background spanning general surgery,
                epidemiology, health policy, and bariatric medicine.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-brand-navy mb-4 text-lg">Education & Training</h3>
              <div className="space-y-3">
                {[
                  { degree: "M.D.", school: "University of Alabama at Birmingham (UASOM)" },
                  { degree: "M.P.H.", school: "Emory University — Epidemiology & Health Policy" },
                  { degree: "B.S.", school: "Christian Brothers University — Biology, Chemistry, Psychology" },
                  { degree: "Residency", school: "General Surgery — Emory University Hospitals" },
                ].map((ed) => (
                  <div key={ed.degree} className="flex gap-4">
                    <span className="text-brand-teal font-bold text-sm w-24 shrink-0">{ed.degree}</span>
                    <span className="text-slate-600 text-sm">{ed.school}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-navy rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-brand-teal">23+</p>
                <p className="text-sm text-slate-300 mt-1">Years in Medicine</p>
              </div>
              <div className="bg-brand-navy rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-brand-teal">1000s</p>
                <p className="text-sm text-slate-300 mt-1">Patients Served</p>
              </div>
              <div className="bg-brand-navy rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-brand-teal">2</p>
                <p className="text-sm text-slate-300 mt-1">Published Books</p>
              </div>
              <div className="bg-brand-navy rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-brand-teal">6</p>
                <p className="text-sm text-slate-300 mt-1">World Marathon Majors Goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VENTURES = [
  {
    name: "SyncoSystem",
    role: "Founder & CEO",
    description:
      "A health technology platform that gives people ownership of their medical records. SyncoSystem aggregates health data from EHRs, wearables, and documents — then lets patients share it securely with airlines, race events, and healthcare providers.",
    tags: ["Health Tech", "FHIR / SMART on FHIR", "AI", "Patient Data Ownership"],
    url: "https://syncosystem.com",
    icon: Code2,
    accent: "from-brand-teal to-blue-500",
  },
  {
    name: "Precision Health & Weight Loss",
    role: "Founder & Medical Director",
    description:
      "Atlanta's premier destination for physician-led weight loss, GLP-1 medications, nutrition, lab testing, TRT, and longevity services. Serving individuals and corporate clients including Delta Air Lines, Home Depot, and Tyler Perry Studios for over 18 years.",
    tags: ["Weight Loss", "GLP-1", "TRT", "Longevity", "Est. 18+ Years"],
    url: "https://www.precisionhealthandweightloss.com",
    icon: Stethoscope,
    accent: "from-emerald-500 to-green-600",
  },
  {
    name: "Vital Outreach Foundation",
    role: "Founder",
    description:
      "A nonprofit foundation providing health-related products and services to underserved communities. Committed to increasing access and reducing health disparities locally and globally.",
    tags: ["Nonprofit", "Community Health", "Access", "Global Impact"],
    url: "#",
    icon: Heart,
    accent: "from-rose-500 to-pink-600",
  },
];

function Ventures() {
  return (
    <section id="ventures" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">Ventures</span>
            <div className="h-px w-12 bg-brand-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Medicine, technology, and impact.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Three organizations, one mission: empower people to lead healthier, longer lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VENTURES.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className={`h-2 bg-gradient-to-r ${v.accent}`} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${v.accent} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy">{v.name}</h3>
                      <p className="text-xs text-slate-500">{v.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{v.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {v.tags.map((t) => (
                      <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  {v.url !== "#" && (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:underline"
                    >
                      Visit <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SyncoHighlight() {
  return (
    <section className="bg-brand-navy py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-teal text-sm font-semibold uppercase tracking-widest">Featured Venture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              SyncoSystem — Your health records, unified.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I built SyncoSystem because I saw a broken system from both sides — as a physician
              and as someone who believes patients should own their data. SyncoSystem connects
              medical records from EHRs, wearables, and documents into a single, patient-controlled
              platform with secure sharing for travel, sports, and healthcare partners.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "FHIR R4 interoperable (Epic, Cerner)",
                "AI-powered document extraction",
                "Built with HIPAA technical safeguards",
                "B2B partner ecosystem for airlines, race events, and more",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ChevronRight className="h-4 w-4 text-brand-teal mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="https://syncosystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-teal/90 transition-colors"
            >
              Learn More About SyncoSystem <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Medical Record Types", value: "7", icon: Activity },
              { label: "EHR Integrations", value: "FHIR R4", icon: Globe },
              { label: "Platform Surfaces", value: "Web + Mobile", icon: Code2 },
              { label: "Partner API", value: "Live", icon: Users },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
                  <Icon className="h-6 w-6 text-brand-teal mb-3" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Books() {
  return (
    <section id="books" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">Published Works</span>
            <div className="h-px w-12 bg-brand-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Books by Dr. Brown</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "America's Surgeon: Saving Lives from Scalpels to Scales",
              tagline: "#1 New Release on Amazon",
              description:
                "A candid journey from the operating room to the weight loss clinic, sharing lessons on health, resilience, and the fight against obesity in America.",
              url: "https://www.amazon.com/Americas-Surgeon-Saving-Scalpels-Scales-ebook/dp/B09J9B2SFT",
            },
            {
              title: "The Anatomy of Obesity",
              tagline: "The Science Behind the Epidemic",
              description:
                "A deep dive into the physiological, psychological, and societal factors driving the obesity epidemic — and what we can do about it.",
              url: "https://www.amazon.com/dp/B09N9NSKJH",
            },
          ].map((book) => (
            <div
              key={book.title}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-brand-gold" />
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wide">{book.tagline}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{book.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">{book.description}</p>
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:underline"
              >
                Get it on Amazon <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RunClub() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    const script = document.createElement("script");
    script.src = "https://syncosystem.com/widget/run-club-widget.js";
    script.setAttribute("data-slug", "running-with-precision");
    script.async = true;
    widgetRef.current.appendChild(script);
    return () => { if (widgetRef.current) widgetRef.current.innerHTML = ""; };
  }, []);

  return (
    <section id="runclub" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Running with Precision
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Health isn't just what happens in the clinic — it's how you live.
              I founded the <strong>Running with Precision</strong> run club because movement
              is medicine, and community is the catalyst. Whether you're training for your
              first 5K or chasing a marathon PR, you have a place here.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              I'm personally on a mission to run all seven World Marathon Majors while inspiring
              others to find their stride. Running teaches discipline, consistency,
              and the power of showing up — the same principles that drive everything I do.
            </p>
            <div ref={widgetRef} />
          </div>

          <div className="space-y-4">
            {[
              { icon: Trophy, title: "Marathon Runner", desc: "Pursuing all 7 World Marathon Majors — inspiring others to start their journey" },
              { icon: Users, title: "Community First", desc: "Weekly group runs across Atlanta — all paces and experience levels welcome" },
              { icon: Heart, title: "Running for Causes", desc: "Partnering with charities to raise funds and awareness through every mile" },
              { icon: Lightbulb, title: "Certified Coaching", desc: "Certified run/health coach guidance — from couch to 5K and beyond" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Speaking() {
  return (
    <section id="speaking" className="bg-brand-navy py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-brand-gold" />
          <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">Speaking & Media</span>
          <div className="h-px w-12 bg-brand-gold" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Available for speaking, panels, and media.
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          I speak on the intersection of healthcare, technology, and entrepreneurship — from
          patient data ownership and digital health innovation to the GLP-1 revolution,
          physician entrepreneurship, and building health equity through community. If you're
          organizing an event, podcast, or panel, I'd love to contribute.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Health Tech & Innovation",
            "Patient Data Ownership",
            "Physician Entrepreneurship",
            "GLP-1 & Weight Management",
            "Health Equity & Access",
            "Building Startups in Healthcare",
            "Running & Lifestyle Medicine",
          ].map((topic) => (
            <span key={topic} className="text-xs bg-white/10 text-slate-300 px-3 py-1.5 rounded-full border border-white/10">
              {topic}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold px-8 py-3.5 rounded-lg hover:bg-brand-gold/90 transition-colors"
        >
          <Mail className="h-4 w-4" /> Inquire About Speaking
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Let's connect.</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you're interested in SyncoSystem, speaking engagements,
              media inquiries, partnerships, or simply want to say hello — I'd love to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm">Email</p>
                  <a href="mailto:contact@drkelvinbrown.com" className="text-sm text-brand-teal hover:underline">
                    contact@drkelvinbrown.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm">Based in</p>
                  <p className="text-sm text-slate-600">Atlanta, Georgia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <Linkedin className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/drkelvinbrown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-teal hover:underline"
                  >
                    linkedin.com/in/drkelvinbrown
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/drkelvinbrown" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-blue transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href="https://www.instagram.com/drkelvinbrown" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-blue transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a href="https://syncosystem.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-blue transition-colors" aria-label="SyncoSystem">
                <Globe className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <form
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for reaching out! I'll get back to you shortly.");
              }}
            >
              <h3 className="font-bold text-brand-navy text-lg">Send a message</h3>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                <input type="text" required className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input type="email" required className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal bg-white">
                  <option>SyncoSystem / Health Tech</option>
                  <option>Speaking / Media Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>Precision Health / Patient Inquiry</option>
                  <option>Running with Precision</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea rows={4} required className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal resize-none" />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-teal text-white font-semibold py-3 rounded-lg hover:bg-brand-teal/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-white">
              Dr. Kelvin Brown<span className="text-brand-teal">, MD, MPH</span>
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Physician &middot; Founder &middot; Health Tech Visionary &middot; Marathoner &middot; Author
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a href="https://syncosystem.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SyncoSystem</a>
            <a href="https://www.precisionhealthandweightloss.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Precision Health</a>
            <a href="https://www.linkedin.com/in/drkelvinbrown" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/drkelvinbrown" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Dr. Kelvin Brown. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Ventures />
      <SyncoHighlight />
      <Books />
      <RunClub />
      <Speaking />
      <Contact />
      <Footer />
    </div>
  );
}
