import PropTypes from "prop-types";

const BoxButton = ({ title, onClick, children }) => {
  return (
    <button
      type="button"
      className="group flex h-6 w-6 items-center justify-center rounded bg-zinc-950"
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

BoxButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default BoxButton;
