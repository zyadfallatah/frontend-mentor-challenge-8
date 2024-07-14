import SidebarProduct from "./SidebarProduct";
import Order from "./Order";
import CarbonFree from "./CarbonFree";
import CallToAction from "./CallToAction";
import { CartContext } from "../App";
import { useContext, useState } from "react";

const SideBarActive = () => {
  const [showOrder, setShowOrder] = useState(false);

  const {
    products: [products],
  } = useContext(CartContext);

  const getTotal = () => {
    let result = 0;
    products!.forEach((product) => {
      result += product.price * product.amount!;
    });
    return result;
  };

  return (
    <>
      {showOrder && <Order setShowOrder={setShowOrder} />}
      <div className="space-y-4">
        {products!
          .filter((product) => {
            return product.amount !== 0;
          })
          .map((product, index) => {
            return <SidebarProduct product={product} key={index} />;
          })}
        <div className="flex justify-between items-center mt-8">
          <h2 className="text-Rose-900">Order Total: </h2>
          <p className="text-2xl text-Rose-900 font-bold">${getTotal()}</p>
        </div>
        <CarbonFree />
        <CallToAction
          name="Confirm Order"
          onClick={() => {
            setShowOrder(true);
          }}
        />
      </div>
    </>
  );
};

export default SideBarActive;
