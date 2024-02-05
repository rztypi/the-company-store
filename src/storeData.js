import FlashlightIcon from "./assets/FlashlightIcon.webp";
import JetpackIcon from "./assets/JetpackIcon.webp";
import ShovelIcon from "./assets/ShovelIcon.webp";
import WalkieTalkieIcon from "./assets/WalkieTalkieIcon.webp";

const storeData = [
  {
    id: "flashlight",
    name: "Flashlight",
    src: FlashlightIcon,
    desc: "With an extra battery life and an even brighter bulb, your colleagues can never leave you in the dark again!",
    price: 25,
  },
  {
    id: "jetpack",
    name: "Jetpack",
    src: JetpackIcon,
    desc: "This device will get you around anywhere! Just use it responsibly!",
    price: 700,
  },
  {
    id: "shovel",
    name: "Shovel",
    src: ShovelIcon,
    desc: "For self-defense!",
    price: 30,
  },
  {
    id: "walkie-talkie",
    name: "Walkie-talkie",
    src: WalkieTalkieIcon,
    desc: "Useful for keeping in touch! Hear other players when the walkie talkie is in your inventory. Must be in your hand and pressed down to transmit voice.",
    price: 12,
  },
];

const getStoreData = () => {
  return storeData;
};

const getStoreItem = (id) => {
  return storeData.find((storeItem) => storeItem.id === id);
};

export { getStoreData, getStoreItem };
