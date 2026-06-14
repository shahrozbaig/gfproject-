import { useState } from 'react';

const floatingHearts = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${5 + ((index * 13) % 90)}%`,
  delay: `${(index % 9) * 0.7}s`,
  duration: `${7 + (index % 5)}s`,
  size: `${16 + (index % 4) * 6}px`
}));

export default function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      <main className="apology-page">
        <div className="hearts-bg" aria-hidden="true">
          {floatingHearts.map((heart) => (
            <span
              key={heart.id}
              className="floating-heart"
              style={{
                left: heart.left,
                animationDelay: heart.delay,
                animationDuration: heart.duration,
                fontSize: heart.size
              }}
            >
              ♥
            </span>
          ))}
        </div>

        <section className="apology-card" aria-label="Romantic apology">
          <p className="eyebrow">A little note from my heart</p>
          <h1>I'm Sorry ❤️</h1>

          <button
            className="love-button"
            type="button"
            onClick={() => setIsRevealed(true)}
          >
            Click Me
          </button>

          {isRevealed && (
            <div className="reveal-area show">
              <img
                className="apology-image"
                src="/apology.jpg"
                alt="A romantic apology"
              />
              <p className="love-message">Applo meri jaan ❤️</p>
            </div>
          )}
        </section>
      </main>

      <style>{`
        :root {
          color-scheme: only light;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #fff0f5;
          color: #5f1732;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          min-height: 100%;
          margin: 0;
        }

        body {
          overflow-x: hidden;
        }

        button {
          font: inherit;
        }

        .apology-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          position: relative;
          overflow-x: hidden;
          overflow-y: auto;
          padding: 24px;
          background:
            radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.72), transparent 28%),
            radial-gradient(circle at 78% 20%, rgba(255, 214, 231, 0.75), transparent 26%),
            linear-gradient(135deg, #ff6f9f 0%, #ff8fbd 36%, #d93262 100%);
        }

        .apology-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(255, 255, 255, 0.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: radial-gradient(circle at center, black, transparent 74%);
          pointer-events: none;
        }

        .hearts-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-heart {
          position: absolute;
          bottom: -48px;
          color: rgba(255, 255, 255, 0.72);
          filter: drop-shadow(0 10px 16px rgba(137, 24, 61, 0.16));
          animation-name: floatHeart;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .apology-card {
          width: min(100%, 520px);
          min-height: 440px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
          position: relative;
          z-index: 1;
          padding: clamp(28px, 6vw, 52px);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.62);
          border-radius: 28px;
          background: rgba(255, 247, 250, 0.88);
          box-shadow:
            0 30px 80px rgba(107, 15, 48, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(16px);
          animation: cardIn 850ms ease both;
        }

        .eyebrow {
          margin: 0;
          color: #b92b5b;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #7f183d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.65rem, 12vw, 5rem);
          font-weight: 800;
          line-height: 1;
          text-shadow: 0 10px 28px rgba(189, 49, 91, 0.22);
        }

        .love-button {
          border: 0;
          border-radius: 999px;
          padding: 15px 34px;
          color: white;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          background: linear-gradient(135deg, #ff336d, #c8174d);
          box-shadow: 0 18px 36px rgba(200, 23, 77, 0.32);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            filter 220ms ease;
        }

        .love-button:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 24px 48px rgba(200, 23, 77, 0.4);
          filter: saturate(1.08);
        }

        .love-button:active {
          transform: translateY(0) scale(0.98);
        }

        .reveal-area {
          width: 100%;
          display: grid;
          justify-items: center;
          gap: 16px;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(14px);
          transition:
            max-height 700ms ease,
            opacity 600ms ease,
            transform 700ms ease;
        }

        .reveal-area.show {
          max-height: 520px;
          opacity: 1;
          transform: translateY(0);
        }

        .apology-image {
          width: min(100%, 330px);
          aspect-ratio: 1 / 1;
          display: block;
          object-fit: cover;
          border: 8px solid rgba(255, 255, 255, 0.84);
          border-radius: 24px;
          box-shadow: 0 22px 48px rgba(133, 24, 58, 0.24);
          opacity: 0;
          transform: scale(0.94);
        }

        .show .apology-image {
          animation: fadeInImage 750ms ease 120ms forwards;
        }

        .love-message {
          margin: 0;
          color: #941943;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.65rem, 7vw, 2.55rem);
          font-weight: 800;
          line-height: 1.12;
          opacity: 0;
          transform: translateY(12px);
          text-shadow: 0 8px 22px rgba(213, 50, 97, 0.18);
        }

        .show .love-message {
          animation: fadeInText 850ms ease 760ms forwards;
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInImage {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInText {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatHeart {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(0.8);
          }
          12% {
            opacity: 0.85;
          }
          100% {
            opacity: 0;
            transform: translate3d(28px, -112vh, 0) rotate(22deg) scale(1.35);
          }
        }

        @media (max-width: 560px) {
          .apology-page {
            padding: 18px;
          }

          .apology-card {
            min-height: 420px;
            border-radius: 22px;
          }

          .love-button {
            width: min(100%, 220px);
          }
        }
      `}</style>
    </>
  );
}
