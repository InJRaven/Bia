import { Number8BiaIcon } from "../../../ui/Icon/Icon";

const HeadingSection = ({ title }) => {
  return (
    <div className="w-full px-[16rem] py-[1rem] flex flex-col items-stretch gap-[0.5rem] bg-gray-300">
      <h3 className="w-full text-dark text-md font-semibold text-center">
        DARIUS PHAN
      </h3>
      <h1 className="text-display-sm text-dark text-center font-bold">
        {title}
      </h1>
      <div className="w-full flex items-center justify-center gap-[0.8rem]">
        <span className="w-1/6 h-[1px] bg-dark flex-1"></span>
        <span>
          <Number8BiaIcon />
        </span>
        <span className="w-1/6 h-[1px] bg-dark flex-1"></span>
      </div>
    </div>
  );
};

export default HeadingSection;
