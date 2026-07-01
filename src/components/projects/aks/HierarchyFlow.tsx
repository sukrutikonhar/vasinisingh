'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HierarchyFlowProps {
    nodes: string[];
    centered?: boolean;
}

const HierarchyFlow: React.FC<HierarchyFlowProps> = ({ nodes, centered = false }) => {
    return (
        <div
            className={`my-8 flex flex-col gap-2 rounded-lg border border-gray-200 bg-gray-50 p-6 sm:flex-row sm:flex-wrap sm:gap-0 ${
                centered ? 'items-center sm:justify-center' : 'items-start sm:items-center'
            }`}
        >
            {nodes.map((node, index) => (
                <React.Fragment key={index}>
                    <span className="whitespace-nowrap rounded-md border border-gray-300 bg-white px-3.5 py-2 text-xs font-grotesk font-semibold text-[#202022] sm:text-sm">
                        {node}
                    </span>
                    {index < nodes.length - 1 && (
                        <ArrowRight className="mx-0 hidden h-4 w-4 flex-shrink-0 text-gray-400 sm:mx-2.5 sm:block" />
                    )}
                    {index < nodes.length - 1 && (
                        <ArrowRight className="my-1 block h-4 w-4 rotate-90 text-gray-400 sm:hidden" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default HierarchyFlow;
