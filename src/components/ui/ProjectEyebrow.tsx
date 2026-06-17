'use client';

import React from 'react';

interface ProjectEyebrowProps {
    label: string;
    caseNumber: string;
    className?: string;
}

const ProjectEyebrow: React.FC<ProjectEyebrowProps> = ({ label, caseNumber, className = '' }) => {
    return (
        <div
            className={`flex items-center gap-2.5 mb-4 uppercase ${className}`}
            style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em' }}
        >
            <span className="text-[#202022]">{label}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 tabular-nums">CASE {caseNumber}</span>
        </div>
    );
};

export default ProjectEyebrow;
