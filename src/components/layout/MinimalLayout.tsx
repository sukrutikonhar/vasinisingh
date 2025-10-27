import React from 'react';
import MinimalHeader from './MinimalHeader';

interface LayoutProps {
    children: React.ReactNode;
}

const MinimalLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <MinimalHeader />
            <main className="relative">
                {children}
            </main>
        </div>
    );
};

export default MinimalLayout;

