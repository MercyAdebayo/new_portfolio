'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
    

]

export default function Navbar(){
    const pathname = usePathname()

    return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      {/* <h1 className="text-xl font-bold">Mercy Adebayo</h1> */}
      <ul className="flex space-x-6 text-sm">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`hover:underline ${
                pathname === item.href ? 'font-semibold underline' : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}