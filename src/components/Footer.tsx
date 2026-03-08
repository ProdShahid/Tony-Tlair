import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 bg-white p-3 rounded-xl inline-block">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Revolt LLC delivers Salesforce consulting, implementation, customization, integration, and managed support services for modern businesses.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/solutions" className="text-slate-400 hover:text-white transition-colors text-sm">Solutions</Link></li>
              <li><a href="/#about" className="text-slate-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="/#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/salesforce-implementation" className="text-slate-400 hover:text-white transition-colors text-sm">Salesforce Implementation</Link></li>
              <li><Link to="/services/customization-development" className="text-slate-400 hover:text-white transition-colors text-sm">Customization & Development</Link></li>
              <li><Link to="/services/integration-services" className="text-slate-400 hover:text-white transition-colors text-sm">Integration Services</Link></li>
              <li><Link to="/services/automation-workflows" className="text-slate-400 hover:text-white transition-colors text-sm">Automation & Workflows</Link></li>
              <li><Link to="/services/support-managed-services" className="text-slate-400 hover:text-white transition-colors text-sm">Support & Managed Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-slate-400 text-sm shrink-0">Address:</span>
                <span className="text-slate-300 text-sm">410 Wisconsin Ave, Wisconsin Dells, WI 53965, USA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 text-sm shrink-0">Email:</span>
                <a href="mailto:contact@revolt.works" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  contact@revolt.works
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 text-sm shrink-0">Hours:</span>
                <span className="text-slate-300 text-sm">Mon–Fri, 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Revolt LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
