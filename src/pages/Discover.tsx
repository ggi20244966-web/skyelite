import { Link } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import AnimatedBackground from "../components/AnimatedBackground";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { usePageTitle } from "../hooks/usePageTitle";

const STATS = [
  { value: "5,000+", label: "Airports Worldwide" },
  { value: "24/7", label: "Concierge Support" },
  { value: "98%", label: "On-Time Departures" },
  { value: "40+", label: "Countries Served" },
];

const FLEET = [
  { name: "Light Jet", desc: "Ideal for short trips and small groups seeking speed and efficiency.", seats: "4–6 seats", range: "1,500 nm" },
  { name: "Midsize Jet", desc: "A balance of comfort and range for regional and cross-country travel.", seats: "6–8 seats", range: "2,800 nm" },
  { name: "Heavy Jet", desc: "Maximum space and range for long-haul, international journeys.", seats: "10–14 seats", range: "5,500 nm" },
];

const ACCENT = "#e08a3e";

export default function Discover() {
  usePageTitle("Discover");
  return (
    <div className="min-h-screen relative text-white">
      <AnimatedBackground video="https://www.pexels.com/download/video/4285866/" />

      {/* Nav */}
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
      {/* Hero — bold text directly on photo */}
      <header className="max-w-5xl mx-auto px-8 pt-16 pb-28 relative z-10">
        <div
          className="w-10 h-1 mb-6"
          style={{ backgroundColor: ACCENT }}
        />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
          FLY <span style={{ color: ACCENT }}>PRIVATE</span>
          <br />
          ON YOUR TERMS
        </h1>
        <p className="text-lg text-white/70 max-w-xl">
          A fleet built for every journey, and a membership designed around
          your schedule — not the other way around.
        </p>
        <Link
          to="/book-now"
          className="inline-block mt-8 px-8 py-3 font-semibold text-sm tracking-wide uppercase"
          style={{ backgroundColor: ACCENT, color: "#0a0e1a" }}
        >
          Get Involved
        </Link>
      </header>

      {/* Stat row — no boxes, just bold numbers */}
      <section className="max-w-6xl mx-auto px-8 pb-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/15 pt-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="text-4xl md:text-5xl font-bold mb-1"
                style={{ color: ACCENT }}
              >
                {s.value}
              </div>
              <div className="text-white/70 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet — dark solid block, minimal borders instead of white cards */}
      <section
        className="relative z-10"
        style={{ backgroundColor: "rgba(6,10,20,0.9)" }}
      >
        <div className="max-w-6xl mx-auto px-8 py-24">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: ACCENT }}
          >
            The Fleet
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 max-w-lg">
            An aircraft for every journey.
          </h2>

          <div className="flex flex-col">
            {FLEET.map((jet, i) => (
  <Reveal key={jet.name} delay={i * 0.1}>
    <TiltCard
      className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-10 items-baseline py-8 border-t border-white/15"
      style={i === FLEET.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.15)" } : undefined}
    >
      <div className="text-2xl md:text-3xl font-bold">{jet.name}</div>
      <p className="text-white/60 text-sm max-w-md">{jet.desc}</p>
      <div className="text-sm text-white/50 whitespace-nowrap">
        {jet.seats} · {jet.range}
      </div>
    </TiltCard>
  </Reveal>
))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-8 py-24 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Ready to <span style={{ color: ACCENT }}>fly</span>?
        </h2>
        <Link
          to="/book-now"
          className="inline-block px-8 py-3 font-semibold text-sm tracking-wide uppercase"
          style={{ backgroundColor: ACCENT, color: "#0a0e1a" }}
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}