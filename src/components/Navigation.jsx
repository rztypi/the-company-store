import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHome, mdiStore, mdiCart } from "@mdi/js";

const NavLinkIcon = ({ to, path, title }) => {
  return (
    <Link
      to={to}
      className="group relative flex items-center rounded-full bg-zinc-900 p-2 focus:outline-none focus-visible:ring focus-visible:ring-green-500"
    >
      <Icon path={path} className="w-6 group-active:opacity-75 md:w-8" />
      <span className="absolute left-14 hidden w-max rounded bg-zinc-950 px-2 text-left shadow group-hover:inline-flex group-focus-visible:inline-flex md:left-16">
        {title}
      </span>
    </Link>
  );
};

NavLinkIcon.propTypes = {
  to: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
};

const CartNavLinkIcon = ({ cartData }) => {
  const title = cartData.length > 0 ? `Cart (${cartData.length})` : "Cart";

  return (
    <div className="relative">
      <NavLinkIcon to="cart" path={mdiCart} title={title} />
      {cartData.length > 0 && (
        <span className="absolute right-0 top-0 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600"></span>
        </span>
      )}
    </div>
  );
};

CartNavLinkIcon.propTypes = {
  cartData: PropTypes.array,
};

const Navigation = ({ cartData }) => {
  return (
    <nav className="sticky top-4 my-4 flex flex-col items-start gap-2">
      <NavLinkIcon to="/" path={mdiHome} title="Home" />
      <NavLinkIcon to="store" path={mdiStore} title="Store" />
      <CartNavLinkIcon cartData={cartData} />
    </nav>
  );
};

Navigation.propTypes = {
  cartData: PropTypes.array,
};

export default Navigation;
