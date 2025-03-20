import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState(null);

  const [productoFiltrado, setProductoFiltrado] = useState(null);

  useEffect(() => {
    fetchData()
      .then(response => {
        setTodosLosProductos(response);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(err => console.error(err));
  }, []);

  return (

    loading ?

      <Loader />

      :

      <div>
        <div className="container-productos">
          {todosLosProductos.map(el => {
            return (
              <Item key={el.id} producto={el} filtrarProducto={setProductoFiltrado} />
            );
          })}

        </div>
        {
          productoFiltrado && <ItemDetail producto={productoFiltrado} volverAlInicio={() => setProductoFiltrado(null)} />
        }
      </div>
  );
};

export default ItemListContainer;



// {
//   productoFiltrado ? <ItemDetail producto={productoFiltrado} volverAlInicio={() => setProductoFiltrado(null)} />
//     :
//     todosLosProductos.map(el => {
//       return (
//         <Item key={el.id} producto={el} filtrarProducto={setProductoFiltrado} />
//       );
//     })
// }