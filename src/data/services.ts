import React from 'react';
import { Settings, Code, Link, Zap, LifeBuoy, LineChart } from 'lucide-react';

export const servicesData = [
  {
    id: 'salesforce-implementation',
    title: 'Salesforce Implementation',
    shortDescription: 'End-to-end setup, configuration, and deployment tailored to business needs.',
    icon: 'Settings',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    overview: 'Set up Salesforce with a structured, scalable foundation tailored to your business processes and long-term growth. We handle end-to-end Salesforce setup, including discovery, configuration, migration planning, and go-live readiness. This service is best for organizations starting with Salesforce or restructuring their CRM foundation.',
    benefits: [
      'Structured, scalable CRM foundation',
      'Seamless data migration',
      'Faster time-to-value',
      'Tailored to your unique business processes',
      'High user adoption from day one',
      'Reduced implementation risk'
    ],
    whatWeDeliver: [
      'Discovery and requirement mapping',
      'Custom setup and configuration',
      'Data migration and cleansing',
      'User roles and security setup',
      'User enablement and training',
      'Testing and deployment',
      'Post-go-live support'
    ],
    useCases: [
      'A growing company moving from spreadsheets to a centralized CRM.',
      'An enterprise replacing a legacy CRM with Salesforce.',
      'A business needing a complete restructuring of their existing Salesforce org.'
    ],
    process: [
      { name: 'Discovery', desc: 'Deep dive into your business processes and goals.' },
      { name: 'Design', desc: 'Architecting the Salesforce solution and data model.' },
      { name: 'Build', desc: 'Configuring and customizing the platform.' },
      { name: 'Test', desc: 'Rigorous QA and user acceptance testing.' },
      { name: 'Deploy', desc: 'Smooth go-live and user onboarding.' }
    ],
    whyChooseUs: [
      'Salesforce-focused expertise',
      'Business-first implementation approach',
      'Proven delivery methodology',
      'Focus on long-term scalability'
    ]
  },
  {
    id: 'customization-development',
    title: 'Customization & Development',
    shortDescription: 'Custom objects, flows, Apex, Lightning components, and tailored CRM experiences.',
    icon: 'Code',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    overview: 'Tailor Salesforce to your exact business workflows with custom objects, page layouts, flows, Apex, Lightning components, and custom experiences. This service is best for businesses needing platform flexibility beyond standard out-of-the-box setup to support complex or unique operational requirements.',
    benefits: [
      'Perfect alignment with unique workflows',
      'Enhanced user interface and experience',
      'Automation of complex business logic',
      'Extended platform capabilities',
      'Improved data capture and validation',
      'Future-proof custom architecture'
    ],
    whatWeDeliver: [
      'Custom object and field creation',
      'Advanced page layouts and Lightning pages',
      'Apex triggers and classes',
      'Lightning Web Components (LWC)',
      'Visualforce pages (if required)',
      'Custom application development',
      'Code review and optimization'
    ],
    useCases: [
      'A business needing a custom quoting tool built directly inside Salesforce.',
      'An organization requiring complex validation rules and automated calculations.',
      'A company wanting a bespoke Lightning interface for a specific user group.'
    ],
    process: [
      { name: 'Requirements', desc: 'Gathering detailed technical requirements.' },
      { name: 'Architecture', desc: 'Designing the custom solution and data flow.' },
      { name: 'Development', desc: 'Writing clean, scalable Apex and LWC code.' },
      { name: 'Testing', desc: 'Unit testing and sandbox validation.' },
      { name: 'Release', desc: 'Deploying to production with minimal disruption.' }
    ],
    whyChooseUs: [
      'Certified Salesforce Developers',
      'Adherence to Salesforce best practices',
      'Focus on declarative over programmatic when possible',
      'Clean, documented, and maintainable code'
    ]
  },
  {
    id: 'integration-services',
    title: 'Integration Services',
    shortDescription: 'Connect Salesforce with third-party platforms, ERPs, APIs, and internal tools.',
    icon: 'Link',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    overview: 'Connect Salesforce with third-party systems, ERPs, APIs, finance tools, support tools, and internal systems. We help improve data flow and reduce disconnected processes. This is best for organizations working across multiple platforms that need a single source of truth.',
    benefits: [
      'Elimination of data silos',
      'Real-time data synchronization',
      'Reduced manual data entry',
      '360-degree view of the customer',
      'Streamlined cross-department workflows',
      'Improved data accuracy'
    ],
    whatWeDeliver: [
      'Integration architecture planning',
      'API development and configuration',
      'Middleware setup (MuleSoft, Boomi, etc.)',
      'Point-to-point custom integrations',
      'AppExchange app installation and setup',
      'Data mapping and transformation',
      'Integration monitoring and error handling'
    ],
    useCases: [
      'A business that needs Salesforce connected with their ERP (e.g., NetSuite, SAP).',
      'An organization syncing marketing data between Salesforce and Marketo/HubSpot.',
      'A company integrating their proprietary internal software with Salesforce via API.'
    ],
    process: [
      { name: 'Assessment', desc: 'Evaluating systems, APIs, and data structures.' },
      { name: 'Mapping', desc: 'Defining data flows and transformation rules.' },
      { name: 'Integration', desc: 'Building the connections and middleware.' },
      { name: 'Validation', desc: 'End-to-end testing of data synchronization.' },
      { name: 'Monitoring', desc: 'Setting up alerts and ongoing maintenance.' }
    ],
    whyChooseUs: [
      'Deep expertise in REST/SOAP APIs',
      'Experience with major middleware platforms',
      'Secure and scalable integration designs',
      'Thorough data governance practices'
    ]
  },
  {
    id: 'automation-workflows',
    title: 'Automation & Workflows',
    shortDescription: 'Streamline business processes using flows, approvals, and intelligent automation.',
    icon: 'Zap',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    overview: 'Streamline your operations using Salesforce Flow, approval automation, task routing, notifications, and process optimization. We help reduce manual effort and improve operational consistency. This service is best for businesses needing scalable process efficiency and fewer manual bottlenecks.',
    benefits: [
      'Significant reduction in manual tasks',
      'Faster process execution',
      'Consistent adherence to business rules',
      'Fewer human errors',
      'Improved employee productivity',
      'Better visibility into process bottlenecks'
    ],
    whatWeDeliver: [
      'Process mapping and optimization',
      'Salesforce Flow design and build',
      'Complex approval processes',
      'Automated email alerts and notifications',
      'Task and record routing',
      'Migration from legacy Workflow Rules/Process Builder',
      'Automation troubleshooting'
    ],
    useCases: [
      'A sales team needing automated discount approvals based on deal size.',
      'A service team requiring automated case routing to specific agents based on skills.',
      'An operations team wanting to automatically generate renewal opportunities.'
    ],
    process: [
      { name: 'Analyze', desc: 'Identifying manual bottlenecks and inefficiencies.' },
      { name: 'Design', desc: 'Mapping the automated workflow logic.' },
      { name: 'Build', desc: 'Creating Flows and approval processes.' },
      { name: 'Test', desc: 'Verifying logic across different scenarios.' },
      { name: 'Optimize', desc: 'Refining based on user feedback.' }
    ],
    whyChooseUs: [
      'Masters of Salesforce Flow',
      'Focus on simplifying complex logic',
      'Future-proof automation design',
      'Thorough testing to prevent infinite loops'
    ]
  },
  {
    id: 'support-managed-services',
    title: 'Support & Managed Services',
    shortDescription: 'Ongoing maintenance, issue resolution, improvements, and admin support.',
    icon: 'LifeBuoy',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    overview: 'Ensure your Salesforce org runs smoothly with ongoing support, administration, maintenance, issue resolution, enhancements, and governance. This is best for companies that need a reliable Salesforce partner after implementation to handle day-to-day requests and continuous improvements.',
    benefits: [
      'Predictable IT and support costs',
      'Access to a full team of Salesforce experts',
      'Faster issue resolution',
      'Continuous platform enhancements',
      'Proactive system monitoring',
      'Reduced burden on internal teams'
    ],
    whatWeDeliver: [
      'Dedicated Salesforce administration',
      'User management and security updates',
      'Report and dashboard creation',
      'Bug fixes and troubleshooting',
      'Minor enhancements and feature rollouts',
      'Release management (Spring, Summer, Winter)',
      'Data quality monitoring'
    ],
    useCases: [
      'A company without an internal Salesforce Admin needing day-to-day support.',
      'An enterprise needing to augment their internal team with specialized skills.',
      'A business requiring regular updates and maintenance to keep their org healthy.'
    ],
    process: [
      { name: 'Onboarding', desc: 'Auditing your org and setting up support channels.' },
      { name: 'Triage', desc: 'Categorizing and prioritizing incoming requests.' },
      { name: 'Resolve', desc: 'Fixing issues and fulfilling admin tasks.' },
      { name: 'Enhance', desc: 'Delivering continuous minor improvements.' },
      { name: 'Review', desc: 'Monthly reporting on support metrics and org health.' }
    ],
    whyChooseUs: [
      'Responsive and reliable support team',
      'Flexible managed service tiers',
      'Proactive rather than just reactive',
      'Clear communication and SLAs'
    ]
  },
  {
    id: 'crm-advisory-optimization',
    title: 'CRM Advisory & Optimization',
    shortDescription: 'Strategic consulting to improve adoption, reporting, and business performance.',
    icon: 'LineChart',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    overview: 'Maximize your Salesforce ROI through strategic consulting, process review, reporting improvement, user adoption strategies, and overall CRM optimization. This service is best for businesses that already use Salesforce but feel they aren\'t getting the full value, struggling with adoption, or facing technical debt.',
    benefits: [
      'Higher user adoption rates',
      'Clearer, more actionable reporting',
      'Reduction of technical debt',
      'Alignment of CRM with current business goals',
      'Improved data hygiene',
      'Clear roadmap for future enhancements'
    ],
    whatWeDeliver: [
      'Comprehensive org health audits',
      'Business process reviews',
      'User adoption strategies and training',
      'Data cleanup and governance plans',
      'Advanced reporting and dashboard design',
      'License optimization analysis',
      'Strategic CRM roadmapping'
    ],
    useCases: [
      'A company whose sales team refuses to use Salesforce due to a clunky setup.',
      'An executive team unable to get reliable forecasting reports from the system.',
      'An organization with a 5-year-old Salesforce org full of unused custom fields and technical debt.'
    ],
    process: [
      { name: 'Audit', desc: 'Deep technical and functional review of your org.' },
      { name: 'Interview', desc: 'Speaking with stakeholders and end-users.' },
      { name: 'Strategize', desc: 'Developing an optimization roadmap.' },
      { name: 'Execute', desc: 'Implementing quick wins and long-term fixes.' },
      { name: 'Measure', desc: 'Tracking adoption and performance improvements.' }
    ],
    whyChooseUs: [
      'Strategic, business-first perspective',
      'Experience rescuing struggling Salesforce orgs',
      'Focus on user experience and adoption',
      'Actionable, prioritized recommendations'
    ]
  }
];
