import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Uh-oh.</h1>
      <p>Nothing to see here.</p>
      <Link
        className="mt-4 inline-flex gap-2 opacity-75 transition-opacity hover:opacity-100 focus-visible:opacity-100"
        to="/"
      >
        <Icon path={mdiArrowLeft} size={1} /> Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
