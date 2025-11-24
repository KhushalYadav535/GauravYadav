import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level, delay }) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between mb-2">
                <span className="text-white font-medium tracking-wide">{skill}</span>
                <span className="text-neonBlue font-mono">{level}%</span>
            </div>
            <div className="h-4 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-neonBlue to-neonTeal relative"
                >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                </motion.div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skills = [
        { name: "Clinical Diagnosis", level: 95 },
        { name: "Patient Care", level: 98 },
        { name: "Anatomy & Physiology", level: 92 },
        { name: "Emergency Response", level: 90 },
        { name: "Medical Research", level: 85 },
        { name: "Surgical Assistance", level: 88 }
    ];

    const strengths = [
        { title: "Emergency Medicine", detail: "Rapid triage, trauma stabilization, code blue support" },
        { title: "Diagnostics", detail: "Imaging interpretation & lab correlation for complex cases" },
        { title: "Community Outreach", detail: "Health camps, awareness drives and wellness workshops" }
    ];

    const languages = [
        { label: "Hindi", level: "Native" },
        { label: "English", level: "Professional" },
        { label: "Russian", level: "Conversational" }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-0 w-72 h-72 bg-neonBlue/10 blur-[110px]" />
                <div className="absolute bottom-0 left-10 w-64 h-64 bg-neonTeal/10 blur-[120px]" />
            </div>
            <div className="container mx-auto px-6 relative">
                <div className="section-shell space-y-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="tag-pill mb-4">Skill matrix</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Professional <span className="text-neonBlue">Skills</span>
                        </h2>
                        <p className="text-gray-400">
                            A comprehensive set of medical competencies acquired through rigorous training,
                            evidence-based research, and compassionate patient care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass-card p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                    Medical Expertise
                                </h3>
                                {skills.slice(0, 3).map((skill, index) => (
                                    <SkillBar key={index} skill={skill.name} level={skill.level} delay={index * 0.15} />
                                ))}
                            </div>

                            <div className="glass-card p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                    Practical Competencies
                                </h3>
                                {skills.slice(3, 6).map((skill, index) => (
                                    <SkillBar key={index} skill={skill.name} level={skill.level} delay={0.5 + (index * 0.15)} />
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-8 flex flex-col gap-6 border border-white/10">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">Clinical Edge</p>
                                <h3 className="text-3xl font-bold text-white">Specialized Focus</h3>
                            </div>

                            <div className="space-y-5">
                                {strengths.map((strength) => (
                                    <div key={strength.title} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                        <p className="text-sm text-neonBlue uppercase tracking-[0.3em] mb-2">{strength.title}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed">{strength.detail}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">Languages</p>
                                <div className="space-y-3">
                                    {languages.map((lang) => (
                                        <div key={lang.label} className="flex items-center justify-between text-sm text-gray-300">
                                            <span className="font-medium text-white">{lang.label}</span>
                                            <span className="text-gray-400">{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {["Leadership", "Mentorship", "Cross-cultural collaboration"].map((item) => (
                            <div key={item} className="glass-card p-5 text-center border border-white/10">
                                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">Soft Skill</p>
                                <p className="text-xl font-semibold text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
