const Card = () => {
  return (
    <div className="aspect-4/5 w-40 rounded bg-zinc-900 shadow-md sm:w-48 lg:w-64">
      card
    </div>
  );
};

const Store = () => {
  return (
    <div className="py-4 text-center">
      <h1 className="mb-4">Store</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Store;
