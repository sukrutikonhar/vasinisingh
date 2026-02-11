'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MockOraaV2Personas() {
    const [isVisible, setIsVisible] = useState(false);
    const [activePersona, setActivePersona] = useState(0);
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

    const personas = [
        {
            name: 'Nandish',
            role: 'Final year student (Fresher)',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_Persona___Dark__-3-4bfd299e-b82c-41cc-92b8-c1ae63dda9a6.png',
            age: '22',
            education: 'B.E(Mechanical Engineering)',
            status: 'Single',
            location: 'Mysuru'
        },
        {
            name: 'Pravith K',
            role: 'Bank Employee',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_Persona___Dark__-2-fb0f3840-cbca-4d7b-9414-3659f7e67208.png',
            age: '35',
            education: 'Not Specified',
            status: 'Married',
            location: 'Bangalore'
        },
        {
            name: 'Kajal Jadhav',
            role: 'Retention Strategist',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_Persona___Dark__-1-adbbd0d7-53d1-43bd-8cce-2db29ed85827.png',
            age: '24',
            education: 'B.Sc. Chemistry graduate',
            status: 'Single',
            location: 'Pune'
        },
        {
            name: 'Sushma',
            role: 'Service Desk Coordinator',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_Persona___Dark__-d00e543c-2074-4ff3-94be-317daeacc1b7.png',
            age: '31',
            education: 'B.Sc. Chemistry graduate',
            status: 'Married',
            location: 'Bangalore'
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-semibold mb-8 tracking-tight">
                    User Personas Deep Dive
                </h2>
                <p className="text-xl mb-16 text-gray-600">
                    Detailed personas based on our research insights and user interviews.
                </p>
                
                {/* Persona Navigation */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {personas.map((persona, index) => (
                        <button
                            key={index}
                            onClick={() => setActivePersona(index)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                activePersona === index
                                    ? 'bg-green-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {persona.name}
                        </button>
                    ))}
                </div>

                {/* Active Persona Display */}
                <div className={`transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
                        <div className="relative h-96 md:h-[500px]">
                            <Image
                                src={personas[activePersona].image}
                                alt={`${personas[activePersona].name} persona`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        
                        <div className="p-8 bg-gradient-to-r from-gray-50 to-white">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div>
                                    <span className="block text-sm font-medium text-gray-500 mb-1">Name</span>
                                    <span className="text-lg font-semibold">{personas[activePersona].name}</span>
                                </div>
                                <div>
                                    <span className="block text-sm font-medium text-gray-500 mb-1">Role</span>
                                    <span className="text-lg font-semibold">{personas[activePersona].role}</span>
                                </div>
                                <div>
                                    <span className="block text-sm font-medium text-gray-500 mb-1">Age</span>
                                    <span className="text-lg font-semibold">{personas[activePersona].age}</span>
                                </div>
                                <div>
                                    <span className="block text-sm font-medium text-gray-500 mb-1">Location</span>
                                    <span className="text-lg font-semibold">{personas[activePersona].location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Competitor Analysis Image */}
                <div className={`mt-16 transition-all duration-1000 delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h3 className="text-3xl font-semibold mb-8 text-center">Competitor Analysis</h3>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="relative h-96 md:h-[500px]">
                            <Image
                                src="/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_18-8dfef743-3231-4dee-95a1-932d8fa8d112.png"
                                alt="Competitor Analysis Chart"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}