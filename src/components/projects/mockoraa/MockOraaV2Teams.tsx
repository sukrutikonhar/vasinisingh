'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MockOraaV2Teams() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const teamMembers = [
        { name: 'Mokkarala Raviteja', role: 'Captain · Principle UX Designer · Technical Architect', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' },
        { name: 'Pallavi Sumit Saple', role: 'Vice Captain · UX Lead Designer · Technical Writer', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' },
        { name: 'Navyashree LS', role: 'Product Design Strategist · UX Research Lead', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' },
        { name: 'Mounesh', role: 'UX Designer · UX Research · Video Creator', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' },
        { name: 'Snehal Gharave', role: 'UX Designer · UX Research · Video Creator', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' },
        { name: 'Vasini Singh', role: 'Design Research & Product Ideation Specialist', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' },
        { name: 'Praveen Prabhakaran', role: 'Senior Product Designer', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' },
        { name: 'Rizwana Samreen', role: 'Visual Designer I', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' },
        { name: 'Abhay Sharma', role: 'Visual Designer II', image: '/assets/c__Users_inno_AppData_Roaming_Cursor_User_workspaceStorage_e68668ea7e547a15e769e327709310c9_images_2-a3808bfa-cf13-48c9-a831-5f6e7d80b0e2.png' }
    ];

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white border-t border-gray-100">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-12">Meet the Team</h2>

                    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center" style={{ animationDelay: `${index * 80}ms` }}>
                                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-200">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-sm font-grotesk font-bold text-black mb-1 leading-tight">{member.name}</h3>
                                <p className="text-xs font-inter text-gray-500 leading-relaxed">{member.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* ThinkGears branding */}
                    <div className={`flex items-center gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-grotesk font-bold text-sm">TG</span>
                        </div>
                        <div>
                            <div className="text-lg font-grotesk font-bold text-black">ThinkGears</div>
                            <div className="text-xs font-inter text-gray-500 uppercase tracking-wider">From Spin to Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
