import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import MobileNav from "../components/MobileNav";
import { usePageTitle } from "../hooks/usePageTitle";

const ACCENT = "#e08a3e";

interface FormState {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  date: string;
  passengers: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  from: "",
  to: "",
  date: "",
  passengers: "1",
};

export default function BookNow() {
  usePageTitle("Book Now");
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Enter a phone number.";
    if (!form.from.trim()) next.from = "Enter a departure city.";
    if (!form.to.trim()) next.to = "Enter a destination.";
    if (!form.date) next.date = "Choose a departure date.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setStatus("submitting");

  try {
    const response = await fetch("https://formspree.io/f/xppwbnyn", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("done");
    } else {
      setStatus("idle");
      setErrors({ email: "Something went wrong. Please try again or email us directly." });
    }
  } catch {
    setStatus("idle");
    setErrors({ email: "Network error. Please check your connection and try again." });
  }
};

  const fieldClass = (hasError: boolean) =>
    `w-full bg-transparent border-b outline-none py-3 text-white placeholder-white/30 transition-colors ${
      hasError ? "border-red-400" : "border-white/25 focus:border-[color:var(--accent)]"
    }`;

  return (
    <div
      className="min-h-screen relative text-white"
      style={{ ["--accent" as any]: ACCENT }}
    >
      <AnimatedBackground image="/images/booknow-bg.jpg" />

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

      <header className="max-w-3xl mx-auto px-8 pt-12 pb-14 relative z-10">
        <div className="w-10 h-1 mb-6" style={{ backgroundColor: ACCENT }} />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-4">
          BOOK YOUR <span style={{ color: ACCENT }}>FLIGHT</span>
        </h1>
        <p className="text-lg text-white/70">
          Tell us where you're headed — a concierge will confirm within
          minutes.
        </p>
      </header>

      <section className="max-w-3xl mx-auto px-8 pb-28 relative z-10">
        {status === "done" ? (
          <div className="border-t border-white/15 pt-10">
            <h2 className="text-3xl font-bold mb-3">
              Request <span style={{ color: ACCENT }}>received</span>.
            </h2>
            <p className="text-white/60 mb-8">
              A SkyElite concierge will reach out to {form.email} shortly to
              confirm your itinerary.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3 font-semibold text-sm tracking-wide uppercase"
              style={{ backgroundColor: ACCENT, color: "#0a0e1a" }}
            >
              Return Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClass(!!errors.name)}
                  placeholder="Jane Carter"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-2">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={fieldClass(!!errors.phone)}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-2">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={fieldClass(!!errors.email)}
                placeholder="jane@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-2">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                  From
                </label>
                <input
                  type="text"
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  className={fieldClass(!!errors.from)}
                  placeholder="New York, NY"
                />
                {errors.from && (
                  <p className="text-red-400 text-xs mt-2">{errors.from}</p>
                )}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                  To
                </label>
                <input
                  type="text"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  className={fieldClass(!!errors.to)}
                  placeholder="Miami, FL"
                />
                {errors.to && (
                  <p className="text-red-400 text-xs mt-2">{errors.to}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                  Departure Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className={`${fieldClass(!!errors.date)} [color-scheme:dark]`}
                />
                {errors.date && (
                  <p className="text-red-400 text-xs mt-2">{errors.date}</p>
                )}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                  Passengers
                </label>
                <select
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                  className={`${fieldClass(false)} [color-scheme:dark]`}
                >
                  {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n} className="bg-[#0a0e1a]">
                      {n} {n === 1 ? "passenger" : "passengers"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-4 self-start px-8 py-3 font-semibold text-sm tracking-wide uppercase transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: ACCENT, color: "#0a0e1a" }}
            >
              {status === "submitting" ? "Sending…" : "Request Flight"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}