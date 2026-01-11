import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Categories from '../pages/Categories'
import Sales from '../pages/Sales'
import ChartPage from '../pages/ChartPage'
import ChartHome from '../pages/ChartHome'
import NotImplemented from "../pages/NotImplemented";




export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/vendas" element={<Sales />} />
      <Route path="/chart" element={<ChartPage />} />
       <Route path="/chartHome" element={<ChartHome />} />
      <Route path="/chart/sales" element={<ChartPage />} />
      <Route path="*" element={<NotImplemented />} />
      
    </Routes>
  )
}
