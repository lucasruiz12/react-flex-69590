import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const numero = 1;

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
                        ...el,
                        cantidad: el.cantidad + prod.cantidad
                    }
                } else {
                    return el;
                };
            })
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, nuevoProducto]);
        };


        console.log("Vas a agregar", nuevoProducto);

        setTimeout(() => {
            console.log(carrito);
        }, 1000);

    };

    return (
        <AppContext.Provider value={{ numero, carrito, agregarAlCarrito }}>
            {props.children}
        </AppContext.Provider>
    )
}