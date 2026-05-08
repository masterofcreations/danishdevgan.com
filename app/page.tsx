const proofCards = [
  {
    metric: '7+',
    label: 'Years in plant operations',
    detail: 'Hands-on manufacturing leadership across engineering, maintenance, safety, projects, utilities, and production systems.',
  },
  {
    metric: '250+',
    label: 'Machines managed',
    detail: 'Production lines, utility systems, tool room equipment, presses, extruders, curing systems, and in-house machinery.',
  },
  {
    metric: '$500K+',
    label: 'Capex avoided',
    detail: 'Through in-house machine design, practical engineering, vendor alternatives, and better operational ownership.',
  },
  {
    metric: '2×',
    label: 'Throughput improvement',
    detail: 'Line-speed gains achieved by diagnosing real bottlenecks instead of defaulting to new equipment.',
  },
];

const lossPoints = [
  'Daily stoppages that have become normal',
  'Operators busy, but output still below capacity',
  'Maintenance teams trapped in firefighting',
  'Capex requests made before root-cause clarity',
  'Unsafe workarounds hidden inside routine operations',
  'Process variables nobody has challenged for years',
];

const services = [
  {
    title: 'Factory Profit Leak Diagnostic',
    text: 'A focused review of where operational losses are hiding across downtime, flow, maintenance, process discipline, utilities, safety, and management attention.',
  },
  {
    title: 'Throughput & Bottleneck Analysis',
    text: 'Identify why production output does not match real capacity — across machine speed, operator movement, line balance, heating behavior, and process timing.',
  },
  {
    title: 'Capex & Machine Decision Review',
    text: 'Before approving a major purchase, determine whether the problem needs new equipment, better controls, in-house engineering, or a process correction.',
  },
  {
    title: 'Maintenance System Improvement',
    text: 'Move from breakdown reaction to planned prevention through spare logic, alarm visibility, root-cause discipline, and practical shop-floor routines.',
  },
  {
    title: 'Plant Setup & Expansion Advisory',
    text: 'Support for new lines, layout, utilities, safety readiness, compliance preparation, vendor decisions, commissioning, and operational go-live planning.',
  },
  {
    title: 'AI-Assisted Manufacturing Systems',
    text: 'Practical AI use for reporting, SOP discipline, maintenance visibility, workflow tracking, knowledge capture, and decision support — not gimmicks.',
  },
];

const diagnosisSteps = [
  'Observe the plant as a money system',
  'Separate symptoms from root causes',
  'Map the operational leakage points',
  'Prioritize low-capex, high-impact corrections',
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Danish Devgan home">
          <span>Danish Devgan</span>
          <small>Industrial Systems Consultant</small>
        </a>
        <nav>
          <a href="#proof">Proof</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Manufacturing Engineering • Operations • Capex • EBITDA</p>
            <h1>Your Factory Is Already Telling You Where Profit Is Leaking.</h1>
            <p className="subtext">
              Downtime, slow lines, wrong capex, reactive maintenance, unsafe systems, and poor flow are not just technical problems. They are margin leaks hiding inside daily operations.
            </p>
            <div className="cta-row">
              <a className="primary-btn" href="#contact">Start a Factory Problem Brief</a>
              <a className="secondary-btn" href="https://www.linkedin.com/in/danishdevgan" target="_blank">Message on LinkedIn</a>
            </div>
          </div>

          <div className="hero-visual reveal delay-1" aria-label="Industrial systems visual">
            <div className="factory-screen">
              <div className="screen-top">
                <span>Operational Scan</span>
                <span>Live System View</span>
              </div>
              <div className="flow-map">
                <div className="node active">Input</div>
                <div className="line" />
                <div className="node warn">Bottleneck</div>
                <div className="line" />
                <div className="node">Output</div>
              </div>
              <div className="mini-metrics">
                <div><strong>Downtime</strong><span>Margin impact</span></div>
                <div><strong>Capex</strong><span>Decision risk</span></div>
                <div><strong>Flow</strong><span>Hidden loss</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band" id="proof">
        <div className="container proof-band-grid">
          {proofCards.map((card) => (
            <article key={card.label}>
              <strong>{card.metric}</strong>
              <span>{card.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad recognition-section">
        <div className="container two-column">
          <div>
            <p className="section-kicker">The owner’s problem</p>
            <h2>The plant can look busy and still be financially inefficient.</h2>
          </div>
          <div className="quiet-copy">
            <p>
              The expensive part is not always the visible breakdown. It is the repeated friction that becomes normal: unstable output, delayed dispatch, overtime, poor flow, safety exposure, and decisions made under pressure.
            </p>
            <p>
              That is where diagnosis matters. One clear operational review before capex can prevent months of wrong spending.
            </p>
          </div>
        </div>

        <div className="container loss-grid">
          {lossPoints.map((point) => (
            <div className="loss-card" key={point}>
              <span />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad dark-panel-section">
        <div className="container dark-panel">
          <div className="schematic" aria-hidden="true">
            <div className="schematic-grid" />
            <div className="pulse p1" />
            <div className="pulse p2" />
            <div className="pulse p3" />
          </div>
          <div className="panel-copy">
            <p className="section-kicker">How Danish reads a plant</p>
            <h2>The answer is rarely sitting in one department.</h2>
            <p>
              A throughput issue may look like production. The real cause may be utility stability, maintenance timing, layout, alarms, operator movement, machine condition, or one ignored process variable.
            </p>
            <div className="step-list">
              {diagnosisSteps.map((step, index) => (
                <div key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad proof-section">
        <div className="container section-heading">
          <p className="section-kicker">Proof without theatre</p>
          <h2>Grounded in real factory execution.</h2>
          <p>Not generic advisory. Not spreadsheet-only consulting. The proof comes from plant systems, machines, people, downtime, safety, utilities, and capex decisions handled together.</p>
        </div>
        <div className="container proof-grid detailed">
          {proofCards.map((card) => (
            <article className="proof-card" key={card.label}>
              <strong>{card.metric}</strong>
              <h3>{card.label}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad services-section" id="services">
        <div className="container section-heading">
          <p className="section-kicker">Where I can help</p>
          <h2>Consulting built around operational cash, risk, and throughput.</h2>
        </div>
        <div className="container service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad contact-section" id="contact">
        <div className="container contact-card">
          <div className="contact-copy">
            <p className="section-kicker">Factory Problem Brief</p>
            <h2>Describe the operational problem.</h2>
            <p>A sharp diagnosis before capex is often cheaper than one wrong purchase after approval.</p>
            <a className="text-link" href="https://wa.me/917888839696?text=Hello%20Danish,%20I%20visited%20danishdevgan.com.%20I%20want%20to%20discuss%20a%20factory%20or%20operations%20problem.%0A%0ACompany:%0ARole:%0ACountry:%0AProblem:" target="_blank">Prefer WhatsApp? Send a short note →</a>
          </div>

          <form className="brief-form" action="https://formsubmit.co/danish@danishdevgan.com" method="POST">
            <input type="hidden" name="_subject" value="Factory Problem Brief" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" required />
              <input type="text" name="company" placeholder="Company" required />
            </div>
            <div className="form-row">
              <input type="text" name="role" placeholder="Role" />
              <input type="text" name="country" placeholder="Country" />
            </div>
            <select name="problem_type" defaultValue="">
              <option value="" disabled>Primary problem area</option>
              <option>Downtime / breakdowns</option>
              <option>Throughput / bottleneck</option>
              <option>Capex / machine decision</option>
              <option>Maintenance system</option>
              <option>Plant setup / expansion</option>
              <option>Safety / compliance risk</option>
            </select>
            <textarea name="problem" placeholder="What is happening in the plant?" rows={5} required />
            <button type="submit" className="primary-btn">Submit Brief</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <span>Danish Devgan</span>
        <a href="mailto:danish@danishdevgan.com">danish@danishdevgan.com</a>
      </footer>
    </main>
  );
}
