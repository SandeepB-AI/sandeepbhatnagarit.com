import "./App.css";

const factoryStages = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the business",
    description:
      "Work directly with business leaders to understand the workflow, friction, decisions, data, and outcomes that matter.",
  },
  {
    number: "02",
    title: "Frame",
    subtitle: "Translate pain into opportunity",
    description:
      "Turn business problems into practical AI opportunities, defining the user, workflow, value proposition, and desired outcome.",
  },
  {
    number: "03",
    title: "Prioritize",
    subtitle: "Choose where AI should act",
    description:
      "Evaluate value, feasibility, risk, dependencies, capacity, and readiness before investing in a solution.",
  },
  {
    number: "04",
    title: "Design & Build",
    subtitle: "Create the AI product",
    description:
      "Shape the product and architecture, prototype workflows, and mobilize FDE and engineering teams to build working capabilities.",
  },
  {
    number: "05",
    title: "Govern, Deploy & Adopt",
    subtitle: "Make it enterprise-ready",
    description:
      "Integrate governance, security, evaluation, human oversight, deployment, enablement, and organizational change.",
  },
  {
    number: "06",
    title: "Measure & Scale",
    subtitle: "Turn capability into value",
    description:
      "Track adoption, performance, business outcomes, and value realization—and scale what works.",
  },
];

const agentRoles = [
  ["01", "Portfolio Roadmap Agent", "Continuously interprets strategy, portfolio signals, milestones, and investment priorities."],
  ["02", "Demand Intake Agent", "Captures and structures incoming demand so opportunities become decision-ready."],
  ["03", "Prioritization Agent", "Evaluates value, feasibility, risk, dependencies, and capacity."],
  ["04", "Resource Capacity Agent", "Surfaces capacity constraints, skill gaps, competing demand, and allocation options."],
  ["05", "Financial & Benefits Agent", "Connects investment, expected benefits, actual outcomes, and value realization."],
  ["06", "Synthetic PM Agent", "Supports planning, actions, milestones, coordination, status, and execution workflows."],
  ["07", "Risk & Issue Agent", "Continuously identifies signals, patterns, dependencies, risks, issues, and escalation needs."],
  ["08", "Executive Reporting Agent", "Turns portfolio data into concise, decision-ready executive intelligence."],
];

const systems = [
  {
    label: "ENTERPRISE AI",
    title: "Enterprise AI Assistant",
    description:
      "AI-enabled enterprise assistance designed around real business workflows, knowledge, and delivery needs.",
    tags: ["AI Assistant", "Enterprise AI", "Agents"],
    outcome: "3× throughput • 1,500+ hours reclaimed • 30% faster delivery",
    status: "ENTERPRISE EXPERIENCE",
    featured: true,
  },
  {
    label: "RAG / KNOWLEDGE AI",
    title: "Enterprise RAG / Knowledge System",
    description:
      "Hands-on Claude-based RAG system using Voyage AI embeddings, vector search, BM25 hybrid retrieval, summary indexing, reranking, and measured evaluation.",
    tags: ["Claude", "RAG", "Retrieval", "Evaluation"],
    status: "HANDS-ON BUILD",
  },
  {
    label: "VOICE / AGENTIC AI",
    title: "Voice AI Receptionist",
    description:
      "Deployed voice agent that handles natural phone conversations, reasons with Claude, maintains session context, and performs real calendar actions through tool use.",
    tags: ["Twilio", "Claude", "Tool Use", "Google Calendar"],
    status: "DEPLOYED HANDS-ON BUILD",
  },
  {
    label: "AI PRODUCT",
    title: "AI-Enabled PPM",
    description:
      "A reference operating model applying Agentic AI to portfolio, program, project, governance, and value-management workflows.",
    tags: ["PPM", "Agentic AI", "Operating Model"],
    status: "REFERENCE OPERATING MODEL",
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
      "Hands-on exploration and deployment of AI agents across AWS Bedrock with boto3 and Microsoft Foundry, connecting platform capabilities to enterprise use cases.",
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
  },
  {
    years: "2021 — 2025",
    company: "INFOR",
    role: "Agile Portfolio & Governance Transformation",
    description:
      "Enterprise intake, prioritization, investment evaluation, portfolio governance, Agile transformation, executive insights, and value realization.",
  },
  {
    years: "2021",
    company: "DISNEY",
    role: "Strategic Agile Advisor / PMO Transformation",
    description:
      "Global delivery modernization, process improvement, portfolio intake, prioritization, governance, and Agile transformation.",
  },
  {
    years: "2014 — 2021",
    company: "ALVAREZ & MARSAL",
    role: "Governance & PMO Director",
    description:
      "Built enterprise governance and delivery capabilities, integrated technology programs, executive reporting, risk management, and operationalization.",
  },
  {
    years: "2007 — 2014",
    company: "TRAVELERS",
    role: "Enterprise Technology / Program Delivery",
    description:
      "Enterprise technology and data initiatives across Technology, Operations, Compliance, and Finance.",
  },
];

const insights = [
  {
    number: "01",
    title: "The AI Agent Factory",
    description:
      "Why enterprises need an operating model—not another collection of disconnected AI pilots—to move from ideas to production.",
  },
  {
    number: "02",
    title: "Humans + Agents",
    description:
      "The future of enterprise execution is not people versus AI. It is experienced leaders augmented by an intelligent digital workforce.",
  },
  {
    number: "03",
    title: "From AI Pilots to Production",
    description:
      "The hard part of enterprise AI begins after the prototype: governance, integration, adoption, evaluation, and measurable value.",
  },
  {
    number: "04",
    title: "AI Transformation Is an Operating Model",
    description:
      "Technology matters, but sustainable AI transformation requires changes to decisions, workflows, roles, governance, and accountability.",
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
            <a href="#ai-transformation">AI Transformation</a>
            <a href="#agent-factory">Agent Factory</a>
            <a href="#ai-ppm">AI-Enabled PPM</a>
            <a href="#systems">What I Build</a>
            <a href="#experience">Experience</a>
            <a href="#insights">Insights</a>
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
                I connect enterprise strategy, product thinking, technology
                delivery, and Agentic AI to turn business problems into
                working AI capabilities—and help organizations move them
                from experimentation to adoption and measurable value.
              </p>

              <p className="hero-team-statement">
                I give engineering teams clarity on the problem, room to build,
                and a clear path to production.
              </p>

              <div className="hero-actions">
                <a href="#agent-factory" className="button button-primary">
                  Explore the Agent Factory
                </a>

                <a href="#systems" className="button button-secondary">
                  See What I Build
                </a>
              </div>

              <div className="hero-tags">
                <span>AI Strategy</span>
                <span>AI Product Leadership</span>
                <span>Agentic AI</span>
                <span>AI Engineering</span>
                <span>Python</span>
                <span>RAG</span>
                <span>AWS Bedrock</span>
                <span>Microsoft Foundry</span>
                <span>AI Governance</span>
                <span>Enterprise PPM</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-label">THE ROLE I PLAY</div>

              <div className="hero-chain">
                <div>
                  <strong>Business Problem</strong>
                </div>

                <div className="chain-arrow">↓</div>

                <div>
                  <strong>AI Opportunity</strong>
                </div>

                <div className="chain-arrow">↓</div>

                <div>
                  <strong>AI Product</strong>
                </div>

                <div className="chain-arrow">↓</div>

                <div>
                  <strong>Production AI</strong>
                </div>

                <div className="chain-arrow">↓</div>

                <div>
                  <strong>Business Value</strong>
                </div>
              </div>

              <div className="hero-panel-footer">
                <span>STRATEGY</span>
                <span>PRODUCT</span>
                <span>DELIVERY</span>
                <span>AI</span>
              </div>
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
              <span>AI Agents</span>
              <span>Claude</span>
              <span>Claude Skills</span>
              <span>Claude Agents</span>
              <span>Python</span>
              <span>RAG</span>
              <span>Embeddings</span>
              <span>AI Evaluation</span>
              <span>MCP</span>
              <span>Vector Database</span>
              <span>Java</span>
              <span>AWS Bedrock</span>
              <span>boto3</span>
              <span>Microsoft Foundry</span>
              <span>Tool Use</span>
              <span>Agent Orchestration</span>
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
                I understand the business problem—and I know how to get the
                solution built.
              </h2>
            </div>

            <div className="section-copy">
              <p>
                I bring together three disciplines that rarely exist deeply
                in the same leader: enterprise transformation, technology
                and product delivery, and applied AI.
              </p>

              <p>
                For more than two decades, I have worked inside complex
                enterprises turning strategy into execution—building PMOs,
                shaping portfolios, leading technology programs, modernizing
                operating models, and working with executives through difficult
                transformation decisions.
              </p>

              <p>
                Today, I apply that execution experience to AI. I can sit with
                a business leader to understand the problem, frame the AI
                opportunity, shape the product, work with FDE and engineering
                teams, and drive the governance, adoption, and value
                realization required to make the solution matter.
              </p>

              <div className="credibility-line">
                <span>Enterprise transformation.</span>
                <span>AI product leadership.</span>
                <span>Hands-on building.</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI ENGINEERING & TECHNOLOGY */}
        <section id="ai-engineering" className="section engineering-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-number">01</div>
              <div>
                <div className="section-kicker">AI ENGINEERING &amp; TECHNOLOGY</div>
                <h2>Enough technical depth to build, evaluate, and lead AI systems.</h2>
              </div>
            </div>

            <p className="section-intro">
              I am not positioning myself as a model engineer. My value is the
              ability to work credibly across business, product, engineering,
              and AI—understanding the technology well enough to prototype,
              challenge assumptions, evaluate solutions, and lead them into
              production.
            </p>

            <div className="engineering-grid">
              <article className="engineering-card engineering-card-accent">
                <span>01</span>
                <h3>Agents &amp; Skills</h3>
                <p>
                  Claude Skills and Agents, tool use, structured outputs,
                  context engineering, human-agent handoffs, workflow
                  orchestration, and governed agent patterns.
                </p>
                <div className="engineering-tags">
                  <b>Claude</b><b>Claude Skills</b><b>Claude Agents</b><b>MCP</b><b>Tool Use</b>
                </div>
              </article>

              <article className="engineering-card">
                <span>02</span>
                <h3>AI Application Development</h3>
                <p>
                  Python-based AI development alongside APIs, RAG pipelines,
                  embeddings, retrieval, evaluation, Node.js, WebSockets, and
                  production-oriented application patterns.
                </p>
                <div className="engineering-tags">
                  <b>Python</b><b>RAG</b><b>Vector Database</b><b>Embeddings</b><b>APIs</b><b>Evaluation</b>
                </div>
              </article>

              <article className="engineering-card">
                <span>03</span>
                <h3>Cloud AI Platforms</h3>
                <p>
                  Hands-on work with AWS Bedrock and boto3, plus Microsoft
                  Foundry for agent deployment and enterprise AI platform
                  exploration.
                </p>
                <div className="engineering-tags">
                  <b>AWS Bedrock</b><b>boto3</b><b>Microsoft Foundry</b><b>Azure AI</b><b>Java</b>
                </div>
              </article>

              <article className="engineering-card">
                <span>04</span>
                <h3>Applied ML &amp; Evaluation</h3>
                <p>
                  Practical ML fundamentals applied to AI solution design,
                  retrieval, embeddings, model behavior, experimentation,
                  evaluation metrics, and evidence-based iteration.
                </p>
                <div className="engineering-tags">
                  <b>Machine Learning</b><b>Model Evaluation</b><b>Precision</b><b>Recall</b><b>F1</b>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* AI TRANSFORMATION */}
        <section id="ai-transformation" className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <div className="section-number light">02</div>
              <div>
                <div className="section-kicker">AI TRANSFORMATION</div>
                <h2>AI transformation is an operating model problem.</h2>
              </div>
            </div>

            <p className="section-intro dark-copy">
              The model is only one component. Sustainable enterprise AI
              requires a disciplined path from business strategy through
              product definition, technology delivery, governance, adoption,
              and measurable outcomes.
            </p>

            <div className="transformation-grid">
              <div className="transformation-card">
                <span>01</span>
                <h3>Business Strategy</h3>
                <p>
                  Connect AI opportunities to strategic priorities, value
                  pools, operating models, and measurable outcomes.
                </p>
              </div>

              <div className="transformation-card">
                <span>02</span>
                <h3>AI Product</h3>
                <p>
                  Translate business problems into users, workflows,
                  capabilities, backlogs, outcomes, and product roadmaps.
                </p>
              </div>

              <div className="transformation-card">
                <span>03</span>
                <h3>Technology</h3>
                <p>
                  Work across agents, RAG, models, data, tools, workflows,
                  enterprise platforms, and integrations.
                </p>
              </div>

              <div className="transformation-card">
                <span>04</span>
                <h3>Enterprise Delivery</h3>
                <p>
                  Move from concept to iterative build, testing, deployment,
                  release, adoption, and continuous improvement.
                </p>
              </div>

              <div className="transformation-card">
                <span>05</span>
                <h3>Governance</h3>
                <p>
                  Establish decision rights, controls, evaluation, security,
                  risk management, and responsible AI practices.
                </p>
              </div>

              <div className="transformation-card">
                <span>06</span>
                <h3>Value &amp; Scale</h3>
                <p>
                  Measure adoption, performance, business outcomes, and value—
                  then scale the capabilities that prove their worth.
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
                <div className="section-number">03</div>
                <div className="section-kicker">INTELLECTUAL CENTERPIECE</div>
                <h2>The AI Agent Factory</h2>
                <p className="factory-subtitle">
                  A repeatable operating model for moving from business
                  problem to production AI.
                </p>
              </div>

              <div className="factory-statement">
                <span>THE OBJECTIVE</span>
                <strong>
                  Industrialize the journey from AI idea to measurable
                  enterprise value.
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
                <strong>AI PRODUCT<br />LEADERSHIP</strong>
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

            <div className="factory-proof">
              <div>
                <span>3×</span>
                <p>Enterprise AI-enabled delivery throughput</p>
              </div>

              <div>
                <span>1,500+</span>
                <p>Hours reclaimed annually</p>
              </div>

              <div>
                <span>30%</span>
                <p>Delivery velocity improvement</p>
              </div>
            </div>

            <p className="proof-note">
              Enterprise AI outcomes from work led and delivered in an
              enterprise environment; not all outcomes represent the
              reference Agent Factory model itself.
            </p>
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

            <div className="ppm-lead-grid">
              <div>
                <h3>
                  Reinventing enterprise execution with a digital workforce.
                </h3>
              </div>

              <div className="section-copy">
                <p>
                  One of the clearest applications of the Agent Factory model
                  is Portfolio &amp; Program Management.
                </p>

                <p>
                  Instead of treating AI as another reporting tool, the model
                  creates an intelligent workforce that continuously senses
                  portfolio conditions, analyzes information, prepares
                  decisions, coordinates execution, and learns from outcomes.
                </p>
              </div>
            </div>

            <div className="human-agent-boundary">
              <div className="boundary-side human">
                <span>HUMANS OWN</span>
                <strong>Judgment &amp; Accountability</strong>
                <ul>
                  <li>Strategic direction</li>
                  <li>Investment decisions</li>
                  <li>Tradeoffs</li>
                  <li>Exceptions</li>
                  <li>Change &amp; Transform</li>
                  <li>Accountability</li>
                </ul>
              </div>

              <div className="boundary-center">
                <div>HUMAN</div>
                <span>+</span>
                <div>AGENT</div>
              </div>

              <div className="boundary-side agent">
                <span>AGENTS SUPPORT</span>
                <strong>Intelligence &amp; Execution</strong>
                <ul>
                  <li>Continuous sensing</li>
                  <li>Analysis</li>
                  <li>Decision preparation</li>
                  <li>Coordination</li>
                  <li>Workflow execution</li>
                  <li>Reporting</li>
                </ul>
              </div>
            </div>

            <div className="agent-grid">
              {agentRoles.map(([number, title, description]) => (
                <div className="agent-role-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>

            <div className="execution-chain">
              <span>STRATEGY</span>
              <b>→</b>
              <span>PORTFOLIO</span>
              <b>→</b>
              <span>PROGRAMS</span>
              <b>→</b>
              <span>PROJECTS / PRODUCTS</span>
              <b>→</b>
              <span>EXECUTION</span>
              <b>→</b>
              <span>VALUE</span>
            </div>
          </div>
        </section>

        {/* SYSTEMS */}
        <section id="systems" className="section section-dark systems-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-number light">05</div>
              <div>
                <div className="section-kicker">WHAT I BUILD</div>
                <h2>Strategy matters. Working systems matter more.</h2>
              </div>
            </div>

            <div className="systems-intro">
              <p>
                I believe AI transformation leaders need enough technical
                depth to understand how the systems work—not simply describe
                them. My hands-on work spans RAG, agents, workflows,
                enterprise AI assistants, Copilot, Claude, knowledge systems,
                and AI-enabled delivery.
              </p>
            </div>

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

                  <div className="system-link">
                    {system.status} · BUILD DETAIL →
                  </div>
                </article>
              ))}
            </div>

            <div className="build-positioning">
              <div>
                <span>MY POSITION</span>
                <strong>I lead the factory.</strong>
              </div>

              <div className="build-divider">+</div>

              <div>
                <span>MY TECHNICAL DEPTH</span>
                <strong>I can build inside the factory.</strong>
              </div>
            </div>

            <div className="build-proof">
              <div className="build-proof-header">
                <span>HANDS-ON EVIDENCE</span>
                <h3>Two builds. Two different AI capabilities.</h3>
                <p>
                  The projects below are deliberately complementary: one demonstrates knowledge retrieval and AI evaluation; the other demonstrates an agent that can reason, maintain context, call tools, and execute a real business action.
                </p>
              </div>

              <div className="build-case-grid">
                <article className="build-case-card">
                  <div className="build-case-number">01</div>
                  <div className="build-case-label">RAG / KNOWLEDGE AI</div>
                  <h4>Grounded knowledge, measured retrieval.</h4>
                  <p>
                    Built and ran a modular RAG pipeline from document chunking through embeddings, vector storage, retrieval, reranking, and Claude generation. Progressively tested vector search, BM25 hybrid search, summary-indexed embeddings, and Claude-powered reranking.
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
                    Built and deployed a voice AI receptionist using Twilio, Claude, Node.js/Fastify, WebSockets, and Google Calendar. The agent handles natural multi-turn conversation and uses tool calls to check availability, book, and reschedule appointments.
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
                  <strong>Real systems expose real failure modes.</strong>
                </div>
                <p>
                  Debugging included SDK/model deprecations, API and rate-limit issues, environment configuration, WebSocket URL construction, structured conversation-state loss, credential protection, cloud port binding, and a UTC/Eastern timezone defect that only appeared after deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ENTERPRISE EXECUTION */}
        <section className="section execution-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-number">06</div>
              <div>
                <div className="section-kicker">ENTERPRISE EXECUTION SYSTEM</div>
                <h2>Intelligence embedded across execution.</h2>
              </div>
            </div>

            <p className="section-intro">
              The long-term opportunity is bigger than automating individual
              PMO tasks. It is creating an enterprise execution system where
              intelligence is continuously embedded across the lifecycle.
            </p>

            <div className="execution-layers">
              <div className="execution-layer human-layer">
                <div className="layer-title">
                  <span>HUMAN LEADERSHIP</span>
                  <strong>Judgment</strong>
                </div>

                <div className="layer-items">
                  <span>Strategy &amp; Direction</span>
                  <span>Investment Decisions</span>
                  <span>Tradeoffs &amp; Escalation</span>
                  <span>Change &amp; Transform</span>
                  <span>Accountability &amp; Value</span>
                </div>
              </div>

              <div className="execution-layer ai-layer">
                <div className="layer-title">
                  <span>AI AGENT LAYER</span>
                  <strong>Intelligence</strong>
                </div>

                <div className="layer-items">
                  <span>Sense</span>
                  <span>Reason</span>
                  <span>Recommend</span>
                  <span>Act</span>
                  <span>Learn</span>
                </div>
              </div>
            </div>

            <div className="execution-flow">
              <span>STRATEGY</span>
              <i>→</i>
              <span>PORTFOLIO</span>
              <i>→</i>
              <span>PROGRAMS</span>
              <i>→</i>
              <span>PROJECTS / PRODUCTS</span>
              <i>→</i>
              <span>EXECUTION</span>
              <i>→</i>
              <span>VALUE REALIZATION</span>
            </div>

            <div className="execution-quote">
              <p>
                “The opportunity is not to automate the PMO. It is to turn
                enterprise execution into an intelligent system.”
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <div className="section-number light">07</div>
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

                  <p>{item.description}</p>
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

        {/* INSIGHTS */}
        <section id="insights" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <div className="section-number">08</div>
              <div>
                <div className="section-kicker">INSIGHTS</div>
                <h2>Ideas shaped by experience, not AI hype.</h2>
              </div>
            </div>

            <div className="insights-grid-new">
              {insights.map((insight) => (
                <article className="insight-card-new" key={insight.number}>
                  <span>{insight.number}</span>
                  <h3>{insight.title}</h3>
                  <p>{insight.description}</p>
                  <div>READ MORE →</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ASK AI */}
        <section className="ask-ai">
          <div className="container ask-ai-inner">
            <div>
              <div className="section-kicker">COMING SOON</div>
              <h2>Ask my AI.</h2>
              <p>
                An AI knowledge agent built around my experience, frameworks,
                perspectives, and approach to enterprise AI transformation.
              </p>
            </div>

            <div className="ask-ai-status">
              <span className="status-dot" />
              AI Knowledge Agent
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="container contact-inner">
            <div>
              <div className="section-number">08</div>
              <div className="section-kicker">LET'S CONNECT</div>

              <h2>
                Let's talk about turning enterprise problems into AI
                capabilities.
              </h2>
            </div>

            <div className="contact-details">
              <p>
                Whether you're building an AI strategy, establishing an Agent
                Factory, modernizing enterprise execution, or looking to move
                AI from experimentation into production, I'd welcome the
                conversation.
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
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Sandeep Bhatnagar</span>
          <span>
            AI Transformation • Agentic AI • Enterprise Execution
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;