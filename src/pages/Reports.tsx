import { useEffect, useState } from "react"
import { Tab } from "@headlessui/react"
import SmartList from "../components/SmartList"
import type { ReportData, MonthlyData, TopCategory } from "../types"
import { exportToCSV } from "../utils/exportToCSV"
import MonthlySalesChart from "../components/charts/MonthlySalesChart"
import MonthlyPurchasesChart from "../components/charts/MonthlyPurchasesChart"
import TopCategoriesChart from "../components/charts/TopCategoriesChart"

export default function Reports() {
  const [report, setReport] = useState<ReportData | null>(null)

  useEffect(() => {
    fetch("/data/reports.json")
      .then((res) => res.json())
      .then(setReport)
  }, [])

  if (!report) return <p>در حال بارگذاری...</p>

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">گزارش‌ها</h1>

      <Tab.Group>
          {/* Tab Buttons */}
          <Tab.List className="flex gap-2 rtl:flex-row-reverse">
            {["فروش ماهانه", "خرید ماهانه", "دسته‌بندی‌های پرفروش"].map((tab, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  `px-4 py-2 rounded-full text-sm transition ${
                    selected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

        {/* Tab Content */}
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <div className="flex justify-end mb-2">
              <button
                  onClick={() => exportToCSV(report.monthlySales, "فروش_ماهانه")}
                  className="px-4 py-2 cursor-pointer text-sm text-gray-700 hover:text-gray-950 transition"
                >
                  📥 دانلود CSV
                </button>
            </div>
            <SmartList<MonthlyData>
              data={report.monthlySales}
              columns={[
                { title: "ماه", accessor: "month" },
                {
                  title: "میزان فروش",
                  accessor: "amount",
                  render: (item) => item.amount.toLocaleString() + " افغانی",
                },
              ]}
            />
            <div className="my-8">
              <MonthlySalesChart data={report.monthlySales} />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="flex justify-end mb-2">
              <button
                onClick={() => exportToCSV(report.monthlyPurchases, "خرید_ماهانه")}
                className="px-4 py-2 cursor-pointer text-sm text-gray-700 hover:text-gray-950 transition"
              >
                📥 دانلود CSV
              </button>
            </div>
            <SmartList<MonthlyData>
              data={report.monthlyPurchases}
              columns={[
                { title: "ماه", accessor: "month" },
                {
                  title: "میزان خرید",
                  accessor: "amount",
                  render: (item) => item.amount.toLocaleString() + " افغانی",
                },
              ]}
            />
            <div className="my-8">
              <MonthlyPurchasesChart data={report.monthlyPurchases} />            
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="flex justify-end mb-2">
              <button
                onClick={() => exportToCSV(report.topCategories, "دسته‌بندی‌ها")}
                className="px-4 py-2 cursor-pointer text-sm text-gray-700 hover:text-gray-950 transition"
              >
                📥 دانلود CSV
              </button>
            </div>
            <SmartList<TopCategory>
              data={report.topCategories}
              columns={[
                { title: "دسته‌بندی", accessor: "category" },
                {
                  title: "میزان فروش",
                  accessor: "sales",
                  render: (item) => item.sales.toLocaleString() + " افغانی",
                },
              ]}
            />
            <div className="my-8">
              <TopCategoriesChart data={report.topCategories} />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
