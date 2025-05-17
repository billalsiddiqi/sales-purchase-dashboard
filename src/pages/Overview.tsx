import { useEffect, useState } from 'react'
import type { OverviewData, TopSellingItem } from '../types'
import InfoCard from '../components/InfoCard'
import SmartList from '../components/SmartList'
import OverviewLineChart from '../components/charts/OverviewLineChart'

export default function Overview() {
  const [data, setData] = useState<OverviewData | null>(null)

  useEffect(() => {
    fetch('/data/overview.json')
      .then((res) => res.json())
      .then(setData)
      .catch((error) => {
        console.error('Error fetching overview data:', error)
        setData(null)
      })
  }, [])

  if (!data) return <p>در حال بارگذاری...</p>

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard
          title="کل فروش"
          value={data.totalSales.toLocaleString()}
          icon="💰"
          iconBgColor="bg-green-100 text-green-800"
        />
        <InfoCard
          title="کل خرید"
          value={data.totalPurchases.toLocaleString()}
          icon="🛒"
          iconBgColor="bg-blue-100 text-blue-800"
        />
        <InfoCard
          title="اقلام انبار"
          value={data.totalInventoryItems}
          icon="📦"
          iconBgColor="bg-purple-100 text-purple-800"
        />
        <InfoCard
          title="سفارشات معلق"
          value={data.pendingOrders}
          icon="⏳"
          iconBgColor="bg-yellow-100 text-yellow-800"
        />
      </div>
      <div className='my-8'>
        {data.monthlySummary && (
          <OverviewLineChart data={data.monthlySummary} />
        )}

      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">پرفروش‌ترین محصولات</h2>
        <SmartList<TopSellingItem>
          data={data.topSellingItems || []}
          filterPlaceholder="جستجوی محصول..."
          columns={[
            { title: "نام محصول", accessor: "name" },
            { title: "تعداد فروش", accessor: "unitsSold" },
          ]}
        />
      </div>
    </div>
  )
}
