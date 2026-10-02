import { Link } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import AnimatedBackground from "../components/AnimatedBackground";

const ACCENT = "#e08a3e";

const MILESTONES = [
  { year: "2019", text: "SkyElite founded by a team of former commercial pilots and hospitality veterans." },
  { year: "2021", text: "Expanded to a fleet of 12 aircraft across light, midsize, and heavy jet categories." },
  { year: "2023", text: "Launched 24/7 concierge and same-day booking across our global network." },
  { year: "2026", text: "Serving members in over 40 countries, with a 98% on-time departure rate." },
];

export default function Story() {
  return (
    <div className="min-h-screen relative text-white">
     <AnimatedBackground video="https://www.pexels.com/download/video/28586471/" />
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
          BUILT BY <span style={{ color: ACCENT }}>FLYERS</span>
          <br />
          FOR FLYERS
        </h1>
        <p className="text-lg text-white/70 max-w-xl">
          SkyElite started with a simple frustration: private aviation was
          either impossibly exclusive or unreliably run. We set out to build
          something better — premium, but accessible.
        </p>
      </header>
      <section
        className="relative z-10"
        style={{ backgroundColor: "rgba(6,10,20,0.9)" }}
      >
        <div className="max-w-4xl mx-auto px-8 py-20">
          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-10 items-baseline py-8 border-t border-white/15"
              style={
                i === MILESTONES.length - 1
                  ? { borderBottom: "1px solid rgba(255,255,255,0.15)" }
                  : undefined
              }
            >
              <div
                className="text-2xl md:text-3xl font-bold"
                style={{ color: ACCENT }}
              >
                {m.year}
              </div>
              <p className="text-white/70 leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8 py-24 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Ready to <span style={{ color: ACCENT }}>fly</span> with us?
        </h2>
        <Link
          to="/discover"
          className="inline-block px-8 py-3 font-semibold text-sm tracking-wide uppercase"
          style={{ backgroundColor: ACCENT, color: "#0a0e1a" }}
        >
          Discover the Fleet
        </Link>
      </section>
    </div>
  );
}