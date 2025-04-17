import { createContext, useContext, useState } from "react";

const AppContext = createContext(); // 1.

export const useAppContext = () => useContext(AppContext); // 5.

export const ContextProvider = (props) => { // 2.

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(prod, cantidad) {
        const nuevoProducto = {
            ...prod,
            cantidad,
        };

        if (carrito.some(el => el.id === prod.id)) {
            const newCarrito = carrito.map(element => {
                if (element.id === prod.id) {
                    return {
                        ...element,
                        cantidad: element.cantidad + cantidad
                    }
                } else {
                    return element;
                };
            })
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, nuevoProducto]);
        };

        // console.log(carrito);
    };

    // Cómo sumamos las cantidades?

    /*
    
    array.reduce((acc, el) => acc + el.cantidad , 0) // Esta es la óptima
    array.reduce((acc, el) => acc + (el.cantidad * el.precio) , 0) // Esta es la óptima

    ----

    let cantidadDeProductos = 0;
    array.forEach(el => cantidadDeProductos += el.cantidad)
    array.forEach(el => cantidadDeProductos += el.cantidad * el.precio)
    
    */

    // Abajo va el paso 3
    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito }}>
            {props.children}
        </AppContext.Provider>
    );
};