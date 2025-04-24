import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router';
import Loader from '../Loader/Loader';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { db } from '../../firebaseConfig';
import { collection, getDocs, } from 'firebase/firestore';
import { toast } from 'react-toastify';
// import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState(null);

  const { categoria } = useParams();

  const productosCollection = collection(db, "productos");
  // const ordenesCollection = collection(db, "ordenes");

  // const crearOrden = () => {

  //   const nuevaOrden = {
  //     nombre: "Lucas",
  //     telefono: 4232323,
  //     mail: "lucas@aguantegimnasia.com.ar"
  //   }

  //   addDoc(ordenesCollection, nuevaOrden).then(response => {
  //     console.log("Creaste correctamente tu orden con el id:", response.id);
  //   })
  //   .catch(err => console.error(err));

  // };

  // const filtrarDocumentos = () => {
  //   const productos = query(
  //     productosCollection,
  //     where("nombre", "==", "Gimnasia")
  //   )
  // }

  useEffect(() => {

    getDocs(productosCollection).then(snapshot => {
      let arrayDeProductos = snapshot.docs.map(el => el.data());
      console.log(arrayDeProductos);

    })
      .catch(err => console.error(err));



    if (!todosLosProductos) {
      fetchData()
        .then(response => {
          setTodosLosProductos(response);
          toast("Productos cargados correctamente");
          setTimeout(() => {
            setLoading(false);
          }, 500);
        })
        .catch(err => console.error(err));
    };

  }, [categoria]);

  return (

    loading ?

      <Loader />

      :

      <div>
        <div className="container-productos">
          {
            categoria ?

              todosLosProductos.filter(el => el.categoria === categoria).map(el => {
                return (
                  <Item key={el.id} producto={el} />
                );
              })

              :
              todosLosProductos.map(el => {
                return (
                  <Item key={el.id} producto={el} />
                );
              })}
        </div>
        {/* <button onClick={() => crearOrden()} className="btn btn-primary">Cargar</button> */}
      </div>
  );
};

export default ItemListContainer;