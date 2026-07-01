export interface ProjectMetric {
    value: string;
    label: string;
    direction?: 'up' | 'down';
}

export interface PortfolioProject {
    id: number;
    slug: string;
    title: string;
    hook: string;
    description: string;
    image: string;
    year: string;
    tags: string[];
    role: string;
    tools: string[];
    eyebrow: string;
    caseNumber: string;
    metrics: ProjectMetric[];
    statusBadge?: string;
}

/** Interim order while NeuroAssist hero still uses placeholder imagery */
export const completedProjects: PortfolioProject[] = [
    {
        id: 3,
        slug: 'arreglio',
        title: 'Arreglio',
        hook: 'Untangling a Day at the Workshop',
        description: 'Designing a digital workflow for traditional repair shops resistant to digital change.',
        image: '/images/projects/arreglio1/arreglio-landing.webp',
        year: '2025',
        tags: ['Service Coordination', 'B2B SaaS', 'Multi-Region UX'],
        role: 'Senior Product Designer',
        tools: ['Figma', 'FigJam', 'Maze'],
        eyebrow: 'SERVICE COORDINATION',
        caseNumber: '01',
        metrics: [
            { value: '3x', label: 'faster processing', direction: 'up' },
            { value: '$50K', label: 'annual savings', direction: 'up' },
            { value: '98%', label: 'adoption rate', direction: 'up' },
        ],
        statusBadge: 'LIVE MVP',
    },
    {
        id: 4,
        slug: 'ecoprism',
        title: 'ecoPRISM Tool',
        hook: 'When Compliance Has to Earn Belief',
        description: 'Designing ecoPRISM, an ESG platform for ABB where the numbers had to be trusted, not just shown.',
        image: '/images/projects/ecoprism/ecoprism-landing-image.webp',
        year: '2024',
        tags: ['Compliance UX', 'Enterprise Dashboard', 'Data-Dense'],
        role: 'Founding Designer',
        tools: ['Adobe XD', 'Miro', 'Notion'],
        eyebrow: 'COMPLIANCE UX',
        caseNumber: '02',
        metrics: [
            { value: '95%', label: 'task completion', direction: 'up' },
            { value: '4.6/5', label: 'user satisfaction', direction: 'up' },
            { value: '40%', label: 'time saved', direction: 'up' },
        ],
        statusBadge: 'LIVE PRODUCT',
    },
    {
        id: 7,
        slug: 'aks',
        title: 'AKS',
        hook: 'Application Knowledge Store',
        description:
            'Engineers across ABB\'s global teams were re-solving the same technical problems in isolation, with no shared memory of what had already been figured out. AKS turned scattered, one-off answers into a governed, searchable knowledge system.',
        image: '/images/projects/aks/Section_Overview_trim.webp',
        year: '2025',
        tags: ['Enterprise Platform', 'Knowledge Management', 'ABB'],
        role: 'Senior Product Designer',
        tools: ['Figma', 'FigJam', 'Notion'],
        eyebrow: 'KNOWLEDGE MANAGEMENT',
        caseNumber: '03',
        metrics: [
            { value: '3', label: 'user roles', direction: 'up' },
            { value: '5', label: 'IA levels', direction: 'up' },
            { value: '4', label: 'step KB merge flow', direction: 'up' },
        ],
        statusBadge: 'DESIGN PHASE',
    },
    {
        id: 5,
        slug: 'neuroassist',
        title: 'NeuroAssist',
        hook: 'Every Second Is a Decision',
        description: 'Designing a stroke care system where the right action must be the easiest action.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&auto=format&fit=crop&q=80',
        year: '2025',
        tags: ['Clinical UX', 'High-Stakes Workflow', 'Trust Under Pressure'],
        role: 'Product Designer',
        tools: ['Figma', 'FigJam'],
        eyebrow: 'TRUST UNDER PRESSURE',
        caseNumber: '04',
        metrics: [
            { value: '8', label: 'stages · end-to-end', direction: 'up' },
            { value: '4', label: 'clinical pathways', direction: 'up' },
            { value: '0', label: 'dead-end states', direction: 'down' },
        ],
        statusBadge: 'Self-initiated case study — visuals in development',
    },
    {
        id: 1,
        slug: 'workmark',
        title: 'Workmark',
        hook: 'Making Invisible Work Visible',
        description: 'A product design case study focused on surfacing unrecognized contributions and improving internal collaboration, accountability, and employee recognition.',
        image: '/images/projects/workmark/workmark-hero.webp',
        year: '2026',
        tags: ['Evidence Design', 'HR Tech', 'AI Experience'],
        role: 'Senior Product Designer',
        tools: ['Figma', 'Notion', 'Protopie'],
        eyebrow: 'EVIDENCE DESIGN',
        caseNumber: '05',
        metrics: [
            { value: '+30%', label: 'recognition frequency (projected)', direction: 'up' },
            { value: '−60%', label: 'review prep time (projected)', direction: 'down' },
            { value: '+18%', label: 'productivity (projected)', direction: 'up' },
        ],
    },
    {
        id: 2,
        slug: 'mockoraa',
        title: 'MockOraa',
        hook: 'Practice Until It Feels Real',
        description: 'Practice realistic interview scenarios with empathetic AI that listens, responds, and guides, building measurable confidence.',
        image: '/images/projects/mockoraa/mockoraa-01.webp',
        year: '2025',
        tags: ['Behavioral Design', 'Conversational AI', 'Confidence UX'],
        role: 'Senior Product Designer',
        tools: ['Figma', 'FigJam'],
        eyebrow: 'CONFIDENCE DESIGN',
        caseNumber: '06',
        metrics: [
            { value: '81', label: 'SUS score', direction: 'up' },
            { value: '4.45/5', label: 'CSAT', direction: 'up' },
            { value: '−67%', label: 'confusion reduction', direction: 'down' },
        ],
    },
];

export const selectedWorkProjects = completedProjects.filter((p) =>
    ['arreglio', 'ecoprism', 'mockoraa'].includes(p.slug)
);

export const inProgressProjects: PortfolioProject[] = [
    {
        id: 6,
        slug: 'suana',
        title: 'Suana',
        hook: 'A Nest for Independent Learning',
        description:
            'An accessible, gamified, multi-task app that guides children through daily activities with step-by-step visual, audio, and animated instructions, tailored to varying abilities, while minimizing caregiver intervention.',
        image: '/images/projects/suana-hero.webp',
        year: 'In Progress',
        tags: ['Accessibility', 'Independent Learning', 'Passion Project'],
        role: 'Product Designer',
        tools: ['Figma', 'Illustrator', 'Protopie'],
        eyebrow: 'ACCESSIBILITY',
        caseNumber: '06',
        metrics: [],
    },
];
