import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, ShoppingBag, Files, PackageSearch, Settings, Home, Gauge } from 'lucide-react'

const links = [
  { name: 'نمای کلی', path: '/', icon: <Home size={20} /> },
  { name: 'فروش', path: '/sales', icon: <ShoppingCart size={20} /> },
  { name: 'خرید', path: '/purchases', icon: <ShoppingBag size={20} /> },
  { name: 'انبار', path: '/inventory', icon: <PackageSearch size={20} /> },
  { name: 'گزارشات', path: '/reports', icon: <Files size={20} /> },
  { name: 'تنظیمات', path: '/settings', icon: <Settings size={20} /> },
]

interface SidebarProps {
  onNavigate?: () => void
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const location = useLocation()

  return (
    <aside className="h-full bg-white/60 backdrop-blur-sm border-l border-gray-200 shadow-md px-4 py-6 font-farsi transition-all duration-300">
      <div className="text-xl flex justify-start items-center font-bold mb-10 text-gray-800">
        <Gauge className='text-blue-600' />
        <div className='mr-2'>
          فناوری آینده
        </div> 
      </div>
      <nav className="flex flex-col gap-2">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onNavigate}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
              location.pathname === link.path
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
