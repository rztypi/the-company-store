import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";
import storeData from "../storeData.js";

const QtyButton = ({ path, title, onClick }) => {
  return (
    <button
      type="button"
      className="flex h-6 w-6 items-center justify-center rounded bg-zinc-950"
      title={title}
      onClick={onClick}
    >
      <Icon path={path} size={0.9} />
    </button>
  );
};

const Card = ({ item }) => {
  const { cartData, setCartData } = useOutletContext();

  const [qty, setQty] = useState(0);
  const [inputValue, setInputValue] = useState("0");

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
    if (newQty < 0 || newQty > 99) {
      setInputValue(qty.toString());
      return;
    }
    setQty(newQty);
    setInputValue(newQty.toString());
  };

  const buyItem = () => {
    console.log(`buy ${qty} ${item.name}s`);
    changeQty(0);
    if (cartData.some((cartItem) => cartItem.name === item.name)) {
      setCartData(
        cartData.map((cartItem) => {
          if (cartItem.name === item.name) {
            cartItem.qty += qty;
          }
          return cartItem;
        }),
      );
    } else {
      setCartData(
        cartData.concat({
          name: item.name,
          qty,
        }),
      );
    }
  };

  return (
    <div className="flex aspect-2/3 w-40 flex-col rounded bg-zinc-900 p-2 shadow-md sm:aspect-3/4 sm:w-48 lg:aspect-4/5 lg:w-64 lg:p-4">
      <div>
        <img src={item.src} alt={item.name} className="mx-auto mb-2 w-3/4" />
        <h2 className="text-lg font-bold text-green-500">{item.name}</h2>
        <p className="line-clamp-2 overflow-y-auto text-sm text-neutral-300 scrollbar-thin">
          {item.desc}
        </p>
      </div>
      <div className="mt-auto flex justify-between gap-2 text-sm lg:text-base">
        <div className="flex items-center gap-1">
          <QtyButton
            path={mdiMinus}
            title="Subtract quantity"
            onClick={() => changeQty(qty - 1)}
          />
          <input
            type="number"
            className="w-6 rounded bg-zinc-800 text-center"
            min="0"
            max="99"
            value={inputValue}
            onChange={handleChangeValue}
          />
          <QtyButton
            path={mdiPlus}
            title="Add quantity"
            onClick={() => changeQty(qty + 1)}
          />
        </div>
        <button
          className="flex-grow rounded bg-zinc-950 disabled:opacity-50"
          type="button"
          disabled={qty === 0}
          onClick={buyItem}
        >
          BUY
        </button>
      </div>
    </div>
  );
};

const Store = () => {
  return (
    <div className="py-4 text-center">
      <h1 className="mb-4">Store</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {storeData.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
