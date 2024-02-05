import { useState } from "react";
import { useLoaderData, Navigate, useOutletContext } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMinus, mdiPlus } from "@mdi/js";
import BoxButton from "./BoxButton.jsx";
import { getStoreItem } from "../storeData.js";

export const loader = ({ params }) => {
  return { item: getStoreItem(params.id) };
};

const StoreItem = () => {
  const { cartData, setCartData } = useOutletContext();
  const { item } = useLoaderData();

  const [qty, setQty] = useState(1);
  const [inputValue, setInputValue] = useState("1");

  const handleChangeValue = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value !== "" && value >= 0 && value <= 99) {
      setQty(+value);
    } else {
      setQty(0);
    }
  };

  const changeQty = (newQty) => {
    if (newQty < 1 || newQty > 99) {
      setInputValue(qty.toString());
      return;
    }
    setQty(newQty);
    setInputValue(newQty.toString());
  };

  const buyItem = () => {
    console.log(`buy ${qty} ${item.name}s`);
    changeQty(1);
    if (cartData.some((cartItem) => cartItem.item.name === item.name)) {
      setCartData(
        cartData.map((cartItem) => {
          if (cartItem.item.name === item.name) {
            cartItem.qty += qty;
          }
          return cartItem;
        }),
      );
    } else {
      setCartData(
        cartData.concat({
          item,
          qty,
        }),
      );
    }
  };

  if (!item) {
    return <Navigate to="/store" replace={true} />;
  }

  const handleChangeQtyValue = (event) => {};

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
          <div className="flex items-center gap-1">
            <span className="mr-1 text-sm">Qty:</span>
            <BoxButton
              title="Subtract quantity"
              onClick={() => changeQty(qty - 1)}
            >
              <Icon path={mdiMinus} size={0.9} />
            </BoxButton>
            <input
              type="number"
              className="w-6 rounded bg-zinc-800 text-center"
              min="1"
              max="99"
              value={inputValue}
              onChange={handleChangeValue}
            />
            <BoxButton title="Add quantity" onClick={() => changeQty(qty + 1)}>
              <Icon path={mdiPlus} size={0.9} />
            </BoxButton>
          </div>
          <button
            className="mt-2 flex w-full justify-center rounded bg-zinc-950 py-1 text-lg font-medium"
            type="button"
            onClick={buyItem}
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
