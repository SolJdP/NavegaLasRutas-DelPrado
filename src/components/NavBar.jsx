import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/tecnología">Tecnología</Link>
      <Link to="/category/hogar">Hogar</Link>
    </nav>
  )
}

export default NavBar
