import React from "react";

// --- Project Data
const projects = [
  {
    title: "Insider Alpha — Financial Intelligence Platform",
    problem: "Investment firms need real-time insights from regulatory filings.",
    solution: "Real-time pipeline analyzing insider trading patterns for alpha generation.",
    impact: "Enables faster investment decisions, potential 15–20% portfolio improvement.",
    role: "Product strategy, user experience design, technical architecture.",
    url: "https://github.com/Nstar9/insider-intel",
    tech: ["Python", "Airflow", "Pandas"],
  },
  {
    title: "Pairs Trading Quant Research",
    problem: "Quant funds seek robust, low-correlation trading strategies.",
    solution: "Statistical arbitrage using cointegrated pairs; mean-reversion backtests.",
    impact: "12.5% annualized returns. Used for model-driven trading ideas.",
    role: "Full pipeline: data, research, evaluation, reporting.",
    url: "https://github.com/Nstar9/Pairs-Trading-Quant-Research",
    tech: ["Python", "StatsModels"],
  },
  {
    title: "Options Pricing & Greeks Calculator",
    problem: "Traders and students need real-time option analytics.",
    solution: "European options pricing model + Greeks, Monte Carlo simulations.",
    impact: "Enhanced trading analysis, learning outcomes.",
    role: "Product design, Python development, UI, docs.",
    url: "https://github.com/Nstar9/Options-Pricing-Greeks",
    tech: ["Python", "Finance", "Monte Carlo"],
  },
  {
    title: "Federated Healthcare Recommendation System",
    problem: "Healthcare data privacy hinders collaborative learning.",
    solution: "Federated learning for privacy-safe recommendations.",
    impact: "Improved recommendations, no patient data leaks.",
    role: "Tech lead, ML design, product owner.",
    url: "https://github.com/Nstar9/Federated-Healthcare-Recommendation-System",
    tech: ["PyTorch", "Federated"],
  },
  {
    title: "Market Making Strategy (RL)",
    problem: "Market makers seek to optimize spreads and inventory risk.",
    solution: "Order-book simulator and RL agent for automated quoting.",
    impact: "Demonstrated RL in high-frequency trading context.",
    role: "All technical + research + reporting.",
    url: "https://github.com/Nstar9/Market-Making-Strategy",
    tech: ["TensorFlow", "RL"],
  },
  {
    title: "Fraud Detection System",
    problem: "Banks need real-time fraud risk scoring for transactions.",
    solution: "Real-time fraud monitoring, ML-based risk scoring, explainable outputs.",
    impact: "Improved fraud detection rates, reduced losses.",
    role: "Python dev, feature design, project manager.",
    url: "https://github.com/Nstar9/fraud-detection-system",
    tech: ["Python", "SQL", "ML"],
  },
  {
    title: "Stock Market Data Pipeline",
    problem: "Analysts require automated, robust stock data ingestion.",
    solution: "Automated extraction & processing from Yahoo Finance API.",
    impact: "Reliable, up-to-date financial research.",
    role: "Backend, scheduling, deployment.",
    url: "https://github.com/Nstar9/Stock-Market-Data-Pipeline",
    tech: ["Python", "APIs"],
  },
  {
    title: "Pharma KPI Dashboard",
    problem: "Regional pharma teams need unified, interactive KPIs.",
    solution: "Interactive Tableau dashboard for sales & ops.",
    impact: "Improved visibility, better regional decision-making.",
    role: "Data viz, dashboard design.",
    url: "https://github.com/Nstar9/pharma-kpi-dashboard",
    tech: ["Tableau", "SQL"],
  },
  {
    title: "Personal Finance Calculator",
    problem: "Individuals want to model budgets & savings plans.",
    solution: "Web app for simple finance modeling.",
    impact: "Helped users forecast savings & plan goals.",
    role: "Product + dev.",
    url: "https://github.com/Nstar9/Personal-Finance-Calculator",
    tech: ["Python"],
  },
];

// --- Skills, Certs, Info Badges
const skillGroups = [
  {
    title: "TECHNICAL SKILLS",
    color: "bg-blue-50 border-blue-300 text-blue-900",
    items: [
      "Python (Advanced)", "SQL (Advanced)",
      "AWS (EC2, S3, Lambda, RDS)",
      "Pandas", "NumPy", "Data Visualization",
      "Jira", "Figma", "Analytics Platforms"
    ]
  },
  {
    title: "BUSINESS & LEADERSHIP SKILLS",
    color: "bg-blue-50 border-blue-300 text-blue-900",
    items: [
      "Product Management & Strategy",
      "Cross-functional Team Leadership",
      "Stakeholder Management & Communication",
      "Agile/Scrum Methodologies"
    ]
  }
];

const certs = [
  { name: "IBM AI Product Manager (2025)", color: "bg-yellow-100 text-black-900 border-yellow-400" },
  { name: "AWS Solutions Architect Associate (In Progress)", color: "bg-yellow-100 text-black-900 border-yellow-400" },
  { name: "Cognizant - Agile Methodology", color: "bg-yellow-100 text-black-900 border-yellow-400" },
  { name: "Data Science Specialization", color: "bg-yellow-100 text-black-900 border-yellow-400" }
];

const infobadges = [
  { icon: "📍", label: "Chicago, IL", color: "bg-gray-100 text-gray-700 border-gray-300" },
  { icon: "🎓", label: "MS Tech Mgmt @ UIUC", color: "bg-blue-100 text-blue-900 border-blue-400" },
  { icon: "💼", label: "Senior Consultant", color: "bg-pink-100 text-pink-900 border-pink-400" },
  { icon: "🔧", label: "Python | SQL | AWS | Strategy", color: "bg-purple-100 text-purple-900 border-purple-400" },
  { icon: "🏆", label: "IBM AI PM Certified", color: "bg-pink-100 text-pink-900 border-pink-400" },
  { icon: "⚡", label: "AWS SAA (In Progress)", color: "bg-purple-100 text-purple-900 border-purple-400" },
];

export default function Portfolio() {
  return (
    <div className="font-sans bg-grey text-black-900 scroll-smooth">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a2540] text-white shadow-md">
        <ul className="flex flex-wrap justify-center gap-6 py-4 text-sm md:text-base">
          <li><a href="#hero" className="hover:text-black-400">Home</a></li>
          <li><a href="#skills" className="hover:text-black-400">Skills & Certs</a></li>
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#experience" className="hover:text-teal-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#case-studies" className="hover:text-teal-400">Case Studies</a></li>
          <li><a href="#resume" className="hover:text-teal-400">Resume</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <header id="hero" className="min-h-[40vh] flex flex-col items-center justify-center px-8 py-12 text-center bg-gradient-to-b from-white to-gray-50 space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a2540] mb-0">
          Niraj Patil
        </h1>
        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-1 mt-1">
          Technical Product Manager
        </h2>
        <h3 className="text-sm md:text-base font-medium text-[#0a2540] mt-0 mb-2">
          Building Intelligent Systems at the Intersection of AI, Markets, Data, Cloud & Strategy
        </h3>
        <div className="flex flex-wrap gap-2 justify-center mb-2 mt-2">
          {infobadges.map(badge => (
            <span key={badge.label} className={`inline-flex items-center px-3 py-1 border-2 rounded-full text-xs font-bold mr-1 mb-2 ${badge.color}`}>
              <span className="mr-1">{badge.icon}</span>{badge.label}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-2 justify-center">
          <a href="https://github.com/Nstar9" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded shadow bg-green-100 hover:bg-green-200 text-black-800 border border-green-200 font-semibold transition">GitHub</a>
          <a href="https://linkedin.com/in/nirajpatil01" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded shadow bg-green-100 hover:bg-green-200 text-black-800 border border-green-200 font-semibold transition">LinkedIn</a>
        </div>
      </header>

      {/* Skills & Certs */}
      <section id="skills" className="py-12 px-6 bg-white text-center space-y-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillGroups.map(group => (
            <div key={group.title} className={`rounded-xl border shadow-sm p-6 ${group.color}`}>
              <h3 className="font-bold text-lg mb-3 tracking-wide">{group.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {group.items.map(item => (
                  <span key={item} className="px-3 py-1 bg-white border rounded-full text-xs font-medium shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {certs.map(cert => (
            <span key={cert.name} className={`px-4 py-2 rounded-xl border shadow font-semibold text-sm ${cert.color}`}>{cert.name}</span>
          ))}
        </div>
      </section>

      {/* About (Pic left, Text right) */}
      <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-16 max-w-6xl mx-auto bg-gray-50 rounded-2xl my-10">
        <img
          src="/chicago-header.jpeg"
          alt="Niraj Patil"
          className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-2xl shadow-lg border-4 border-[#0a2540]"
        />
        <div className="max-w-xl space-y-5 text-left">
          <p className="text-lg md:text-xl font-bold text-[#0a2540] mb-2">
            I’m a Technical Product Manager with a unique blend of engineering, consulting, and technology management experience.
          </p>
          <p className="text-base md:text-lg">
            Currently completing my <b>MS in Technology Management at UIUC</b>, I specialize in building data-driven products that solve complex business problems.<br />
            My background spans <b>Consulting, Product Operations and Technical project leadership</b> experience. I specialize in building <b>AI, cloud, and data driven </b> Solutions. I bring both <b>technical depth</b> (Python, SQL, AWS) and <b>strategic thinking</b> to product development and cross-functional leadership.
          <p className="text-base md:text-lg">
            <b>What sets me apart:</b> I bridge the gap between technical possibility and business impact. Whether it’s architecting cloud solutions, analyzing market data, or leading product strategy, I thrive at the intersection of <b>technology and business strategy</b>.
          </p>
          <p className="text-base md:text-lg">
            I’m seeking <b>Technical Product Manager roles, Tech Strategy and Tech Consulting</b> where I can leverage my <b>analytical mindset, leadership experience, and passion for building products</b> that scale and create meaningful impact.
          </p>
          </p>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="max-w-6xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Experience */}
        <div>
          <h2 className="text-2xl font-bold text-[#0a2540] mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Senior Consultant | Faces Consulting</h3>
            <p className="text-sm text-gray-500">Sep 2024 - Present</p>
            <ul className="list-disc ml-6 mt-2 text-base space-y-1">
              <li>Led strategic consulting projects with cross-functional teams</li>
              <li>Developed data-driven recommendations for business optimization</li>
              <li>Managed client relationships and project deliverables</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Product Development Engineer | Process Industries</h3>
            <p className="text-sm text-gray-500">2022-2023</p>
            <ul className="list-disc ml-6 mt-2 text-base space-y-1">
              <li>Managed product development lifecycle in regulated environment</li>
              <li>Led cross-functional teams and stakeholder alignment</li>
              <li>Optimized complex systems and processes for efficiency and compliance</li>
              <li>Developed expertise in quality management and risk assessment</li>
            </ul>
          </div>
        </div>
        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-[#0a2540] mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-lg">MS Technology Management — UIUC</h3>
            <p className="text-sm text-gray-500">Expected Aug 2025</p>
            <p className="text-base">Relevant Coursework: Data Science, Big Data Infrastructure, Business Strategy</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">BE Mechanical Engineering — Mumbai University</h3>
            <p className="text-sm text-gray-500">Graduated 2022</p>
            <p className="text-base">Focus: Product Design, Systems Analysis</p>
          </div>
        </div>
      </section>

      {/* Featured Technical Projects */}
      <section id="projects" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center text-[#0a2540] mb-10">Featured Technical Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((proj) => (
            <div key={proj.title} className="p-6 rounded-2xl border-2 border-gray-100 shadow hover:shadow-lg bg-gray-50 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-1">{proj.title}</h3>
                <div className="text-xs mb-2">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mr-1 mb-1">{t}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700"><b>Problem:</b> {proj.problem}</p>
                <p className="text-sm text-gray-700"><b>Solution:</b> {proj.solution}</p>
                <p className="text-sm text-gray-700"><b>Business Impact:</b> {proj.impact}</p>
                <p className="text-xs text-gray-500 mt-1"><b>Your Role:</b> {proj.role}</p>
              </div>
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-teal-700 text-sm underline font-semibold">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Product Case Studies */}
      <section id="case-studies" className="py-16 px-8 space-y-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-[#0a2540] mb-8">Product Case Studies</h2>
        {/* Case Study 1 */}
        <article className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-center mb-10">
          <div className="md:col-span-2 flex items-center justify-center bg-white border border-gray-200 rounded-xl h-56 text-gray-400">
            <span className="text-center px-4">[ Airline Crisis Recovery Platform Mockup ]</span>
          </div>
          <div className="md:col-span-3 space-y-3 text-sm md:text-base">
            <h3 className="text-xl font-bold text-teal-600">AI-Powered Crisis Recovery Platform for Airlines</h3>
            <p><b>Problem:</b> Airlines recover slowly from large-scale disruptions.</p>
            <p><b>Solution:</b> Optimization engine reallocating crew/aircraft via ML.</p>
            <p><b>Impact:</b> 25% faster recovery, $15M saved annually.</p>
            <p><b>Your Role:</b> Product strategy, KPIs, roadmap.</p>
          </div>
        </article>
        {/* Case Study 2 */}
        <article className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex items-center justify-center bg-white border border-gray-200 rounded-xl h-56 text-gray-400">
            <span className="text-center px-4">[ Digital Banking Risk Platform Mockup ]</span>
          </div>
          <div className="md:col-span-3 space-y-3 text-sm md:text-base">
            <h3 className="text-xl font-bold text-teal-600">AI-Powered Risk Management Platform for Digital Banking</h3>
            <p><b>Problem:</b> Difficulty detecting fraud in real-time.</p>
            <p><b>Solution:</b> ML platform analyzing transactions & behavior.</p>
            <p><b>Impact:</b> 60% fewer false positives, 40% faster detection.</p>
            <p><b>Your Role:</b> Feature prioritization, stakeholder alignment.</p>
          </div>
        </article>
      </section>

      {/* Resume */}
      <section id="resume" className="py-20 px-8 text-center bg-white">
        <h2 className="text-3xl font-semibold text-[#0a2540] mb-6">Resume</h2>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="/Niraj_Patil_Resume_Product.pdf" download className="px-6 py-3 border rounded-xl shadow hover:bg-teal-50 text-base font-semibold text-teal-900 bg-teal-100">
            Product/Tech Resume
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold text-[#0a2540] mb-6">Let's Connect</h2>
        <p className="text-base mb-6">Whether you're hiring, collaborating, or just exploring ideas — reach out!</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:bnirajpatil9@gmail.com" className="px-6 py-2 border border-gray-300 rounded shadow hover:bg-gray-100 text-base font-medium">Email</a>
          <a href="https://linkedin.com/in/nirajpatil01" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-gray-300 rounded shadow hover:bg-gray-100 text-base font-medium">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
