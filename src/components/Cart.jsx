import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiDelete, mdiMinus, mdiPlus } from "@mdi/js";
import { useOutletContext } from "react-router-dom";
import { Fragment } from "react";
import BoxButton from "./BoxButton.jsx";

const CartItem = ({ cartItem }) => {
  const { cartData, setCartData } = useOutletContext();

  const { item, qty } = cartItem;
  const totalPrice = item.price * qty;

  const removeCartItem = () => {
    setCartData(cartData.filter((cartItem) => cartItem.item.id !== item.id));
  };

  const changeQty = (newQty) => {
    if (newQty === 0) {
      removeCartItem();
      return;
    }
    setCartData(
      cartData.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return { ...cartItem, qty: newQty };
        }
        return cartItem;
      }),
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute right-0 opacity-50 transition-opacity hover:opacity-75 focus-visible:opacity-100 active:opacity-100"
        type="button"
        onClick={removeCartItem}
        aria-label="Delete cart item"
      >
        <Icon path={mdiDelete} size={1} />
      </button>
      <h2 className="text-xl font-medium text-green-500">{item.name}</h2>
      <p className="text-sm">▮{item.price}</p>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center gap-1">
          <BoxButton
            title="Subtract quantity"
            onClick={() => changeQty(qty - 1)}
          >
            <Icon path={mdiMinus} size={1} />
          </BoxButton>
          <span className="min-w-6 px-1 text-center">{qty}</span>
          <BoxButton title="Add quantity" onClick={() => changeQty(qty + 1)}>
            <Icon path={mdiPlus} size={1} />
          </BoxButton>
        </div>
        <p className="font-medium">▮{totalPrice}</p>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    item: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
    }),
    qty: PropTypes.number,
  }),
};

const Cart = () => {
  const { cartData } = useOutletContext();

  const totalPrice = cartData.reduce(
    (prev, cartItem) => cartItem.item.price * cartItem.qty + prev,
    0,
  );

  return (
    <div className="py-4">
      <h1 className="text-center">CART</h1>
      <div className="mx-auto mt-4 flex w-full max-w-128 flex-col rounded bg-zinc-900 p-4 shadow-lg">
        {cartData.length > 0 ? (
          <>
            {Object.entries(cartData).map(([index, cartItem]) => (
              <Fragment key={cartItem.item.id}>
                <CartItem cartItem={cartItem} />
                {index < cartData.length - 1 && (
                  <hr className="my-4 border-zinc-500" />
                )}
              </Fragment>
            ))}
            <hr className="my-4 border-t-2 border-dashed border-zinc-500" />
            <p className="text-right text-lg">
              Total: ▮<span className="font-bold">{totalPrice}</span>
            </p>
          </>
        ) : (
          <p className="text-center text-neutral-500">No items in cart.</p>
        )}
      </div>
      {cartData.length > 0 && (
        <button
          type="button"
          className="sticky bottom-4 mx-auto mt-4 block rounded bg-red-600 px-6 py-2 text-lg font-medium shadow-md"
        >
          Checkout (▮{totalPrice})
        </button>
      )}
    </div>
  );
};

export default Cart;
