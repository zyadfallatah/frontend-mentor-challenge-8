import React, { useState } from "react";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import { ProductType } from "./components/Product";
import jsonProducts from "./components/data.json";

type CartContext = {
  totalNumber: [
    total?: number,
    setTotal?: React.Dispatch<React.SetStateAction<number>>
  ];
  products: [
    total?: ProductType[],
    setTotal?: React.Dispatch<React.SetStateAction<ProductType[]>>
  ];
};

export const CartContext = React.createContext<CartContext>({
  totalNumber: [],
  products: [],
});

function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [products, setProducts] = useState<ProductType[]>(jsonProducts);

  const cart: CartContext = {
    totalNumber: [totalAmount, setTotalAmount],
    products: [products, setProducts],
  };

  return (
    <CartContext.Provider value={cart}>
      <h1 className="text-4xl text-Rose-900 font-bold mx-auto max-w-[1200px] mb-6">
        Desserts:
      </h1>
      <div className="lg:grid lg:grid-cols-70-30 gap-8 place-items-start max-w-[1200px] mx-auto">
        <Products />
        <SideBar />
      </div>
    </CartContext.Provider>
  );
}
export default App;
