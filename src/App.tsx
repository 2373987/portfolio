import { useState } from 'react'
import './App.css'

const projects = [
  {
    id: 'astra',
    name: 'ASTRA',
    demoUrl: 'https://2373987.github.io/astra-fyp/',
    category: 'Applied AI · Safety technology',
    summary: 'A women’s safety prototype combining location sharing, safety maps and an AI companion.',
    stack: ['Flutter', 'FastAPI', 'Python', 'Ollama'],
    detail:
      'Flutter provides the interface. FastAPI connects location and routing services with a local Llama 3.2 model through Ollama. Features include SOS location sharing, trusted contacts, safety reports and nearby emergency facilities.',
    limitation:
      'A university prototype evaluated with a small scenario set. AI recommendations and community reports cannot guarantee safety.',
  },
  {
    id: 'digital-employee',
    name: 'Your Digital Employee',
demoUrl: 'https://2373987.github.io/your_digital_employee/',
    category: 'Web application · Interactive demo',
    summary:
      'A digital employee website exploring how an interactive interface can support everyday work.',
    stack: ['Web Development', 'GitHub Pages'],
    detail:
      'A website project published through GitHub Pages. The full case study will describe its features, implementation and workflow.',
    limitation:
      'The project’s AI capabilities and integrations will be documented alongside the live demo.',
  },
  {
    id: 'companion',
    name: 'Personal AI Companion',
    category: 'Conversational systems',
    summary: 'A Python experiment exploring local language models and persistent conversational memory.',
    stack: ['Python', 'Ollama', 'JSON', 'TextBlob'],
    detail:
      'A terminal-based companion combining local model integration, text analysis and JSON-based memory. The project explores how stored context can support conversational continuity.',
    limitation:
      'An experimental local application. Memory quality and model responses require further evaluation.',
  },
  {
    id: 'classifier',
    name: 'Brain Tumour Classifier',
    category: 'Machine learning · Coursework',
    summary: 'A convolutional neural network project exploring image classification.',
    stack: ['Python', 'TensorFlow', 'Keras'],
    detail:
      'A coursework project using a convolutional neural network for brain tumour image classification. It demonstrates experience with image-based machine learning and Keras.',
    limitation:
      'An educational model, not a clinical diagnostic tool. Verified evaluation results will be added to the case study.',
  },
  {
    id: 'wellverse',
    name: 'WellVerse',
    category: 'Collaborative software',
    summary: 'A team software project combining development with coordination and project planning.',
    stack: ['JavaScript', 'Trello', 'Jira'],
    detail:
      'As team coordinator, I helped organise delivery, track work and support collaboration alongside JavaScript development.',
    limitation:
      'A detailed case study will distinguish my contributions from the team’s overall work.',
  },
]

const capabilities = [
  { title: 'Languages', items: 'Python · JavaScript · Java · Dart · SQL · C++' },
  { title: 'AI & data', items: 'TensorFlow · Keras · Local LLMs · NLP · Model evaluation' },
  { title: 'Applications', items: 'Flutter · FastAPI · REST APIs · HTML & CSS' },
  { title: 'Workflow', items: 'Git & GitHub · VS Code · Trello · Jira · Colab' },
]

function App() {
  const [recruiterMode, setRecruiterMode] = useState(false)
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState([
    'SAKSHI LABS / terminal ready',
    'Type help to discover available commands.',
  ])

  const selectedProject = projects.find((project) => project.id === activeProject)

  function runCommand(input: string) {
    const value = input.trim().toLowerCase()
    if (!value) return

    let response = ''

    switch (value) {
      case 'help':
        response = 'Commands: whoami, skills, projects, open astra, contact, secret, clear'
        break
      case 'whoami':
        response =
          'Sakshi Thakur — Computer Science (Artificial Intelligence) graduate, Brunel University London.'
        break
      case 'skills':
        response = capabilities.map((item) => `${item.title}: ${item.items}`).join('\n')
        break
      case 'projects':
        response = projects.map((project) => project.name).join(' / ')
        break
      case 'open astra':
        setActiveProject('astra')
        response = 'ASTRA experiment report opened.'
        break
      case 'contact':
        response = 'Email: sakshithakur651@gmail.com\nGitHub: github.com/2373987'
        break
      case 'secret':
        response = '✦ Discovery unlocked: Lab 2373987. Curiosity is a feature.'
        break
      case 'clear':
        setHistory([])
        setCommand('')
        return
      default:
        response = `Unknown command: ${input}. Type help for available commands.`
    }

    setHistory((previous) => [...previous, `> ${input}`, response])
    setCommand('')
  }

  return (
    <div className={recruiterMode ? 'app recruiter' : 'app'}>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sakshi Labs home">
          <span className="brand-icon">S</span>
          SAKSHI<span className="brand-light">LABS</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#profile">Profile</a>
          <a href="#experiments">Experiments</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="mode-button"
          type="button"
          aria-pressed={recruiterMode}
          onClick={() => setRecruiterMode((previous) => !previous)}
        >
          {recruiterMode ? 'Explore mode ↗' : 'Recruiter mode ↗'}
        </button>
      </header>

      <main id="main">
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> PERSONAL AI LABORATORY / 001</p>
            <h1>
              Human curiosity.<br />
              <span>Intelligent systems.</span>
            </h1>
            <p className="hero-description">
              I’m Sakshi Thakur, a Computer Science & AI graduate exploring
              how software can make everyday life safer, smarter and more human.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#experiments">Explore experiments ↗</a>
              <a className="secondary-button" href="#contact">Let’s connect</a>
            </div>

            <div className="hero-meta">
              <span>LONDON, UK</span>
              <span>AI + SOFTWARE DEVELOPMENT</span>
            </div>
          </div>

          {!recruiterMode && (
            <div className="core-panel">
              <div className="core-heading">
                <span>NEURAL CORE</span>
                <span className="live-label">VISUAL SIMULATION</span>
              </div>
              <div className="neural-core" aria-hidden="true">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />
                <div className="core-sphere"><span>S</span></div>
                <span className="floating-node node-one" />
                <span className="floating-node node-two" />
                <span className="floating-node node-three" />
              </div>
              <div className="core-footer">
                <span>EXPERIMENT. LEARN. ITERATE.</span>
                <span>v0.1</span>
              </div>
            </div>
          )}
        </section>

        <div className="metrics">
<strong>{String(projects.length).padStart(2, '0')}</strong>
<span>Featured projects</span>          
          <div><strong>AI</strong><span>Degree specialisation</span></div>
          <div><strong>UK</strong><span>Based in London</span></div>
          <div><strong>↗</strong><span>Seeking graduate opportunities</span></div>
        </div>

        <section className="section profile-section" id="profile">
          <div>
            <p className="eyebrow">01 / RESEARCHER PROFILE</p>
            <h2>Building with purpose.</h2>
            <p className="section-description">
              I completed my BSc (Hons) in Computer Science (Artificial Intelligence)
              at Brunel University London. My interests sit at the intersection
              of applied AI, software engineering and human-centred design.
            </p>
            <p className="section-description">
              Through university projects and team coordination, I’ve explored
              local language models, mobile applications and machine learning.
              My customer service experience has also strengthened my
              communication, adaptability and teamwork.
            </p>
            <a className="text-link" href="https://github.com/2373987" target="_blank" rel="noreferrer">
              Explore my GitHub ↗
            </a>
          </div>

          <div className="capabilities">
            {capabilities.map((capability) => (
              <div className="capability" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experiments">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / EXPERIMENT VAULT</p>
              <h2>Ideas turned into systems.</h2>
            </div>
            <span className="small-label">SELECT A PROJECT TO INSPECT</span>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <button
                className="project-card"
                type="button"
                key={project.id}
                onClick={() => setActiveProject(project.id)}
              >
                <div className="project-top">
                  <span>EXP / 0{index + 1}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="tags">
                  {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <span className="inspect-label">Inspect experiment →</span>
              </button>
            ))}
          </div>
        </section>

        {!recruiterMode && (
          <section className="section terminal-section" id="terminal">
            <div>
              <p className="eyebrow">03 / COMMAND INTERFACE</p>
              <h2>A little curiosity<br />goes a long way.</h2>
              <p className="section-description">
                Explore the lab through commands. Start with <code>help</code>,
                or investigate <code>open astra</code>.
              </p>
              <p className="small-label">LOCAL COMMAND TERMINAL · NO AI MODEL CONNECTED</p>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>visitor@ sakshi-labs</span>
              </div>

              <div className="terminal-output" role="log" aria-label="Terminal output">
                {history.map((line, index) => <pre key={index}>{line}</pre>)}
              </div>

              <form
                className="terminal-input"
                onSubmit={(event) => {
                  event.preventDefault()
                  runCommand(command)
                }}
              >
                <label htmlFor="command">visitor $</label>
                <input
                  id="command"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  placeholder="Type a command..."
                  autoComplete="off"
                  spellCheck={false}
                />
                <button type="submit" aria-label="Run command">↵</button>
              </form>
            </div>
          </section>
        )}

        <section className="section contact-section" id="contact">
          <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
          <h2>The next experiment<br />could start with hello.</h2>
          <p>Open to AI, software development and graduate technology opportunities.</p>
          <a className="primary-button" href="mailto:sakshithakur651@gmail.com">
            Get in touch ↗
          </a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Sakshi Thakur</span>
        <span>SAKSHI LABS / BUILT WITH CURIOSITY</span>
        <a href="https://github.com/2373987" target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>

      {selectedProject && (
        <dialog
          open
          className="project-dialog"
          aria-labelledby="project-title"
          onKeyDown={(event) => {
            if (event.key === 'Escape') setActiveProject(null)
          }}
        >
          <div className="dialog-heading">
            <span className="eyebrow">EXPERIMENT REPORT</span>
            <button
              type="button"
              autoFocus
              onClick={() => setActiveProject(null)}
              aria-label="Close project report"
            >✕</button>
          </div>
          <h2 id="project-title">{selectedProject.name}</h2>
          <p>{selectedProject.summary}</p>
          <h3>System overview</h3>
          {'demoUrl' in selectedProject &&
  typeof selectedProject.demoUrl === 'string' && (
    <a
      className="primary-button"
      href={selectedProject.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Launch demo ↗
    </a>
  )}
          <p>{selectedProject.detail}</p>
          <h3>Tools & technologies</h3>
          <div className="tags">
            {selectedProject.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <h3>Limitations</h3>
          <p>{selectedProject.limitation}</p>
          <button className="secondary-button" type="button" onClick={() => setActiveProject(null)}>
            Back to experiments
          </button>
        </dialog>
      )}
    </div>
  )
}

export default App