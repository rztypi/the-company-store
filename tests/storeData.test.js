import {
  getStoreData,
  getFilteredStoreData,
  getStoreItem,
} from "../src/storeData.js";

test("getStoreData returns an array of store items", () => {
  const storeData = getStoreData();

  expect(storeData).toBeInstanceOf(Array);

  for (const storeItem of storeData) {
    expect(storeItem).toHaveProperty("id");
    expect(storeItem).toHaveProperty("name");
    expect(storeItem).toHaveProperty("src");
    expect(storeItem).toHaveProperty("desc");
    expect(storeItem).toHaveProperty("price");
  }
});

test("getFilteredStoreData properly filters the data", () => {
  const q = "flashlight";
  const filteredStoreData = getFilteredStoreData(q);

  for (const storeItem of filteredStoreData) {
    expect(storeItem.name.toLowerCase()).toContain(q);
  }
});

test("getStoreItem returns the right store item", () => {
  const storeData = getStoreData();

  for (const storeItem of storeData) {
    expect(getStoreItem(storeItem.id)).toBe(storeItem);
  }
});
