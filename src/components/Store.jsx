import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import QtyInput from "./QtyInput.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { getStoreData } from "../storeData.js";

const ItemCard = ({ item }) => {
  const [qty, setQty] = useState(1);
  const { cartData, setCartData } = useOutletContext();

  return (
    <div className="w-48 rounded bg-zinc-900 p-2 shadow-md md:w-64 md:p-4">
      <Link className="group focus:outline-none" to={item.id}>
        <div className="relative mb-2">
          <img
            src={item.src}
            alt={item.name}
            className="mx-auto w-5/6 transition-transform group-hover:scale-105 group-focus-visible:scale-105"
          />
          <div className="absolute bottom-0 right-0 rounded bg-zinc-700 px-2">
            ▮{item.price}
          </div>
        </div>
        <h2 className="inline-block rounded text-xl font-medium text-green-500 group-focus-visible:ring group-focus-visible:ring-green-500">
          {item.name}
        </h2>
      </Link>
      <div className="mt-4 flex flex-col items-center gap-2 md:flex-row">
        <QtyInput qtyState={[qty, setQty]} />
        <AddToCartButton
          className="group h-6 w-full rounded bg-zinc-950 disabled:opacity-50"
          cartDataState={[cartData, setCartData]}
          storeItem={item}
          qty={qty}
        >
          <span className="opacity-75 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-50">
            Add to Cart
          </span>
        </AddToCartButton>
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
          <ItemCard key={storeItem.id} item={storeItem} />
        ))}
      </div>
    </div>
  );
};

export default Store;
