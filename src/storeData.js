import BoomboxIcon from "./assets/BoomboxIcon.webp";
import ExtensionLadderIcon from "./assets/ExtensionLadderIcon.webp";
import TinyFlashlightIcon from "./assets/TinyFlashlightIcon.webp";
import JetpackIcon from "./assets/JetpackIcon.webp";
import LockpickerIcon from "./assets/LockpickerIcon.webp";
import FlashlightIcon from "./assets/FlashlightIcon.webp";
import RadarBoosterIcon from "./assets/RadarBoosterIcon.webp";
import ShovelIcon from "./assets/ShovelIcon.webp";
import SprayPaintIcon from "./assets/Spraycan.webp";
import StunGrenadeIcon from "./assets/StunGrenadeIcon.webp";
import TZPIcon from "./assets/TZPIcon.webp";
import WalkieTalkieIcon from "./assets/WalkieTalkieIcon.webp";
import ZapGunIcon from "./assets/ZapGunIcon.webp";

const storeData = [
  {
    id: "boombox",
    name: "Boombox",
    src: BoomboxIcon,
    desc: "These jamming tunes are great for a morale boost on your crew!",
    price: 60,
  },
  {
    id: "extension-ladder",
    name: "Extension Ladder",
    src: ExtensionLadderIcon,
    desc: "The extension ladder can reach as high as nine meters! Use it to scale any cliff and reach for the stars! To save batteries the extension ladder automatically stores itself after 18 seconds.",
    price: 60,
  },
  {
    id: "flashlight",
    name: "Flashlight",
    src: TinyFlashlightIcon,
    desc: "The most affordable light source. It's even waterproof!",
    price: 15,
  },
  {
    id: "jetpack",
    name: "Jetpack",
    src: JetpackIcon,
    desc: "This device will get you around anywhere! Just use it responsibly!",
    price: 700,
  },
  {
    id: "lockpicker",
    name: "Lockpicker",
    src: LockpickerIcon,
    desc: "Lock-pickers will unlock your limitless potential for efficiency on the job. Powered by proprietary AI software, they will get you access through any locked door.",
    price: 20,
  },
  {
    id: "pro-flashlight",
    name: "Pro-Flashlight",
    src: FlashlightIcon,
    desc: "With an extra battery life and an even brighter bulb, your colleagues can never leave you in the dark again!",
    price: 25,
  },
  {
    id: "radar-booster",
    name: "Radar-Booster",
    src: RadarBoosterIcon,
    desc: "Radar boosters come with many uses! Use the 'SWITCH' command before the radar booster's name to view it on the main monitor. It must be activated. Use the 'PING' command before the radar booster's name to play a special sound from the device.",
    price: 60,
  },
  {
    id: "shovel",
    name: "Shovel",
    src: ShovelIcon,
    desc: "For self-defense!",
    price: 30,
  },
  {
    id: "spray-paint",
    name: "Spray Paint",
    src: SprayPaintIcon,
    desc: "The Spray Paint can be used just for fun to make art or otherwise mess around with. It can also be used practically, such as to mark dead ends and the way back to prevent getting lost.",
    price: 50,
  },
  {
    id: "stun-grenade",
    name: "Stun Grenade",
    src: StunGrenadeIcon,
    desc: "A non-lethal explosive that will stun most creatures for 5 seconds. Once the striker lever is removed, the grenade will detonate after 3 seconds.",
    price: 30,
  },
  {
    id: "tzp-inhalant",
    name: "TZP-Inhalant",
    src: TZPIcon,
    desc: "This safe and legal medicine can be administered to see great benefits to your performance on the job! Your ability to move LONG distances while carrying HEFTY objects will be second to none! Warning: TZP gas may impact the brain with extended exposure. Follow instructions manual provided with the canister. Don't forget to share!",
    price: 120,
  },
  {
    id: "walkie-talkie",
    name: "Walkie-Talkie",
    src: WalkieTalkieIcon,
    desc: "Useful for keeping in touch! Hear other players when the walkie talkie is in your inventory. Must be in your hand and pressed down to transmit voice.",
    price: 12,
  },
  {
    id: "zap-gun",
    name: "Zap Gun",
    src: ZapGunIcon,
    desc: "The most specialized self-protective equipment, capable of sending upwards of 80,000 volts! To keep it targeted as long as possible, pull the gun side-to-side to counter the bend and fight against the pull of the electric beam. It can only stun for as long as you keep the current flowing.",
    price: 400,
  },
];

const getStoreData = () => {
  return storeData;
};

const getFilteredStoreData = (q) => {
  return storeData.filter((storeItem) =>
    storeItem.name.toLowerCase().includes(q.toLowerCase()),
  );
};

const getStoreItem = (id) => {
  return storeData.find((storeItem) => storeItem.id === id);
};

export { getStoreData, getFilteredStoreData, getStoreItem };
