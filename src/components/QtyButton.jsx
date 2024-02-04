import Icon from "@mdi/react";

const QtyButton = ({ path, title, onClick }) => {
  return (
    <button
      type="button"
      className="flex h-6 w-6 items-center justify-center rounded bg-zinc-950"
      title={title}
      onClick={onClick}
    >
      <Icon path={path} size={0.9} />
    </button>
  );
};

export default QtyButton;
