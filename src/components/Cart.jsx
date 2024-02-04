import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { useOutletContext } from "react-router-dom";
import { Fragment } from "react";
import storeData from "../storeData.js";

const CartItem = ({ item }) => {
  const { cartData, setCartData } = useOutletContext();

  const storeItem = storeData.find((obj) => obj.name === item.name);
  const totalPrice = storeItem.price * item.qty;

  const removeCartItem = () => {
    setCartData(cartData.filter((cartItem) => cartItem.name !== item.name));
  };

  return (
    <div className="relative py-4">
      <button
        className="absolute right-0 opacity-75"
        type="button"
        onClick={removeCartItem}
      >
        <Icon path={mdiClose} size={1} />
      </button>
      <h2 className="text-lg font-bold text-green-500">{item.name}</h2>
      <p className="text-xs">▮ {storeItem.price}</p>
      <div className="*:inline-block">
        <p>x{item.qty}</p>
        <p className="float-right font-bold">▮ {totalPrice}</p>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartData } = useOutletContext();

  const totalPrice = cartData.reduce(
    (prev, cartItem) =>
      storeData.find((storeItem) => storeItem.name === cartItem.name).price *
        cartItem.qty +
      prev,
    0,
  );

  return (
    <div className="py-4">
      <h1 className="text-center">Cart</h1>
      {cartData.length > 0 && (
        <div className="mx-auto mt-4 flex w-full max-w-128 flex-col rounded bg-zinc-900 p-4 shadow">
          {Object.entries(cartData).map(([index, cartItem]) => (
            <Fragment key={cartItem.name}>
              <CartItem item={cartItem} />
              {index < cartData.length - 1 && (
                <hr className="border-zinc-500" />
              )}
            </Fragment>
          ))}
          <hr className="border-t-2 border-dashed border-zinc-500" />
          <p className="mt-4 text-right text-lg">
            Total: ▮ <span className="font-bold">{totalPrice}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
