import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import { useState } from 'react';

function Home() {
    useSeo({
        title: 'RishiLux - Home',
        description: 'RishiLux Pvt. Ltd. is a leading provider of aviation warning lights, LED lighting solutions, EV chargers, and spheres in India.',
        keywords: 'aviation warning lights, LED lighting, EV chargers, RishiLux, India'
    });
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const products = [
        {
            title: "Aviation Warning Lights",
            desc: "Low, Medium & High Intensity",
            img: "/rishiluxlight.jpg",
            alt: "Aviation Warning Lights",
            link: "/products"
        },
        {
            title: "LED Lighting Solutions",
            desc: "Flood, High Bay, Street Lights",
            img: "/rishiluxlight2.jpg",
            alt: "LED Lighting Solutions",
            link: "/products"
        },
        {
            title: "EV Chargers & Spheres",
            desc: "Electric Vehicle Chargers, Day Marking Spheres",
            img: "/rishiluxlight6.jpg",
            alt: "EV Chargers & Spheres",
            link: "/products"
        }
    ];

    return (
        <div className="space-y-14">
            {/* Hero Section */}
            <section className="grid items-center gap-10 md:grid-cols-2 p-6">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-2 text-sm text-brand-700 text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Leading Aviation & Electrical Solutions
                    </div>
                    <h1 className="text-4xl font-bold leading-tight text-brand-900 dark:text-white md:text-5xl">
                        Rishi Lux Pvt. Ltd.
                    </h1>
                    <p className="max-w-xl text-lg text-slate-200">
                        Advanced aviation warning lights, LED lighting systems, EV chargers, and day marking spheres—engineered for safety, performance, and reliability.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/products"
                            className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/20 transition hover:-translate-y-0.5"
                        >
                            Explore Products
                        </Link>
                        <Link
                            to="/contact"
                            className="rounded-lg border border-brand-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-brand-700"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="relative flex justify-center items-center h-60 md:h-80">
                    <img
                        src="/rishiluxlight.jpg"
                        alt="RishiLux Logo 1"
                        className="absolute left-0 top-8 md:top-12 w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg object-contain z-10 rotate-[-10deg]"
                    />
                    <img
                        src="/rishiluxlight2.jpg"
                        alt="RishiLux Logo 2"
                        className="relative w-36 h-36 md:w-48 md:h-48 rounded-full shadow-2xl object-contain z-20 scale-110"
                    />
                    <img
                        src="/rishiluxlight6.jpg"
                        alt="RishiLux Logo 3"
                        className="absolute right-0 top-8 md:top-12 w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg object-contain z-10 rotate-[10deg]"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
                <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-4">About RishiLux</h2>
                <p className="text-lg text-slate-200 mb-2">
                    Rishi Lux Pvt. Ltd. is a leading manufacturer of aviation warning lights, LED lighting systems, EV chargers, and day marking spheres. Founded by Mr. Ram Dayal, we deliver high-performance, energy-efficient, and safety-driven solutions for modern infrastructure.
                </p>
                <p className="text-lg  text-slate-200">
                    Our products are engineered for reliability and durability, meeting regulatory standards for high-rise buildings, telecom towers, transmission lines, chimneys, wind turbines, and industrial structures. We focus on quality, innovation, and precision engineering in every product.
                </p>
            </section>

            {/* Products Overview Section */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
                <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-4">Our Products</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {products.map((product, idx) => (
                        <div key={idx} className="rounded-xl bg-slate-900/50 p-5 border border-white/5 flex flex-col items-center">
                            <img
                                src={product.img}
                                alt={product.alt}
                                width={650}
                                height={450}
                                className="rounded-lg shadow-lg object-cover mb-4 w-full max-w-[650px] h-auto"
                            />
                            <p className="text-lg font-semibold text-white">{product.title}</p>
                            <p className="text-sm text-slate-300 mb-4">{product.desc}</p>
                            <Link
                                to={product.link}
                                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5"
                            >
                                View Product
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Values Section */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
                <h2 className="text-3xl font-bold text-brand-900 text-center mb-4">Our Core Values</h2>
                <div className="flex justify-center mb-6">
                    <span className="inline-block text-2xl text-brand-600">&#x1F4E6;</span>
                </div>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
                    <div className="rounded-xl bg-slate-900/50 p-5 border border-white/5 flex flex-col items-center">
                        {/* Integrity Icon */}
                        <img src="/icon1.png" alt="Integrity Icon" width={80} />
                        <p className="text-xl font-semibold text-brand-900 mb-2">Integrity</p>
                        <p className="text-center text-brand-700">Prioritize ethics and morals to keep to our promises</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/50 p-5 border border-white/5 flex flex-col items-center">
                        {/* Compassion Icon */}
                        <img src="/icon2.png" alt="Compassion Icon" width={80} />
                        <p className="text-xl font-semibold text-brand-900 mb-2">Compassion</p>
                        <p className="text-center text-brand-700">Listen to our customers – we always try and walk in their shoes to serve them best</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/50 p-5 border border-white/5 flex flex-col items-center">
                        {/* Collaboration Icon */}
                        <img src="/icon3.png" alt="Collaboration Icon" width={80} />
                        <p className="text-xl font-semibold text-brand-900 mb-2">Collaboration</p>
                        <p className="text-center text-brand-700">Build a trust-based relationship with any stakeholder we work with</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/50 p-5 border border-white/5 flex flex-col items-center md:col-span-1 lg:col-span-1">
                        {/* Affordability Icon */}
                        <img src="/icon4.png" alt="Affordability Icon" width={80} />
                        <p className="text-xl font-semibold text-brand-900 mb-2">Affordability</p>
                        <p className="text-center text-brand-700">Focus on providing affordable and accessible services to our clients</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/50 p-5 border border-white/5 flex flex-col items-center md:col-span-1 lg:col-span-1">
                        {/* Sustainability Icon */}
                        <img src="/icon5.png" alt="Sustainability Icon" width={80} />
                        <p className="text-xl font-semibold text-brand-900 mb-2">Sustainability</p>
                        <p className="text-center text-brand-700">Lead with financial, environmental and societal sustainability</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
                <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {faqData.map((faq, idx) => (
                        <div key={idx} className="border border-white/10 rounded-lg bg-white/10 overflow-hidden transition-all duration-300">
                            <button
                                className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-brand-800 dark:text-white focus:outline-none transition-colors hover:bg-brand-600/10"
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                aria-expanded={openFaq === idx}
                            >
                                <span>{faq.question}</span>
                                <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="px-4 pb-4 text-slate-200" style={{ minHeight: 0 }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact/CTA Section */}
            <section className="rounded-2xl border border-brand-600/20 bg-brand-600/10 p-6 shadow-xl flex flex-col md:flex-row gap-8 items-start">

                {/* Contact Info & Social */}
                <div className="flex-1 w-full max-w-md space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-2">Get in Touch</h2>
                    <p className="text-base text-slate-200 mb-2">
                        Reach out to RishiLux for all your aviation lighting, LED solutions, and EV charging needs. Our team is ready to assist you with product inquiries, technical support, and custom solutions. Whether you need guidance, a quote, or after-sales service, we are committed to providing prompt and professional assistance. Contact us by phone, email, or visit our office for expert advice and reliable support.
                    </p>
                    <div>
                        <p className="text-lg font-semibold text-brand-900 dark:text-white">Phone:</p>
                        <p className="text-brand-700 dark:text-brand-200">+91 98993 17824</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-brand-900 dark:text-white">Email:</p>
                        <p className="text-brand-700 dark:text-brand-200">info@rishilux.com</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-brand-900 dark:text-white">Address:</p>
                        <p className="text-brand-700 dark:text-brand-200">Plot no. 261, Satyam enclave, G.T. Road, Sahibabad, GZB,U.P. (201005).</p>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg className="w-6 h-6 text-brand-600 hover:text-brand-800" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.167 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.167 22 17.019 22 12z" /></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg className="w-6 h-6 text-brand-600 hover:text-brand-800" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.364.623-.57 1.34-.57 2.106 0 1.452.741 2.732 1.862 3.484A4.904 4.904 0 01.96 7.1v.062a4.922 4.922 0 003.946 4.827c-.293.08-.601.123-.917.123-.224 0-.442-.021-.653-.062.443 1.381 1.729 2.382 3.257 2.408A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.634A10.025 10.025 0 0024 4.557z" /></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg className="w-6 h-6 text-brand-600 hover:text-brand-800" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-2.5v-10h2.5v10zm-1.25-11.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13 11.25h-2.5v-5.5c0-1.379-.028-3.156-1.923-3.156-1.923 0-2.217 1.504-2.217 3.056v5.6h-2.5v-10h2.4v1.367h.034c.334-.634 1.151-1.301 2.37-1.301 2.537 0 3.006 1.669 3.006 3.841v6.093z" /></svg>
                        </a>
                    </div>
                </div>
                {/* Modern Contact Form */}
                <div className="flex-1 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-2">Contact Us</h2>
                    <form
                        className="space-y-4"
                        onSubmit={e => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
                            const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
                            const mobile = (form.elements.namedItem('mobile') as HTMLInputElement).value.trim();
                            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

                            if (!name || !email || !mobile || !message) {
                                alert('Please fill all fields.');
                                return;
                            }
                            if (!/^\d{10}$/.test(mobile)) {
                                alert('Mobile number must be exactly 10 digits.');
                                return;
                            }
                            if (message.split(' ').length > 35) {
                                alert('Message must be maximum 35 words.');
                                return;
                            }
                            // Submit logic here
                            alert('Form submitted successfully!');
                        }}
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-brand-900 dark:text-white">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full rounded-lg border border-brand-600/30 bg-white/10 px-4 py-2 text-brand-900 dark:text-white focus:ring-2 focus:ring-brand-600 outline-none transition"
                                required
                                onInput={e => {
                                    const input = e.target as HTMLInputElement;
                                    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
                                }}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-brand-900 dark:text-white">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full rounded-lg border border-brand-600/30 bg-white/10 px-4 py-2 text-brand-900 dark:text-white focus:ring-2 focus:ring-brand-600 outline-none transition"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mobile" className="text-sm font-medium text-brand-900 dark:text-white">Mobile Number</label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                placeholder="10 digit mobile number"
                                maxLength={10}
                                pattern="\d{10}"
                                inputMode="numeric"
                                onInput={e => {
                                    const input = e.target as HTMLInputElement;
                                    input.value = input.value.replace(/[^0-9]/g, '');
                                }}
                                className="w-full rounded-lg border border-brand-600/30 bg-white/10 px-4 py-2 text-brand-900 dark:text-white focus:ring-2 focus:ring-brand-600 outline-none transition"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-brand-900 dark:text-white">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message (max 35 words)"
                                className="w-full rounded-lg border border-brand-600/30 bg-white/10 px-4 py-2 text-brand-900 dark:text-white focus:ring-2 focus:ring-brand-600 outline-none transition"
                                rows={4}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-green-600 px-4 py-2 text-white font-semibold shadow transition hover:bg-green-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Map Column */}
                <div className="flex-1 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-2">Find Us</h2>
                    <div className="rounded-lg overflow-hidden border border-brand-600/30 shadow-lg">
                        <iframe
                            title="RishiLux Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4065048995562!2d77.3521476!3d28.6774842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa8b7872dbe3%3A0xd2958d08a1f98c9a!2sRishi%20Lux%20Private%20Limited!5e0!3m2!1sen!2sin!4v1773096389424!5m2!1sen!2sin&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

// FAQ data and state
const faqData = [
    {
        question: "What products does Rishilux offer?",
        answer: "Rishilux specializes in aviation warning lights, LED lighting systems, EV chargers, and day marking spheres. Our products are engineered for safety, performance, and reliability, making them ideal for high-rise buildings, telecom towers, and industrial structures. We focus on delivering innovative and energy-efficient solutions for modern infrastructure needs."
    },
    {
        question: "Are Rishilux products certified and compliant with regulations?",
        answer: "Yes, all Rishilux products are designed and manufactured to meet or exceed relevant national and international standards. We ensure our aviation warning lights and other solutions comply with safety and regulatory requirements, providing peace of mind for our clients and partners in every project we undertake."
    },
    {
        question: "How does Rishilux ensure product quality?",
        answer: "Rishilux maintains strict quality control throughout the manufacturing process. Each product undergoes rigorous testing for durability, performance, and safety. Our commitment to quality ensures that customers receive reliable, long-lasting solutions that perform optimally in demanding environments and conditions."
    },
    {
        question: "Can Rishilux provide custom solutions?",
        answer: "Absolutely. Rishilux works closely with clients to understand their unique requirements and deliver tailored solutions. Whether you need custom lighting systems, specialized EV chargers, or unique marking spheres, our engineering team is equipped to design and manufacture products that meet your specific needs."
    },
    {
        question: "What industries does Rishilux serve?",
        answer: "Rishilux serves a wide range of industries, including aviation, telecommunications, power transmission, construction, and renewable energy. Our products are trusted by professionals in these sectors for their reliability, compliance, and advanced engineering, supporting critical infrastructure projects nationwide."
    },
    {
        question: "How can I request a quote from Rishilux?",
        answer: "Requesting a quote from Rishilux is simple. Visit our Contact page, fill out the inquiry form with your project details, and our team will respond promptly. We provide detailed quotations and technical support to help you choose the best solutions for your requirements."
    },
    {
        question: "Does Rishilux offer installation and support services?",
        answer: "Yes, Rishilux offers comprehensive installation guidance and after-sales support for all our products. Our technical team is available to assist with setup, troubleshooting, and maintenance, ensuring your systems operate efficiently and reliably over the long term."
    },
    {
        question: "What makes Rishilux different from other manufacturers?",
        answer: "Rishilux stands out for its commitment to innovation, quality, and customer satisfaction. We combine advanced engineering with a customer-centric approach, offering products that are not only reliable and efficient but also tailored to the evolving needs of modern infrastructure and industry."
    },
    {
        question: "How energy-efficient are Rishilux products?",
        answer: "Rishilux products are designed with energy efficiency in mind. Our LED lighting systems and aviation warning lights use advanced technology to minimize power consumption while maximizing performance, helping clients reduce operational costs and environmental impact."
    },
    {
        question: "How do I contact Rishilux for technical support?",
        answer: "For technical support, you can reach out to Rishilux through our website’s Contact page, email, or phone. Our dedicated support team is ready to assist with any questions, troubleshooting, or guidance you may need regarding our products and services."
    }
];
