'use client';

import { useEffect, useRef, useState } from 'react';

export default function MockOraaV2Iterations() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const timelineItems = [
        {
            date: 'Round 1',
            title: 'The Confusion',
            description: 'Users were overwhelmed by specific technical feedback immediately after speaking.',
            tag: 'Insight: Cognitive Overload',
            type: 'problem'
        },
        {
            date: 'Round 2',
            title: 'The Simplification',
            description: 'Moved detailed feedback to post-session. Introduced "calm" color palette.',
            tag: 'Action: Reduce Noise',
            type: 'action'
        },
        {
            date: 'Final',
            title: 'The Validation',
            description: '31% faster task completion. Users reported feeling "guided" rather than "judged".',
            tag: 'Result: Success',
            type: 'success'
        },
        {
            date: 'Next',
            title: 'Future Scope',
            description: 'Integration with LMS and peer-to-peer practice modes.',
            tag: 'Roadmap',
            type: 'future'
        }
    ];

    const getCardStyles = (type: string) => {
        switch (type) {
            case 'success':
                return 'border-green-500 bg-green-50';
            case 'future':
                return 'border-blue-500 bg-blue-50';
            case 'action':
                return 'border-orange-500 bg-orange-50';
            default:
                return 'border-gray-300 bg-white';
        }
    };

    const getTagStyles = (type: string) => {
        switch (type) {
            case 'success':
                return 'bg-green-500 text-white';
            case 'future':
                return 'bg-blue-500 text-white';
            case 'action':
                return 'bg-orange-500 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold mb-16 tracking-tight">
                    Iterations That Delivered Results
                </h2>
                
                <div className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="overflow-x-auto pb-4">
                        <div className="flex gap-8 min-w-max">
                            {timelineItems.map((item, index) => (
                                <div 
                                    key={index}
                                    className={`flex-shrink-0 w-72 p-6 rounded-lg border-2 ${getCardStyles(item.type)} transition-transform hover:-translate-y-1`}
                                >
                                    <div className="text-sm font-medium text-gray-600 mb-2">
                                        {item.date}
                                    </div>
                                    <h4 className="text-xl font-semibold mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTagStyles(item.type)}`}>
                                        {item.tag}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}