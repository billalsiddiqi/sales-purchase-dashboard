import { useEffect, useState } from "react"
import SmartList from "../components/SmartList"
import type { Purchase } from "../types"

export default function Purchases() {
  const [purchases, setPurchases] = useState<Purchase[]>([])

  useEffect(() => {
    fetch("/data/purchases.json")
      .then((res) => res.json())
      .then(setPurchases)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">خریدها</h1>

      <SmartList<Purchase>
        data={purchases}
        filterPlaceholder="جستجوی تامین‌کننده یا محصول..."
        columns={[
          { title: "تاریخ", accessor: "date" },
          { title: "تامین‌کننده", accessor: "supplier" },
          { title: "محصول", accessor: "product" },
          { title: "تعداد", accessor: "quantity" },
          {
            title: "جمع کل",
            accessor: "total",
            render: (item) => item.total.toLocaleString() + " افغانی",
          },
        ]}
      />
    </div>
  )
}
