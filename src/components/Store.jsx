import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify, mdiClose } from "@mdi/js";
import QtyInput from "./QtyInput.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { getStoreData, getFilteredStoreData } from "../storeData.js";

const ItemCard = ({ item }) => {
  const [qty, setQty] = useState(1);
  const { cartData, setCartData } = useOutletContext();

  return (
    <div className="w-48 rounded bg-zinc-900 p-2 text-center shadow-md md:w-64 md:p-4">
      <div className="group focus:outline-none">
        <div className="relative mb-2">
          <Link to={item.id}>
            <img
              src={item.src}
              alt={item.name}
              className="mx-auto w-5/6 transition-transform group-hover:scale-105 group-focus-visible:scale-105"
            />
          </Link>
          <div className="absolute bottom-0 right-0 rounded bg-zinc-700 px-2">
            ▮{item.price}
          </div>
        </div>
        <h2 className="inline-block rounded text-xl font-medium text-green-500 group-focus-visible:ring group-focus-visible:ring-green-500">
          {item.name}
        </h2>
      </div>
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
  const [q, setQ] = useState("");

  const storeData = q.length === 0 ? getStoreData() : getFilteredStoreData(q);

  const handleChange = (event) => {
    setQ(event.target.value);
  };

  return (
    <div className="py-4">
      <h1 className="mb-4 text-center">STORE</h1>
      <div className="mb-4 flex w-full gap-2 rounded bg-zinc-900 px-2 py-1 shadow-inner focus-within:outline md:ml-auto md:w-2/5">
        <span>
          <Icon path={mdiMagnify} title="Search" size={1} />
        </span>
        <input
          className="w-full bg-transparent text-green-500 placeholder-neutral-400 caret-green-500 focus:outline-none"
          type="text"
          placeholder="Search item"
          onChange={handleChange}
          value={q}
          aria-label="Search item"
        />
        {q.length > 0 && (
          <button type="button" onClick={() => setQ("")}>
            <Icon path={mdiClose} title="Clear" size={1} />
          </button>
        )}
      </div>
      {storeData.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {storeData.map((storeItem) => (
            <ItemCard key={storeItem.id} item={storeItem} />
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-300">No items found.</p>
      )}
    </div>
  );
};

export default Store;
