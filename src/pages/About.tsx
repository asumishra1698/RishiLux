
import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';

function About() {
  useSeo({
    title: 'RishiLux - About',
    description: 'Learn about RishiLux Pvt. Ltd., a leader in aviation warning lights, LED lighting, EV chargers, and spheres in India.',
    keywords: 'about, RishiLux, aviation warning lights, LED lighting, EV chargers, spheres, India'
  });
  return (
    <div className="space-y-8 text-slate-200">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-slate-400" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="hover:text-brand-600">Home</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-brand-700 dark:text-brand-200">About</li>
        </ol>
      </nav>
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-white mb-8">About Us</h1>
      <div className="flex flex-col md:flex-row items-center gap-2 max-w-full">
        <div className="space-y-4 text-lg flex-1">
          <p>
            Rishi Lux Pvt. Ltd. is a leading manufacturer of advanced aviation warning lights, LED lighting systems, electric vehicle chargers, and day marking spheres in India. Established under the leadership of Mr. Ram Dayal, the company is committed to delivering high-performance, energy-efficient, and safety-driven electrical solutions for modern infrastructure. We specialize in Low, Medium, and High Intensity Aviation Warning Lights designed to meet regulatory standards and ensure aviation safety for high-rise buildings, telecom towers, transmission lines, and industrial structures.
          </p>
          <p>
            With strong manufacturing capabilities and a dedicated technical team, Rishi Lux Pvt. Ltd. focuses on quality, innovation, and reliability in every product. Our LED lighting solutions including Flood Lights, High Bay Lights, and Street Lights are engineered for durability, energy savings, and long operational life. We continuously upgrade our technology and processes to meet the evolving demands of industries, government projects, and private infrastructure development across India.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/rishiluxlight5.jpg"
            alt="RishiLux Company"
            className="rounded-xl shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-lg font-semibold text-white">Our Mission</p>
          <p className="mt-2 text-sm text-slate-300">
            Our mission is to manufacture world-class aviation lighting and energy-efficient electrical products that ensure safety, sustainability, and superior performance. We are dedicated to maintaining the highest standards of quality, innovation, and customer satisfaction. Through advanced technology and responsible manufacturing practices, we aim to support infrastructure growth while promoting energy conservation and long-term value for our clients.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-lg font-semibold text-white">Our Vision</p>
          <p className="mt-2 text-sm text-slate-300">
            Our vision is to become a globally trusted name in aviation safety lighting and advanced electrical solutions. We aspire to lead the industry through innovation, reliability, and sustainable technology. By continuously improving our products and expanding our reach, we aim to contribute to safer skies, smarter cities, and a greener future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
