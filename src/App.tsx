import primaryLogo from './assets/replit-primary.svg?raw';
import symbolLogo from './assets/replit-symbol.svg?raw';

const nav = [
  { href: '#workflow', label: 'Workflow' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#how', label: 'How it works' },
];

const benefits = [
  { n: '01', label: 'Your codebase:', text: 'Connect existing GitHub or GitLab repositories and work where your team already builds, from small fixes to larger features.' },
  { n: '02', label: 'Isolated cloud environments:', text: 'Each task runs in its own environment, so agents can build, test, and preview without touching anyone\'s machine.' },
  { n: '03', label: 'Evidence with every change:', text: 'Pull and merge requests arrive with screenshots or video from native previews, so reviewers see the result before reading the diff.' },
  { n: '04', label: 'Engineers decide what ships:', text: 'Review, comment, and request changes. The agent iterates on feedback, and nothing merges without your approval.' },
];

const steps = [
  { label: 'Describe the request:', text: 'Anyone on the team writes what they need in plain language, scoped to a connected repository.' },
  { label: 'The agent builds and tests:', text: 'Replit prepares a reusable environment with the right runtimes, tools, and dependencies, then builds, runs tests, and checks a native preview.' },
  { label: 'Review the proposal:', text: 'A pull or merge request lands with screenshot or video evidence. Review feedback goes straight back to the agent for another pass.' },
  { label: 'Conventions carry forward:', text: 'Reviewed skills updates capture how your team works, so the next request starts with that context already in place.' },
];

function Logo({ svg, className, label }: { svg: string; className: string; label?: string }) {
  return (
    <span
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

function Illustration() {
  return (
    <figure className="flow" aria-labelledby="flow-caption">
      <div className="flow-board" aria-hidden="true">
        <div className="node node-request">
          <span className="node-tag">Request</span>
          <p className="node-quote">Add a CSV export to the invoices table and match the existing button styles.</p>
        </div>
        <div className="link" />
        <div className="node node-env">
          <span className="node-tag">Isolated environment</span>
          <ul className="checks">
            <li><i />Runtimes and dependencies ready</li>
            <li><i />Build passes</li>
            <li><i />Tests pass</li>
            <li><i />Native preview captured</li>
          </ul>
        </div>
        <div className="link" />
        <div className="node node-pr">
          <span className="node-tag">Pull request</span>
          <p className="pr-title">Add CSV export to invoices</p>
          <div className="pr-evidence">
            <div className="shot"><span /><span /><span /></div>
            <div className="shot shot-video"><b /></div>
          </div>
          <div className="pr-review">
            <span className="avatar">EN</span>
            <span className="pr-status">Awaiting engineer review</span>
          </div>
        </div>
      </div>
      <figcaption id="flow-caption">Illustrative workflow. Not a product screenshot.</figcaption>
    </figure>
  );
}

function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="preview-bar">Private preview demo. For educational use only.</div>
      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="brand" aria-label="Replit Cloud Agents, back to top">
            <Logo svg={primaryLogo} className="brand-logo" />
            <span className="brand-sub">Cloud Agents</span>
          </a>
          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <details className="nav-mobile">
            <summary aria-label="Open menu">Menu</summary>
            <nav aria-label="Mobile">
              {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero wrap">
          <p className="eyebrow">Replit Cloud Agents</p>
          <h1>Turn ideas into codebase improvements. <span>Engineers decide what ships.</span></h1>
          <p className="lede">
            Replit Cloud Agents turn natural-language requests into reviewed pull and merge requests on your existing GitHub or GitLab repositories, with evidence attached and your engineers in control.
          </p>
          <div className="ctas">
            <a className="btn btn-primary" href="#how">See how it works</a>
            <a className="btn btn-ghost" href="#benefits">Explore benefits</a>
          </div>
        </section>

        <section id="workflow" className="wrap section-flow" aria-label="Workflow illustration">
          <Illustration />
        </section>

        <section id="benefits" className="wrap section">
          <div className="section-head">
            <p className="eyebrow">Benefits</p>
            <h2>More ideas reach review, with the same standards for what merges.</h2>
          </div>
          <ul className="cards">
            {benefits.map((b) => (
              <li key={b.n} className="card">
                <span className="card-n">{b.n}</span>
                <p><strong>{b.label}</strong> {b.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="how" className="wrap section how">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>From request to reviewed change in four steps.</h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.label}>
                <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                <p><strong>{s.label}</strong> {s.text}</p>
              </li>
            ))}
          </ol>
          <a className="btn btn-ghost back" href="#top">Back to top</a>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <Logo svg={symbolLogo} className="footer-symbol" label="Replit" />
          <p>Replit Cloud Agents private preview demo. Illustrations are representative and contain no customer data.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
