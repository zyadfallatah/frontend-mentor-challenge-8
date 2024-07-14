import { ProductType } from "./Product";

const OrderProduct = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex justify-between items-center flex-1">
      <div className="grid">
        <h3 className="text-Rose-900 font-semibold">{product.name}</h3>
        <div className="flex gap-2">
          <p className="text-Red font-bold mb-2">{product.amount}x</p>
          <p className="text-Rose-500">@ ${product.price}</p>
        </div>
      </div>
      <p className="text-Rose-900 text-lg font-semibold">
        ${product.price * product.amount!}
      </p>
    </div>
  );
};

export default OrderProduct;
