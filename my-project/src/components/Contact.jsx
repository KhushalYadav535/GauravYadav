import React from 'react';
import { Send, Mail, Phone, MapPin, CalendarDays } from 'lucide-react';

const Contact = () => {
    const contactDetails = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "dr.gaurav@example.com",
            helper: "Typically replies within 24 hours"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+91 98765 43210",
            helper: "Available Mon - Sat, 10am to 7pm"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "New Delhi, India",
            helper: "Open to relocation for residency"
        }
    ];

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div>
                        <p className="tag-pill mb-6">Let’s connect</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Get In <span className="text-neonBlue">Touch</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                            Whether you have a medical inquiry, want to book an appointment, or just want to say hello,
                            I'd love to hear from you.
                        </p>

                        <div className="space-y-4">
                            {contactDetails.map((detail) => (
                                <div key={detail.label} className="glass-card p-6 flex items-center gap-4 hover:border-neonBlue/50 transition-colors">
                                    <div className="w-12 h-12 rounded-2xl bg-neonBlue/10 flex items-center justify-center text-neonBlue">
                                        {detail.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-400 uppercase tracking-wider">{detail.label}</h4>
                                        <p className="text-white font-medium">{detail.value}</p>
                                        <p className="text-xs text-gray-500 mt-1">{detail.helper}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="glass-card p-5 mt-6 flex items-center gap-4 border border-white/10">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                <CalendarDays className="text-neonBlue" />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Availability</p>
                                <p className="text-white font-semibold">Virtual consultations & onsite visits</p>
                                <p className="text-xs text-gray-400">Currently open for clinical postings and collaborative research.</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/10 blur-[80px] rounded-full pointer-events-none" />

                        <form className="relative z-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                                    placeholder="Medical Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button className="w-full py-4 bg-neonBlue text-deepSpace font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-2 group">
                                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
