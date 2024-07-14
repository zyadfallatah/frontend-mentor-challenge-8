import removeItem from "../../assets/images/icon-remove-item.svg";
import { ProductType } from "./Product";
import { CartContext } from "../App";
import { useContext } from "react";

const SidebarProduct = ({
  product,
  edit = true,
}: {
  product: ProductType;
  edit?: boolean;
}) => {
  const {
    totalNumber: [totalNumber, setTotalNumber],
  } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center flex-1">
      <div className="grid  content-between">
        <h3 className="text-Rose-900 font-semibold">{product.name}</h3>
        <div className="flex gap-2">
          <p className="text-Red font-semibold mb-2">{product.amount}x</p>
          <p className="text-Rose-500">@${product.price}</p>
          <p className="text-Rose-500 font-semibold">
            ${product.price * product.amount!}
          </p>
        </div>
      </div>
      {edit && (
        <img
          src={removeItem}
          alt="remove item icon"
          className="size-fit p-1 rounded-full border border-Rose-400 cursor-pointer hover:border-Rose-900"
          onClick={() => {
            setTotalNumber!(totalNumber! - product.amount!);
            product.setAmount!(0);
          }}
        />
      )}
    </div>
  );
};

export default SidebarProduct;
