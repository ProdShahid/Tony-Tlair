import React from 'react';
import { Cloud, Users, Globe, Mail, BarChart } from 'lucide-react';

export const solutionsData = [
  {
    id: 'sales-cloud',
    title: 'Sales Cloud',
    shortDescription: 'Accelerate sales cycles, manage pipelines efficiently, and close deals faster with tailored Sales Cloud implementations.',
    icon: 'Cloud',
    color: 'from-blue-50 to-white',
    iconColor: 'text-blue-600',
    overview: 'Empower your sales teams with a streamlined CRM experience for lead management, opportunity tracking, forecasting, and performance visibility. We help you configure Sales Cloud to accelerate sales cycles, manage pipelines efficiently, and close deals faster. This solution aligns your sales process with the platform\'s powerful capabilities.',
    benefits: [
      'Increased win rates and faster sales cycles',
      'Accurate, real-time sales forecasting',
      'Improved lead conversion rates',
      'Enhanced sales rep productivity',
      'Complete visibility into the sales pipeline',
      'Automated administrative tasks'
    ],
    whatWeDeliver: [
      'Lead and opportunity management setup',
      'Sales process mapping and alignment',
      'Forecasting and quota configuration',
      'Territory management implementation',
      'Sales productivity tools (e.g., Einstein Activity Capture)',
      'Custom sales dashboards and reports',
      'Mobile app configuration for field reps'
    ],
    useCases: [
      'A B2B company struggling to track leads from marketing to closed-won.',
      'A sales director needing accurate quarterly forecasting across multiple regions.',
      'A sales team spending too much time on manual data entry instead of selling.'
    ],
    process: [
      { name: 'Assess', desc: 'Understanding your unique sales methodology.' },
      { name: 'Configure', desc: 'Setting up leads, accounts, contacts, and opportunities.' },
      { name: 'Automate', desc: 'Building workflows to reduce manual data entry.' },
      { name: 'Report', desc: 'Creating dashboards for pipeline visibility.' },
      { name: 'Train', desc: 'Onboarding your sales team for maximum adoption.' }
    ],
    whyChooseUs: [
      'Deep understanding of complex B2B sales processes',
      'Focus on rep adoption and ease of use',
      'Expertise in advanced forecasting and territory management',
      'Proven track record of increasing sales velocity'
    ]
  },
  {
    id: 'service-cloud',
    title: 'Service Cloud',
    shortDescription: 'Deliver exceptional customer support, automate case management, and empower agents with a unified service console.',
    icon: 'Users',
    color: 'from-emerald-50 to-white',
    iconColor: 'text-emerald-600',
    overview: 'Transform your customer support operations with Service Cloud. We help you deliver exceptional customer support, automate case management, and empower agents with a unified service console. This solution focuses on case management, customer support workflows, SLAs, service operations, agent productivity, and better customer issue resolution.',
    benefits: [
      'Faster case resolution times',
      'Improved customer satisfaction (CSAT) scores',
      'Increased agent productivity and efficiency',
      'Consistent service across all channels (omnichannel)',
      'Automated SLA tracking and escalations',
      'Actionable insights into support performance'
    ],
    whatWeDeliver: [
      'Omnichannel routing setup (Email, Chat, Phone, Social)',
      'Service Console configuration',
      'Case management and entitlement processes',
      'Knowledge Base implementation',
      'Macros and quick text for agent efficiency',
      'CTI (Computer Telephony Integration) setup',
      'Service analytics and dashboards'
    ],
    useCases: [
      'A support team looking to manage cases, SLAs, and customer service operations efficiently.',
      'A call center needing a unified view of the customer across phone, email, and chat.',
      'A company wanting to launch a self-service knowledge base to deflect common tickets.'
    ],
    process: [
      { name: 'Map', desc: 'Defining your support channels and SLA requirements.' },
      { name: 'Build', desc: 'Configuring the Service Console and case routing.' },
      { name: 'Integrate', desc: 'Connecting telephony or other support tools.' },
      { name: 'Empower', desc: 'Setting up Knowledge and macros for agents.' },
      { name: 'Launch', desc: 'Going live with omnichannel support.' }
    ],
    whyChooseUs: [
      'Experts in complex omnichannel routing',
      'Focus on agent experience and productivity',
      'Experience integrating major CTI providers',
      'Data-driven approach to reducing case volume'
    ]
  },
  {
    id: 'experience-cloud',
    title: 'Experience Cloud',
    shortDescription: 'Build engaging portals and communities to connect with customers, partners, and employees seamlessly.',
    icon: 'Globe',
    color: 'from-indigo-50 to-white',
    iconColor: 'text-indigo-600',
    overview: 'Connect with your customers, partners, and employees seamlessly by building engaging portals and communities using Experience Cloud. We help you create branded digital experiences that extend the power of your CRM data outward, improving engagement, self-service, and collaboration.',
    benefits: [
      'Reduced support costs through self-service',
      'Increased partner channel sales',
      'Stronger customer engagement and loyalty',
      'Secure sharing of CRM data with external users',
      'Branded, mobile-responsive digital experiences',
      'Streamlined onboarding and collaboration'
    ],
    whatWeDeliver: [
      'Customer self-service portals',
      'Partner relationship management (PRM) communities',
      'Employee intranets and HR portals',
      'Custom branding and theme development',
      'Secure data sharing and visibility rules',
      'Integration with Knowledge and Case Management',
      'Community analytics and engagement tracking'
    ],
    useCases: [
      'A company needing a secure portal for partners to register deals and access marketing materials.',
      'A business wanting a customer portal where clients can view invoices, log support tickets, and read articles.',
      'An organization building an internal hub for employees to access HR resources and company news.'
    ],
    process: [
      { name: 'Strategy', desc: 'Defining the audience, goals, and user journeys.' },
      { name: 'Design', desc: 'Creating a branded, user-friendly interface.' },
      { name: 'Configure', desc: 'Setting up security, sharing rules, and components.' },
      { name: 'Content', desc: 'Populating the community with relevant data and articles.' },
      { name: 'Engage', desc: 'Launching and driving adoption among external users.' }
    ],
    whyChooseUs: [
      'Deep understanding of complex sharing and security models',
      'Expertise in both declarative and custom (LWC) community development',
      'Focus on creating intuitive, consumer-grade user experiences',
      'Proven strategies for driving community engagement'
    ]
  },
  {
    id: 'marketing-cloud',
    title: 'Marketing Cloud',
    shortDescription: 'Create personalized customer journeys, automate campaigns, and measure ROI across all digital channels.',
    icon: 'Mail',
    color: 'from-amber-50 to-white',
    iconColor: 'text-amber-600',
    overview: 'Create personalized customer journeys, automate campaigns, and measure ROI across all digital channels with Marketing Cloud (and Account Engagement/Pardot). We help you leverage customer data to deliver the right message at the right time, aligning marketing efforts with sales goals.',
    benefits: [
      'Highly personalized customer communications',
      'Automated, multi-channel marketing campaigns',
      'Improved lead generation and nurturing',
      'Better alignment between sales and marketing teams',
      'Clear visibility into marketing ROI',
      'Data-driven segmentation and targeting'
    ],
    whatWeDeliver: [
      'Marketing Cloud / Pardot implementation and configuration',
      'Journey Builder and Automation Studio setup',
      'Email studio configuration and template design',
      'Lead scoring and grading models',
      'Integration with Sales/Service Cloud (Marketing Cloud Connect)',
      'Preference center development',
      'Marketing analytics and reporting'
    ],
    useCases: [
      'A B2B company needing to nurture leads with automated email sequences before handing them to sales.',
      'A B2C brand wanting to send personalized SMS and email offers based on customer purchase history.',
      'A marketing team struggling to measure the impact of their campaigns on closed revenue.'
    ],
    process: [
      { name: 'Align', desc: 'Defining marketing goals and sales handoff processes.' },
      { name: 'Setup', desc: 'Configuring the platform and integrating with CRM.' },
      { name: 'Segment', desc: 'Building data extensions and audience segments.' },
      { name: 'Automate', desc: 'Designing journeys and automated campaigns.' },
      { name: 'Analyze', desc: 'Measuring performance and optimizing campaigns.' }
    ],
    whyChooseUs: [
      'Expertise bridging the gap between Marketing and Sales',
      'Deep technical knowledge of Marketing Cloud architecture',
      'Focus on data quality and segmentation strategy',
      'Experience with complex, multi-channel journeys'
    ]
  },
  {
    id: 'crm-strategy',
    title: 'CRM Strategy',
    shortDescription: 'Aligning CRM with business goals, defining roadmaps, and improving process design.',
    icon: 'BarChart',
    color: 'from-purple-50 to-white',
    iconColor: 'text-purple-600',
    overview: 'Ensure your Salesforce investment drives real business value by aligning your CRM strategy with your overarching business goals. We help you define a clear roadmap, improve process design, establish governance, and drive long-term CRM maturity and user adoption.',
    benefits: [
      'Clear alignment between technology and business objectives',
      'Prioritized roadmap for future investments',
      'Stronger data governance and compliance',
      'Higher return on investment (ROI) from Salesforce',
      'Improved cross-functional collaboration',
      'Sustainable, scalable CRM architecture'
    ],
    whatWeDeliver: [
      'Executive workshops and goal alignment',
      'Current state assessment and maturity scoring',
      'Multi-year CRM roadmap development',
      'Center of Excellence (CoE) setup and governance frameworks',
      'Change management and communication plans',
      'KPI definition and measurement strategies',
      'Vendor and AppExchange evaluation'
    ],
    useCases: [
      'An enterprise organization needing a unified CRM strategy across multiple disparate business units.',
      'A company preparing for a major digital transformation and needing a technology roadmap.',
      'A business struggling with low adoption and needing a comprehensive change management plan.'
    ],
    process: [
      { name: 'Discover', desc: 'Understanding executive vision and business challenges.' },
      { name: 'Assess', desc: 'Evaluating current systems, processes, and maturity.' },
      { name: 'Define', desc: 'Creating the future state vision and KPIs.' },
      { name: 'Plan', desc: 'Developing a phased, actionable roadmap.' },
      { name: 'Govern', desc: 'Establishing rules for ongoing management and success.' }
    ],
    whyChooseUs: [
      'Senior-level consultants with deep business acumen',
      'Holistic approach combining people, process, and technology',
      'Proven frameworks for establishing governance and CoEs',
      'Focus on measurable business outcomes, not just technical features'
    ]
  }
];
