import storeData from "../storeData.js";

const Card = ({ item }) => {
  return (
    <div className="aspect-2/3 sm:aspect-3/4 lg:aspect-4/5 flex w-40 flex-col rounded bg-zinc-900 p-4 shadow-md sm:w-48 lg:w-64">
      <div>
        <img src={item.src} alt={item.name} className="mx-auto mb-2 w-3/4" />
        <h2 className="text-lg font-bold text-green-500">{item.name}</h2>
        <p className="scrollbar-thin line-clamp-2 overflow-y-auto text-sm text-neutral-300">
          {item.desc}
        </p>
      </div>
      <div className="mt-auto">...</div>
    </div>
  );
};

const Store = () => {
  return (
    <div className="py-4 text-center">
      <h1 className="mb-4">Store</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {storeData.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
