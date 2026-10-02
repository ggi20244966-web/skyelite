import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import MobileNav from "../components/MobileNav";

const ACCENT = "#e08a3e";

const PLANS = [
  {
    name: "Explorer",
    price: "$4,500",
    unit: "/ flight hour",
    features: ["Light jet access", "24-hour booking notice", "Standard concierge support", "No annual commitment"],
  },
  {
    name: "Elite",
    price: "$7,200",
    unit: "/ flight hour",
    features: ["Midsize & heavy jet access", "4-hour booking notice", "Priority 24/7 concierge", "Flexible cancellations"],
    highlighted: true,
  },
  {
    name: "Signature",
    price: "Custom",
    unit: "tailored pricing",
    features: ["Full fleet access", "Guaranteed availability", "Dedicated account manager", "Global ground transport included"],
  },
];

export default function Rates() {
  return (
    <div className="min-h-screen relative text-white">
      <AnimatedBackground video="https://www.pexels.com/download/video/28586470/" />

      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between relative z-10">
  <Link to="/" className="text-2xl font-semibold text-white">
    SkyElite
  </Link>
  <div className="hidden md:block">
    <Link
      to="/"
      className="text-white/80 hover:text-white transition-colors text-sm"
    >
      ← Back to Home
    </Link>
  </div>
  <MobileNav />
</nav>

      <header className="max-w-3xl mx-auto px-8 pt-16 pb-20 relative z-10">
        <div className="w-10 h-1 mb-6" style={{ backgroundColor: ACCENT }} />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
          PRICING, <span style={{ color: ACCENT }}>PLAIN</span>
          <br />
          AND SIMPLE
        </h1>
        <p className="text-lg text-white/70 max-w-xl">
          No hidden fees, no long-term lock-in. Pick the tier that fits how
          you fly.
        </p>
      </header>

      <section
        className="relative z-10"
        style={{ backgroundColor: "rgba(6,10,20,0.9)" }}
      >
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/15">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <TiltCard
                  className="px-2 py-10 md:px-8 h-full"
                  style={{
                    borderLeft:
                      i > 0 ? "1px solid rgba(255,255,255,0.15)" : undefined,
                    backgroundColor: plan.highlighted
                      ? "rgba(224,138,62,0.08)"
                      : undefined,
                  }}
                >
                  {plan.highlighted && (
                    <span
                      className="text-xs font-semibold tracking-widest uppercase mb-3 block"
                      style={{ color: ACCENT }}
                    >
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-white/50 ml-2">
                      {plan.unit}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-10">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-white/70 flex items-start gap-2"
                      >
                        <span style={{ color: ACCENT }}>—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/book-now"
                    className="inline-block px-6 py-3 font-semibold text-sm tracking-wide uppercase transition-opacity hover:opacity-90"
                    style={
                      plan.highlighted
                        ? { backgroundColor: ACCENT, color: "#0a0e1a" }
                        : { border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }
                    }
                  >
                    Get Started
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}