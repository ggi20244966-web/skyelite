import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const ACCENT = "#e08a3e";

const NAV_LINKS = [
  { label: "Start", path: "/" },
  { label: "Story", path: "/story" },
  { label: "Rates", path: "/rates" },
  { label: "Benefits", path: "/benefits" },
  { label: "FAQ", path: "/faq" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden text-white z-20"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 z-20 bg-black/90 backdrop-blur rounded-lg px-6 py-5 flex flex-col gap-4 min-w-[160px]">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-widest uppercase transition-colors"
                style={{ color: isActive ? ACCENT : "rgba(255,255,255,0.8)" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}