import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';

function Services() {
  useSeo({
    title: 'RishiLux - Services',
    description: 'Discover RishiLux services: installation, technical support, custom engineering, and maintenance for electrical solutions.',
    keywords: 'services, installation, technical support, engineering, maintenance, RishiLux'
  });
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
          <li className="text-brand-700 dark:text-brand-200">Services</li>
        </ol>
      </nav>
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-brand-900 dark:text-white mb-8">Our Services</h1>
      {/* Service Content */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mb-4">What We Offer</h2>
        <p className="text-lg text-slate-200 mb-2">
          RishiLux provides a range of services including installation guidance, technical support, custom engineering solutions, and after-sales maintenance for aviation warning lights, LED lighting systems, EV chargers, and day marking spheres. Our expert team ensures reliable performance and compliance for your infrastructure projects.
        </p>
      </section>

      {/* Battery Swapping & Service Section */}
      <section className="mt-10 grid gap-10 md:grid-cols-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        {/* Battery Swapping */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-brand-900 mb-2">1. Battery Swapping</h3>
          <p className="text-brand-700 mb-2">
            RishiLux’s battery swap solution ensures customers never run out of charge. Mileage of 80+ km in a single charge and roadside assistance offers a hassle-free experience. Our quality batteries are integrated with digital capabilities for high range and low cost, quick repair, regular maintenance, and on-call roadside support.
          </p>
          <ul className="list-disc pl-6 text-brand-700 mb-4">
            <li>Quality batteries integrated with digital capabilities</li>
            <li>High Range & Low Cost</li>
            <li>Quick repair & regular maintenance of batteries</li>
            <li>On call roadside assistance</li>
          </ul>
          <div>
            <a
              href="tel:09899317824"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
              style={{ textDecoration: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"></path>
              </svg>
              098993 17824
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* Battery Icon */}
          <img src="/1.gif" alt="Battery Icon" width={350} />
        </div>
      </section>
      <section className="mt-10 grid gap-10 md:grid-cols-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <div className="flex justify-center items-center">
          {/* Service Icon */}
          <img src="/2.gif" alt="Service Icon" width={350} />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-brand-900 mb-2">2. Service & Repair</h3>
          <p className="text-brand-700 mb-2">
            RishiLux provides best-in-class repair and maintenance service for your EV. Qualified professionals and easy availability of major spares make us a one-stop solution for all electric vehicle needs. We offer affordable pricing, easy financing, and mobile servicing for maximum convenience.
          </p>
          <ul className="list-disc pl-6 text-brand-700 mb-4">
            <li>Affordable and customer friendly pricing</li>
            <li>Availability of easy financing</li>
            <li>Mobile servicing</li>
          </ul>
          <div>
            <a
              href="tel:09899317824"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
              style={{ textDecoration: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"></path>
              </svg>
              098993 17824
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;