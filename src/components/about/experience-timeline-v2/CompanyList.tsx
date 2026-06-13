'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { ExperienceCompany } from '@/data/experience-timeline';

type CompanyListProps = {
    companies: ExperienceCompany[];
    activeId: string;
    onSelect: (id: string) => void;
    reduceMotion: boolean;
};

const CompanyList: React.FC<CompanyListProps> = ({ companies, activeId, onSelect, reduceMotion }) => {
    return (
        <>
            {/* Desktop: vertical timeline */}
            <nav
                className="relative hidden lg:block"
                aria-label="Work experience companies"
            >
                <div
                    className="pointer-events-none absolute left-8 top-6 bottom-6 w-px -translate-x-1/2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"
                    aria-hidden
                />
                <ul className="relative flex flex-col gap-2">
                    {companies.map((company) => {
                        const isActive = company.id === activeId;
                        return (
                            <li key={company.id}>
                                <button
                                    type="button"
                                    onClick={() => onSelect(company.id)}
                                    className={cn(
                                        'group flex w-full items-start gap-4 rounded-xl px-3 py-4 text-left',
                                        'transition-[background-color,transform] duration-300 ease-out',
                                        !reduceMotion && 'hover:translate-x-0.5',
                                        isActive && 'bg-black/[0.04]',
                                    )}
                                    aria-current={isActive ? 'true' : undefined}
                                >
                                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                                        <span
                                            className={cn(
                                                'absolute inset-0 rounded-full opacity-0 transition-opacity duration-300',
                                                isActive && !reduceMotion && 'animate-pulse opacity-100',
                                                isActive && 'shadow-[0_0_20px_4px_rgba(0,0,0,0.08)]',
                                            )}
                                            aria-hidden
                                        />
                                        <span
                                            className={cn(
                                                'relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300',
                                                !reduceMotion && 'group-hover:scale-110',
                                                isActive
                                                    ? 'border-black bg-black shadow-[0_0_16px_rgba(0,0,0,0.12)]'
                                                    : 'border-gray-300 bg-white',
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    'h-4 w-4 rounded-full transition-colors duration-300',
                                                    isActive ? 'bg-white' : 'bg-black',
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="min-w-0 pt-1.5">
                                        <div
                                            className={cn(
                                                'text-sm font-medium leading-snug transition-colors duration-300',
                                                isActive ? 'text-black' : 'text-gray-500 group-hover:text-gray-800',
                                            )}
                                        >
                                            {company.name}
                                        </div>
                                        <div
                                            className={cn(
                                                'mt-1 text-xs transition-colors duration-300',
                                                isActive ? 'text-gray-600' : 'text-gray-400',
                                            )}
                                        >
                                            {company.timelinePeriod}
                                        </div>
                                    </div>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Mobile / tablet: horizontal scroll */}
            <nav
                className="lg:hidden -mx-4 px-4 sm:mx-0 sm:px-0"
                aria-label="Work experience companies"
            >
                <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {companies.map((company) => {
                        const isActive = company.id === activeId;
                        return (
                            <button
                                key={company.id}
                                type="button"
                                onClick={() => onSelect(company.id)}
                                className={cn(
                                    'flex min-w-[148px] shrink-0 flex-col items-center rounded-xl border px-3 py-3',
                                    'transition-all duration-300 ease-out',
                                    isActive
                                        ? 'border-black/15 bg-white shadow-card'
                                        : 'border-black/10 bg-white/80 hover:border-black/20',
                                )}
                                aria-current={isActive ? 'true' : undefined}
                            >
                                <span
                                    className={cn(
                                        'flex h-9 w-9 items-center justify-center rounded-full border-2 transition-transform duration-300',
                                        isActive && !reduceMotion && 'scale-105',
                                        isActive
                                            ? 'border-black bg-black shadow-[0_0_14px_rgba(0,0,0,0.12)]'
                                            : 'border-gray-300 bg-white',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'h-3 w-3 rounded-full',
                                            isActive ? 'bg-white' : 'bg-black',
                                        )}
                                    />
                                </span>
                                <span
                                    className={cn(
                                        'mt-2 text-center text-[11px] font-medium leading-tight',
                                        isActive ? 'text-black' : 'text-gray-500',
                                    )}
                                >
                                    {company.name}
                                </span>
                                <span className="mt-1 text-center text-[10px] text-gray-500">
                                    {company.timelinePeriod}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default CompanyList;
