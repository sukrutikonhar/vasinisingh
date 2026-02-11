'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MockOraaV2Teams() {
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

    const teamMembers = [
        {
            name: 'Mokkarala Raviteja',
            role: 'CAPTAIN/ Principle UX Designer/ Technical Architect',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        },
        {
            name: 'Pallavi Sumit Saple',
            role: 'Vice Captain/ UX Lead Designer Technical Writer/',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        },
        {
            name: 'Navyashree LS',
            role: 'Product Design Strategist/ UX Research Lead',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        },
        {
            name: 'Mounesh',
            role: 'UX Designer/UX Research/ Video Creator',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        },
        {
            name: 'Snehal Gharave',
            role: 'UX Designer/UX Research/ Video Creator',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        },
        {
            name: 'Vasini Singh',
            role: 'Design Research & Product Ideation Specialist',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        },
        {
            name: 'Praveen Prabhakaran',
            role: 'Senior Product Designer',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        },
        {
            name: 'Rizwana Samreen',
            role: 'VD I',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        },
        {
            name: 'Abhay Sharma',
            role: 'VD II',
            image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png'
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-red-900 via-black to-orange-900 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-6xl mx-auto px-8 relative z-10">
                <h2 className="text-6xl font-bold mb-16 tracking-tight">
                    Meet The Team
                </h2>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index}
                            className="text-center group hover:scale-105 transition-transform duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative mb-6">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-colors">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* ThinkGears Logo */}
                <div className="flex justify-end mt-16">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">TG</span>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">ThinkGears</div>
                            <div className="text-sm text-gray-300">FROM SPIN TO SPEED</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}