import { Link } from 'react-router-dom'

function Item({ product }) {
  return (
    <div className="item">
      <h3>{product.title}</h3>
      <p>{product.price} USD</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item
