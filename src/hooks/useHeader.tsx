import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
]

export function useHeader() {
    const [open, setOpen] = useState(false)
    // Prevent body scroll when sidebar is open
    if (typeof document !== 'undefined') {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }
    return (
        <header className="sticky top-0 z-40 bg-gradient-to-r from-brand-800/90 via-brand-700/90 to-brand-600/90 backdrop-blur-lg shadow-lg border-b border-white/10">
            <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
                <div className="flex items-center gap-3">
                    <NavLink to="/">
                        <img
                            src="/logo.png"
                            alt="RishiLux Logo"
                            className="h-auto w-15 rounded-sm backdrop-blur-sm object-contain shadow-md"
                        />
                    </NavLink>
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-wrap gap-2 text-sm font-medium">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                {/* Desktop Call Icon and Number */}
                <a
                    href="tel:09899317824"
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors ml-4"
                    style={{ textDecoration: 'none' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                    </svg>
                    098993 17824
                </a>
                {/* Mobile Call Icon (left of hamburger) */}
                <div className="flex md:hidden items-center gap-2">
                    <a
                        href="tel:09899317824"
                        className="flex items-center justify-center p-2 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none"
                        aria-label="Call"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                        </svg>
                    </a>
                    {/* Hamburger for mobile */}
                    <button
                        className="flex items-center justify-center p-2 rounded bg-brand-700 text-white focus:outline-none"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                            <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
                            <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
                            <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Sidebar */}
            {open && (
                <div className="fixed inset-0 z-[9999]">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
                    <div className="absolute inset-0 bg-white h-full w-full shadow-xl flex flex-col p-6 animate-slide-in z-[10000]">
                        <div className="flex items-center justify-between mb-6">
                            <img
                                src="/logo.png"
                                alt="RishiLux Logo"
                                className="h-12 w-12 rounded-sm bg-white object-contain shadow-md"
                            />
                            <button
                                className="p-2 rounded bg-black text-white ml-4"
                                onClick={() => setOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block px-4 py-3 rounded-md text-lg font-medium transition-colors ${isActive ? 'bg-black/10 text-black' : 'text-black hover:bg-black/5'
                                        }`
                                    }
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
