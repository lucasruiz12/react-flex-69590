import './CartWidget.css';
import { FaCartShopping } from "react-icons/fa6";

function CartWidget() {

  return (
    <>
      <FaCartShopping color="blue" />
      <p>(5)</p>
    </>
  );
};

export default CartWidget;