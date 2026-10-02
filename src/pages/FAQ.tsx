import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import MobileNav from "../components/MobileNav";
import { usePageTitle } from "../hooks/usePageTitle";

const ACCENT = "#e08a3e";

const FAQS = [
  { q: "How far in advance do I need to book?", a: "Elite and Signature members can book with as little as 4 hours' notice. Explorer members should plan for at least 24 hours." },
  { q: "Is there a membership commitment?", a: "Explorer has no annual commitment. Elite and Signature offer better rates in exchange for an annual membership." },
  { q: "What airports can I fly into?", a: "Our network covers over 5,000 airports worldwide, including regional airstrips close to your final destination." },
  { q: "Can I bring pets?", a: "Yes — pets fly free on all SkyElite aircraft with no additional paperwork required." },
  { q: "What happens if I need to cancel?", a: "Elite and Signature members can cancel or reschedule without penalty up to 24 hours before departure." },
];

export default function FAQ() {
  usePageTitle("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative text-white">
      <AnimatedBackground video="https://www.pexels.com/download/video/34746862/" />

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
          QUESTIONS, <span style={{ color: ACCENT }}>ANSWERED</span>
        </h1>
        <p className="text-lg text-white/70 max-w-xl">
          Answers to the questions we hear most.
        </p>
      </header>

      <section
        className="relative z-10"
        style={{ backgroundColor: "rgba(6,10,20,0.9)" }}
      >
        <div className="max-w-3xl mx-auto px-8 py-20">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="border-t border-white/15"
                style={
                  i === FAQS.length - 1
                    ? { borderBottom: "1px solid rgba(255,255,255,0.15)" }
                    : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-7 gap-6"
                >
                  <span className="text-lg md:text-xl font-medium">
                    {item.q}
                  </span>
                  <motion.span
                    className="text-2xl flex-shrink-0"
                    style={{ color: ACCENT }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-white/60 text-sm leading-relaxed pb-7 max-w-xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}