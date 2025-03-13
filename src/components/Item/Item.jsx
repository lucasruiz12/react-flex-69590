import './Item.css';

function Item({ producto }) {

    const { nombre, precio, stock } = producto

    return (
        <div className="card p-4">
            <h3 className="card-header">{nombre}</h3>
            <h5 className="card-body">Precio: ${precio}</h5>
            <p>Quedan {stock} disponibles</p>
            <button className="btn btn-secondary">Agregar al carrito</button>
        </div>
    );
};

export default Item;