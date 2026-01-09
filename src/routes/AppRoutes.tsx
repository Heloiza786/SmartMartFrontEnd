import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Categories from '../pages/Categories'
import Sales from '../pages/Sales'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/vendas" element={<Sales />} />
    </Routes>
  )
}
