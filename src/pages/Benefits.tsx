import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import MobileNav from "../components/MobileNav";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const ACCENT = "#e08a3e";

const BENEFITS = [
  { n: "01", title: "24/7 Concierge", desc: "A dedicated team on call around the clock to handle every detail of your trip." },
  { n: "02", title: "Priority Scheduling", desc: "Book with as little as 4 hours' notice, even during peak travel seasons." },
  { n: "03", title: "Global Network", desc: "Access to over 5,000 airports worldwide, including regional strips major airlines skip." },
  { n: "04", title: "Flexible Cancellations", desc: "Plans change. Cancel or reschedule without the penalties typical of commercial travel." },
  { n: "05", title: "Ground Transport", desc: "Seamless car service coordinated door-to-door on both ends of your journey." },
  { n: "06", title: "No Hidden Fees", desc: "Transparent, all-in pricing shown before you book — never a surprise on your invoice." },
];

export default function Benefits() {
  return (
    <div className="min-h-screen relative text-white">
      <AnimatedBackground video="https://www.pexels.com/download/video/854203/" />

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
          EVERY <span style={{ color: ACCENT }}>MEMBER</span>
          <br />
          GETS THIS
        </h1>
        <p className="text-lg text-white/70 max-w-xl">
          Standard on every SkyElite membership, no matter which tier you
          fly.
        </p>
      </header>

      <section
        className="relative z-10"
        style={{ backgroundColor: "rgba(6,10,20,0.9)" }}
      >
        <div className="max-w-5xl mx-auto px-8 py-20">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <TiltCard
                className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_auto_1fr] gap-4 md:gap-10 items-start py-8 border-t border-white/15"
                style={
                  i === BENEFITS.length - 1
                    ? { borderBottom: "1px solid rgba(255,255,255,0.15)" }
                    : undefined
                }
              >
                <span
                  className="text-sm font-mono hidden md:block pt-1"
                  style={{ color: ACCENT }}
                >
                  {b.n}
                </span>
                <h3 className="text-xl md:text-2xl font-bold min-w-[220px]">
                  {b.title}
                </h3>
                <p className="text-white/60 text-sm max-w-md">{b.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}