import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
  const productPageHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          key="1"
          productId={"product id"}
          name="p1"
          price={123}
          stock={1}
          cartHandler={addToCartHandler}
          productHandler={productPageHandler}
          photo={"photo"}
        />
      </main>
    </div>
  );
};

export default Home;
