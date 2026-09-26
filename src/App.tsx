import "./App.css";

const factoryStages = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the business",
    description:
      "Sit with business leaders to understand the actual workflow, friction, decisions, and data that matter.",
  },
  {
    number: "02",
    title: "Frame",
    subtitle: "Translate pain into opportunity",
    description:
      "Turn a business problem into a real AI opportunity: the user, the workflow, the value, and the outcome we're after.",
  },
  {
    number: "03",
    title: "Prioritize",
    subtitle: "Choose where AI should act",
    description:
      "Weigh value against feasibility, risk, dependencies, and capacity before committing to a build.",
  },
  {
    number: "04",
    title: "Design & Build",
    subtitle: "Create the AI product",
    description:
      "Shape the product and architecture, prototype the workflow, and get FDE and engineering building real capability.",
  },
  {
    number: "05",
    title: "Govern, Deploy & Adopt",
    subtitle: "Make it enterprise-ready",
    description:
      "Add governance, security, evaluation, human oversight, deployment, and the change management that gets people using it.",
  },
  {
    number: "06",
    title: "Measure & Scale",
    subtitle: "Turn capability into value",
    description:
      "Track adoption, performance, and outcomes, then scale what's actually working.",
  },
];

const agentRoles = [
  ["01", "Portfolio Roadmap Agent", "Reads strategy, portfolio signals, milestones, and investment priorities as they shift."],
  ["02", "Demand Intake Agent", "Turns incoming requests into something decision-ready instead of another line in a backlog."],
  ["03", "Prioritization Agent", "Weighs value, feasibility, risk, dependencies, and capacity."],
  ["04", "Resource Capacity Agent", "Surfaces capacity constraints, skill gaps, and competing demand before they become a crisis."],
  ["05", "Financial & Benefits Agent", "Connects what was invested, what was expected, and what actually happened."],
  ["06", "Synthetic PM Agent", "Handles planning, milestones, coordination, and status so people can focus on judgment calls."],
  ["07", "Risk & Issue Agent", "Picks up on patterns and dependencies before they turn into real issues."],
  ["08", "Executive Reporting Agent", "Turns portfolio data into something an executive can use in five minutes, not fifty."],
];

const systems = [
  {
    label: "ENTERPRISE AI",
    title: "Enterprise AI Assistant",
    description:
      "AI-enabled enterprise assistance built around real business workflows, knowledge, and delivery needs.",
    tags: ["AI Assistant", "Enterprise AI", "Agents"],
    outcome: "3× throughput • 1,500+ hours reclaimed • 30% faster delivery",
    status: "LED AT INFOR",
    featured: true,
  },
  {
    label: "RAG / KNOWLEDGE AI",
    title: "Enterprise RAG / Knowledge System",
    description:
      "A hands-on Claude-based RAG system using Voyage AI embeddings, vector search, BM25 hybrid retrieval, summary indexing, reranking, and measured evaluation.",
    tags: ["Claude", "RAG", "Retrieval", "Evaluation"],
    status: "HANDS-ON BUILD",
  },
  {
    label: "VOICE / AGENTIC AI",
    title: "Voice AI Receptionist",
    description:
      "A deployed voice agent that handles natural phone conversations, reasons with Claude, holds session context, and performs real calendar actions through tool use.",
    tags: ["Twilio", "Claude", "Tool Use", "Google Calendar"],
    status: "DEPLOYED",
  },
  {
    label: "AGENT ENGINEERING",
    title: "Claude Skills & Agent Workflows",
    description:
      "Hands-on agent and skill development using Claude capabilities, tool use, structured workflows, context engineering, and human-agent handoffs.",
    tags: ["Claude Skills", "Claude Agents", "Tool Use", "MCP"],
    status: "HANDS-ON CAPABILITY",
  },
  {
    label: "CLOUD AI",
    title: "Cloud Agent Deployment",
    description:
      "Hands-on deployment of AI agents across AWS Bedrock with boto3 and Microsoft Foundry, connecting platform capability to enterprise use cases.",
    tags: ["AWS Bedrock", "boto3", "Microsoft Foundry", "Agents"],
    status: "HANDS-ON PLATFORM",
  },
];

const experience = [
  {
    years: "2025 — PRESENT",
    company: "INFOR",
    role: "Enterprise AI Factory / Product Ownership",
    description:
      "AI product strategy, vision, roadmap, backlog, Agentic AI, Copilot, Claude, enterprise AI delivery, governance, and adoption.",
    outcome:
      "Led the Enterprise AI Assistant program: 3× throughput, 1,500+ hours reclaimed a year, 30% faster delivery.",
  },
  {
    years: "2021 — 2025",
    company: "INFOR",
    role: "Agile Portfolio & Governance Transformation",
    description:
      "Enterprise intake, prioritization, investment evaluation, portfolio governance, Agile transformation, executive insights, and value realization.",
    outcome:
      "Built the intake and prioritization model the Agent Factory framework grew out of.",
  },
  {
    years: "2021",
    company: "DISNEY",
    role: "Strategic Agile Advisor / PMO Transformation",
    description:
      "Global delivery modernization, process improvement, portfolio intake, prioritization, governance, and Agile transformation.",
    outcome: "Helped a large, matrixed organization modernize delivery on a tight timeline.",
  },
  {
    years: "2014 — 2021",
    company: "ALVAREZ & MARSAL",
    role: "Governance & PMO Director",
    description:
      "Built enterprise governance and delivery capabilities, integrated technology programs, executive reporting, risk management, and operationalization.",
    outcome: "Stood up governance and reporting that CIOs actually used, not just filed away.",
  },
  {
    years: "2007 — 2014",
    company: "TRAVELERS",
    role: "Enterprise Technology / Program Delivery",
    description:
      "Enterprise technology and data initiatives across Technology, Operations, Compliance, and Finance.",
    outcome: "Cut my teeth on enterprise delivery across four very different functions.",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-container">
          <a href="#top" className="brand">
            Sandeep Bhatnagar
          </a>

          <nav className="nav">
            <a href="#build">What I Build</a>
            <a href="#agent-factory">Agent Factory</a>
            <a href="#ai-ppm">AI-Enabled PPM</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="nav-cta">
              Let's Connect
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                AI TRANSFORMATION • AGENTIC AI • ENTERPRISE EXECUTION
              </div>

              <h1>AI Transformation &amp; Agent Factory Leader</h1>

              <p className="hero-statement">
                From business problem to production AI.
              </p>

              <p className="hero-description">
                I connect enterprise strategy, product thinking, and agentic
                AI to turn real business problems into working AI systems,
                then carry them from a pilot into something people actually
                rely on.
              </p>

              <p className="hero-team-statement">
                I give engineering teams a clear problem, room to build, and
                a straight path to production.
              </p>

              <div className="hero-actions">
                <a href="#build" className="button button-primary">
                  See What I Build
                </a>

                <a href="#agent-factory" className="button button-secondary">
                  The Agent Factory
                </a>
              </div>

              <div className="hero-tags">
                <span>AI Strategy</span>
                <span>Agentic AI</span>
                <span>AI Product Leadership</span>
                <span>AI Engineering</span>
                <span>RAG</span>
                <span>AWS Bedrock</span>
                <span>Microsoft Foundry</span>
                <span>AI Governance</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-label">PROVEN IN PRODUCTION</div>
              <div className="hero-panel-source">
                Enterprise AI Assistant program, led at Infor
              </div>

              <div className="hero-proof-stats">
                <div className="hero-proof-stat">
                  <strong>3×</strong>
                  <span>delivery throughput</span>
                </div>
                <div className="hero-proof-stat">
                  <strong>1,500+</strong>
                  <span>hours reclaimed a year</span>
                </div>
                <div className="hero-proof-stat">
                  <strong>30%</strong>
                  <span>faster delivery</span>
                </div>
              </div>

              <a href="#build" className="hero-panel-link">
                Plus two AI systems I built myself, bugs included →
              </a>
            </div>
          </div>
        </section>

        {/* AI ENGINEERING SIGNAL */}
        <section className="ai-signal-strip">
          <div className="container">
            <div className="signal-label">AI ENGINEERING &amp; TECHNOLOGY</div>
            <div className="signal-items">
              <span>Generative AI</span>
              <span>Agentic AI</span>
              <span>Claude</span>
              <span>Claude Skills</span>
              <span>Claude Agents</span>
              <span>Python</span>
              <span>RAG</span>
              <span>Embeddings</span>
              <span>MCP</span>
              <span>Vector Database</span>
              <span>AWS Bedrock</span>
              <span>boto3</span>
              <span>Microsoft Foundry</span>
              <span>Tool Use</span>
              <span>Responsible AI</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section section-light">
          <div className="container two-column">
            <div>
              <div className="section-number">00</div>
              <div className="section-kicker">WHY ME</div>
              <h2>
                I understand the business problem, and I know how to get the
                solution built.
              </h2>

              <div className="avatar" aria-hidden="true">
                SB
              </div>
              {/*
                Optional: replace the div above with a real photo whenever
                you have one, e.g.
                <img src="/headshot.jpg" alt="Sandeep Bhatnagar" className="avatar-photo" />
                Nothing else needs to change if you skip this.
              */}
            </div>

            <div className="section-copy">
              <p>
                I bring together three things that rarely sit inside the same
                leader: enterprise transformation, technology and product
                delivery, and applied AI.
              </p>

              <p>
                For more than two decades I've worked inside large,
                complicated organizations turning strategy into execution:
                building PMOs, shaping portfolios, leading technology
                programs, and sitting with executives through hard
                transformation calls. Today I point that same experience at
                AI. I sit with a business leader, understand the real
                problem, shape the AI opportunity into an actual product,
                work alongside engineers to build it, then handle the
                governance and adoption work that decides whether it
                survives contact with the enterprise.
              </p>

              <div className="credibility-line">
                <span>Enterprise transformation.</span>
                <span>AI product leadership.</span>
                <span>Hands-on building.</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I BUILD */}
        <section id="build" className="section section-dark systems-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-number light">01</div>
              <div>
                <div className="section-kicker">WHAT I BUILD</div>
                <h2>I don't just point at AI. I build it.</h2>
              </div>
            </div>

            <p className="section-intro dark-copy">
              AI transformation leaders need enough technical depth to
              understand how these systems actually work, not just describe
              them in a slide deck. My hands-on work spans RAG pipelines,
              voice agents, Claude-based tooling, and cloud AI platforms.
            </p>

            <div className="systems-grid-new">
              {systems.map((system) => (
                <article
                  className={`system-card-new ${
                    system.featured ? "featured-system" : ""
                  }`}
                  key={system.title}
                >
                  <div className="system-label">{system.label}</div>

                  <h3>{system.title}</h3>

                  <p>{system.description}</p>

                  <div className="tags">
                    {system.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {system.outcome && (
                    <div className="system-outcome">
                      <span>PROVEN OUTCOME</span>
                      <strong>{system.outcome}</strong>
                    </div>
                  )}

                  <div className="system-link">{system.status}</div>
                </article>
              ))}
            </div>

            <div className="build-positioning">
              <div>
                <span>HOW I OPERATE</span>
                <strong>I lead the factory, and I can still get my hands dirty inside it.</strong>
              </div>
            </div>

            <div className="build-proof">
              <div className="build-proof-header">
                <span>HANDS-ON EVIDENCE</span>
                <h3>Two builds. Two different kinds of AI capability.</h3>
                <p>
                  These two are deliberately different: one is about
                  retrieval and evaluation, the other is about an agent
                  that can reason, hold context, call tools, and take a
                  real action.
                </p>
              </div>

              <div className="build-case-grid">
                <article className="build-case-card">
                  <div className="build-case-number">01</div>
                  <div className="build-case-label">RAG / KNOWLEDGE AI</div>
                  <h4>Grounded knowledge, measured retrieval.</h4>
                  <p>
                    I built and ran a RAG pipeline end to end: document
                    chunking, embeddings, vector storage, retrieval,
                    reranking, and generation through Claude. I tested vector
                    search, BM25 hybrid search, summary-indexed embeddings,
                    and Claude-based reranking against each other to see what
                    actually moved the numbers.
                  </p>
                  <div className="build-case-metrics">
                    <span>Precision</span>
                    <span>Recall</span>
                    <span>F1</span>
                    <span>MRR</span>
                    <span>Accuracy</span>
                  </div>
                </article>

                <article className="build-case-card">
                  <div className="build-case-number">02</div>
                  <div className="build-case-label">VOICE / AGENTIC AI</div>
                  <h4>Conversation that can take action.</h4>
                  <p>
                    I built and deployed a voice AI receptionist using
                    Twilio, Claude, Node.js/Fastify, and WebSockets, wired
                    into Google Calendar. It handles natural, multi-turn
                    conversation and uses tool calls to check availability,
                    book appointments, and reschedule them.
                  </p>
                  <div className="build-case-metrics">
                    <span>Voice</span>
                    <span>Tool Use</span>
                    <span>State</span>
                    <span>Calendar</span>
                    <span>Cloud Deploy</span>
                  </div>
                </article>
              </div>

              <div className="engineering-reality">
                <div>
                  <span>ENGINEERING REALITY</span>
                  <strong>Real systems surface real problems.</strong>
                </div>
                <p>
                  Getting these running exposed the usual mess: SDK and
                  model deprecations, rate limits, environment configuration
                  headaches, a WebSocket URL I had to rebuild twice,
                  conversation state that quietly dropped context,
                  credentials I had to lock down properly, and a timezone
                  bug that only showed up after I deployed to the cloud.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AGENT FACTORY */}
        <section id="agent-factory" className="section factory-section">
          <div className="container">
            <div className="factory-header">
              <div>
                <div className="section-number">02</div>
                <div className="section-kicker">INTELLECTUAL CENTERPIECE</div>
                <h2>The AI Agent Factory</h2>
                <p className="factory-subtitle">
                  A repeatable way to move a business problem to production
                  AI.
                </p>
              </div>

              <div className="factory-statement">
                <span>THE OBJECTIVE</span>
                <strong>
                  Turn AI ideas into measurable enterprise value, on purpose,
                  not by accident.
                </strong>
              </div>
            </div>

            <div className="factory-flow">
              {factoryStages.map((stage, index) => (
                <div className="factory-stage" key={stage.number}>
                  <div className="stage-top">
                    <span>{stage.number}</span>
                    {index < factoryStages.length - 1 && (
                      <div className="stage-line" />
                    )}
                  </div>

                  <h3>{stage.title}</h3>
                  <strong>{stage.subtitle}</strong>
                  <p>{stage.description}</p>
                </div>
              ))}
            </div>

            <div className="factory-operating-model">
              <div className="operating-column business-column">
                <div className="operating-label">BUSINESS LEADERSHIP</div>

                <div className="operating-items">
                  <span>Strategy &amp; Direction</span>
                  <span>Business Priorities</span>
                  <span>Investment Decisions</span>
                  <span>Tradeoffs &amp; Escalation</span>
                  <span>Change &amp; Transform</span>
                  <span>Accountability &amp; Value</span>
                </div>
              </div>

              <div className="operating-middle">
                <div className="operating-arrow">→</div>
                <strong>
                  AI PRODUCT
                  <br />
                  LEADERSHIP
                </strong>
                <div className="operating-arrow">→</div>
              </div>

              <div className="operating-column">
                <div className="operating-label">FDE / AI ENGINEERING</div>

                <div className="operating-items">
                  <span>Solution Architecture</span>
                  <span>Agent &amp; Workflow Design</span>
                  <span>Data &amp; Knowledge</span>
                  <span>Tools &amp; Integrations</span>
                  <span>Evaluation &amp; Testing</span>
                  <span>Deployment &amp; Observability</span>
                </div>
              </div>
            </div>

            <div className="factory-principle">
              <span>THE PRINCIPLE</span>
              <strong>
                Humans lead decisions.
                <br />
                Agents accelerate execution.
              </strong>
            </div>
          </div>
        </section>

        {/* AI ENABLED PPM */}
        <section id="ai-ppm" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <div className="section-number">03</div>
              <div>
                <div className="section-kicker">FLAGSHIP APPLICATION</div>
                <h2>AI-Enabled PPM</h2>
              </div>
            </div>

            <p className="section-intro">
              One of the clearest places to apply the Agent Factory model is
              Portfolio and Program Management itself. Instead of another
              reporting tool, you get a digital workforce that senses
              portfolio conditions, prepares decisions, coordinates
              execution, and learns from what happens.
            </p>

            <div className="agent-grid">
              {agentRoles.map(([number, title, description]) => (
                <div className="agent-role-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <div className="section-number light">04</div>
              <div>
                <div className="section-kicker">ENTERPRISE EXPERIENCE</div>
                <h2>26+ years of learning how enterprises actually work.</h2>
              </div>
            </div>

            <p className="section-intro dark-copy">
              My AI work is grounded in years of enterprise transformation,
              technology delivery, portfolio management, governance, and
              executive leadership.
            </p>

            <div className="experience-timeline">
              {experience.map((item) => (
                <div className="experience-row" key={`${item.company}-${item.years}`}>
                  <div className="experience-years">{item.years}</div>

                  <div className="experience-company">
                    <h3>{item.company}</h3>
                    <strong>{item.role}</strong>
                  </div>

                  <div className="experience-copy">
                    <p>{item.description}</p>
                    <p className="experience-outcome">{item.outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="experience-bottom">
              <div>
                <span>ENTERPRISE TRANSFORMATION</span>
                <strong>Strategy → Execution</strong>
              </div>

              <div>
                <span>AI TRANSFORMATION</span>
                <strong>Problem → Product → Value</strong>
              </div>

              <div>
                <span>LEADERSHIP</span>
                <strong>Business + Product + Technology</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="container contact-inner">
            <div>
              <div className="section-number">05</div>
              <div className="section-kicker">LET'S CONNECT</div>

              <h2>
                Let's talk about turning enterprise problems into AI
                capability.
              </h2>
            </div>

            <div className="contact-details">
              <p>
                Whether you're building an AI strategy, standing up an Agent
                Factory, modernizing enterprise execution, or trying to get
                AI out of the pilot stage and into production, I'd like to
                hear about it.
              </p>

              <a
                href="mailto:sandeepbhatnagar.it@gmail.com"
                className="email-link"
              >
                sandeepbhatnagar.it@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/sandeep-bhatnagar"
                target="_blank"
                rel="noreferrer"
                className="linkedin-link"
              >
                LinkedIn →
              </a>

              <p className="ask-ai-note">
                I'm also building an AI agent trained on my own experience
                and frameworks. Not live yet, but it's coming.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Sandeep Bhatnagar</span>
          <span>AI Transformation • Agentic AI • Enterprise Execution</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
