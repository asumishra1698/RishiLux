import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import { useState } from 'react';

function Products() {
  useSeo({
    title: 'RishiLux - Products',
    description: 'Explore RishiLux products: aviation warning lights, LED lighting solutions, EV chargers, and spheres.',
    keywords: 'products, aviation warning lights, LED lighting, EV chargers, spheres, RishiLux'
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

  const productFaqs = [
    {
      question: "What types of aviation warning lights do you offer?",
      answer: "Rishilux offers a comprehensive range of aviation warning lights, including low, medium, and high intensity models. Our products are designed for high-rise buildings, telecom towers, chimneys, and industrial structures. Each light is engineered for maximum visibility and safety, meeting regulatory standards and ensuring reliable performance. Rishilux’s expertise guarantees solutions tailored to your project’s requirements, with a focus on quality, durability, and compliance for every installation."
    },
    {
      question: "Are your LED lighting solutions energy efficient?",
      answer: "Rishilux LED lighting solutions are highly energy efficient, providing significant savings and long operational life. Our flood lights, high bay lights, and street lights use advanced technology to minimize power consumption while maximizing brightness and reliability. Rishilux’s commitment to sustainability ensures that every product is designed for optimal performance, helping clients reduce costs and environmental impact across diverse infrastructure projects."
    },
    {
      question: "Do you provide EV chargers for residential and commercial use?",
      answer: "Rishilux manufactures EV chargers suitable for both residential and commercial applications. Our chargers are engineered for safety, reliability, and ease of use, supporting electric vehicle adoption in homes, offices, and public spaces. Rishilux’s technical team provides guidance and support to ensure seamless installation and operation, making us a trusted partner for modern mobility solutions in India."
    },
    {
      question: "Are your products compliant with Indian and international standards?",
      answer: "All Rishilux products are designed to meet or exceed relevant Indian and international standards for safety and performance. Our manufacturing processes follow strict quality control, ensuring every product is reliable and compliant. Rishilux’s dedication to excellence means clients receive solutions that are certified, tested, and ready for demanding environments, supporting government and private projects nationwide."
    },
    {
      question: "Can I request custom lighting solutions?",
      answer: "Absolutely. Rishilux offers custom engineering and manufacturing for unique project requirements. Our team works closely with clients to understand their needs and deliver tailored solutions, whether for specialized lighting, EV charging, or marking spheres. Rishilux’s flexibility and expertise ensure your project receives the best possible outcome, with full support from design to installation."
    },
    {
      question: "What is the warranty period for your products?",
      answer: "Rishilux products typically come with a 2-year warranty, covering manufacturing defects and performance issues. We stand behind our products with comprehensive support and service. For specific warranty details, please refer to individual product documentation or contact Rishilux directly. Our commitment to customer satisfaction ensures peace of mind for every purchase."
    },
    {
      question: "Do you provide installation support?",
      answer: "Yes, Rishilux provides installation guidance and technical support for all our products. Our expert team assists clients from planning to setup, ensuring proper installation and optimal performance. Rishilux’s after-sales service includes troubleshooting, maintenance, and advice, making us a reliable partner for infrastructure projects of any scale."
    },
    {
      question: "How can I get a quote for bulk orders?",
      answer: "To get a quote for bulk orders, contact Rishilux via email, phone, or our website’s inquiry form. Our sales team responds promptly with detailed quotations and technical information. Rishilux’s transparent pricing and professional support make it easy to plan and execute large-scale projects with confidence and clarity."
    },
    {
      question: "Are your products suitable for government projects?",
      answer: "Rishilux products are widely used in government and private infrastructure projects across India. Our solutions meet regulatory standards and are trusted by professionals for their reliability, compliance, and advanced engineering. Rishilux’s experience with large-scale projects ensures seamless integration and support for critical applications."
    },
    {
      question: "How do I get after-sales support?",
      answer: "For after-sales support, reach out to Rishilux’s technical team via phone, email, or our website’s contact form. We provide troubleshooting, maintenance, and guidance to ensure your products operate efficiently and reliably. Rishilux’s commitment to customer care means you receive prompt, professional assistance whenever needed."
    }
  ];

  return (
    <div className="space-y-14">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-slate-400" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="hover:text-brand-600">Home</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-brand-700 dark:text-brand-200">Products</li>
        </ol>
      </nav>
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-brand-900 dark:text-white mb-8">Our Products</h1>
      {/* Product Grid */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
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

      {/* Product FAQ Section */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl mt-10">
        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-4">Product FAQs</h2>
        <div className="space-y-3">
          {productFaqs.map((faq, idx) => (
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

      {/* Contact Section */}
      <section className="rounded-2xl border border-brand-600/20 bg-brand-600/10 p-6 shadow-xl flex flex-col md:flex-row gap-8 items-start mt-10">
        <div className="flex-1 w-full max-w-md space-y-4">
          <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-2">Get in Touch</h2>
          <p className="text-base text-slate-200 mb-2">
            Reach out to RishiLux for product inquiries, technical support, or custom solutions. Our team is ready to assist you and provide expert advice. Contact us by phone, email, or visit our office for reliable support.
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

export default Products;