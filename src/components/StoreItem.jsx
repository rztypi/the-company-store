import { useState } from "react";
import { useLoaderData, Navigate, useOutletContext } from "react-router-dom";
import QtyInput from "./QtyInput.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { getStoreItem } from "../storeData.js";

export const loader = ({ params }) => {
  return { item: getStoreItem(params.id) };
};

const StoreItem = () => {
  const { item } = useLoaderData();
  const [qty, setQty] = useState(1);
  const { cartData, setCartData } = useOutletContext();

  if (!item) {
    return <Navigate to="/store" replace={true} />;
  }

  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <div className="flex w-full max-w-96 flex-col items-center gap-4 rounded bg-zinc-900 p-4 shadow-lg md:max-w-[48rem] md:flex-row md:gap-8 md:p-8">
        <img className="w-5/6 md:w-1/2" src={item.src} alt={item.name} />
        <div className="md:w-1/2">
          <h1 className="font-medium text-green-500">{item.name}</h1>
          <p className="text-neutral-400">{item.desc}</p>
          <div className="my-4 inline-block rounded bg-zinc-700 px-2 text-xl font-bold">
            ▮{item.price}
          </div>
          <div className="flex items-center gap-2">
            <span>Qty:</span>
            <QtyInput qtyState={[qty, setQty]} />
          </div>
          <AddToCartButton
            className="mt-2 flex w-full justify-center rounded bg-zinc-950 py-1 text-lg font-medium"
            cartDataState={[cartData, setCartData]}
            storeItem={item}
            qty={qty}
          />
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
