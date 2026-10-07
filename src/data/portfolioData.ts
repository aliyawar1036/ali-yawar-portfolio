export type ProjectFilterCategory =
  | 'ALL'
  | 'AI AGENTS'
  | 'LEAD GENERATION'
  | 'EMAIL AUTOMATION'
  | 'BUSINESS AUTOMATION'
  | 'MARKETING AUTOMATION'
  | 'API AUTOMATION';

export interface WorkflowNode {
  id: string;
  label: string;
  type: 'trigger' | 'ai' | 'decision' | 'action' | 'database' | 'approval' | 'notification';
  description: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  filterTags: ProjectFilterCategory[];
  description: string;
  problem: string;
  solution: string;
  workflow: WorkflowNode[];
  features: string[];
  technologies: string[];
  architectureSummary: string;
  disclaimer?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyWorkItem {
  number: string;
  title: string;
  description: string;
}

export interface ClientStepItem {
  step: string;
  title: string;
  description: string;
}

export interface SocialLinkPlaceholder {
  platform: string;
  label: string;
  placeholderNote: string;
  href: string;
  isExternal?: boolean;
}

export const PERSONAL_BRAND = {
  name: 'Ali Yawar',
  title: 'AI Automation Engineer & AI Agent Developer',
  primaryPositioning:
    'I build AI-powered automation systems that eliminate repetitive work, connect business tools, and help businesses operate more efficiently.',
  shortPositioning: 'Building AI systems that work while you sleep.',
  heroLabel: 'AI Automation Engineer',
  heroHeadline: 'I Build AI Systems That Work While You Sleep.',
  heroSubheadline:
    'I design and build AI agents, n8n automations, lead generation systems, intelligent assistants, and business workflows that turn repetitive processes into automated systems.',
  profilePhotoUrl: `${import.meta.env.BASE_URL}assets/profile.jpg`,
  heroTechLine: [
    'n8n',
    'AI Agents',
    'Python',
    'APIs',
    'Gmail',
    'Telegram',
    'Google Sheets',
    'Apify',
  ],
};

export const SOCIAL_LINKS: SocialLinkPlaceholder[] = [
  {
    platform: 'GitHub',
    label: 'GitHub',
    placeholderNote: 'github.com/aliyawar1036',
    href: 'https://github.com/aliyawar1036',
    isExternal: true,
  },
  {
    platform: 'LinkedIn',
    label: 'LinkedIn',
    placeholderNote: 'Add your link',
    href: '#contact',
    isExternal: false,
  },
  {
    platform: 'Email',
    label: 'Email',
    placeholderNote: 'aliyawar1036@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=aliyawar1036@gmail.com',
    isExternal: true,
  },
  {
    platform: 'WhatsApp',
    label: 'WhatsApp',
    placeholderNote: '03046144227',
    href: 'https://wa.me/923046144227',
    isExternal: true,
  },
];

export const ABOUT_FOCUS_AREAS = [
  'AI Automation',
  'AI Agents',
  'n8n Workflow Development',
  'Lead Generation',
  'Sales Automation',
  'Email Automation',
  'Business Process Automation',
  'API Integrations',
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'AI Agents',
    description:
      'Build intelligent AI agents that understand requests, make decisions, use tools, connect to APIs, and perform actions.',
  },
  {
    number: '02',
    title: 'n8n Workflow Automation',
    description:
      'Design and build reliable n8n workflows that connect business applications, APIs, AI models, databases, and communication tools.',
  },
  {
    number: '03',
    title: 'AI Lead Generation',
    description:
      'Build systems that discover, process, qualify, and organize potential business leads.',
  },
  {
    number: '04',
    title: 'AI Sales & Outreach',
    description:
      'Automate lead qualification, personalized outreach, approvals, reply tracking, and follow-ups.',
  },
  {
    number: '05',
    title: 'AI Email Automation',
    description:
      'Build intelligent email systems that classify messages, summarize conversations, generate responses, and automate email workflows.',
  },
  {
    number: '06',
    title: 'Business Process Automation',
    description:
      'Turn repetitive manual business processes into automated workflows using AI, APIs, databases, and business tools.',
  },
];

export const PROJECT_FILTERS: ProjectFilterCategory[] = [
  'ALL',
  'AI AGENTS',
  'LEAD GENERATION',
  'EMAIL AUTOMATION',
  'BUSINESS AUTOMATION',
  'MARKETING AUTOMATION',
  'API AUTOMATION',
];

export const PROJECTS: ProjectData[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'AI-Powered WhatsApp Appointment Booking Assistant',
    category: 'AI Agent · Appointment Automation',
    filterTags: ['ALL', 'AI AGENTS', 'BUSINESS AUTOMATION'],
    description:
      'An AI-powered WhatsApp assistant designed to communicate with customers, understand appointment requests, collect required information, check availability, and automate the appointment-booking process.',
    problem:
      'Handling incoming customer appointment requests manually over messaging apps requires constant back-and-forth to gather customer details, check schedule availability, and confirm bookings.',
    solution:
      'Designed to reduce repetitive manual work by deploying a conversational AI agent on WhatsApp that understands booking intent, collects required customer information, checks availability, and completes the appointment reservation workflow.',
    workflow: [
      {
        id: 'p1-n1',
        label: 'WhatsApp',
        type: 'trigger',
        description: 'Receives incoming customer messages and appointment inquiries via WhatsApp.',
      },
      {
        id: 'p1-n2',
        label: 'AI Agent',
        type: 'ai',
        description: 'Processes natural language conversation and maintains context with the customer.',
      },
      {
        id: 'p1-n3',
        label: 'Understand Request',
        type: 'ai',
        description: 'Identifies the customer intent to book, reschedule, or inquire about an appointment.',
      },
      {
        id: 'p1-n4',
        label: 'Collect Information',
        type: 'action',
        description: 'Prompts for and extracts required booking details such as name, preferred date, and service.',
      },
      {
        id: 'p1-n5',
        label: 'Availability',
        type: 'decision',
        description: 'Checks available time slots to ensure there are no scheduling conflicts.',
      },
      {
        id: 'p1-n6',
        label: 'Appointment',
        type: 'database',
        description: 'Records the structured appointment details into the booking schedule.',
      },
      {
        id: 'p1-n7',
        label: 'Confirmation',
        type: 'notification',
        description: 'Sends an automated confirmation message back to the customer on WhatsApp.',
      },
    ],
    features: [
      'Conversational AI',
      'Appointment booking',
      'Customer information collection',
      'Automated responses',
      'Workflow automation',
    ],
    technologies: ['AI', 'WhatsApp', 'n8n', 'Automation'],
    architectureSummary:
      'Connects WhatsApp messaging triggers with an n8n-orchestrated AI Agent that validates customer details, evaluates slot availability, and dispatches instant booking confirmations.',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'AI-Powered Lead Capture & Personalized Onboarding System',
    category: 'Lead Generation · Customer Onboarding',
    filterTags: ['ALL', 'LEAD GENERATION', 'BUSINESS AUTOMATION'],
    description:
      'An AI-powered system that captures potential customers, processes their information, understands their requirements, and creates a personalized onboarding workflow.',
    problem:
      'When new leads submit inquiries, manually reviewing their details, qualifying their needs, and preparing tailored onboarding materials slows down response times and creates inconsistent customer experiences.',
    solution:
      'Designed to reduce repetitive manual work by automatically capturing incoming lead data, using AI to analyze their specific business requirements, qualifying the prospect, and initiating a customized onboarding sequence.',
    workflow: [
      {
        id: 'p2-n1',
        label: 'Lead Source',
        type: 'trigger',
        description: 'Detects a new prospect submission from the designated lead intake channel.',
      },
      {
        id: 'p2-n2',
        label: 'Lead Capture',
        type: 'action',
        description: 'Extracts and normalizes contact details and inquiry inputs for structured processing.',
      },
      {
        id: 'p2-n3',
        label: 'AI Processing',
        type: 'ai',
        description: 'Analyzes the prospect information and understands their stated business requirements.',
      },
      {
        id: 'p2-n4',
        label: 'Lead Qualification',
        type: 'decision',
        description: 'Evaluates lead fit and categorizes the prospect based on their requirements.',
      },
      {
        id: 'p2-n5',
        label: 'Personalized Onboarding',
        type: 'action',
        description: 'Generates a tailored onboarding flow matched to the customer profile.',
      },
      {
        id: 'p2-n6',
        label: 'Database',
        type: 'database',
        description: 'Stores the processed lead profile, qualification status, and onboarding records.',
      },
    ],
    features: [
      'Automated lead capture',
      'AI processing',
      'Lead qualification',
      'Personalized onboarding',
      'Data management',
    ],
    technologies: ['AI', 'n8n', 'Automation'],
    architectureSummary:
      'Captures inbound prospect submissions and routes them through an AI analysis and qualification pipeline before triggering tailored onboarding steps and database persistence.',
  },
  {
    id: 'project-03',
    number: '03',
    title: 'AI Lead Finder',
    category: 'AI Lead Generation',
    filterTags: ['ALL', 'LEAD GENERATION', 'API AUTOMATION'],
    description:
      'An interactive lead-finding system that allows a user to specify the business type, location, number of leads, and service they want to offer before searching for and processing relevant businesses.',
    problem:
      'Searching for targeted local businesses across directories, copying contact details, and organizing prospect lists by location and niche is a slow, repetitive manual research process.',
    solution:
      'Designed to reduce repetitive manual work through an interactive Telegram interface where the user defines target criteria (business type, location, lead count, and offered service), triggering automated business discovery, AI processing, and structured storage in Google Sheets.',
    workflow: [
      {
        id: 'p3-n1',
        label: 'Telegram',
        type: 'trigger',
        description: 'Initiates the interactive lead search conversation through a Telegram interface.',
      },
      {
        id: 'p3-n2',
        label: 'Business Type',
        type: 'action',
        description: 'Collects the target industry or business category from the user.',
      },
      {
        id: 'p3-n3',
        label: 'Location',
        type: 'action',
        description: 'Captures the target city, region, or geographic area for the search.',
      },
      {
        id: 'p3-n4',
        label: 'Lead Count',
        type: 'action',
        description: 'Sets the number of business leads to retrieve in the current run.',
      },
      {
        id: 'p3-n5',
        label: 'Service',
        type: 'action',
        description: 'Records the specific service offering to align AI processing with user goals.',
      },
      {
        id: 'p3-n6',
        label: 'Business Search',
        type: 'action',
        description: 'Executes automated data extraction via Apify to discover matching businesses.',
      },
      {
        id: 'p3-n7',
        label: 'AI Processing',
        type: 'ai',
        description: 'Structures, cleans, and enriches the discovered business records using AI.',
      },
      {
        id: 'p3-n8',
        label: 'Lead Database',
        type: 'database',
        description: 'Saves the organized lead records directly into Google Sheets.',
      },
    ],
    features: [
      'Telegram interface',
      'Business type selection',
      'Location selection',
      'Lead quantity selection',
      'Service selection',
      'Business search',
      'AI processing',
      'Structured lead database',
    ],
    technologies: ['n8n', 'Telegram', 'AI', 'Apify', 'Google Sheets'],
    architectureSummary:
      'Combines a conversational Telegram input flow with Apify data extraction, AI record processing, and automated Google Sheets logging orchestrated inside n8n.',
  },
  {
    id: 'project-04',
    number: '04',
    title: 'AI Lead Qualification & Outreach System',
    category: 'Sales Automation',
    filterTags: ['ALL', 'LEAD GENERATION', 'EMAIL AUTOMATION', 'BUSINESS AUTOMATION'],
    description:
      'An AI-powered sales automation system that analyzes leads, determines qualification, identifies potential pain points, creates personalized outreach messages, manages approval, and handles follow-ups.',
    problem:
      'Sales teams spend significant time researching individual companies, identifying pain points, drafting custom outreach emails, and remembering to send timely follow-ups.',
    solution:
      'Designed to reduce repetitive manual work by reading leads from a database, using AI to evaluate qualification and company pain points, drafting personalized outreach messages, routing them for human approval, and automating email delivery and follow-ups.',
    workflow: [
      {
        id: 'p4-n1',
        label: 'Lead Database',
        type: 'trigger',
        description: 'Reads prospect records from Google Sheets to begin the qualification pipeline.',
      },
      {
        id: 'p4-n2',
        label: 'AI Qualification',
        type: 'ai',
        description: 'Evaluates prospect information to determine whether the lead meets qualification criteria.',
      },
      {
        id: 'p4-n3',
        label: 'Company Analysis',
        type: 'ai',
        description: 'Analyzes the target company context and business profile.',
      },
      {
        id: 'p4-n4',
        label: 'Pain Point',
        type: 'ai',
        description: 'Identifies relevant operational challenges or pain points the business may face.',
      },
      {
        id: 'p4-n5',
        label: 'Personalized Message',
        type: 'ai',
        description: 'Generates a tailored outreach email addressing the identified pain points.',
      },
      {
        id: 'p4-n6',
        label: 'Approval',
        type: 'approval',
        description: 'Pauses execution for human-in-the-loop review before any email is sent.',
      },
      {
        id: 'p4-n7',
        label: 'Outreach',
        type: 'action',
        description: 'Dispatches the approved personalized outreach email via Gmail.',
      },
      {
        id: 'p4-n8',
        label: 'Follow-up',
        type: 'notification',
        description: 'Tracks status and handles automated follow-up sequences when needed.',
      },
    ],
    features: [
      'AI lead qualification',
      'Company analysis',
      'Pain-point identification',
      'Personalized outreach',
      'Human approval',
      'Email outreach',
      'Follow-up automation',
    ],
    technologies: ['n8n', 'AI', 'Gmail', 'Google Sheets', 'Automation'],
    architectureSummary:
      'Integrates Google Sheets lead storage with multi-step AI analysis and copywriting, enforcing a human approval gate before sending outreach and follow-up emails through Gmail.',
  },
  {
    id: 'project-05',
    number: '05',
    title: 'AI Email Manager',
    category: 'AI Email Automation',
    filterTags: ['ALL', 'EMAIL AUTOMATION', 'AI AGENTS'],
    description:
      'An intelligent email management system that analyzes incoming emails, identifies category and priority, determines whether a response is required, generates suggested replies, and sends messages for human approval.',
    problem:
      'High-volume inboxes require constant manual sorting, filtering out spam, identifying urgent messages, drafting replies, and logging important communication threads.',
    solution:
      'Designed to reduce repetitive manual work by monitoring Gmail, classifying incoming emails by category and priority with AI, detecting whether a reply is needed, drafting suggested responses, requesting human approval via Telegram, and logging records to Google Sheets.',
    workflow: [
      {
        id: 'p5-n1',
        label: 'Gmail',
        type: 'trigger',
        description: 'Triggers when a new incoming email arrives in the connected Gmail inbox.',
      },
      {
        id: 'p5-n2',
        label: 'AI Classification',
        type: 'ai',
        description: 'Analyzes the email subject, sender, and body content using AI.',
      },
      {
        id: 'p5-n3',
        label: 'Category & Priority',
        type: 'decision',
        description: 'Assigns a category, detects spam, and determines the priority level of the message.',
      },
      {
        id: 'p5-n4',
        label: 'Response Decision',
        type: 'decision',
        description: 'Determines whether the email requires a reply and generates a suggested response.',
      },
      {
        id: 'p5-n5',
        label: 'Telegram Approval',
        type: 'approval',
        description: 'Sends the email summary and AI-drafted reply to Telegram for human approval.',
      },
      {
        id: 'p5-n6',
        label: 'Gmail',
        type: 'action',
        description: 'Sends the approved reply through Gmail once confirmed by the user.',
      },
      {
        id: 'p5-n7',
        label: 'Google Sheets',
        type: 'database',
        description: 'Logs the email classification, priority, and action status in Google Sheets.',
      },
    ],
    features: [
      'AI email classification',
      'Priority detection',
      'Spam detection',
      'Response-required detection',
      'AI-generated replies',
      'Human approval',
      'Gmail integration',
      'Google Sheets logging',
    ],
    technologies: ['n8n', 'AI', 'Gmail', 'Telegram', 'Google Sheets'],
    architectureSummary:
      'Connects Gmail inbound triggers to AI classification and reply generation in n8n, routing suggested responses to Telegram for human approval and recording activity in Google Sheets.',
  },
  {
    id: 'project-06',
    number: '06',
    title: 'Gmail Assistant',
    category: 'AI Agent · Email Automation',
    filterTags: ['ALL', 'AI AGENTS', 'EMAIL AUTOMATION'],
    description:
      'An AI-powered Gmail assistant designed to help automate email-related tasks such as understanding messages, generating responses, organizing information, and assisting with email workflows.',
    problem:
      'Managing daily email communication involves repetitive reading, interpreting context, drafting replies, and organizing message threads across the inbox.',
    solution:
      'Designed to reduce repetitive manual work by connecting an AI assistant directly to Gmail to analyze message content, decide on the appropriate email action, and assist with response generation and organization.',
    workflow: [
      {
        id: 'p6-n1',
        label: 'Gmail',
        type: 'trigger',
        description: 'Connects to Gmail to receive email messages and task context.',
      },
      {
        id: 'p6-n2',
        label: 'AI Assistant',
        type: 'ai',
        description: 'Processes the email thread using an AI agent configured for inbox assistance.',
      },
      {
        id: 'p6-n3',
        label: 'Analyze',
        type: 'ai',
        description: 'Extracts key points, questions, and intent from the email content.',
      },
      {
        id: 'p6-n4',
        label: 'Decide',
        type: 'decision',
        description: 'Determines the appropriate workflow path, organization step, or reply structure.',
      },
      {
        id: 'p6-n5',
        label: 'Action',
        type: 'action',
        description: 'Generates the response or executes the designated email workflow action in Gmail.',
      },
    ],
    features: [
      'Email understanding',
      'AI assistance',
      'Response generation',
      'Email automation',
      'Gmail integration',
    ],
    technologies: ['AI', 'Gmail', 'n8n', 'Automation'],
    architectureSummary:
      'Pairs Gmail integration with an AI assistant workflow that analyzes email context, determines the required action, and automates response drafting and inbox organization.',
  },
  {
    id: 'project-07',
    number: '07',
    title: 'AI-Powered Facebook Content Publishing System',
    category: 'AI Marketing Automation',
    filterTags: ['ALL', 'MARKETING AUTOMATION', 'BUSINESS AUTOMATION'],
    description:
      'An automated content system that uses AI to help generate social media content and automate the Facebook publishing workflow.',
    problem:
      'Consistently turning content ideas into written social media posts, reviewing drafts, and manually publishing them to Facebook takes ongoing time and effort.',
    solution:
      'Designed to reduce repetitive manual work by transforming initial content ideas into AI-generated drafts, routing them through a review and approval step, and automating the publishing workflow to Facebook.',
    workflow: [
      {
        id: 'p7-n1',
        label: 'Content Idea',
        type: 'trigger',
        description: 'Receives a new topic, prompt, or content idea to initiate the workflow.',
      },
      {
        id: 'p7-n2',
        label: 'AI Content Generation',
        type: 'ai',
        description: 'Generates structured social media post copy tailored for Facebook.',
      },
      {
        id: 'p7-n3',
        label: 'Review / Approval',
        type: 'approval',
        description: 'Allows human review and approval of the generated content before publishing.',
      },
      {
        id: 'p7-n4',
        label: 'Facebook',
        type: 'action',
        description: 'Connects to Facebook to prepare the approved post payload.',
      },
      {
        id: 'p7-n5',
        label: 'Publishing',
        type: 'notification',
        description: 'Publishes the approved content directly to the Facebook page.',
      },
    ],
    features: [
      'AI content generation',
      'Social media automation',
      'Content workflow',
      'Approval process',
      'Automated publishing',
    ],
    technologies: ['AI', 'Facebook', 'n8n', 'Automation'],
    architectureSummary:
      'Automates the content pipeline from initial idea to AI post generation, human approval verification, and direct Facebook publishing.',
  },
  {
    id: 'project-08',
    number: '08',
    title: 'AI Weather Report Automation',
    category: 'API Automation · AI Automation',
    filterTags: ['ALL', 'API AUTOMATION'],
    description:
      'An automated weather reporting workflow that retrieves weather information from an API, processes the data, and generates an easy-to-understand weather report.',
    problem:
      'Checking raw weather data feeds and manually summarizing conditions into clear, readable updates on a recurring schedule is repetitive.',
    solution:
      'Designed to reduce repetitive manual work by running on an automated schedule, fetching live meteorological data from a Weather API, processing the parameters, using AI to generate a clear natural-language report, and sending an automated notification.',
    workflow: [
      {
        id: 'p8-n1',
        label: 'Schedule',
        type: 'trigger',
        description: 'Triggers the automation workflow automatically at the configured time interval.',
      },
      {
        id: 'p8-n2',
        label: 'Weather API',
        type: 'action',
        description: 'Fetches current weather metrics and forecast data from an external Weather API.',
      },
      {
        id: 'p8-n3',
        label: 'Data Processing',
        type: 'action',
        description: 'Extracts and formats relevant temperature, condition, and forecast variables.',
      },
      {
        id: 'p8-n4',
        label: 'AI Report',
        type: 'ai',
        description: 'Transforms structured weather data into an easy-to-understand summary report.',
      },
      {
        id: 'p8-n5',
        label: 'Notification',
        type: 'notification',
        description: 'Delivers the generated AI weather report to the designated notification channel.',
      },
    ],
    features: [
      'Weather API integration',
      'Scheduled automation',
      'Data processing',
      'AI-generated reports',
      'Automated notification',
    ],
    technologies: ['n8n', 'APIs', 'AI', 'Automation'],
    architectureSummary:
      'Combines a scheduled trigger with external Weather API requests, structured data parsing, AI summary generation, and automated report delivery.',
  },
  {
    id: 'project-09',
    number: '09',
    title: 'Medicine Inventory Management',
    category: 'Business Process Automation',
    filterTags: ['ALL', 'BUSINESS AUTOMATION'],
    description:
      'An automated medicine inventory management system designed to help manage medicine records, inventory information, stock levels, and related business processes.',
    problem:
      'Tracking medicine stock records, updating inventory quantities, and identifying low-stock items manually across spreadsheets or disconnected records is error-prone and time-consuming.',
    solution:
      'Designed to reduce repetitive manual work by automating inventory data intake, processing stock updates, maintaining structured database records, and sending automated stock notifications for operational tracking.',
    workflow: [
      {
        id: 'p9-n1',
        label: 'Inventory Data',
        type: 'trigger',
        description: 'Receives medicine inventory records and stock update inputs.',
      },
      {
        id: 'p9-n2',
        label: 'Automation',
        type: 'action',
        description: 'Routes and validates incoming record updates within the workflow.',
      },
      {
        id: 'p9-n3',
        label: 'Stock Processing',
        type: 'decision',
        description: 'Calculates stock quantities and checks inventory thresholds.',
      },
      {
        id: 'p9-n4',
        label: 'Database',
        type: 'database',
        description: 'Updates and stores structured medicine inventory records in the database.',
      },
      {
        id: 'p9-n5',
        label: 'Notification',
        type: 'notification',
        description: 'Sends automated status updates or stock alerts to the relevant team.',
      },
    ],
    features: [
      'Inventory management',
      'Automated record processing',
      'Stock monitoring',
      'Data management',
      'Business workflow automation',
    ],
    technologies: ['n8n', 'Automation', 'Google Sheets'],
    architectureSummary:
      'Processes incoming inventory data through automated stock calculation rules, updates centralized database records, and triggers operational notifications.',
    disclaimer:
      'Note: This system is strictly for administrative inventory record and stock level management. It does not provide medical advice, diagnosis, or treatment.',
  },
  {
    id: 'project-10',
    number: '10',
    title: 'Real-Time AI Assistant',
    category: 'AI Agent · Real-Time Automation',
    filterTags: ['ALL', 'AI AGENTS', 'API AUTOMATION'],
    description:
      'A real-time AI assistant capable of receiving user requests, processing them with AI, connecting to external tools or services, and returning useful responses.',
    problem:
      'Users often need immediate answers or actions that require querying external tools and APIs, which normally takes switching between multiple applications manually.',
    solution:
      'Designed to reduce repetitive manual work by providing a real-time AI agent interface that interprets user requests, connects to external tools and APIs as needed, and returns actionable responses.',
    workflow: [
      {
        id: 'p10-n1',
        label: 'User',
        type: 'trigger',
        description: 'Submits a real-time query or task request to the assistant.',
      },
      {
        id: 'p10-n2',
        label: 'AI Assistant',
        type: 'ai',
        description: 'Receives the input and manages the conversational agent workflow.',
      },
      {
        id: 'p10-n3',
        label: 'AI Model',
        type: 'ai',
        description: 'Evaluates the request, reasons about required steps, and selects tools.',
      },
      {
        id: 'p10-n4',
        label: 'Tools / APIs',
        type: 'action',
        description: 'Connects to external tools or API endpoints to retrieve data or perform actions.',
      },
      {
        id: 'p10-n5',
        label: 'Response',
        type: 'notification',
        description: 'Returns a clear, helpful response back to the user in real time.',
      },
    ],
    features: [
      'Real-time interaction',
      'AI agent architecture',
      'Tool integration',
      'API integration',
      'Automated responses',
    ],
    technologies: ['AI', 'APIs', 'n8n', 'Automation'],
    architectureSummary:
      'Routes real-time user prompts through an AI agent and language model capable of invoking external tools and APIs before synthesizing a final response.',
  },
];

export const BUILD_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the business process and identify repetitive tasks.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Design the workflow architecture and automation logic.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Build the n8n workflow, AI logic, API integrations, and data flow.',
  },
  {
    number: '04',
    title: 'Test',
    description: 'Test workflow logic, edge cases, errors, and human approval steps.',
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Deploy the automation and make it ready for real-world use.',
  },
  {
    number: '06',
    title: 'Improve',
    description: 'Monitor the workflow and improve it as the business evolves.',
  },
];

export const TECH_STACK_ITEMS = [
  { name: 'n8n', role: 'Workflow Orchestration & Automation' },
  { name: 'AI / LLMs', role: 'Reasoning, Classification & Content Generation' },
  { name: 'Python', role: 'Data Processing & Custom Scripting' },
  { name: 'APIs', role: 'RESTful Service & Tool Integrations' },
  { name: 'Webhooks', role: 'Real-Time Event Triggers & Payloads' },
  { name: 'Gmail', role: 'Email Automation & Outreach Workflows' },
  { name: 'Telegram', role: 'Interactive Interfaces & Approval Routing' },
  { name: 'Google Sheets', role: 'Structured Lead & Operational Databases' },
  { name: 'Apify', role: 'Automated Web Extraction & Lead Discovery' },
  { name: 'WhatsApp', role: 'Conversational Customer & Booking Agents' },
  { name: 'Facebook', role: 'Automated Content Publishing Workflows' },
];

export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    number: '01',
    title: 'Practical',
    description: 'I build systems around real business processes rather than isolated AI demos.',
  },
  {
    number: '02',
    title: 'AI-Powered',
    description: 'I use AI where it can genuinely improve understanding, decision-making, and automation.',
  },
  {
    number: '03',
    title: 'Human-in-the-Loop',
    description: 'Important actions can include human approval instead of blindly automating critical decisions.',
  },
  {
    number: '04',
    title: 'Connected',
    description: 'I connect AI with APIs, communication platforms, databases, and business tools.',
  },
];

export const MANUAL_PROBLEMS = [
  'Copying leads between tools',
  'Writing repetitive emails',
  'Following up with prospects',
  'Managing appointment requests',
  'Creating social media content',
  'Checking inventory',
  'Processing incoming emails',
  'Generating repetitive reports',
];

export const CLIENT_COLLABORATION_STEPS: ClientStepItem[] = [
  {
    step: 'Step 01',
    title: "Tell Me What You're Doing Manually",
    description: 'Share the repetitive tasks, tools, or bottlenecks slowing down your daily operations.',
  },
  {
    step: 'Step 02',
    title: 'I Analyze the Workflow',
    description: 'I review how information moves between your tools and where AI or automation fits best.',
  },
  {
    step: 'Step 03',
    title: 'We Design the Automation',
    description: 'We map out a clear workflow architecture, including any human approval checkpoints you need.',
  },
  {
    step: 'Step 04',
    title: 'I Build & Test It',
    description: 'I develop the n8n workflows, AI agents, and API connections, testing edge cases thoroughly.',
  },
  {
    step: 'Step 05',
    title: 'You Get an Automated System',
    description: 'Your workflow goes live to handle repetitive processes reliably while your team focuses on high-value work.',
  },
];

export const PROJECT_TYPE_OPTIONS = [
  'AI Automation',
  'AI Agent',
  'n8n Workflow',
  'Lead Generation',
  'Sales Automation',
  'Email Automation',
  'Business Process Automation',
  'API Integration',
  'Other',
];
