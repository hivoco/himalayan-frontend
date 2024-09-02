import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Continue = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-svh bg-design-bg  bg-cover py-[2.125rem] flex bg-center bg-no-repeat bg-fixed  ">
        <div className="flex flex-1 flex-col    gap-y-16">
          <div className="flex flex-1 flex-col gap-12">
            <img
              onClick={() => navigate("/")}
              className="max-h-[3.25rem]  max-w-full  object-contain self-center"
              src="/images/himalayan-logo.png"
              alt="logo"
            />

            <div className="flex flex-1 flex-col gap-6 justify-center -mt-3 ">
              <h1 className="text-textPink  font-Poppins text-xl leading-[30px] font-bold  text-center text-nowrap">
                Join us in helping Kashmiri <br /> Saffron Farmers
              </h1>
              <img
                className="h-7 self-center"
                src="/images/curly-pattern.png"
                alt="curly-pattern image"
              />

              <p className="font-Poppins font-normal text-sm leading-[21px] text-center text-textBlack/80 ">
                With every pack you buy, you support <br /> farmers impacted by
                declining Saffron <br /> yields and help them receive
                <span className="text-textPink font-Poppins font-bold text-sm  text-center">
                  &nbsp;training in <br /> modern farming practices.
                </span>
              </p>
            </div>
          </div>

          <div className="flex  flex-col justify-between gap-y-20 items-center">
            <Button
              onClick={() => navigate("/batch-input")}
              className={`py-[14px]  max-w-[19.5rem] text-nowrap  rounded-[0.875rem] border-[2px]  border-white/50 font-semibold text-[1.046875rem] leading-[1.354375rem] px-[7.75rem] bg-primaryPurple `}
              title={"Continue"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Continue;
