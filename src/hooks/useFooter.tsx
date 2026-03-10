import { NavLink } from 'react-router-dom'

const policyLinks = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/returns', label: 'Returns & Refunds' },
]

export function useFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-slate-300 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
        <span>© 2026 RishiLux. All rights reserved.</span>
        <div className="flex flex-wrap gap-3">
          {policyLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-2 py-1 rounded-md transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
