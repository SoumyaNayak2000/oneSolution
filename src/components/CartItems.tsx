import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

type CartItemProps = {
  cartItem: any;
  incrementHandler: () => void;
  decrementHandler: () => void;
  removeHandler: () => void;
};

const CartItems = ({
  cartItem,
  incrementHandler,
  decrementHandler,
  removeHandler,
}: CartItemProps) => {
  const { photo, productId, name, price, quantity } = cartItem;

  return (
    <div className="cart-item">
      <img src={`${photo}`} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button onClick={() => decrementHandler()}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler()}>+</button>
      </div>

      <button onClick={() => removeHandler()}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItems;
