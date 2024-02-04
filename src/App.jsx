import { useState } from "react";
import { Outlet } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Navigation from "./components/Navigation.jsx";

const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <div className="flex min-h-screen flex-col px-4 2xl:container 2xl:mx-auto">
      <div className="relative flex flex-grow gap-4">
        <aside>
          <Navigation cartData={cartData} />
        </aside>
        <main className="flex-grow">
          <Outlet context={{ cartData, setCartData }} />
        </main>
      </div>
      <footer className="flex justify-end py-2">
        <a
          href="https://github.com/rztypi"
          className="flex items-center gap-1 text-xs opacity-75 transition-opacity hover:opacity-100 focus:opacity-100"
        >
          <Icon path={mdiGithub} className="w-5" /> rztypi
        </a>
      </footer>
    </div>
  );
};

export default App;
