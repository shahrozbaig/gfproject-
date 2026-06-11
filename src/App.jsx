import { useState } from 'react';

const hearts = [
  { left: '8%', delay: '0s', size: '22px' },
  { left: '28%', delay: '0.8s', size: '18px' },
  { left: '52%', delay: '0.4s', size: '24px' },
  { left: '72%', delay: '1.1s', size: '20px' },
  { left: '88%', delay: '0.6s', size: '18px' }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page-shell">
      <div className={`hero ${isOpen ? 'hero-soft' : ''}`}>
        <div className="content">
          <div className="headline">
            <p className="small-label">A gentle surprise for you</p>
            <h1>Tap the button and feel the bloom</h1>
          </div>

          <button
            className={`magic-button ${isOpen ? 'magic-button-clicked' : ''}`}
            onClick={() => setIsOpen(true)}
            disabled={isOpen}
          >
            {isOpen ? 'Opened ❤️' : 'Click Me ❤️'}
          </button>

          <div className={`card ${isOpen ? 'card-visible' : ''}`} aria-hidden={!isOpen}>
            <div className={`flower ${isOpen ? 'flower-bloom' : ''}`}>
              <span className="petal petal-1" />
              <span className="petal petal-2" />
              <span className="petal petal-3" />
              <span className="petal petal-4" />
              <span className="petal petal-5" />
              <span className="center" />
            </div>

            <div className="message">
              <p>For you, my Begum ❤️</p>
              <p>You make my world beautiful like this flower 🌸</p>
              <p>I love you always 💕</p>
            </div>
          </div>

          {isOpen && (
            <div className="heart-particles" aria-hidden="true">
              {hearts.map((heart, index) => (
                <span
                  key={index}
                  className="heart"
                  style={{
                    left: heart.left,
                    animationDelay: heart.delay,
                    width: heart.size,
                    height: heart.size
                  }}
                >
                  ❤️
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
