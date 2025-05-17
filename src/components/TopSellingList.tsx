import type { TopSellingItem } from "../types"
import { TrendingUp } from "lucide-react"

interface Props {
  items: TopSellingItem[]
}

export default function TopSellingList({ items }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-right">پرفروش‌ترین محصولات</h3>
      <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2 rtl:pr-0 rtl:pl-2 scroll-smooth">
        {items.map(item => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-xl p-3 rtl:flex-row-reverse"
          >
            <div className="flex items-center gap-3 rtl:flex-row-reverse">
              <div className="bg-green-100 text-green-700 p-2 rounded-full">
                <TrendingUp size={24} />
              </div>
              <div className="flex flex-col text-right">
                <span className="font-medium text-sm">{item.name}</span>
                <span className="text-xs text-gray-500">{item.unitsSold} عدد فروخته شده</span>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-700">{item.unitsSold}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
