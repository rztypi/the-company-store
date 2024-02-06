import { useState } from "react";
import {
  useLoaderData,
  useOutletContext,
  Navigate,
  Link,
} from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
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
      <div className="w-full max-w-96 md:max-w-[48rem]">
        <Link
          className="inline-flex gap-2 opacity-75 transition-opacity hover:opacity-100 focus-visible:opacity-100"
          to="/store"
        >
          <Icon path={mdiArrowLeft} size={1} /> Back to Store
        </Link>
        <div className="flex flex-col items-center gap-4 rounded bg-zinc-900 p-4 shadow-lg md:flex-row md:gap-8 md:p-8">
          <img
            className="w-full p-4 transition-transform hover:scale-105 md:w-1/2 md:p-0"
            src={item.src}
            alt={item.name}
          />
          <div className="md:w-1/2">
            <h1 className="font-medium text-green-500">{item.name}</h1>
            <p className="text-pretty text-neutral-400">{item.desc}</p>
            <div className="my-4 inline-block rounded bg-zinc-700 px-2 text-xl font-bold">
              ▮{item.price}
            </div>
            <div className="flex items-center gap-2">
              <span>Qty:</span>
              <QtyInput qtyState={[qty, setQty]} />
            </div>
            <AddToCartButton
              className="group mt-2 flex w-full justify-center rounded bg-zinc-950 py-1 text-lg font-medium"
              cartDataState={[cartData, setCartData]}
              storeItem={item}
              qty={qty}
            >
              <span className="transition-opacity group-active:opacity-50">
                Add to Cart
              </span>
            </AddToCartButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
