import { Menu } from 'lucide-react'

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm flex items-center justify-start gap-4">
      {/* Show only on mobile */}
      <button
        className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={24} />
      </button>
      <h1 className="text-xl font-bold">داشبورد خرید و فروش</h1>
    </header>
  )
}
