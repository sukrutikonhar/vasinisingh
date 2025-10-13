import React from 'react';

const WriteToMeSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-lg text-gray-600">
                        Write to me
                    </p>

                    <a
                        href="mailto:vasinisingh@gmail.com"
                        className="block text-3xl lg:text-4xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                    >
                        vasinisingh@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WriteToMeSection;
