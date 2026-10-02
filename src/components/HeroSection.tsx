import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const ACCENT = "#e08a3e";

const NAV_LINKS = [
  { label: "Start", path: "/" },
  { label: "Story", path: "/story" },
  { label: "Rates", path: "/rates" },
  { label: "Benefits", path: "/benefits" },
  { label: "FAQ", path: "/faq" },
];

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4";

const STATS = [
  { value: "5,000+", label: "Airports Worldwide" },
  { value: "24/7", label: "Concierge Support" },
  { value: "98%", label: "On-Time Departures" },
];

const FLEET_PREVIEW = [
  { name: "Light Jet", seats: "4–6 seats", range: "1,500 nm" },
  { name: "Midsize Jet", seats: "6–8 seats", range: "2,800 nm" },
  { name: "Heavy Jet", seats: "10–14 seats", range: "5,500 nm" },
];

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* ===== VIDEO HERO ===== */}
      <section className="relative h-screen overflow-hidden">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          style={{ y: videoY }}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </motion.video>

        {/* Cinematic dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,10,20,0.75) 0%, rgba(6,10,20,0.3) 35%, rgba(6,10,20,0.55) 75%, rgba(6,10,20,0.9) 100%)",
          }}
        />

        <div className="relative h-full flex">
          {/* Framed logo, top-left */}
          <div className="absolute top-6 left-4 md:left-6 z-20">
            <div
              className="px-5 py-2 border"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              <span className="text-xl font-semibold tracking-wide">
                SkyElite
              </span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden absolute top-8 right-8 z-20 text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {isMenuOpen && (
            <div className="md:hidden absolute top-24 right-8 z-20 bg-black/80 backdrop-blur rounded-lg px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Vertical nav — desktop, right side, stacked downward */}
          <div className="hidden md:flex flex-col gap-6 absolute top-1/2 right-10 z-10 -translate-y-1/2 items-end">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div
              className="w-px h-16 mt-2"
              style={{ backgroundColor: ACCENT }}
            />
          </div>

          {/* Framed headline block */}
          <div className="flex-1 flex items-center px-8 md:px-20">
            <div
              className="border px-8 py-10 md:px-14 md:py-14 max-w-2xl"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: ACCENT }}
              >
                Private Jets
              </p>

              <h1 className="leading-[0.9] tracking-tight mb-6">
                <AnimatedWord
                  text="Premium."
                  className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white/60"
                  startDelay={0}
                />
                <AnimatedWord
                  text="Accessible."
                  className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white"
                  startDelay={0.5}
                />
              </h1>

              <p className="text-base md:text-lg text-white/60 mb-8 max-w-md">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to="/discover"
                  className="px-6 py-3 border text-sm font-semibold tracking-wide uppercase hover:bg-white/10 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.4)" }}
                >
                  Discover
                </Link>
                <Link
                  to="/book-now"
                  className="px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90"
                  style={{ backgroundColor: ACCENT, color: "#0a0e1a" }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BELOW-THE-FOLD ===== */}
      <div className="relative">
        <AnimatedBackground video="https://www.pexels.com/download/video/4285866/" />

        {/* Stats */}
        <section className="max-w-6xl mx-auto px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/15 pt-10">
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

        {/* Fleet preview */}
        <section
          className="relative z-10"
          style={{ backgroundColor: "rgba(6,10,20,0.9)" }}
        >
          <div className="max-w-6xl mx-auto px-8 py-20">
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
              {FLEET_PREVIEW.map((jet, i) => (
                <div
                  key={jet.name}
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-10 items-baseline py-8 border-t border-white/15"
                  style={
                    i === FLEET_PREVIEW.length - 1
                      ? { borderBottom: "1px solid rgba(255,255,255,0.15)" }
                      : undefined
                  }
                >
                  <div className="text-2xl md:text-3xl font-bold min-w-[220px]">
                    {jet.name}
                  </div>
                  <div className="text-sm text-white/50">
                    {jet.seats} · {jet.range}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/discover"
              className="inline block mt-10 px-8 py-3 font-semibold text-sm tracking-wide uppercase transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: "#0a0e1a" }}
            >
              Explore the Fleet
            </Link>
          </div>
        </section>

        {/* Testimonial */}
        <section className="max-w-3xl mx-auto px-8 py-24 relative z-10">
          <div className="w-10 h-1 mb-8" style={{ backgroundColor: ACCENT }} />
          <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-6">
            "SkyElite changed how our team travels. Booking takes minutes,
            not days."
          </p>
          <p className="text-sm text-white/50">
            — Marcus Webb, Managing Partner
          </p>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-8 pb-24 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ready when <span style={{ color: ACCENT }}>you are</span>.
          </h2>
          <div className="flex items-center gap-4">
            <Link
              to="/rates"
              className="px-6 py-3 border text-sm font-semibold tracking-wide uppercase hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              See Rates
            </Link>
            <Link
              to="/book-now"
              className="px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: "#0a0e1a" }}
            >
              Book Now
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/15 relative z-10">
          <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xl font-semibold">SkyElite</span>
            <div className="flex gap-6 text-sm text-white/60">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <span className="text-xs text-white/40">
              © 2026 SkyElite. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function AnimatedWord({
  text,
  className,
  startDelay = 0,
}: {
  text: string;
  className: string;
  startDelay?: number;
}) {
  return (
    <span className={className} style={{ display: "block" }}>
      {text.split("").map((char, i) => {
        const angle = (i * 47) % 360;
        const dist = 40 + (i % 5) * 15;
        const rad = (angle * Math.PI) / 180;
        const dx = Math.cos(rad) * dist;
        const dy = Math.sin(rad) * dist;
        const rot = (i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 10);
        const delay = startDelay + i * 0.045;

        return (
          <span
            key={i}
            className="letter-assemble"
            style={
              {
                display: "inline-block",
                "--dx": `${dx}px`,
                "--dy": `${dy}px`,
                "--rot": `${rot}deg`,
                animationDelay: `${delay}s`,
              } as React.CSSProperties
            }
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
      <style>{`
        .letter-assemble {
          opacity: 0;
          transform: translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(0.6);
          animation: assembleLetter 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes assembleLetter {
          to {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .letter-assemble {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </span>
  );
}