import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";
import BoxButton from "./BoxButton.jsx";
import { getStoreData } from "../storeData.js";

const ItemCard = ({ item }) => {
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

  return (
    <div className="w-40 rounded bg-zinc-900 p-2 shadow-md sm:w-48 lg:w-64 lg:p-4">
      <Link to={item.id}>
        <div className="relative mb-2">
          <img src={item.src} alt={item.name} className="mx-auto w-3/4" />
          <div className="absolute bottom-0 right-0 rounded bg-zinc-700 px-2 font-medium">
            ▮{item.price}
          </div>
        </div>
        <h2 className="text-lg font-medium text-green-500">{item.name}</h2>
      </Link>
      <div className="mt-4 flex justify-between gap-2 text-sm lg:text-base">
        <div className="flex items-center gap-1">
          <BoxButton
            title="Subtract quantity"
            onClick={() => changeQty(qty - 1)}
          >
            <Icon path={mdiMinus} size={0.9} />
          </BoxButton>
          <input
            type="number"
            className="w-6 rounded bg-zinc-800 text-center"
            min="0"
            max="99"
            value={inputValue}
            onChange={handleChangeValue}
          />
          <BoxButton title="Add quantity" onClick={() => changeQty(qty + 1)}>
            <Icon path={mdiPlus} size={0.9} />
          </BoxButton>
        </div>
        <button
          className="flex-grow rounded bg-zinc-950 font-medium disabled:opacity-50"
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

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    src: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
  }),
};

const Store = () => {
  return (
    <div className="py-4 text-center">
      <h1 className="mb-4">STORE</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {getStoreData().map((storeItem) => (
          <ItemCard key={storeItem.name} item={storeItem} />
        ))}
      </div>
    </div>
  );
};

export default Store;
