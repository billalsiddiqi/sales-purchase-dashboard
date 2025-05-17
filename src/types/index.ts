
export interface MonthlySummary {
  month: string
  sales: number
  purchases: number
}

export interface TopSellingItem {
  id: number
  name: string
  unitsSold: number
}

export interface OverviewData {
  totalSales: number
  totalPurchases: number
  totalInventoryItems: number
  pendingOrders: number
  topSellingItems: TopSellingItem[]
  monthlySummary: MonthlySummary[]
}

// Sales
export interface Sale {
  id: number
  date: string
  customer: string
  product: string
  quantity: number
  total: number
}

// Purchases
export interface Purchase {
  id: number
  date: string
  supplier: string
  product: string
  quantity: number
  total: number
}

// Inventory
export interface InventoryItem {
  id: number
  name: string
  category: string
  stock: number
  unitPrice: number
}

// Reports
export interface MonthlyData {
  month: string
  amount: number
}

export interface TopCategory {
  category: string
  sales: number
}

export interface ReportData {
  monthlySales: MonthlyData[]
  monthlyPurchases: MonthlyData[]
  topCategories: TopCategory[]
}

// Settings
export interface SettingsData {
  companyName: string
  address: string
  email: string
  phone: string
  currency: string
  language: string
  theme: "روشن" | "تاریک"
}

