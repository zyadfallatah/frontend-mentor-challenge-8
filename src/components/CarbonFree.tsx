import carbonIcon from "/assets/images/icon-carbon-neutral.svg";

const CarbonFree = () => {
  return (
    <div className="flex gap-1 justify-center py-3 px-2 bg-Rose-100 rounded-md mt-4">
      <img src={carbonIcon} alt="" />
      <p className="text-[14px] text-left">
        This is a <b>carbon-neutral</b> delivery
      </p>
    </div>
  );
};

export default CarbonFree;
