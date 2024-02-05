import PropTypes from "prop-types";

const AddToCartButton = ({
  className = "",
  cartDataState,
  storeItem,
  qty,
  children = "Add to Cart",
}) => {
  const [cartData, setCartData] = cartDataState;

  const addToCart = () => {
    console.log(`added ${qty} ${storeItem.name}s`);
    if (cartData.some((cartItem) => cartItem.item.id === storeItem.id)) {
      setCartData(
        cartData.map((cartItem) => {
          if (cartItem.item.id === storeItem.id) {
            cartItem.qty += qty;
          }
          return cartItem;
        }),
      );
    } else {
      setCartData(
        cartData.concat({
          item: storeItem,
          qty,
        }),
      );
    }
  };

  return (
    <button
      className={className}
      type="button"
      disabled={qty === 0}
      onClick={addToCart}
    >
      {children}
    </button>
  );
};

AddToCartButton.propTypes = {
  className: PropTypes.string,
  cartDataState: PropTypes.array.isRequired,
  storeItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  qty: PropTypes.number.isRequired,
};

export default AddToCartButton;
