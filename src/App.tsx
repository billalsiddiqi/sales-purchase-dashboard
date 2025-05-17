import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import Sales from './pages/Sales'
import Purchases from './pages/Purchases'
import Inventory from './pages/Inventory'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path='/reports' element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Layout>
  )
}
