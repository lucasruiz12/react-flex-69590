import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {

    return (
        <header>
            <nav className="nav-bar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN34pQyZY-IiO8q9PvdGQzE4xNJY5PmfdVHg&s" alt="NOIMG" />
                <ul className="nav-bar-items">
                    <Link to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link to="/categoria/computadora">
                        <li>Computadora</li>
                    </Link>
                    <Link to="/categoria/celular">
                        <li>Celular</li>
                    </Link>
                </ul>
                <Link to="/carrito">
                    <CartWidget />
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;