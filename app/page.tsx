export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Manufacturing Engineering & Industrial Systems Consultant</p>

          <h1>
            Your Factory Is Already Telling You Where Profit Is Leaking.
          </h1>

          <p className="subtext">
            Downtime. Slow lines. Wrong capex. Unsafe machines. Reactive maintenance.
            Poor flow. Process gaps nobody has questioned for years.
          </p>

          <p className="description">
            I help industrial businesses find the engineering root causes behind hidden
            operational losses — and turn shop-floor problems into measurable P&amp;L and
            EBITDA improvement.
          </p>

          <div className="stats">
            <div>
              <strong>7+</strong>
              <span>Years on the shop floor</span>
            </div>
            <div>
              <strong>250+</strong>
              <span>Machines managed</span>
            </div>
            <div>
              <strong>$500K+</strong>
              <span>Capex avoided</span>
            </div>
            <div>
              <strong>2×</strong>
              <span>Throughput improvement</span>
            </div>
          </div>

          <div className="cta-row">
            <a className="primary-btn" href="mailto:danish@danishdevgan.com?subject=Factory Problem Brief">
              Send a Factory Problem Brief
            </a>

            <a
              className="secondary-btn"
              href="https://www.linkedin.com/in/danishdevgan"
              target="_blank"
            >
              Message on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container">
          <h2>Most factories do not lose money in one dramatic failure.</h2>

          <p>
            Profit usually leaks quietly — through repeated stoppages, slow changeovers,
            wrong machine decisions, reactive maintenance, unsafe workarounds, poor flow,
            and process assumptions nobody has challenged for years.
          </p>

          <p>
            A machine stopping for 20 minutes is not just maintenance.
            It is delayed dispatch, overtime pressure, unstable planning, and margin loss.
          </p>
        </div>
      </section>

      <section className="contact-strip">
        <div className="container strip-inner">
          <div>
            <h3>Prefer a direct conversation?</h3>
            <p>
              Send a short message with your plant problem and operational challenge.
            </p>
          </div>

          <a
            className="whatsapp-btn"
            href="https://wa.me/917888839696?text=Hello%20Danish,%20I%20visited%20danishdevgan.com.%20I%20want%20to%20discuss%20a%20factory%20or%20operations%20problem."
            target="_blank"
          >
            WhatsApp Business
          </a>
        </div>
      </section>
    </main>
  );
}
