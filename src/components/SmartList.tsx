import { ArrowUp, ArrowUpDown, ArrowDown } from "lucide-react"
import React, { useState, useMemo } from "react"

interface Column<T> {
  title: string
  accessor: keyof T
  render?: (item: T) => React.ReactNode
}

interface SmartListProps<T> {
  data: T[]                    // already-fetched array of items
  columns: Column<T>[]        // how to display each column
  filterPlaceholder?: string  // placeholder for the search box
}


function SmartList<T extends Record<string, any>>({ data, columns, filterPlaceholder }: SmartListProps<T>) {
    const [query, setQuery] = useState("")
    const [sortField, setSortField] = useState<keyof T | null>(null)
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null)


    const filteredData = useMemo(() => {
        let result = [...data]

        // Filter
        if (query.trim()) {
            result = result.filter((item) =>
            Object.values(item).some((value) =>
                typeof value === "string" && value.toLowerCase().includes(query.toLowerCase())
            )
            )
        }

        // Sort
        if (sortField && sortOrder) {
            result.sort((a, b) => {
            const aVal = a[sortField]
            const bVal = b[sortField]

            if (typeof aVal === "number" && typeof bVal === "number") {
                return sortOrder === "asc" ? aVal - bVal : bVal - aVal
            }

            if (typeof aVal === "string" && typeof bVal === "string") {
                return sortOrder === "asc"
                ? aVal.localeCompare(bVal)
                : bVal.localeCompare(aVal)
            }

            return 0
            })
        }

        return result
    }, [data, query, sortField, sortOrder])


    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm space-y-4">
        <input
            type="text"
            placeholder={filterPlaceholder || "جستجو..."}
            className="w-full p-2 border border-gray-300 rounded-lg text-right placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />

        <div className="overflow-x-auto">
            <table className="w-full rtl text-right border-separate border-spacing-y-2">
            <thead>
                <tr>
                    {columns.map((col, i) => (
                    <th
                        key={i}
                        className={`
                            text-sm font-bold py-2 text-gray-700 transition cursor-pointer select-none
                            hover:text-blue-600
                        `}
                        onClick={() => {
                            if (sortField === col.accessor) {
                            setSortOrder((prev) =>
                                prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
                            )
                            } else {
                            setSortField(col.accessor)
                            setSortOrder("asc")
                            }
                        }}
                        >
                        <div className="flex items-center justify-start gap-1 rtl:flex-row-reverse">
                            <span>{col.title}</span>
                            <span className="text-xs text-gray-400">
                            {sortField === col.accessor
                                ? sortOrder === "asc"
                                ? <ArrowUp className="w-4 mr-2" />
                                : sortOrder === "desc"
                                ? <ArrowDown className="w-4 mr-2" />
                                : <ArrowUpDown className="w-4 mr-2" />
                                : <ArrowUpDown className="w-4 mr-2" />}
                            </span>
                        </div>
                    </th>

                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredData.length === 0 ? (
                <tr>
                    <td colSpan={columns.length} className="text-center text-sm text-gray-500 py-4">
                    هیچ موردی پیدا نشد.
                    </td>
                </tr>
                ) : (
                filteredData.map((item, index) => (
                    <tr
                    key={index}
                    className="bg-gray-50 hover:bg-gray-100 transition rounded-xl"
                    >
                    {columns.map((col, i) => (
                        <td key={i} className="p-3 text-sm text-gray-800">
                        {col.render ? col.render(item) : String(item[col.accessor])}
                        </td>
                    ))}
                    </tr>
                ))
                )}
            </tbody>
            </table>
        </div>
        </div>
    )
}

export default SmartList
