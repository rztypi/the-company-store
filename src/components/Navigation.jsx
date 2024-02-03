import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHome, mdiStore, mdiCart } from "@mdi/js";

const NavLinkIcon = ({ to, path, title }) => {
  return (
    <Link to={to} className="rounded-full bg-zinc-900 p-2 shadow-md">
      <Icon path={path} title={title} size={1} />
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="sticky top-4 my-4 flex flex-col items-start gap-2">
      <NavLinkIcon to="/" path={mdiHome} title="Home" />
      <NavLinkIcon to="store" path={mdiStore} title="Store" />
      <NavLinkIcon to="cart" path={mdiCart} title="Cart" />
    </nav>
  );
};

export default Navigation;
