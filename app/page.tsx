export default function Home() {
  return (
    <main className="splash">
      <a href="https://navfitx.com" className="link">
        navfitx.com
      </a>
      <p className="tagline">a replacement for navfit98</p>

      <style jsx>{`
        .splash {
          min-height: 100vh;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          background: linear-gradient(120deg, #f4f6ff, #edf8f5, #fff5ef);
          background-size: 240% 240%;
          animation: gradientShift 18s ease-in-out infinite;
          padding: 2rem;
          text-align: center;
        }

        .link {
          color: #1a2133;
          text-decoration: none;
          font-family: "Space Grotesk", "Avenir Next", "Segoe UI", sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 500;
          letter-spacing: 0.015em;
          transition: opacity 180ms ease;
        }

        .link:hover,
        .link:focus-visible {
          opacity: 0.7;
        }

        .tagline {
          margin: 0;
          color: #3a445d;
          font-family: "IBM Plex Mono", "SFMono-Regular", "Menlo", monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: lowercase;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
}
