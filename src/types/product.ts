export type Product = {
  id: number
  name: string
  price: number
  description?: string
  brand?: string
  category_id: number
}
export type ProductCreate = {
   name: string
   price: number
   description?: string
   brand?: string
   category_id: number
}
   