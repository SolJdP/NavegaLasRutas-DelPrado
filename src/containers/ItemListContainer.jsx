import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from '../components/ItemList'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory : getProducts
    fetchData(categoryId).then(setProducts)
  }, [categoryId])

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
