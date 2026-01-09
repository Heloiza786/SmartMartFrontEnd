export type Sale = {
  id: number
  product_id: number
  sale_date: string
  quantity: number
  total_price: number
}

export type SaleCreate = {
  product_id: number
  sale_date: string
  quantity: number
  total_price: number
}
