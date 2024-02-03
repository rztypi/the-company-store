import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Uh-oh.</h1>
      <p>Nothing to see here.</p>
      <Link to="/" className="mt-4">
        Go back
      </Link>
    </div>
  );
};

export default ErrorPage;
