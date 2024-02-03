import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { useOutletContext } from "react-router-dom";
import { Fragment } from "react";

const CartItem = ({ item }) => {
  const { cartData, setCartData } = useOutletContext();

  const removeCartItem = () => {
    setCartData(cartData.filter((cartItem) => cartItem.name !== item.name));
  };

  return (
    <div className="py-4">
      <div>
        <div>
          <h2 className="inline-block text-lg font-bold text-green-500">
            {item.name}
          </h2>
          <button
            className="float-right"
            type="button"
            onClick={removeCartItem}
          >
            <Icon path={mdiClose} size={1} />
          </button>
        </div>
        <p>x{item.qty}</p>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartData } = useOutletContext();
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
          <p className="mt-4 text-right">Total:</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
