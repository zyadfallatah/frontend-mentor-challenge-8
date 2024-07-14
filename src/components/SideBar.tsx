import emptyCart from "../../assets/images/illustration-empty-cart.svg";
import SideBarActive from "./SideBarActive";
import { useContext } from "react";
import { CartContext } from "../App";

const SideBar = () => {
  const {
    totalNumber: [totalAmount],
  } = useContext(CartContext);

  return (
    <aside className="bg-white p-4 py-6 rounded-md space-y-4 w-full">
      <h3 className="text-2xl text-Red font-bold">Your Cart ({totalAmount})</h3>
      {totalAmount === 0 ? (
        <>
          <img src={emptyCart} alt="empty cart" className="mx-auto" />
          <p className="text-center text-Rose-500 font-semibold">
            Your added items will appear here
          </p>
        </>
      ) : (
        <SideBarActive />
      )}
    </aside>
  );
};

export default SideBar;
