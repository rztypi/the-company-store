import { Outlet } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Navigation from "./components/Navigation.jsx";

const App = () => {
  return (
    <>
      <div className="relative flex min-h-screen gap-4 px-4 2xl:container 2xl:mx-auto">
        <aside>
          <Navigation />
        </aside>
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <footer className="bg-zinc-900 py-2 text-center">
        <a href="https://github.com/rztypi" className="text-sm">
          <Icon path={mdiGithub} size={1} className="inline-block" /> rztypi
        </a>
      </footer>
    </>
  );
};

export default App;
