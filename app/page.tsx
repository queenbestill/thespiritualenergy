const WAITLIST_URL = "https://tally.so/r/o9bZyN";

function ArchMark({ light = false }: { light?: boolean }) {
  return (
    <svg className={`arch-mark ${light ? "arch-mark-light" : ""}`} viewBox="0 0 52 62" role="img" aria-label="Stone arch">
      <path d="M5 59V27C5 14.85 14.85 5 27 5s22 9.85 22 22v32" fill="none" stroke="currentColor" strokeWidth="2.2"/>
      <path d="M11 59V27c0-8.84 7.16-16 16-16s16 7.16 16 16v32" fill="none" stroke="currentColor" strokeWidth="1" opacity=".55"/>
      <path d="M2 59h50" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? "brand-light" : ""}`} href="#" aria-label="Spiritual Energy home"><ArchMark light={light}/><span>SPIRITUAL<br/>ENERGY</span></a>;
}

function CTA({ children = "Join the Waitlist" }: { children?: React.ReactNode }) {
  return <a className="button" href={WAITLIST_URL} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">→</span></a>;
}

const convictions = [
  { n: "01", icon: "✧", title: "Presence over productivity", text: "True growth starts when you slow down and tune in." },
  { n: "02", icon: "☼", title: "Connection creates meaning", text: "We discover more when we share the journey." },
  { n: "03", icon: "☾", title: "The deep takes time", text: "The most meaningful changes unfold slowly." },
];

const discoveries = [
  "New perspectives on yourself and the world",
  "Deeper, more authentic connections",
  "Ideas that invite you to see things differently",
  "More space for curiosity, meaning and presence",
];

export default function Home() {
  return (
    <main>
      <header className="site-header wrap">
        <Brand />
        <a className="header-cta" href={WAITLIST_URL} target="_blank" rel="noreferrer">Join the Waitlist <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-arch" aria-hidden="true"><div className="hero-arch-image" /></div>
        <div className="hero-content wrap">
          <p className="eyebrow"><span className="eyebrow-line"/> A NEW WAY TO EXPLORE</p>
          <h1>Do you feel<br/>there’s <em>more?</em></h1>
          <p className="hero-copy">You’re achieving, producing, and moving forward. And yet, something inside you is quietly asking for a deeper connection.</p>
          <CTA />
          <p className="micro">LIMITED ACCESS · EARLY-BIRD PRIORITY</p>
        </div>
        <div className="hero-caption">A SPACE TO PAUSE, DISCOVER AND CONNECT</div>
      </section>

      <section className="question-section section">
        <div className="wrap question-grid">
          <div className="arch-window question-window" aria-hidden="true"><div/></div>
          <div className="question-copy">
            <p className="eyebrow">THE QUESTION</p>
            <h2>What if you’re looking<br/>in the wrong place?</h2>
            <p>We’ve been taught to do more. To achieve more. To be more productive. But somewhere along the way, we can lose touch with what truly matters.</p>
            <p>We fill our days, meet expectations and keep moving. Yet we don’t always leave room to enjoy the life we’re building, to be present, or to connect in a meaningful way.</p>
            <p className="question-emphasis">There’s more to life than checking boxes.</p>
          </div>
        </div>
      </section>

      <section className="perspective-section section">
        <div className="wrap">
          <div className="center intro-heading">
            <p className="eyebrow">A NEW PERSPECTIVE</p>
            <h2>We’re exploring something different.</h2>
            <p>Not a course. Not an app. Not a quick fix. A new way to explore spirituality, growth and connection, something that’s been missing.</p>
          </div>
          <p className="eyebrow convictions-label">OUR CONVICTIONS</p>
          <div className="conviction-grid">
            {convictions.map((item) => <article className="conviction" key={item.n}>
              <div className="mini-arch"><span>{item.icon}</span></div>
              <span className="item-number">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="discover-section">
        <div className="discover-image" aria-hidden="true"><div className="stone-arch arch-one"/><div className="stone-arch arch-two"/></div>
        <div className="wrap discover-content">
          <p className="eyebrow">WHAT YOU’LL DISCOVER</p>
          <h2>New perspectives.<br/>Deeper connection.</h2>
          <p>A space to explore, learn and grow, with an open mind and a curious heart.</p>
          <CTA />
        </div>
      </section>

      <section className="journey-section section">
        <div className="journey-decoration" aria-hidden="true"><div className="arch-window journey-window"><div/></div></div>
        <div className="wrap journey-content">
          <div className="center">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>Be part of the journey.</h2>
          </div>
          <div className="steps">
            <article><span className="step-number">1</span><h3>Join the Waitlist</h3><p>Share your interest in being part of this new chapter.</p></article>
            <span className="step-arrow">→</span>
            <article><span className="step-number">2</span><h3>Answer 4 Questions</h3><p>Help us understand what matters most to you.</p></article>
            <span className="step-arrow">→</span>
            <article><span className="step-number">3</span><h3>Get Early Access</h3><p>Receive updates and be among the first to know.</p></article>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-photo" aria-hidden="true"/>
        <div className="wrap about-content">
          <p className="eyebrow">ABOUT US</p>
          <h2>A journey born from curiosity.</h2>
          <p>We’re at the beginning of an exploration. A personal curiosity about what it means to live a more conscious, connected and fulfilling life.</p>
          <p>We believe there is always more to discover in ourselves, in one another, and in the world around us. We’re creating space for new questions, fresh perspectives and meaningful experiences.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-ornament left"><ArchMark light/></div>
        <div className="footer-main">
          <p className="eyebrow">A NEW POSSIBILITY</p>
          <h2>Do you feel there’s <em>more?</em></h2>
          <p>Join our waitlist and be part of this exciting journey.</p>
          <CTA>Join the Waitlist</CTA>
        </div>
        <div className="footer-ornament right"><ArchMark light/></div>
        <div className="footer-bottom"><Brand light/><span>© 2026 SPIRITUAL ENERGY</span><span>MADE WITH CURIOSITY</span></div>
      </footer>
    </main>
  );
}
