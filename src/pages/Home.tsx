import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { solutionsData } from '../data/solutions';
import * as Icons from 'lucide-react';

export function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Overview */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Salesforce Services</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide tailored Salesforce services to help organizations streamline operations, improve customer engagement, and unlock the full value of their CRM investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow mb-6">
                    {service.shortDescription}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors mt-auto"
                  >
                    Learn More <Icons.ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Salesforce Expertise Across Core Business Functions</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in the core Salesforce clouds, ensuring your business leverages the right tools to drive growth and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => {
              const Icon = Icons[solution.icon as keyof typeof Icons] as React.ElementType;
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${solution.color} rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${solution.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{solution.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow mb-6">
                    {solution.shortDescription}
                  </p>
                  <Link 
                    to={`/solutions/${solution.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors mt-auto"
                  >
                    Explore Solution <Icons.ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <Contact />
    </>
  );
}
