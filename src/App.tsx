import "./App.css";

// Public-site privacy toggle. Keep false until Infor confirms the exact
// internal scale figures (tenants, accounts, opportunities) may be shown
// publicly. When false, the GTM cards show generalized scale wording.
const SHOW_INTERNAL_SCALE = false;

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
  ["04", "Resource Capacity Agent", "Surfaces capacity constraints, skill gaps, and competing demand before they become a crisis.", "IN DEVELOPMENT"],
  ["05", "Financial & Benefits Agent", "Connects what was invested, what was expected, and what actually happened."],
  ["06", "Synthetic PM Agent", "Handles planning, milestones, coordination, and status so people can focus on judgment calls."],
  ["07", "Risk & Issue Agent", "Picks up on patterns and dependencies before they turn into real issues."],
  ["08", "Executive Reporting Agent", "Turns portfolio data into something an executive can use in five minutes, not fifty."],
];

const systems = [
  {
    label: "ENTERPRISE AI",
    title: "Enterprise AI & Agent Factory",
    description:
      "A team of AI engineers and AI architects delivering agents, skills, and AI products for go-to-market and internal operations, with 11 agents and skills in production.",
    tags: ["Agent Factory", "Agentic AI", "Governance", "Adoption"],
    outcome:
      "Across Agent Factory deliverables over two-plus years: roughly 3× throughput • an estimated 1,500+ hours reclaimed annually • 30% faster delivery cycle time",
    status: "LED AT INFOR",
    featured: true,
  },
  {
    label: "RAG / KNOWLEDGE AI",
    title: "Enterprise RAG / Knowledge System",
    description:
      "A hands-on Claude-based RAG system using Voyage AI embeddings, vector search, BM25 hybrid retrieval, summary indexing, reranking, and a measured evaluation suite. Built from Anthropic cookbook patterns.",
    tags: ["Claude", "RAG", "Hybrid Search", "LLM Evaluation"],
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
    label: "MULTI-AGENT / GOVERNANCE",
    title: "Multi-Agent Claims Workflow",
    description:
      "A LangGraph workflow where extractor and reviewer agents process insurance claims under a hard step and cost ceiling, a loop guard, and a fail-closed default that escalates to a human. A modeled scenario, not a client engagement.",
    tags: ["LangGraph", "Multi-Agent", "Guardrails", "Fail-Closed"],
    status: "HANDS-ON BUILD",
  },
  {
    label: "AGENT ENGINEERING",
    title: "Claude Skills & Agent Workflows",
    description:
      "Hands-on agent and skill development using Claude capabilities, tool use, structured workflows, context engineering, and human-agent handoffs, including a Claude Skill that scores AI use-case requests for intake triage.",
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

const gtmPortfolio = [
  {
    fn: "SALES",
    title: "Customer Sales Intelligence",
    description:
      "Opportunity close-likelihood, pipeline-activity intelligence, and account-propensity scoring embedded in Salesforce, so sellers and managers prioritize deals and accounts inside their normal workflow.",
    tags: ["Snowflake", "Salesforce", "Predictive ML", "MLOps"],
    scaleLabel: "SCALE",
    scale:
      "70%+ model accuracy on three years of history (2M+ opportunities) • 26K accounts prioritized",
    scaleGeneral:
      "70%+ model accuracy on three years of opportunity history • tens of thousands of accounts prioritized",
    status: "DEPLOYED",
  },
  {
    fn: "CUSTOMER SUCCESS",
    title: "Adoption & Retention Intelligence",
    description:
      "Adoption insights and predictive models for churn risk, expansion likelihood, and lookalike risk patterns, surfaced to Customer Success through Snowflake and AI-enabled workflows.",
    tags: ["Snowflake", "Predictive ML", "Churn & Expansion", "Customer Health"],
    scaleLabel: "SCALE",
    scale: "776 customer tenants (516 active) across four core ERP products",
    scaleGeneral: "Hundreds of customer tenants across four core ERP products",
    status: "DEPLOYED",
  },
  {
    fn: "MARKETING",
    title: "AI Nurture Campaigns",
    description:
      "An engagement engine that selects the audience, message, and timing from product usage, adoption, and behavior signals, replacing static segment campaigns across marketing, sales, and customer success.",
    tags: ["AWS Bedrock", "Engagement Signals", "Personalization"],
    scaleLabel: "ROLLOUT",
    scale: "Piloted with marketing and sales leaders and refined through structured feedback",
    scaleGeneral:
      "Piloted with marketing and sales leaders and refined through structured feedback",
    status: "DEPLOYED",
  },
];

const experience = [
  {
    years: "SEP 2021 — PRESENT",
    company: "INFOR",
    role: "Director, AI Transformation & Strategic Delivery",
    description:
      "Lead the Enterprise AI & Agent Factory: intake, prioritization, delivery, governance, and adoption of AI for go-to-market (Sales, Marketing, Customer Success) and internal operations. The framework grew out of the enterprise intake, prioritization, and portfolio governance model I built here, and I still prototype hands-on in Claude, Copilot, Snowflake, and Power Platform.",
    outcome:
      "11 agents and skills in production. Across Agent Factory deliverables: roughly 3× throughput, an estimated 1,500+ hours reclaimed annually, and 30% faster delivery cycle time.",
  },
  {
    years: "2021",
    company: "DISNEY",
    role: "Delivery Advisor Consultant",
    description:
      "Global delivery modernization and PMO transformation: advised leadership on portfolio intake, prioritization, governance, dependency management, execution transparency, and Agile transformation across complex initiatives.",
    outcome: "Helped a large, matrixed organization modernize delivery on a tight timeline.",
  },
  {
    years: "2014 — 2021",
    company: "ALVAREZ & MARSAL",
    role: "Governance & PMO Director",
    description:
      "Built enterprise governance and delivery capabilities (PMO) from the ground up: portfolio governance, prioritization, integrated technology programs, KPI and executive reporting, risk management, and value realization across operations, finance, IT, and shared services.",
    outcome:
      "Stood up governance and reporting that CIOs actually used, not just filed away, partnering with executive steering committees on roadmaps and operating models.",
  },
  {
    years: "2007 — 2014",
    company: "TRAVELERS",
    role: "Project Manager",
    description:
      "Enterprise technology and data initiatives across Technology, Operations, Compliance, and Finance, in a regulated environment.",
    outcome: "Cut my teeth on enterprise delivery across four very different functions.",
  },
  {
    years: "2001 — 2007",
    company: "CIGNA HEALTHCARE",
    role: "Application Development Senior Specialist",
    description:
      "Delivered enterprise healthcare technology solutions for operational modernization and business process improvement, translating operational needs into technology requirements.",
    outcome: "Early grounding in healthcare technology and regulated enterprise applications.",
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
            <a href="#gtm-ai">GTM AI</a>
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
                <span>AI Solution Delivery</span>
                <span>RAG</span>
                <span>AWS Bedrock</span>
                <span>Microsoft Foundry</span>
                <span>AI Governance</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-label">PROVEN IN PRODUCTION</div>
              <div className="hero-panel-source">
                Across Agent Factory deliverables, 2+ years, at Infor
              </div>

              <div className="hero-proof-stats">
                <div className="hero-proof-stat">
                  <strong>3×</strong>
                  <span>delivery throughput (roughly)</span>
                </div>
                <div className="hero-proof-stat">
                  <strong>1,500+</strong>
                  <span>hours reclaimed a year (estimated)</span>
                </div>
                <div className="hero-proof-stat">
                  <strong>30%</strong>
                  <span>faster delivery cycle time</span>
                </div>
              </div>

              <p className="hero-panel-note">
                Measured against pre-agent baselines. 11 agents and skills in
                production, delivered by AI engineers and AI architects.
              </p>

              <a href="#build" className="hero-panel-link">
                Plus hands-on AI builds, bugs included →
              </a>
            </div>
          </div>
        </section>

        {/* AI ENGINEERING SIGNAL */}
        <section className="ai-signal-strip">
          <div className="container">
            <div className="signal-label">AI TECHNOLOGY &amp; TOOLING</div>
            <div className="signal-items">
              <span>LLM</span>
              <span>Generative AI</span>
              <span>Agentic AI</span>
              <span>Multi-Agent Orchestration</span>
              <span>Claude</span>
              <span>Claude Skills</span>
              <span>Prompt Engineering</span>
              <span>RAG</span>
              <span>Embeddings</span>
              <span>Hybrid Search</span>
              <span>Reranking</span>
              <span>LLM Evaluation</span>
              <span>Tool Use / Function Calling</span>
              <span>Human-in-the-Loop</span>
              <span>Guardrails</span>
              <span>Fail-Closed Design</span>
              <span>LangGraph</span>
              <span>MCP</span>
              <span>Vector Database</span>
              <span>AWS Bedrock</span>
              <span>boto3</span>
              <span>Microsoft Foundry</span>
              <span>Snowflake</span>
              <span>Python</span>
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

              <p>
                That includes 15+ years of portfolio and transformation
                governance: building repeatable delivery frameworks, running
                enterprise-wide change, and acting as a trusted partner to
                CXOs and business leaders. I bring that to AI as a senior
                technology leader, not a project manager.
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
              them in a slide deck. My hands-on work spans RAG pipelines and evaluation, voice agents, multi-agent workflows with guardrails, Claude-based tooling, and cloud AI platforms.
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
                <h3>Three deep builds, plus a growing library of everyday agents.</h3>
                <p>
                  These are portfolio builds, not client deployments. They are
                  deliberately different: one is about retrieval and
                  evaluation, one is about an agent that can reason, hold
                  context, call tools, and take a real action, and one is
                  about keeping multiple agents inside hard limits. Alongside
                  them, I keep building smaller Claude Skills and Agents that
                  remove everyday friction from delivery work.
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
                    <span>LLM-Graded Accuracy</span>
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

                <article className="build-case-card">
                  <div className="build-case-number">03</div>
                  <div className="build-case-label">MULTI-AGENT / GOVERNANCE</div>
                  <h4>Agents that stay inside the lines.</h4>
                  <p>
                    I built a LangGraph claims workflow where an extractor
                    and a reviewer agent process each claim under a hard step
                    and cost ceiling enforced in code, a loop guard that
                    allows one retry, and a fail-closed default that
                    escalates to a human instead of silently approving. State
                    is checkpointed so any claim can be replayed. It runs on
                    a modeled insurance scenario, and the human approval step
                    is simulated today.
                  </p>
                  <div className="build-case-metrics">
                    <span>LangGraph</span>
                    <span>Step &amp; Cost Ceiling</span>
                    <span>Loop Guard</span>
                    <span>Fail-Closed</span>
                    <span>Checkpoint Replay</span>
                  </div>
                </article>

                <article className="build-case-card">
                  <div className="build-case-number">04</div>
                  <div className="build-case-label">CLAUDE SKILLS / AGENTS</div>
                  <h4>A growing library of day-to-day agents.</h4>
                  <p>
                    Beyond the systems above, I've built a set of Claude
                    Skills and Agents that remove real day-to-day friction:
                    turning meeting notes into follow-up action items,
                    updating the project plan from those follow-ups,
                    generating status reports automatically, and updating
                    the risk register without manual entry. On the delivery
                    side, I've built a BA Agent that turns requirements into
                    Agile user stories and BDD scenarios and creates them
                    directly in Jira, a TDD Agent, and an end-to-end QA
                    regression scripting agent. An AI intake-triage Skill
                    scores new AI use-case requests across readiness, risk,
                    and value and routes them to a backlog quadrant.
                  </p>
                  <div className="build-case-metrics">
                    <span>Meeting Follow-ups</span>
                    <span>Project Plan Updates</span>
                    <span>Status Reporting</span>
                    <span>Risk Register</span>
                    <span>BA / User Stories</span>
                    <span>TDD Agent</span>
                    <span>E2E QA Scripting</span>
                    <span>AI Intake Triage</span>
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
                  credentials I had to lock down properly, a timezone bug
                  that only showed up after I deployed to the cloud, and a
                  fail-open default in the claims workflow that I only caught
                  by deliberately testing for it.
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

                <p className="factory-team-note">
                  I lead a team of  AI engineers and  AI architects who
                  build inside this model, turning each stage into working
                  AI systems for the business.
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

            <div className="factory-status">
              <div>
                <span>IN PRODUCTION</span>
                <strong>11 agents and skills (1.x release)</strong>
              </div>
              <div>
                <span>IN PRODUCTION</span>
                <strong>AI service desk resolution agent (v1.2)</strong>
              </div>
              <div>
                <span>IN PILOT</span>
                <strong>AI sales opportunity coach</strong>
              </div>
              <div>
                <span>TEAM</span>
                <strong>AI engineers, AI architects</strong>
              </div>
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

        {/* GTM AI PORTFOLIO */}
        <section id="gtm-ai" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <div className="section-number">03</div>
              <div>
                <div className="section-kicker">GO-TO-MARKET AI</div>
                <h2>Predict. Recommend. Act.</h2>
              </div>
            </div>

            <p className="section-intro">
              I led the cross-functional teams (AI/ML engineers, Snowflake
              data engineers, and MLOps) that took these products from the
              business problem to deployment, partnering with RevOps, sales,
              marketing, and the CIO, then led the enablement and change
              management that gets people using them.
            </p>

            <div className="gtm-grid">
              {gtmPortfolio.map((item) => (
                <article className="gtm-card" key={item.title}>
                  <div className="gtm-label">{item.fn}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="gtm-scale">
                    <span>{item.scaleLabel}</span>
                    <strong>
                      {SHOW_INTERNAL_SCALE ? item.scale : item.scaleGeneral}
                    </strong>
                  </div>

                  <div className="gtm-status">{item.status}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AI ENABLED PPM */}
        <section id="ai-ppm" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <div className="section-number">04</div>
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
              {agentRoles.map(([number, title, description, status]) => (
                <div className="agent-role-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {status && <em className="agent-status">{status}</em>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <div className="section-number light">05</div>
              <div>
                <div className="section-kicker">ENTERPRISE EXPERIENCE</div>
                <h2>20+ years of learning how enterprises actually work.</h2>
              </div>
            </div>

            <p className="section-intro dark-copy">
              My AI work is grounded in years of enterprise transformation,
              technology delivery, PMO and PPM leadership, TMO, governance,
              and trusted partnership with CXOs and business leaders.
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
              <div className="section-number">06</div>
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
                href="https://www.linkedin.com/in/sandeep-bhatnagar-a4518517/"
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



