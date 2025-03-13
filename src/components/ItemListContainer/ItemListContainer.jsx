import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';

function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState(null);

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
    <div className="container-productos">
      {
        loading ?
          <Loader />
          :
          todosLosProductos.map(el => {
            return (
              <Item key={el.id} producto={el} />
            );
          })
      }
    </div>
  );
};

export default ItemListContainer;