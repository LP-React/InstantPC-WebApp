import { Feature } from "@/app/interfaces/Feature";
import {
  ClockPlus,
  CloudCheck,
  Gamepad2,
  Layers2,
  ListPlus,
  MousePointerClick,
} from "lucide-react";

const features: Feature[] = [
  {
    title: "Play Instantly",
    description: "No downloads required – your saves are stored in the cloud",
    icon: MousePointerClick,
  },
  {
    title: "Connect up to 4 Controllers",
    description:
      "Play with family and friends – multiplayer and co-op supported",
    icon: Gamepad2,
  },
  {
    title: "New Games Every Month",
    description: "Fresh titles added regularly",
    icon: ListPlus,
  },
  {
    title: "Cloud Saving",
    description: "All your progress is securely stored in the cloud",
    icon: CloudCheck,
  },
  {
    title: "Max Quality with RTX & DLSS",
    description:
      "Enjoy cutting-edge NVIDIA technologies for the best visuals",
    icon: Layers2,
  },
  {
    title: "Unlimited Playtime",
    description: "Play as long as you want",
    icon: ClockPlus,
  },
];


export const GamingFeatures = () => {

  return (
    <>
      <h2 className="text-center text-4xl font-semibold">
        Play your favorite games with RTX
      </h2>

      <div className="mt-6 flex flex-wrap justify-between">
        {features.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="flex w-[30%] flex-col items-center px-10 py-5 text-center"
          >
            <Icon size={55} className="my-4" />
            <h5 className="text-xl font-semibold">{title}</h5>
            <p className="mt-2">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
