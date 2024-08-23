import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);
  return (
    <div className="h-svh bg-flowery-bg  bg-cover  bg-center bg-no-repeat bg-fixed  flex flex-col gap-y-[107x] justify-between pt-[2.1375rem] pb-[0.89375rem]">
      {/* <div className="flex flex-col gap-y-[124px]"> */}
      <Button
        onClick={() => window.open("https://himalayansaffron.in", "_blank")}
        className={` bg-primaryPurple mx-3 max-w-[6.5625rem] self-end py-[0.66rem] px-[2.56rem] border-white rounded-[0.575rem] text-[0.70rem] font-normal leading-[0.90rem] ${
          animate
            ? " opacity-100transition-all duration-500 delay-[2000ms] ease-in-out"
            : " opacity-0 "
        }`}
        // navigateUrl={""}
        title={"Skip"}
      />

      <div className="flex flex-col gap-y-11  ">
        <img
          className={`max-h-20 max-w-full h-auto object-contain self-center ${
            animate
              ? "translate-y-0 opacity-100 scale-100 transition-all duration-500 delay-100 ease-in-out"
              : "-translate-y-40 opacity-0 scale-50"
          }`}
          src="/images/himalayan-logo.png"
          alt="logo"
        />

        <div className=" flex flex-col gap-y-[24.7px]">
          <h1
            className={`text-textPink font-Poppins text-[22px] font-bold leading-[1.625rem] text-center ${
              animate
                ? " opacity-100 scale-100 transition-all duration-500 delay-1000 ease-in-out"
                : " opacity-0 scale-0"
            }`}
          >
            Celebrate Himalayan <br /> day with us!
          </h1>

          <p
            className={`font-Poppins font-normal text-[15px] leading-6  text-center text-black/80 ${
              animate
                ? " opacity-100transition-all duration-500 delay-1000 ease-in-out"
                : " opacity-0 "
            }`}
          >
            This Himalayan day let us take <br /> a stand to uplift the
            livelihood <br /> of the Kashmiri Saffron farmers
          </p>
        </div>
      </div>
      {/* </div> */}

      <div className="flex flex-col gap-y-3 ">
        <Button
          onClick={() => navigate("/batch-input")}
          className={` bg-primaryPurple max-w-[19.5rem] text-nowrap self-center py-[14px] rounded-[0.8625rem] border-white/50 font-semibold text-[1.046875rem] leading-[1.354375rem] px-[6.75rem] ${
            animate
              ? " opacity-100transition-all duration-500 delay-[2000ms] ease-in-out"
              : " opacity-0 "
          } `}
          // navigateUrl={"/batch-input"}
          title={"Get Started"}
        />
        <img
          className="self-center max-h-2"
          src="/images/tata-logo.png"
          alt="tata-logo"
        />
      </div>
    </div>
  );
};

export default Welcome;
