import './Item.css';

function Item({ producto, filtrarProducto }) {

    const { nombre, precio, stock } = producto;

    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad: 1,
        };

        console.log("Vas a agregar", nuevoProducto);

        // console.log("Vas a agregar", {...prod, cantidad: 1});

        // Este es un mini spoiler de cómo vamos a agregar al carrito
        // const array = [1,2,3];
        // array.push(4);
        // console.log([...array, 5])
    };

    return (
        <div className="card p-4">
            <h3 className="card-header">{nombre}</h3>
            <h5 className="card-body">Precio: ${precio}</h5>
            <p>Quedan {stock} disponibles</p>
            <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            <button className="btn btn-secondary my-2" onClick={() => filtrarProducto(producto)}>Ver detalle</button>
        </div>
    );
};

export default Item;