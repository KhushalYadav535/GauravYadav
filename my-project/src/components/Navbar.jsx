import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(10,10,18,0.85)] backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 text-2xl font-bold text-white select-none">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full shadow-neon" style={{ background: 'linear-gradient(135deg,#00f3ff,#00ff9d)' }}>
                        <Stethoscope className="text-deepSpace w-5 h-5" />
                    </div>
                    <span className="tracking-wider font-poppins">Dr. <span className="text-neonBlue">Gaurav</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-neonBlue transition-colors text-sm uppercase tracking-widest font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-6 py-2 border border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-deepSpace transition-all rounded-full font-medium">
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white p-2 rounded-md hover:bg-white/5" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[rgba(10,10,18,0.95)] backdrop-blur-xl border-b border-white/10 md:hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-lg font-medium hover:text-neonBlue"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 px-6 py-2 text-deepSpace rounded-full font-medium" style={{ background: 'linear-gradient(90deg,#00f3ff,#00ff9d)' }}>
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
