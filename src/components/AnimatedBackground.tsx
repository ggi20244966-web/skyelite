import { useState } from "react";

interface AnimatedBackgroundProps {
  image?: string;
  video?: string;
}

export default function AnimatedBackground({ image, video }: AnimatedBackgroundProps) {
  const [mediaLoaded, setMediaLoaded] = useState(false);

  const stars = Array.from({ length: 50 }, (_, i) => {
    const x = (i * 37) % 100;
    const y = (i * 53) % 45;
    const size = i % 5 === 0 ? 2 : 1;
    const delay = (i % 10) * 0.4;
    const duration = 3 + (i % 4);
    return { x, y, size, delay, duration, key: i };
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0e1a]">
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setMediaLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: mediaLoaded ? 1 : 0 }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <img
          src={image}
          alt=""
          onLoad={() => setMediaLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity-duration-1000"
          style={{ opacity: mediaLoaded ? 1 : 0 }}
        />
      ) : null}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,10,20,0.75) 0%, rgba(6,10,20,0.55) 30%, rgba(6,10,20,0.6) 70%, rgba(6,10,20,0.85) 100%)",
        }}
      />

      <div className="absolute inset-0">
        {stars.map((s) => (
          <div
            key={s.key}
            className="star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(6,10,20,0.4) 100%)",
        }}
      />

      <style>{`
        .star {
          position: absolute;
          border-radius: 9999px;
          background: #ffffff;
          animation: twinkle ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.9; }
        }
        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(100px);
          opacity: 0.16;
          will-change: transform;
        }
        .orb-1 {
          width: 36vw; height: 36vw; top: -10%; left: -10%;
          background: radial-gradient(circle, #3a5a9c 0%, transparent 70%);
          animation: drift1 34s ease-in-out infinite;
        }
        .orb-2 {
          width: 30vw; height: 30vw; bottom: -10%; right: -8%;
          background: radial-gradient(circle, #d9955a 0%, transparent 70%);
          animation: drift2 38s ease-in-out infinite;
        }
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4vw, 5vh) scale(1.1); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4vw, -4vh) scale(0.9); }
        }
        @media (prefers-reduced-motion: reduce) {
          .star, .orb { animation: none; }
        }
      `}</style>
    </div>
  );
}