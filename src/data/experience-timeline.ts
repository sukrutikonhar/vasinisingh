export type ExperienceProject = {
  id: string;
  name: string;
  type: string;
  description: string;
  chips: string[];
};

export type ExperienceCompany = {
  id: string;
  name: string;
  role: string;
  period: string;
  timelinePeriod: string;
  accent: string;
  summary: string;
  projects: ExperienceProject[];
};

export const experienceCompanies: ExperienceCompany[] = [
  {
    id: "bb",
    name: "BetaBridge Ventures",
    role: "Senior Product Designer",
    period: "July 2025 – Present",
    timelinePeriod: "Jul 2025 – Present",
    accent: "#1a1a1a",
    summary: "Leading end-to-end UX design for enterprise clients including ABB and Crown, spanning knowledge platforms, workforce productivity tools, operational dashboards, and AI-driven support experiences.",
    projects: [
      {
        id: "aks",
        name: "AKS",
        type: "Knowledge & collaboration platform · ABB",
        description: "Enterprise knowledge sharing platform for ABB teams across PAMA, PAEN, and PAMP divisions. Combines discussion forums, knowledge base management, moderation workflows, analytics, and AI-powered recommendations into one scalable system with multi-role support for Standard Users, Moderators, and Admins.",
        chips: ["Discussion forums", "Knowledge base", "AI recommendations", "Active Directory", "Multi-role workflows", "Analytics", "Responsive UI"],
      },
      {
        id: "timesheet",
        name: "ABB Timesheet App",
        type: "Workforce productivity · ABB",
        description: "Time tracking, project allocation, and workforce management platform designed to reduce manual effort and improve reporting accuracy. Features timesheet submission, approval workflows, project-wise hour tracking, employee dashboards, reminders, and admin tools aligned to ABB brand guidelines.",
        chips: ["Timesheet submission", "Approval workflows", "Resource utilization", "Employee dashboards", "Admin tools", "ABB brand"],
      },
      {
        id: "crown-dcc",
        name: "Crown Digital Command Centre",
        type: "Industry 4.0 operations · Crown Beverage Europe",
        description: "Centralized real-time monitoring platform for high-speed beverage can manufacturing across multiple plants. Configurable wall screens, dashboards, alerts, live trends, plant mimics, and video communication inspired by Formula 1 operational monitoring, helping teams proactively identify issues before machine stoppages.",
        chips: ["Grafana", "Kafka", "Power BI", "Vision systems", "Real-time dashboards", "Multi-plant ops", "Industry 4.0"],
      },
      {
        id: "lw-bot",
        name: "L&W Bot",
        type: "Support experience redesign · ABB",
        description: "Redesigned support experience replacing repetitive flows with an intuitive chatbot interface integrated from the login and dashboard. Scalable enough to surface complex admin features while staying consistent with ABB design guidelines.",
        chips: ["Chatbot UX", "Admin workflows", "ABB guidelines", "Support redesign", "Scalable UX"],
      },
    ],
  },
  {
    id: "ac",
    name: "Acumant Technologies",
    role: "Senior Product Designer",
    period: "Oct 2022 – Jun 2025 · 2 yrs 9 mos",
    timelinePeriod: "Oct 2022 – Jun 2025",
    accent: "#1a1a1a",
    summary: "Owned end-to-end design for B2B SaaS and AI-driven platforms, from ESG reporting and AI tooling to enterprise workflow automation, reducing reporting effort by ~40% and cutting design-to-dev turnaround by 35%.",
    projects: [
      {
        id: "ecoprism",
        name: "ecoPRISM",
        type: "ESG & CSRD reporting platform",
        description: "Unified workflow-driven platform replacing fragmented manual ESG and CSRD reporting. Simplified complex regulatory data into intuitive step-by-step experiences, reducing enterprise reporting effort by ~40% and improving data accuracy and audit readiness.",
        chips: ["ESG reporting", "CSRD compliance", "Enterprise workflows", "Data dashboards", "~40% effort reduction", "React", "Tailwind CSS"],
      },
      {
        id: "arreglio",
        name: "Arreglio",
        type: "Marketplace for service ecosystems",
        description: "End-to-end digital operations platform solving real-time visibility gaps in disconnected workshop tools. Streamlined workflows and dashboards reduced turnaround time by up to 70% and boosted customer satisfaction for enterprise clients.",
        chips: ["Marketplace", "Workshop ops", "Real-time visibility", "70% TAT reduction", "Enterprise UX", "React", "Tailwind CSS"],
      },
      {
        id: "neuroassist",
        name: "NeuroAssist",
        type: "Clinical decision support tool",
        description: "Clinical decision support platform for stroke triage and treatment workflows. Covers patient symptom collection, CT imaging upload and analysis, protocol-specific data collection, and a workflow decision engine generating medication and intervention recommendations based on patient data. Includes an admin dashboard for protocol review, decision tree editing, and version history management.",
        chips: ["Stroke triage", "CT imaging analysis", "Clinical workflows", "Decision engine", "Admin dashboard", "Protocol management"],
      },
      {
        id: "ecobot",
        name: "CSRD Ecobot",
        type: "AI compliance assistant",
        description: "AI chatbot guiding enterprise users through CSRD compliance reporting, converting complex regulatory requirements into conversational, step-by-step workflows within the ecoPRISM ecosystem.",
        chips: ["AI chatbot", "CSRD compliance", "Conversational UX", "ecoPRISM integration"],
      },
      {
        id: "aihub",
        name: "Acumant AI Hub",
        type: "AI tools platform",
        description: "Centralized hub making internal AI capabilities discoverable and accessible across enterprise teams, designed for clarity, feature adoption, and seamless integration into existing workflows.",
        chips: ["AI platform", "Enterprise tools", "Feature discovery", "Internal tooling"],
      },
      {
        id: "hrbot",
        name: "HR Bot AI",
        type: "Conversational HR assistant",
        description: "AI-powered HR assistant automating employee HR queries, leave management, and policy lookups, reducing HR team workload and improving response times across the organization.",
        chips: ["HR automation", "Conversational AI", "Leave management", "Policy lookup"],
      },
      {
        id: "eureka",
        name: "Eureka",
        type: "Idea management · ABB client",
        description: "Centralized Suggestion Management System for enterprise innovation at ABB. Led full design process: user research, workflow mapping, wireframing, and high-fidelity Figma UI. Role-based dashboards for submitters, reviewers, and approvers with SLA tracking and integrations with Active Directory, Snowflake, ProductPlan, and Decision Focus.",
        chips: ["Power Apps", "Power Automate", "Active Directory", "Snowflake", "SLA tracking", "Role-based dashboards", "Figma"],
      },
      {
        id: "crown",
        name: "Enterprise workflow platform",
        type: "Crown client",
        description: "Modern enterprise platform replacing a legacy Microsoft Access system, covering marketing request management, project tracking, approvals, document handling, and reporting. Kanban boards, activity dashboards, automated notifications, and centralized file management for product design and marketing teams.",
        chips: ["Power Apps", "Power BI", "SharePoint", "Azure Blob", "Kanban boards", "Workflow automation"],
      },
      {
        id: "resume-ai-parsing",
        name: "Resume AI Parsing App",
        type: "AI recruitment screening platform",
        description: "AI-powered recruitment screening platform enabling recruiters to upload candidate CVs and instantly assess suitability for specific roles. Extracts and evaluates skills, experience, and qualifications, then generates a structured match recommendation, reducing manual screening effort and improving hiring decision consistency.",
        chips: ["AI screening", "CV analysis", "Candidate matching", "HR tech", "Recruitment UX"],
      },
    ],
  },
  {
    id: "bm",
    name: "Bizmeth Solutions",
    role: "UI/UX Designer",
    period: "Mar 2018 – Oct 2022 · 4 yrs 8 mos",
    timelinePeriod: "Mar 2018 – Oct 2022",
    accent: "#1a1a1a",
    summary: "Designed responsive websites across a wide range of client verticals, graphics, newsletters, and a fintech application, delivering end-to-end UX from research to high-fidelity UI across 4+ years of multi-domain client work.",
    projects: [
      {
        id: "responsive-websites",
        name: "Responsive Websites",
        type: "Multi-domain client work",
        description: "Designed responsive websites across a wide range of industries and client verticals. Selected clients: Bioplus Lifesciences (healthcare/pharma), Kayalysst, Fanzart Fans (luxury designer fans), Athreya (ayurveda), Nutrino (nutrition), Cord (fashion/ecommerce), Moom, Fame Media, Kothari Group, and more. Tailored visual language, layout, and interaction patterns to each domain and target audience.",
        chips: ["Healthcare", "Ayurveda", "Architecture", "Ecommerce", "Fashion", "Luxury fans", "Nutrition", "Media", "Responsive design"],
      },
      {
        id: "fintech-application",
        name: "Fintech Application",
        type: "End-to-end UX",
        description: "",
        chips: [],
      },
      {
        id: "graphics-newsletters",
        name: "Graphics & Newsletters",
        type: "Brand and marketing collateral",
        description: "",
        chips: [],
      },
    ],
  },
];
