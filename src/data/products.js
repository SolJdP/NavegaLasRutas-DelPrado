const products = [
  { id: '1', title: 'Producto A', category: 'ropa', description: 'Una prenda genial', price: 50 },
  { id: '2', title: 'Producto B', category: 'ropa', description: 'Otra prenda genial', price: 70 },
  { id: '3', title: 'Producto C', category: 'tecnología', description: 'Un gadget cool', price: 150 },
  { id: '4', title: 'Producto D', category: 'hogar', description: 'Cosa útil', price: 25 },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === id)), 1000)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 1000)
  })
}
