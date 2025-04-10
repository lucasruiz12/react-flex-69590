import { Link } from 'react-router';
import './Item.css';
import { useAppContext } from '../../context/context';

function Item({ producto }) {

    const { id, nombre, precio, stock } = producto;

    const { agregarAlCarrito } = useAppContext();

    return (
        <div className="card p-4">
            <h3 className="card-header">{nombre}</h3>
            <h5 className="card-body">Precio: ${precio}</h5>
            <p>Quedan {stock} disponibles</p>
            <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto, 1)}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button className="btn btn-secondary my-2">Ver detalle</button>
            </Link>
        </div>
    );
};

export default Item;