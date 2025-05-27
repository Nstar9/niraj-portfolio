import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-6 md:p-12 space-y-16 font-sans">

      {/* HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Niraj Patil</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Quant, Product, and Code — Building at the intersection of Markets, Math, and Meaning.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Nstar9" target="_blank" rel="noopener noreferrer">
            <button className="border px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">GitHub</button>
          </a>
          <a href="https://linkedin.com/in/nirajpatil01" target="_blank" rel="noopener noreferrer">
            <button className="border px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">LinkedIn</button>
          </a>
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-3xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-sm">
          From Mechanical Engineering in Mumbai to Technology Management at UIUC — I blend quantitative reasoning, product thinking,
          and data science to build intelligent systems. Whether it’s decoding insider trades, simulating markets, or shipping AWS pipelines,
          my goal is to solve real problems with smart code.
        </p>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-5">
            <h3 className="text-xl font-bold">Insider Alpha Detector</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Real-time pipeline analyzing SEC insider trading for alpha signals across 60+ firms.
            </p>
            <a href="https://github.com/Nstar9/insider-intel" target="_blank" className="text-blue-500 text-sm underline mt-2 inline-block">View Project →</a>
          </div>
          <div className="border rounded-lg p-5">
            <h3 className="text-xl font-bold">Pairs Trading Strategy</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Built and backtested mean-reversion strategy using cointegration; 12.5% annualized returns.
            </p>
            <a href="https://github.com/Nstar9/Pairs-Trading-Quant-Research" target="_blank" className="text-blue-500 text-sm underline mt-2 inline-block">View Project →</a>
          </div>
          <div className="border rounded-lg p-5">
            <h3 className="text-xl font-bold">AWS Retail Pipeline</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Cloud-based simulation of retail analytics flow using S3, Lambda, RDS, and Step Functions.
            </p>
            <a href="https://github.com/Nstar9" target="_blank" className="text-blue-500 text-sm underline mt-2 inline-block">View Repo →</a>
          </div>
        </div>
      </motion.section>

      {/* BLOG SECTION */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-3xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-semibold">Blog</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Coming soon: Short essays on trading, product, and the art of building for impact.
        </p>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-sm mb-4">Let’s build something together. Reach out!</p>
        <a href="mailto:nirajp2@illinois.edu">
          <button className="border px-6 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Email Me</button>
        </a>
      </motion.section>

      {/* FOOTER */}
      <footer className="pt-12 text-center text-xs text-gray-400">
        Built by Niraj Patil • UIUC MSTM • 2025
      </footer>
    </div>
  );
}
