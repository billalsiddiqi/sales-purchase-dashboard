# 📊 Creative Sales & Purchase Dashboard (RTL, Farsi)

A modern, clean, and fully interactive Sales & Purchase Dashboard built with **React**, **TypeScript**, and **Tailwind CSS v4** — designed specifically for **RTL** layout and **Farsi** locale.

## ✨ Features

- 🌐 Fully RTL layout (Farsi)
- 🧠 Smart reusable table (SmartList) with:
  - Filtering
  - Column sorting
- 📊 Beautiful charts (Recharts)
- 📥 Export data to CSV
- 📝 Editable settings with real-time validation
- 🔔 Clean toast notifications
- 🎨 Responsive modern UI using TailwindCSS

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── charts/             # Chart components (line, bar, pie)
│   ├── ui/                 # Shared UI components (Input, Card)
│   └── SmartList.tsx       # Reusable table component
├── pages/
│   ├── Overview.tsx
│   ├── Sales.tsx
│   ├── Purchases.tsx
│   ├── Inventory.tsx
│   ├── Reports.tsx
│   └── Settings.tsx
├── types/data.ts          # TypeScript interfaces
├── utils/exportToCSV.ts   # CSV export helper
public/
└── data/                  # JSON mock data (overview, sales, etc)
```

---

## 🧪 Tech Stack

- ⚛️ React + TypeScript
- 💨 Tailwind CSS v4
- 🧩 Headless UI (Tabs)
- 📊 Recharts (Charts)
- 🗃️ JSON (as mock API)

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

> Open `http://localhost:5173` in your browser

---

## 📊 Data Sources (Mocked)

All data is stored in `/public/data/` and loaded via `fetch` in each page:

- `overview.json`
- `sales.json`
- `purchases.json`
- `inventory.json`
- `reports.json`
- `settings.json`

---

## 📦 Reusable Components

### ✅ SmartList
A powerful, reusable table with filtering, sorting, and dynamic column support.

### ✅ DashboardCard
Displays metrics like total sales, purchases, inventory count, etc.

### ✅ Input (with validation)
Text input with RTL support and real-time error messaging.



## 📄 License

MIT — Feel free to use and modify.

---

## 🙌 Acknowledgments

Thanks to:
- [TailwindCSS](https://tailwindcss.com)
- [Headless UI](https://headlessui.com)
- [Recharts](https://recharts.org)

> Built as a frontend interview project with ❤️
