import { useAppContext } from '../../context/context';
import { FaCartShopping } from "react-icons/fa6";
import './CartWidget.css';

function CartWidget() {

  const { carrito } = useAppContext();

  return (
    <>
      <FaCartShopping color="blue" />
      <p>{carrito.length}</p>
    </>
  );
};

export default CartWidget;