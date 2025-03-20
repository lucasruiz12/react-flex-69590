import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {

    const carrito = [1, 2, 2, 1, 2, 3, 2];

    return (
        <header>
            <nav className="nav-bar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN34pQyZY-IiO8q9PvdGQzE4xNJY5PmfdVHg&s" alt="NOIMG" />
                <ul className="nav-bar-items">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
                <CartWidget cantidad={carrito.length} />
            </nav>
        </header>
    );
};

export default Navbar;