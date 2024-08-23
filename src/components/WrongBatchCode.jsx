import { useNavigate } from "react-router-dom";
import Button from "./Button";

const WrongBatchCode = () => {
  const navigate = useNavigate();
  return (
    <div className="  h-svh  bg-design-bg  bg-cover py-[2.125rem] flex flex-col  justify-between items-  bg-center bg-no-repeat bg-fixed  ">
      <img
        className="max-h-[3.25rem]  max-w-full  object-contain self-center"
        src="/images/himalayan-logo.png"
        alt="logo"
      />

      <div className="flex flex-col gap-y-5">
        <img className="self-center mb-1" src="/svgs/wrong.svg" alt="" />

        <h1 className="font-Poppins text-lg font-bold leading-[23.6px] text-center text-black/80">
          Invalid Batch Code
        </h1>

        <img
          className="h-7 self-center"
          src="/images/curly-pattern.png"
          alt="curly-pattern image"
        />

        <p className="font-Poppins  font-normal text-base leading-[20.8px]  text-center text-textBlack ">
          Please enter the correct <br /> batch number
        </p>
      </div>

      <Button
        onClick={() => navigate("/batch-input")}
        className={`py-[14px] bg-primaryPurple max-w-[19.5rem] text-nowrap px-[7.15625rem] mx-auto rounded-[0.875rem] border-[2px] border-white/50 font-semibold text-[1.046875rem] leading-[1.354375rem]`}
        title={"Try Again"}
      />
    </div>
  );
};

export default WrongBatchCode;
