import OrderProduct from "./OrderProduct";
import confirmImage from "/assets/images/icon-order-confirmed.svg";
import CallToAction from "./CallToAction";
// import { ProductType } from "./Product";
import { CartContext } from "../App";
import { useContext } from "react";

const Order = ({
  setShowOrder,
}: {
  setShowOrder: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    products: [products],
    totalNumber: [, setTotalNumber],
  } = useContext(CartContext);

  const getTotalPrice = () => {
    let result = 0;
    products?.forEach((product) => {
      result += product.amount! * product.price;
    });
    return result;
  };

  return (
    <div className="grid place-items-end lg:place-items-center fixed w-full min-h-svh top-0 left-0 bg-black bg-opacity-50 !mt-0 z-50">
      <div
        className="bg-white w-full lg:max-w-[600px] h-[90%] lg:h-[50%] rounded-t-3xl lg:rounded-md px-6 py-10 overflow-y-scroll 
       scrollbar scrollbar-thumb-Red   scroll-smooth"
      >
        <img src={confirmImage} alt="confirm icon" />
        <h2 className="text-[42px] text-Rose-900 leading-[3rem] font-bold">
          Order Confirmed
        </h2>
        <p className="text-Rose-500 my-4">We hope you enjoy your food!</p>
        <div className="bg-Rose-100 p-4 space-y-4 rounded-md  divide-y divide-Rose-200">
          {products!
            .filter((product) => {
              return product.amount !== 0;
            })
            .map((product, index) => {
              return (
                <div className="flex items-start gap-3 pt-2">
                  <img
                    src={product.image.thumbnail}
                    alt="product image"
                    className="size-14 rounded-md"
                  />
                  <OrderProduct product={product} key={index} />
                </div>
              );
            })}
          <div className="flex items-center justify-between pt-2">
            <h3 className="text-Rose-900">Order Total: </h3>
            <h3 className="text-2xl font-bold">${getTotalPrice()}</h3>
          </div>
        </div>
        <CallToAction
          name="Start New Order"
          onClick={() => {
            setShowOrder(false);
            setTotalNumber!(0);
            products?.forEach((product) => {
              product.setAmount!(0);
            });
          }}
        />
      </div>
    </div>
  );
};

export default Order;
