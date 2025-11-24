import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/50 backdrop-blur-lg border-t border-white/5 py-12 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Dr. Gaurav Yadav</h3>
                        <p className="text-gray-400 mb-6">
                            Dedicated to providing exceptional medical care with a futuristic approach to health and wellness.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors"><Linkedin /></a>
                            <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors"><Instagram /></a>
                            <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors"><Twitter /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-gray-400 hover:text-neonBlue transition-colors">About Me</a></li>
                            <li><a href="#education" className="text-gray-400 hover:text-neonBlue transition-colors">Education</a></li>
                            <li><a href="#gallery" className="text-gray-400 hover:text-neonBlue transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-neonBlue transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-neonBlue w-5 h-5" />
                                <span>dr.gaurav@example.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-neonBlue w-5 h-5" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin className="text-neonBlue w-5 h-5" />
                                <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Dr. Gaurav Yadav. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
