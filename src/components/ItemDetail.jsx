import ItemCount from './ItemCount'

function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: {product.price} USD</p>
      <ItemCount />
    </div>
  )
}

export default ItemDetail
