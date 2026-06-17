import type { Metadata } from 'next';

const siteUrl = 'https://vasinisingh.vercel.app';

export const siteMetadata = {
    name: 'Vasini Singh',
    title: 'Vasini Singh, Senior Product Designer',
    description:
        'Senior Product Designer shaping calm, strategic product experiences for SaaS teams and ambitious digital products. Eight years across healthcare, ESG, B2B SaaS, and enterprise tools.',
    url: siteUrl,
} as const;

type PageMetaInput = {
    title: string;
    description: string;
    path?: string;
};

export function createPageMetadata({ title, description, path = '' }: PageMetaInput): Metadata {
    const url = `${siteUrl}${path}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: siteMetadata.name,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: url,
        },
    };
}
