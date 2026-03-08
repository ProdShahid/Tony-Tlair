import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Wrench, CheckCircle, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Search className="w-6 h-6 text-blue-600" />,
    title: "Discovery",
    description: "Understand business goals, systems, and challenges."
  },
  {
    number: "02",
    icon: <PenTool className="w-6 h-6 text-cyan-600" />,
    title: "Strategy & Design",
    description: "Define Salesforce architecture and implementation roadmap."
  },
  {
    number: "03",
    icon: <Wrench className="w-6 h-6 text-indigo-600" />,
    title: "Build & Configure",
    description: "Implement, customize, and integrate required solutions."
  },
  {
    number: "04",
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
    title: "Testing & Deployment",
    description: "Validate quality, train users, and go live smoothly."
  },
  {
    number: "05",
    icon: <RefreshCw className="w-6 h-6 text-purple-600" />,
    title: "Support & Optimization",
    description: "Improve adoption, performance, and long-term ROI."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">How We Deliver Value</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A proven, structured approach to ensure your Salesforce implementation is successful, scalable, and aligned with your business objectives.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full hover:shadow-lg transition-all duration-300 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
