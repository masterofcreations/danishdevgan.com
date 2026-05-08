const proofCards = [
  { metric: '7+', label: 'Years on shop floors' },
  { metric: '250+', label: 'Machines managed' },
  { metric: '$500K+', label: 'Capex avoided' },
  { metric: '50–100', label: 'People led' },
];

const insights = [
  'A factory can run at full activity and still bleed margin.',
  'Most maintenance problems start as visibility problems.',
  'Wrong capex often begins with wrong diagnosis.',
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand-block">
          <h3>Danish Devgan</h3>
          <p>Manufacturing Engineering & Industrial Systems Consultant</p>
        </div>

        <nav className="nav-links">
          <a href="#proof">Proof</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Industrial Operations • Systems • Throughput • Capex</p>

            <h1>Your Factory Is Already Telling You Where Profit Is Leaking.</h1>

            <p className="subtext">
              Downtime. Slow lines. Wrong capex. Reactive maintenance. Unsafe systems.
              Operational friction hidden inside plants that still look busy.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#contact">
                Start a Diagnostic Conversation
              </a>

              <a className="secondary-btn" href="https://www.linkedin.com/in/danishdevgan" target="_blank">
                Message on LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-panel reveal delay-1">
            <div className="panel-topline">
              <span>Operational Proof</span>
              <span>Plant-Level</span>
            </div>

            <div className="signal-grid">
              {proofCards.map((card) => (
                <div key={card.label}>
                  <strong>{card.metric}</strong>
                  <span>{card.label}</span>
                </div>
              ))}
            </div>

            <div className="system-note">
              <span className="status-dot" />
              Reads machines, people, utilities, maintenance, flow, and money as one system.
            </div>
          </div>
        </div>
      </section>

      <section className="insight-strip reveal">
        {insights.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </section>

      <section className="visual-break section-pad">
        <div className="visual-card reveal">
          <div className="visual-grid" />

          <div className="visual-copy">
            <p className="section-kicker">Operational intelligence</p>
            <h2>The answer is rarely sitting in one department.</h2>
            <p>
              A throughput problem may look like production. The real cause may be utilities,
              maintenance timing, layout, alarms, operator movement, or one ignored process variable.
            </p>
          </div>
        </div>
      </section>

      <section className="proof-section section-pad" id="proof">
        <div className="container section-heading reveal">
          <p className="section-kicker">Built from plant-level execution</p>
          <h2>Operational thinking grounded in engineering reality.</h2>
        </div>

        <div className="container proof-grid">
          {proofCards.map((card) => (
            <article className="proof-card reveal" key={card.label}>
              <strong>{card.metric}</strong>
              <h3>{card.label}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container section-heading reveal">
          <p className="section-kicker">Consulting focus</p>
          <h2>Focused on operational leakage, throughput, and systems discipline.</h2>
        </div>
      </section>

      <section className="brief-section section-pad" id="contact">
        <div className="container brief-card reveal">
          <div>
            <p className="section-kicker">Factory Problem Brief</p>
            <h2>Describe the operational problem.</h2>
            <p>
              A sharp diagnosis before capex is often cheaper than one wrong purchase after approval.
            </p>
          </div>

          <form className="brief-form" action="https://formsubmit.co/danish@danishdevgan.com" method="POST">
            <input type="hidden" name="_subject" value="Factory Problem Brief" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="company" placeholder="Company" required />
            <input type="text" name="role" placeholder="Role" />
            <textarea name="problem" placeholder="Describe the factory or operational problem" rows={5} required />

            <button type="submit" className="primary-btn">
              Submit Brief
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
