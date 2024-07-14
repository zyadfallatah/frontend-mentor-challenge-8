import cart from "../../assets/images/icon-add-to-cart.svg";
import increment from "../../assets/images/icon-increment-quantity.svg";
import decrement from "../../assets/images/icon-decrement-quantity.svg";
import { CartContext } from "../App";
import { useContext } from "react";

const ProductButton = ({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    totalNumber: [totalNumber, setTotalNumber],
  } = useContext(CartContext);

  const isProductNotAdded = amount === 0;

  return (
    <>
      {isProductNotAdded ? (
        <div
          className="absolute left-[50%] translate-x-[-50%] bottom-[-24px] bg-white border border-Rose-500 p-2 px-4 rounded-full 
          flex justify-center items-center gap-1 cursor-pointer hover:text-Red hover:border-Red min-w-36"
          onClick={() => {
            setAmount(amount + 1);
            setTotalNumber!(totalNumber! + 1);
          }}
        >
          <img src={cart} alt="cart image" />
          <button className="text-sm font-semibold">Add To Cart</button>
        </div>
      ) : (
        <div
          className="absolute left-[50%] translate-x-[-50%] bottom-[-24px] bg-Red border border-Rose-500 p-2 px-4 rounded-full 
          flex justify-between items-center gap-1 cursor-pointer hover:text-Red hover:border-Red min-w-36"
        >
          <img
            src={decrement}
            alt="cart image"
            className="border-white border rounded-full w-5 p-1 size-5"
            onClick={() => {
              setAmount(amount - 1);
              setTotalNumber!(totalNumber! - 1);
            }}
          />
          <button className="text-sm font-semibold text-white">{amount}</button>
          <img
            src={increment}
            alt="cart image"
            className="border-white border rounded-full w-5 p-1 size-5"
            onClick={() => {
              setAmount(amount + 1);
              setTotalNumber!(totalNumber! + 1);
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProductButton;
