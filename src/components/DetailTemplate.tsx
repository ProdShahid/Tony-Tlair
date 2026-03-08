import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Send, AlertCircle } from 'lucide-react';

interface DetailTemplateProps {
  type: 'Service' | 'Solution';
  data: any;
}

export function DetailTemplate({ type, data }: DetailTemplateProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: data.title,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Update form state when data changes (e.g., navigating between detail pages)
  useEffect(() => {
    setFormState(prev => ({ ...prev, service: data.title }));
  }, [data.title]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setSubmitError('Form submission is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your environment variables.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Inquiry for ${data.title} from ${formState.name}`,
          from_name: 'Revolt Ltd Website',
          ...formState,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', company: '', phone: '', service: data.title, message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const parentPath = type === 'Service' ? '/services' : '/solutions';
  const parentName = type === 'Service' ? 'Services' : 'Solutions';

  return (
    <div className="pt-24 pb-20">
      {/* 1. Page Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-medium text-sm mb-6 border border-slate-700">
              Salesforce {type}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              {data.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact-inquiry" className="inline-flex justify-center items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
                Talk to Experts
              </a>
              <a href="/#contact" className="inline-flex justify-center items-center bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to={parentPath} className="hover:text-blue-600 transition-colors">{parentName}</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-slate-900 font-medium">{data.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-16">
            {/* 3. Basic Overview */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {data.overview}
              </p>
            </section>

            {/* 4. Key Business Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Business Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. What Revolt Ltd Delivers */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What We Deliver</h2>
              <ul className="space-y-4">
                {data.whatWeDeliver.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-4 text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. Typical Use Cases */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Typical Use Cases</h2>
              <div className="space-y-6">
                {data.useCases.map((useCase: string, index: number) => (
                  <div key={index} className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    <p className="text-slate-800 italic">"{useCase}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            {/* 7. Process / Approach */}
            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Approach</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {data.process.map((step: any, index: number) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                      {index + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-1">{step.name}</h4>
                      <p className="text-sm text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Why Choose Revolt Ltd */}
            <section className="bg-slate-900 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {data.whyChooseUs.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </div>

      {/* 9. CTA Banner */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for expert help with {data.title}?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's discuss how we can tailor this {type.toLowerCase()} to drive measurable results for your business.
          </p>
          <a href="#contact-inquiry" className="inline-flex justify-center items-center bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Book a Consultation
          </a>
        </div>
      </section>

      {/* 10. Contact / Inquiry Section */}
      <section id="contact-inquiry" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Inquire About {data.title}</h2>
            <p className="text-slate-600">
              Fill out the form below and our experts will get back to you within 1 business day.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            {isSuccess ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent Successfully!</h3>
                <p className="text-slate-600">
                  Thank you for your interest in {data.title}. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm">{submitError}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested In *</label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    required
                    readOnly
                    value={formState.service}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-100 text-slate-600 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white resize-none"
                    placeholder="Tell us about your specific needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Inquiries are sent directly to <a href="mailto:contact@revolt.works" className="text-blue-600 hover:underline">contact@revolt.works</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
