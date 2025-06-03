import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-8 space-y-12 font-sans">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <img
          src="/chicago-header.jpg"
          alt="Niraj Patil Header"
          className="mx-auto rounded-2xl shadow-lg max-h-96 object-cover"
        />
        <h1 className="text-4xl font-bold">Niraj Patil</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learning to Build Intelligent Systems at the Intersection of Markets, Data, Cloud, and Strategy.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/Nstar9" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Github className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://linkedin.com/in/nirajpatil01" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center max-w-3xl mx-auto pt-12 space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-sm">
          I'm a mechanical engineer turned tech strategist with an MS in Technology Management, passionate about building intelligent systems at the intersection of markets, data, cloud, and strategy. While I don't come with decades of experience, I bring something equally valuable: vision, velocity, and a deep discomfort with mediocrity.
        </p>
        <p className="text-sm">
          Technical Foundation: Proficient in Python, SQL, and AWS/cloud infrastructure with hands-on experience in product management and consulting. I'm especially drawn to applying quantitative methods, algorithmic thinking, and product intuition to understand market behavior, manage risk, and drive strategic decision-making.
        </p>
        <p className="text-sm">
          Leadership & Mindset: Strong leadership and people management skills fuel my approach to problem-solving. I thrive at the intersection of curiosity and execution—whether it's architecting cloud solutions, analyzing market data, or leading cross-functional teams toward ambitious goals.
        </p>
        <p className="text-sm">
          Focus Areas: Particularly interested in tech and fintech opportunities where I can leverage my unique blend of engineering rigor, strategic thinking, and product sense to create meaningful impact.
        </p>
        <p className="text-sm">
          I'm a voracious reader, pragmatic thinker, and relentless optimist who believes the best solutions emerge when you combine deep technical skills with strategic vision. If given the chance, I'll bring that same tenacious energy to your team. Let's build something unforgettable.
        </p>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Insider Trading Alpha Detector</h3><p className="mt-2 text-sm">Real-time pipeline to detect alpha from insider trading data.</p><a href="https://github.com/Nstar9/insider-intel" className="text-blue-600 text-sm underline mt-2 inline-block" target="_blank">View Project →</a></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Pairs Trading Quant Research</h3><p className="mt-2 text-sm">Identified cointegrated pairs and tested mean-reversion strategy with 12.5% annualized returns.</p><a href="https://github.com/Nstar9/Pairs-Trading-Quant-Research" className="text-blue-600 text-sm underline mt-2 inline-block" target="_blank">View Project →</a></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Federated Healthcare System</h3><p className="mt-2 text-sm">Built a privacy-first recommendation system using federated learning on real patient data.</p><a href="https://github.com/Nstar9/Federated-Healthcare-Recommendation-System" className="text-blue-600 text-sm underline mt-2 inline-block" target="_blank">View Project →</a></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Market Making Strategy (RL)</h3><p className="mt-2 text-sm">Built an order book simulator using LSTM and reinforcement learning to optimize trading spreads.</p><a href="https://github.com/Nstar9/Market-Making-Strategy" className="text-blue-600 text-sm underline mt-2 inline-block" target="_blank">View Project →</a></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">AWS Retail Data Pipeline</h3><p className="mt-2 text-sm">Simulated real-world retail analytics using Lambda, Step Functions, and SNS notifications.</p><a href="https://github.com/Nstar9/cloud-retail-aws" className="text-blue-600 text-sm underline mt-2 inline-block" target="_blank">View Project →</a></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Pharma KPI Dashboard</h3><p className="mt-2 text-sm">Designed an interactive Tableau dashboard to monitor regional KPIs for a pharmaceutical brand.</p><a href="https://github.com/Nstar9/pharma-kpi-dashboard" className="text-blue-600 text-sm underline mt-2 inline-block" target="_blank">View Project →</a></CardContent></Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="text-center space-y-4 pt-12">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="bg-gray-100 px-3 py-1 rounded-full">Python</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">SQL</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Pandas</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">NumPy</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">AWS (RDS, S3, Lambda)</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Tableau</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Scikit-learn</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Product Management</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Quantitative Research</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Strategic Thinking</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">GTM Strategy</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">Storytelling</span>
        </div>
      </section>

      {/* Resume Section */}
      <section className="text-center pt-12">
        <h2 className="text-2xl font-semibold mb-4">Resumes</h2>
        <div className="flex justify-center flex-wrap gap-4">
          <a href="/Niraj_Patil_Resume.pdf" download>
            <Button variant="secondary">Data/Quant Resume</Button>
          </a>
          <a href="/Niraj_Patil_Resume_Product.pdf" download>
            <Button variant="secondary">Product/Tech Resume</Button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center pt-12">
        <h2 className="text-2xl font-semibold mb-2">Let's Connect</h2>
        <p className="text-sm mb-4">Whether you're hiring, collaborating, or just exploring ideas — reach out!</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:bnirajpatil9@gmail.com">
            <Button variant="outline">Email</Button>
          </a>
          <a href="https://linkedin.com/in/nirajpatil01" target="_blank">
            <Button variant="outline">LinkedIn</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
