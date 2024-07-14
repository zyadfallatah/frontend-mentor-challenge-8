import { MouseEventHandler } from "react";

const CallToAction = ({
  name,
  onClick,
}: {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="bg-Red text-white mt-6 rounded-full p-2 py-3 w-full hover:grayscale-[.4]"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CallToAction;
