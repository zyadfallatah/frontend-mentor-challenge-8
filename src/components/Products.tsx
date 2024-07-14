import Product from "./Product";
import products from "./data.json";

const Products = () => {
  return (
    <>
      <div className=" md:grid md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default Products;
