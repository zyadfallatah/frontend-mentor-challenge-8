import { useState } from "react";
import ProductButton from "./ProductButton";

type ProductType = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  amount?: number;
  setAmount?: React.Dispatch<React.SetStateAction<number>>;
};

const Product = ({ product }: { product: ProductType }) => {
  const [amount, setAmount] = useState(0);
  product.amount = amount;
  product.setAmount = setAmount;
  return (
    <div className="w-full">
      <div className="relative w-fit">
        <img
          src={product.image.mobile}
          alt=""
          className={
            amount === 0
              ? "rounded-md mb-6 md:hidden border"
              : "rounded-md mb-6 md:hidden border border-Red"
          }
        />
        <img
          src={product.image.tablet}
          alt=""
          className={
            amount === 0
              ? "hidden rounded-md mb-6 md:block lg:hidden border"
              : "hidden rounded-md mb-6 md:block lg:hidden border border-Red"
          }
        />
        <img
          src={product.image.desktop}
          alt=""
          className={
            amount === 0
              ? "hidden rounded-md mb-6 lg:block border"
              : "hidden rounded-md mb-6 lg:block border border-Red"
          }
        />
        <ProductButton amount={amount} setAmount={setAmount} />
      </div>
      <h3 className="text-sm text-Rose-500">{product.category}</h3>
      <h2 className="text-lg font-bold text-Rose-900">{product.name}</h2>
      <p className="mb-4 text-Red font-semibold">${product.price}</p>
    </div>
  );
};

export default Product;
export type { ProductType };
