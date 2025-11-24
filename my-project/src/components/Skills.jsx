import React from 'react';
import { Activity, HeartPulse, Stethoscope, Syringe, Microscope, Shield } from 'lucide-react';

const skillCards = [
    {
        icon: <Stethoscope className="w-6 h-6 text-neonBlue" />,
        title: "Clinical Diagnosis",
        level: "Expert",
        desc: "Pattern recognition, differential diagnosis, and evidence-backed treatment planning."
    },
    {
        icon: <HeartPulse className="w-6 h-6 text-neonTeal" />,
        title: "Patient Care",
        level: "Expert",
        desc: "Bedside empathy, family counselling, and continuity of care across departments."
    },
    {
        icon: <Syringe className="w-6 h-6 text-neonBlue" />,
        title: "Emergency Response",
        level: "Advanced",
        desc: "Code blue participation, trauma stabilization, and acute care coordination."
    },
    {
        icon: <Microscope className="w-6 h-6 text-neonTeal" />,
        title: "Medical Research",
        level: "Advanced",
        desc: "Clinical audits, statistical interpretation, and protocol drafting."
    },
    {
        icon: <Shield className="w-6 h-6 text-neonBlue" />,
        title: "Preventive Medicine",
        level: "Advanced",
        desc: "Community health drives, vaccination advocacy, and health-tech adoption."
    },
    {
        icon: <Activity className="w-6 h-6 text-neonTeal" />,
        title: "Surgical Assistance",
        level: "Proficient",
        desc: "OR preparation, sterile technique, and post-operative monitoring."
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-0 w-72 h-72 bg-neonBlue/10 blur-[110px]" />
                <div className="absolute bottom-0 left-10 w-64 h-64 bg-neonTeal/10 blur-[120px]" />
            </div>
            <div className="container mx-auto px-6 relative">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="tag-pill mb-4 inline-flex items-center justify-center">Capability stack</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Professional <span className="text-neonBlue">Skills</span>
                    </h2>
                    <p className="text-gray-400">
                        Cards aligned to the same glass aesthetic highlight the core competencies that drive clinical excellence.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {skillCards.map((skill) => (
                        <article key={skill.title} className="glass-card p-8 border border-white/10 hover:border-neonBlue/50 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                {skill.icon}
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-semibold text-white">{skill.title}</h3>
                                <span className="text-xs uppercase tracking-[0.3em] text-gray-500">{skill.level}</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{skill.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
