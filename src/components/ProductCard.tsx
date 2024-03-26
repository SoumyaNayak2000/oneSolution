import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  cartHandler: () => void;
  productHandler: () => void;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  cartHandler,
  productHandler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={() => cartHandler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
