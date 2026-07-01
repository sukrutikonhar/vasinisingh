'use client';

import React from 'react';
import { Lock } from 'lucide-react';

const NdaNote: React.FC = () => {
    return (
        <section className="py-10 sm:py-12 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto flex justify-center">
                    <div className="flex gap-3 items-start rounded-lg bg-gray-100 border border-gray-200 p-4 sm:p-5 max-w-3xl">
                        <Lock className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-inter text-gray-700 leading-relaxed">
                            Some screens in this case study are cropped or partially blurred to stay within ABB&apos;s confidentiality guidelines. Full flows and interactions are available on request in a live walkthrough.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NdaNote;
