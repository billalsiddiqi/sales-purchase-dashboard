import { useEffect, useState } from "react"
import SmartList from "../components/SmartList"
import type { InventoryItem } from "../types"

export default function Inventory() {
  const [items, setItems] = useState<InventoryItem[]>([])

  useEffect(() => {
    fetch("/data/inventory.json")
      .then((res) => res.json())
      .then(setItems)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">موجودی انبار</h1>

      <SmartList<InventoryItem>
        data={items || []}
        filterPlaceholder="جستجوی کالا یا دسته‌بندی..."
        columns={[
          { title: "نام کالا", accessor: "name" },
          { title: "دسته‌بندی", accessor: "category" },
          { title: "موجودی", accessor: "stock",
            render: (item) => (
              <span className={item.stock < 10 ? "text-red-600 font-semibold" : ""}>
                {item.stock}
              </span>
            )
          },
          {
            title: "قیمت واحد",
            accessor: "unitPrice",
            render: (item) => item.unitPrice.toLocaleString() + " افغانی"
          }
        ]}
      />
    </div>
  )
}
