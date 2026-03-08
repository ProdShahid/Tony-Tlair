import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, Briefcase, Cpu, ShieldCheck, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-6 h-6 text-blue-400" />,
    title: "Salesforce Domain Expertise",
    description: "Deep knowledge across the Salesforce ecosystem to deliver best-in-class solutions."
  },
  {
    icon: <Target className="w-6 h-6 text-cyan-400" />,
    title: "Tailored Implementation",
    description: "We build solutions designed specifically for your unique business processes."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
    title: "Business-First Mindset",
    description: "We focus on your business goals first, then align the technology to achieve them."
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    title: "Focus on Automation",
    description: "Eliminate manual tasks and drive efficiency with intelligent workflows."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    title: "Reliable Ongoing Support",
    description: "Dedicated managed services to keep your CRM running smoothly and securely."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business without technical debt."
  }
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Why Businesses Choose Revolt</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            We don't just implement software; we partner with you to transform how your business operates, sells, and serves customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-100">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
