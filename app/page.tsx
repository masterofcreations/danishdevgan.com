const leakSignals = [
  'Repeated stoppages that everyone has started accepting as normal.',
  'Lines that look busy but never reach their real output capacity.',
  'Capex decisions made under pressure instead of diagnosis.',
  'Maintenance teams trapped in firefighting instead of prevention.',
  'Safety risks hidden inside workarounds, access issues, and machine habits.',
  'Process variables nobody questions because the plant has always run that way.',
];

const proofCards = [
  {
    metric: '2×',
    label: 'Throughput improved',
    detail:
      'Existing production infrastructure was not replaced. The bottleneck was diagnosed through line speed, heating behavior, machine condition, and process control.',
  },
  {
    metric: '$500K+',
    label: 'Capex avoided',
    detail:
      'Critical production systems were engineered in-house instead of buying expensive off-shelf equipment without operational ownership.',
  },
  {
    metric: '76%',
    label: 'Rejection reduced',
    detail:
      'A quality problem blamed on suppliers and operators was traced to the real shop-floor cause through observation, trials, and practical correction.',
  },
  {
    metric: '250+',
    label: 'Machines managed',
    detail:
      'Production, utility, maintenance, safety, tool room, and project systems managed as one industrial operating environment — not isolated departments.',
  },
];

const diagnosticAreas = [
  'Throughput & line speed',
  'Downtime & maintenance discipline',
  'Capex review before purchase',
  'Factory layout & material flow',
  'Machine safety & risk exposure',
  'Utilities, alarms & control systems',
  'Process gaps & SOP weakness',
  'AI-assisted manufacturing workflows',
];

const services = [
  {
    title: 'Factory Profit Leak Diagnostic',
    text: 'A focused review of where your plant is losing money through downtime, slow flow, wrong priorities, weak systems, or hidden operational friction.',
  },
  {
    title: 'Hidden Throughput & Flow Bottleneck Analysis',
    text: 'Identify why output does not match machine capacity — across line speed, people movement, utilities, maintenance dependency, and process timing.',
  },
  {
    title: 'Capex & Machine Decision Review',
    text: 'Before approving a major purchase, review whether the problem needs new equipment, better engineering, smarter controls, or a process correction.',
  },
  {
    title: 'Maintenance System Improvement',
    text: 'Move from breakdown reaction to structured prevention through spare logic, alarm visibility, root-cause discipline, and practical operating routines.',
  },
  {
    title: 'Plant Setup & Expansion Advisory',
    text: 'Support for owners planning new lines, plant expansion, utilities, layout, compliance readiness, and operational go-live decisions.',
  },
  {
    title: 'AI for Manufacturing Operations',
    text: 'Practical AI adoption for reporting, workflow discipline, maintenance intelligence, SOP systems, and decision visibility — not gimmicks.',
  },
];

const mailBody = encodeURIComponent(`Hello Danish,\n\nI visited danishdevgan.com and want to discuss a factory or operations problem.\n\nName:\nCompany:\nRole:\nCountry:\nIndustry:\nMain problem:\nWhat it is costing us:\nHow soon we want to solve it:\n\n`);

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Manufacturing Engineering & Industrial Systems Consultant</p>

            <h1>Your Factory Is Already Telling You Where Profit Is Leaking.</h1>

            <p className="subtext">
              The machines are running. People are busy. Orders are moving.
              But EBITDA can still leak quietly through downtime, slow lines,
              wrong capex, reactive maintenance, unsafe systems, and process gaps
              nobody has questioned for years.
            </p>

            <p className="description">
              I help industrial businesses read those signals, find the engineering
              root causes behind hidden operational losses, and convert shop-floor
              problems into measurable P&amp;L improvement.
            </p>

            <div className="cta-row">
              <a
                className="primary-btn"
                href={`mailto:danish@danishdevgan.com?subject=Factory Problem Brief&body=${mailBody}`}
              >
                Send a Factory Problem Brief
              </a>

              <a className="secondary-btn" href="https://www.linkedin.com/in/danishdevgan" target="_blank">
                Message on LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-panel reveal delay-1" aria-label="Operational proof panel">
            <div className="panel-topline">
              <span>Operational Proof</span>
              <span>Plant-Level</span>
            </div>
            <div className="signal-grid">
              <div>
                <strong>7+</strong>
                <span>Years on shop floors</span>
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
                <strong>50–100</strong>
                <span>People led</span>
              </div>
            </div>
            <div className="system-note">
              <span className="status-dot" />
              Reads machines, people, utilities, maintenance, safety, flow, and money as one system.
            </div>
          </div>
        </div>
      </section>

      <section className="recognition-section section-pad">
        <div className="container narrow reveal">
          <p className="section-kicker">The hidden problem</p>
          <h2>Most factories do not lose money in one dramatic failure.</h2>
          <p>
            Profit usually leaks through small operating losses repeated every day —
            the kind that become invisible because the plant still looks busy.
          </p>
        </div>

        <div className="container leak-list reveal delay-1">
          {leakSignals.map((signal) => (
            <div className="leak-item" key={signal}>
              <span />
              <p>{signal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="money-section section-pad">
        <div className="container split-grid">
          <div className="reveal">
            <p className="section-kicker">How operators feel it</p>
            <h2>A 20-minute stoppage is not just maintenance.</h2>
          </div>
          <div className="money-copy reveal delay-1">
            <p>It is delayed dispatch.</p>
            <p>It is overtime pressure.</p>
            <p>It is planning instability.</p>
            <p>It is supervisor firefighting.</p>
            <p>It is contribution margin leaving the plant quietly.</p>
          </div>
        </div>
      </section>

      <section className="proof-section section-pad" id="proof">
        <div className="container section-heading reveal">
          <p className="section-kicker">Proof without theatre</p>
          <h2>Built from factory work, not boardroom theory.</h2>
          <p>
            The value is not a report. The value is practical diagnosis before another
            month of firefighting, another wrong purchase, or another invisible loss becomes normal.
          </p>
        </div>

        <div className="container proof-grid">
          {proofCards.map((card, index) => (
            <article className="proof-card reveal" style={{ animationDelay: `${index * 90}ms` }} key={card.label}>
              <strong>{card.metric}</strong>
              <h3>{card.label}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="diagnostic-section section-pad">
        <div className="container split-grid">
          <div className="reveal">
            <p className="section-kicker">How I read a plant</p>
            <h2>The answer is rarely sitting in one department.</h2>
            <p>
              A throughput problem may look like production. The real cause may be utilities,
              maintenance timing, operator movement, heating behavior, alarm visibility,
              layout, or one ignored process variable.
            </p>
          </div>

          <div className="diagnostic-grid reveal delay-1">
            {diagnosticAreas.map((area) => (
              <div key={area}>{area}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container section-heading reveal">
          <p className="section-kicker">Where I can help</p>
          <h2>Consulting built around business outcomes.</h2>
          <p>
            Every engagement is designed to connect engineering decisions with operational cash,
            risk, throughput, capex discipline, and EBITDA protection.
          </p>
        </div>

        <div className="container service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brief-section section-pad" id="contact">
        <div className="container brief-card reveal">
          <div>
            <p className="section-kicker">Start with diagnosis</p>
            <h2>Before you approve another fix, describe the problem.</h2>
            <p>
              If the issue is costing output, cash, safety, delivery confidence, or management attention,
              it is worth diagnosing before another month of firefighting becomes normal.
            </p>
          </div>

          <div className="brief-actions">
            <a
              className="primary-btn"
              href={`mailto:danish@danishdevgan.com?subject=Factory Problem Brief&body=${mailBody}`}
            >
              Email the Problem Brief
            </a>
            <a
              className="secondary-btn"
              href="https://wa.me/917888839696?text=Hello%20Danish,%20I%20visited%20danishdevgan.com.%20I%20want%20to%20discuss%20a%20factory%20or%20operations%20problem.%0A%0ACompany:%0ARole:%0ACountry:%0AProblem:"
              target="_blank"
            >
              WhatsApp Business
            </a>
            <a className="text-link" href="https://www.linkedin.com/in/danishdevgan" target="_blank">
              Start a conversation on LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
