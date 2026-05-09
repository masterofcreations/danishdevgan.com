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

const caseStudies = [
  {
    title: 'Throughput was not a capacity problem.',
    visible: 'Line speed was low and output could not match demand.',
    hidden: 'The real constraint sat between machine condition, heating behavior, process control, and maintenance dependency.',
    result: '2× throughput improvement on existing infrastructure.',
  },
  {
    title: 'The cheapest machine is sometimes the one you do not buy.',
    visible: 'A production requirement looked like a vendor purchase decision.',
    hidden: 'In-house engineering could deliver the function with better maintainability, lower cost, and stronger ownership.',
    result: '$500K+ capex avoided through practical machine engineering.',
  },
  {
    title: 'Quality rejection was blamed on the wrong cause.',
    visible: 'Failures were assumed to be operator or supplier related.',
    hidden: 'The root cause was found through observation, shop-floor trials, and correction of the actual usage condition.',
    result: '76% rejection reduction through root-cause correction.',
  },
];

const services = [
  {
    title: 'Factory Profit Leak Diagnostic',
    bestFor: 'Owners who know profit is under pressure but cannot see one single cause.',
    text: 'A focused review of downtime, flow, maintenance, safety, utilities, process discipline, and management attention to identify where money is leaking operationally.',
  },
  {
    title: 'Throughput Recovery Review',
    bestFor: 'Plants where machines are running but output still does not match capacity.',
    text: 'Find bottlenecks across line speed, operator movement, changeover logic, heating behavior, maintenance dependency, and process timing.',
  },
  {
    title: 'Capex Decision Second Opinion',
    bestFor: 'Leaders about to approve machines, systems, expansion, or vendor proposals.',
    text: 'Determine whether the problem needs new equipment, better controls, in-house engineering, layout correction, or a process fix before capital is locked.',
  },
  {
    title: 'Maintenance Firefighting Reset',
    bestFor: 'Factories where breakdowns are frequent, urgent, and accepted as normal.',
    text: 'Move from reaction to prevention with spare logic, alarm visibility, root-cause discipline, maintenance routines, and shop-floor escalation clarity.',
  },
  {
    title: 'Plant Expansion Risk Review',
    bestFor: 'Teams planning new lines, facility expansion, utilities, layout, or commissioning.',
    text: 'Review operational risks before go-live: flow, access, utilities, safety, maintenance, compliance readiness, vendor scope, and commissioning logic.',
  },
  {
    title: 'AI-Assisted Operations System',
    bestFor: 'Manufacturers who want practical AI without gimmicks or disruption theatre.',
    text: 'Use AI for reporting, SOP discipline, maintenance visibility, workflow tracking, knowledge capture, and decision support around real plant operations.',
  },
];

const diagnosisSteps = [
  'Observe the plant as a money system',
  'Separate symptoms from root causes',
  'Map the operational leakage points',
  'Prioritize low-capex, high-impact corrections',
];

const serviceTags = ['diagnose', 'recover', 'review', 'reset', 'de-risk', 'systemize'];

function LossEquation() {
  return (
    <div className="loss-equation" aria-label="Operational loss equation">
      <div><strong>Downtime</strong><span>lost output</span></div>
      <b>+</b>
      <div><strong>Slow flow</strong><span>delayed cash</span></div>
      <b>+</b>
      <div><strong>Wrong capex</strong><span>locked capital</span></div>
      <b>=</b>
      <div className="impact"><strong>EBITDA leak</strong><span>hidden in operations</span></div>
    </div>
  );
}

function ServiceBadge({ label }: { label: string }) {
  return <span className="service-badge">{label}</span>;
}

export default function HomePage() {
  return (
    <main className="page">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Danish Devgan home">
          <span>Danish Devgan</span>
          <small>Industrial systems advisor for factory owners and manufacturing leaders.</small>
        </a>
        <nav>
          <a href="#proof">Proof</a>
          <a href="#cases">Cases</a>
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

          <div className="hero-visual reveal delay-1" aria-label="Factory profit leak diagnostic panel">
            <div className="diagnostic-panel">
              <div className="panel-header">
                <span>Profit Leak Diagnostic</span>
                <strong>Plant scan</strong>
              </div>
              <div className="diagnostic-row warning">
                <span>Signal</span>
                <strong>Frequent stoppages</strong>
                <em>Output loss</em>
              </div>
              <div className="diagnostic-row">
                <span>Signal</span>
                <strong>Slow flow / waiting</strong>
                <em>Cash delay</em>
              </div>
              <div className="diagnostic-row">
                <span>Signal</span>
                <strong>Capex pressure</strong>
                <em>Capital risk</em>
              </div>
              <div className="diagnostic-outcome">
                <span>What I look for</span>
                <strong>Root cause before spending</strong>
                <p>Machine condition, utility stability, layout friction, maintenance dependency, process gaps, and safety exposure.</p>
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

      <section className="section-pad" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.78fr) minmax(0, 1.22fr)', gap: 56, alignItems: 'center' }}>
          <div style={{ position: 'relative', minHeight: 520, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 32, background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(circle at 50% 74%, rgba(255,179,71,0.14), transparent 38%)', backgroundSize: '38px 38px, 38px 38px, auto' }} />
            <img src="/images/danish-devgan-portrait.png" alt="Danish Devgan" style={{ position: 'relative', zIndex: 1, width: '88%', maxWidth: 390, height: 'auto', display: 'block', filter: 'drop-shadow(0 26px 50px rgba(0,0,0,0.45))' }} />
          </div>
          <div>
            <p className="section-kicker">Who is Danish Devgan?</p>
            <h2>A plant operator’s eye, applied to business outcomes.</h2>
            <p style={{ fontSize: 20, lineHeight: 1.85, color: '#b8c0cc', marginBottom: 24 }}>
              Manufacturing engineering and industrial systems advisor with hands-on experience across plant operations, maintenance, utilities, safety, projects, and capex decisions.
            </p>
            <p style={{ fontSize: 20, lineHeight: 1.85, color: '#b8c0cc', marginBottom: 34 }}>
              I help factory owners see where operational friction becomes lost output, delayed cash, unsafe workarounds, or unnecessary spending.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 14 }}>
              {['250+ machines managed', '$500K+ capex avoided', '2× throughput improvement', 'Plant-level engineering, maintenance, safety, and operations exposure'].map((item) => (
                <div key={item} style={{ border: '1px solid rgba(255,255,255,0.09)', borderRadius: 18, padding: 18, color: '#f5f7fa', background: 'rgba(255,255,255,0.025)', lineHeight: 1.45 }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad authority-section">
        <div className="container two-column with-visual">
          <div>
            <p className="section-kicker">Who is reading the plant?</p>
            <h2>Not a slide-deck consultant. A factory operator who has owned consequences.</h2>
          </div>
          <div className="quiet-copy visual-copy-card">
            <LossEquation />
            <p>
              I have worked inside plants where every decision touched output, machine downtime, safety exposure, dispatch pressure, people on the floor, and capital already committed.
            </p>
            <p>
              That experience changes how problems are diagnosed. The goal is not to sound clever. The goal is to find where the plant is quietly converting engineering friction into financial loss.
            </p>
          </div>
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

        <div className="container loss-grid clean-loss-grid">
          {lossPoints.map((point, index) => (
            <div className="loss-card" key={point}>
              <span className="loss-number">0{index + 1}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad dark-panel-section">
        <div className="container dark-panel">
          <div style={{ position: 'relative', minHeight: 430, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, background: 'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '28px 22px 0' }} aria-label="Danish reviewing industrial systems">
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(circle at 64% 30%, rgba(255,179,71,0.12), transparent 32%)', backgroundSize: '36px 36px, 36px 36px, auto' }} />
            <img src="/images/danish-systems-review.png" alt="Danish Devgan reviewing an industrial system" style={{ position: 'relative', zIndex: 1, width: '112%', maxWidth: 620, height: 'auto', display: 'block', filter: 'drop-shadow(0 28px 55px rgba(0,0,0,0.48))', transform: 'translateY(6px)' }} />
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

      <section className="section-pad case-section" id="cases">
        <div className="container section-heading">
          <p className="section-kicker">Operational investigations</p>
          <h2>Real improvement starts when the assumed problem is challenged.</h2>
          <p>These are anonymized examples of the thinking pattern: visible symptom, hidden cause, practical correction, measurable business result.</p>
        </div>
        <div className="container case-grid">
          {caseStudies.map((story) => (
            <article className="case-card" key={story.title}>
              <h3>{story.title}</h3>
              <dl>
                <div><dt>Visible problem</dt><dd>{story.visible}</dd></div>
                <div><dt>Hidden loss</dt><dd>{story.hidden}</dd></div>
                <div><dt>Business result</dt><dd>{story.result}</dd></div>
              </dl>
            </article>
          ))}
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
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <ServiceBadge label={serviceTags[index]} />
              <span>{service.bestFor}</span>
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
              <input type="email" name="email" placeholder="Work email" required />
            </div>
            <div className="form-row">
              <input type="text" name="company" placeholder="Company" required />
              <input type="text" name="role" placeholder="Role" />
            </div>
            <div className="form-row">
              <input type="text" name="country" placeholder="Country" />
              <select name="problem_type" defaultValue="">
                <option value="" disabled>Primary problem area</option>
                <option>Downtime / breakdowns</option>
                <option>Throughput / bottleneck</option>
                <option>Capex / machine decision</option>
                <option>Maintenance system</option>
                <option>Plant setup / expansion</option>
                <option>Safety / compliance risk</option>
              </select>
            </div>
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
