export async function fetchInventory() {
  const res = await fetch('/data/inventory.json')
  return res.json()
}

export async function fetchReports() {
  const res = await fetch('/data/reports.json')
  return res.json()
}

export async function fetchSettings() {
  const res = await fetch('/data/settings.json')
  return res.json()
}
export async function fetchSales() {
  const res = await fetch('/data/sales.json')
  return res.json()
}
export async function fetchPurchases() {
  const res = await fetch('/data/purchases.json')
  return res.json()
}
export async function fetchOverview() {
  const res = await fetch('/data/overview.json')
  return res.json()
}
