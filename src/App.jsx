

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-8 space-y-12 font-sans">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <img
          src="/chicago-header.jpeg"
          alt="Niraj Patil Header"
          className="mx-auto rounded-2xl shadow-lg max-h-96 object-cover"
        />
        <h1 className="text-4xl font-bold">Niraj Patil</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learning to Build Intelligent Systems at the Intersection of Markets, Data, Cloud, and Strategy.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/Nstar9" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded shadow hover:bg-gray-100">GitHub</a>
          <a href="https://linkedin.com/in/nirajpatil01" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded shadow hover:bg-gray-100">LinkedIn</a>
        </div>
      </section>

       {/* About Section */}
      <section className="text-center max-w-3xl mx-auto pt-12 space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-sm">
          I’m a <strong>mechanical engineer turned tech strategist</strong> with an <strong>MS in Technology Management</strong> — passionate about building intelligent systems at the intersection of <strong>markets, data, cloud, and strategy</strong>.<br />
          While I may not bring decades of experience, I bring something equally valuable: <strong>vision, velocity</strong>, and a <strong>deep discomfort with mediocrity</strong>.
        </p>
        <p className="text-sm">
          <strong>Technical Foundation:</strong> I’m proficient in <strong>Python, SQL, and AWS/cloud infrastructure</strong>, with hands-on experience in <strong>product management</strong> and <strong>consulting</strong>. I’m especially drawn to applying <strong>quantitative methods, algorithmic thinking</strong>, and <strong>product intuition</strong> to understand market behavior, manage risk, and drive strategic decisions.
        </p>
        <p className="text-sm">
          <strong>Leadership & Mindset:</strong> I thrive at the intersection of <strong>curiosity and execution</strong> — whether it's architecting cloud solutions, analyzing market data, or leading <strong>cross-functional teams</strong> toward bold goals. Strong <strong>leadership and people skills</strong> fuel my problem-solving approach.
        </p>
        <p className="text-sm">
          <strong>Focus Areas:</strong> I'm particularly interested in <strong>tech and fintech</strong> roles where I can combine <strong>engineering rigor, strategic thinking</strong>, and <strong>product sense</strong> to create meaningful impact.
        </p>
        <p className="text-sm">
          I’m a <strong>voracious reader</strong>, a <strong>pragmatic thinker</strong>, and a <strong>relentless optimist</strong>. I believe the best solutions emerge when deep technical expertise meets long-term strategic vision. If given the chance, I’ll bring that same tenacious energy to your team.<br />
          Let’s build something unforgettable.
        </p>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Insider Trading Alpha Detector",
              desc: "Real-time pipeline to detect alpha from insider trading data.",
              url: "https://github.com/Nstar9/insider-intel"
            },
            {
              title: "Pairs Trading Quant Research",
              desc: "Identified cointegrated pairs and tested mean-reversion strategy with 12.5% annualized returns.",
              url: "https://github.com/Nstar9/Pairs-Trading-Quant-Research"
            },
            {
              title: "Federated Healthcare System",
              desc: "Built a privacy-first recommendation system using federated learning on real patient data.",
              url: "https://github.com/Nstar9/Federated-Healthcare-Recommendation-System"
            },
            {
              title: "Market Making Strategy (RL)",
              desc: "Built an order book simulator using LSTM and reinforcement learning to optimize trading spreads.",
              url: "https://github.com/Nstar9/Market-Making-Strategy"
            },
            {
              title: "AWS Retail Data Pipeline",
              desc: "Simulated real-world retail analytics using Lambda, Step Functions, and SNS notifications.",
              url: "https://github.com/Nstar9/cloud-retail-aws"
            },
            {
              title: "Pharma KPI Dashboard",
              desc: "Designed an interactive Tableau dashboard to monitor regional KPIs for a pharmaceutical brand.",
              url: "https://github.com/Nstar9/pharma-kpi-dashboard"
            }
          ].map((project) => (
            <div className="p-4 rounded-xl border shadow-md" key={project.title}>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm">{project.desc}</p>
              <a href={project.url} className="text-blue-600 text-sm underline mt-2 inline-block" target="_blank">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="text-center space-y-4 pt-12">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {["Python", "SQL", "Pandas", "NumPy", "AWS (RDS, S3, Lambda)", "Tableau", "Scikit-learn", "Product Management", "Quantitative Research", "Strategic Thinking", "GTM Strategy", "Storytelling"].map(skill => (
            <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="text-center pt-12">
        <h2 className="text-2xl font-semibold mb-4">Resumes</h2>
        <div className="flex justify-center flex-wrap gap-4">
          <a href="/Niraj_Patil_Resume.pdf" download className="px-4 py-2 border rounded shadow hover:bg-gray-100">Data/Quant Resume</a>
          <a href="/Niraj_Patil_Resume_Product.pdf" download className="px-4 py-2 border rounded shadow hover:bg-gray-100">Product/Tech Resume</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center pt-12">
        <h2 className="text-2xl font-semibold mb-2">Let's Connect</h2>
        <p className="text-sm mb-4">Whether you're hiring, collaborating, or just exploring ideas — reach out!</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:bnirajpatil9@gmail.com" className="px-4 py-2 border rounded shadow hover:bg-gray-100">Email</a>
          <a href="https://linkedin.com/in/nirajpatil01" target="_blank" className="px-4 py-2 border rounded shadow hover:bg-gray-100">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}