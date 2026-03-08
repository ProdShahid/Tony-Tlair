import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import * as Icons from 'lucide-react';

export function Services() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Our Salesforce Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            From implementation and customization to integration, automation, and support, Revolt Ltd provides comprehensive Salesforce services tailored to your business goals.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <p className="text-slate-600 leading-relaxed flex-grow mb-8">
                    {service.shortDescription}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex justify-center items-center gap-2 w-full bg-slate-50 text-blue-600 border border-slate-200 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all mt-auto"
                  >
                    View Service Details
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Partner With Us?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            We don't just write code; we solve business problems. Our team of certified Salesforce experts focuses on delivering scalable, maintainable solutions that drive real ROI.
          </p>
          <Link 
            to="/#contact"
            className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
