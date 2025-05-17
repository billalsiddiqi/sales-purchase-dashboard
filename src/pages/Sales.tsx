import { useEffect, useState } from "react"
import SmartList from "../components/SmartList"
import type { Sale } from "../types"

export default function Sales() {
  const [sales, setSales] = useState<Sale[]>([])

  useEffect(() => {
    fetch("/data/sales.json")
      .then(res => res.json())
      .then(setSales)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-2">فروش‌ها</h1>

      <SmartList<Sale>
        data={sales || []}
        filterPlaceholder="جستجوی مشتری یا محصول..."
        columns={[
          { title: "تاریخ", accessor: "date" },
          { title: "مشتری", accessor: "customer" },
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
