import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Activity, Droplets, FlaskConical, HeartPulse, ShieldAlert, Utensils } from "lucide-react";

const CHECKOUT_URL = "https://api.syncosystem.com/api/labs/checkout/direct/runner_preparation";
const EMERGENCY_QR_URL = "https://syncosystem.com/login?redirect=%2Femergency-profile";
const PRECISION_PAGE_URL = "https://precisionhealthandweightloss.com/services/lab-testing/runner-preparation";

const MARKERS = [
  {
    icon: Droplets,
    title: "Electrolytes",
    markers: "Sodium, potassium, chloride, bicarbonate",
    body: "Electrolytes control fluid balance, nerve signals, muscle contraction, and heart rhythm. Your results help guide how you adjust water and electrolyte intake for training and racing. More water is not always better: drinking well beyond thirst during long events can dilute blood sodium to dangerous levels.",
  },
  {
    icon: FlaskConical,
    title: "Potassium and kidney function",
    markers: "BUN, creatinine, eGFR",
    body: "Kidney markers, read alongside electrolytes, guide hydration planning. During extreme exertion, muscle breakdown (rhabdomyolysis) releases potassium into the blood and strains the kidneys. Knowing your baseline before a training block helps you and your clinician spot risk factors you can address, such as training dehydrated or starting with a potassium level already on the high side.",
  },
  {
    icon: Activity,
    title: "CO2 (bicarbonate)",
    markers: "Acid-base buffering",
    body: "Most of the CO2 on a metabolic panel is bicarbonate, your main buffer against the acid, including lactic acid, produced by intervals, hills, and race surges. It reflects your pH buffering status. It does not directly measure blood pH or lactate.",
  },
  {
    icon: Utensils,
    title: "Total protein and albumin",
    markers: "Fueling and nutritional status",
    body: "Endurance training breaks muscle down; recovery builds it back if you fuel well. Protein and albumin are part of the picture of how you have been fueling, though hydration, inflammation, and liver or kidney health also affect them.",
  },
  {
    icon: HeartPulse,
    title: "hs-CRP",
    markers: "Inflammation",
    body: "A sensitive marker of acute or chronic inflammation that can help explain nagging fatigue, slow recovery, or lingering illness. A hard workout, injury, or cold can raise it for a few days, so retest when rested and well.",
  },
];

const WARNING_SIGNS = [
  "Muscle pain far beyond normal soreness, or muscles that feel swollen or weak",
  "Dark, tea- or cola-colored urine, or very little urine",
  "Confusion, severe headache, nausea, or vomiting",
  "Chest pain or pressure, a racing or irregular heartbeat, or shortness of breath beyond your effort",
  "Dizziness or fainting",
];

export default function RunnerBiomarkers() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Biomarkers for Runner Preparation | Dr. Kelvin Brown, MD, MPH";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-white tracking-tight">
            Dr. Kelvin Brown<span className="text-brand-teal">, MD, MPH</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
        </div>
      </nav>

      <section className="relative bg-brand-navy pt-28 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue/40 to-brand-navy" />
        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">Doctor Marathoner series</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">A Physician&apos;s Perspective on Endurance Health.</h1>
            <p className="mt-5 text-slate-300 leading-relaxed">
              As a physician and marathoner, I believe endurance training should involve more than pace, distance, and finishing times.
              Understanding your electrolytes, kidney function, inflammation, and metabolic health is part of preparing your body for what
              you&apos;re asking it to do. That&apos;s why I helped develop the Biomarkers for Runner Preparation package, and why it&apos;s the
              first step in my Doctor Marathoner series.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We&apos;re doing our part to help you be as prepared as possible: before you train, before race day, and on the course.
            </p>
            <p className="mt-4 font-semibold text-white">Train with purpose. Prepare with knowledge. Never take your health for granted.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={CHECKOUT_URL} className="inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-teal/90">
                Order your package, $129 <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#markers" className="inline-flex items-center justify-center border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
                What is tested
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">$129 all-inclusive: Comprehensive Metabolic Panel + hs-CRP, including your blood draw at a Quest location near you.</p>
          </div>
          <img
            src="/images/runner-biomarkers/runner-biomarkers-hero-1600x900.jpg"
            alt="Biomarkers for Runner Preparation: Comprehensive Metabolic Panel plus hs-CRP, $129 all-inclusive"
            width={1600}
            height={900}
            className="w-full rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      <section id="markers" className="py-20 bg-slate-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">What each biomarker tells a runner</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Your training plan tells you how far and how fast. Your bloodwork tells you what is happening inside your body while you do it.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {MARKERS.map((m) => {
              const Icon = m.icon;
              return (
                <article key={m.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy">{m.title}</h3>
                      <p className="text-xs text-slate-500">{m.markers}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm">{m.body}</p>
                </article>
              );
            })}
            <article className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-brand-navy">Also on your panel</h3>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Glucose, calcium, and liver markers (AST, ALT, alkaline phosphatase, bilirubin) round out your metabolic baseline. AST and
                ALT can rise temporarily after hard runs, another reason to test rested and fasted 8-12 hours.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="h-6 w-6 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-navy">On the course: know the warning signs</h2>
            </div>
            <p className="text-slate-600">Preparation does not end when the race starts. Stop and get medical help immediately if you experience:</p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              {WARNING_SIGNS.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm text-slate-600 leading-relaxed">
              <strong className="text-brand-navy">After a hard event:</strong> severe muscle pain, weakness, or dark urine in the hours or days
              after a race needs same-day medical care. Clinicians may order creatine kinase (CK) at that point. CK is a post-event test and is
              not part of this package.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-navy text-white p-8">
            <h3 className="text-2xl font-bold">Carry your health information</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              With a SyncoSystem account, build an Emergency QR profile with your emergency contacts, blood type, allergies, conditions, and
              medications, and set it as your phone&apos;s lock screen so responders can scan it.
            </p>
            <a href={EMERGENCY_QR_URL} className="mt-6 inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-5 py-3 rounded-lg hover:bg-slate-100">
              Build your Emergency QR <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Getting started</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            {[
              ["Order your package", "$129, all-inclusive, physician-ordered through Precision Health."],
              ["Visit Quest", "Your confirmation explains how to schedule your draw at a Quest Patient Service Center. Bring a photo ID."],
              ["Review your results", "Results typically arrive within a few days. Review them with your healthcare professional and track trends in SyncoSystem."],
            ].map(([title, copy], i) => (
              <li key={title} className="bg-white rounded-2xl p-6 border border-slate-100">
                <span className="text-brand-teal font-bold">Step {i + 1}</span>
                <p className="mt-1 font-bold text-brand-navy">{title}</p>
                <p className="mt-2 text-sm text-slate-600">{copy}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CHECKOUT_URL} className="inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-teal/90">
              Order your package, $129 <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PRECISION_PAGE_URL} className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-brand-navy border border-slate-300 hover:bg-white">
              Full details and FAQ at Precision Health
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-100">
        <p className="max-w-5xl mx-auto px-6 text-xs leading-5 text-slate-500">
          The Biomarkers for Runner Preparation package is an educational laboratory screening offering intended to help endurance athletes
          become more informed about selected health indicators. It is not a comprehensive medical evaluation, medical clearance for athletic
          participation, or a substitute for individualized medical advice, diagnosis, or treatment. Laboratory results reflect a single point
          in time and must be interpreted in the context of your health history, symptoms, medications, recent exercise, and hydration. Normal
          results do not guarantee that you can safely participate in endurance sports or eliminate the risk of a medical emergency. Abnormal
          results do not automatically indicate disease. Do not change your fluid or electrolyte intake, medications, or training based solely
          on lab results. Consult a qualified healthcare professional. This package does not include a CBC, iron panel, ferritin, magnesium,
          phosphorus, creatine kinase (CK), cardiac testing, or lactate measurement. If you have symptoms during or after exercise, seek medical
          care immediately.
        </p>
      </footer>
    </div>
  );
}
