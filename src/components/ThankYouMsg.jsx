import { useEffect, useLayoutEffect, useState } from "react";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const ThankYouMsg = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [usermessage, setUsermessage] = useState({});

  useEffect(() => {
    setUsermessage({ ...state });
  }, [location]);

  const [animate, setAnimate] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <div className="h-svh bg-flowery-bg  bg-cover  bg-center bg-no-repeat bg-fixed py-[2.125rem]  flex flex-col justify-between  gap-y-5">
      <div className="flex flex-1 flex-col items-center gap-[20px] ">
        <img
          onClick={() => navigate("/")}
          className="max-h-[52px] max-w-full h-auto object-contain self-center"
          src="/images/himalayan-logo.png"
          alt="logo"
        />

        <div
          className={`relative  flex items-center w-[11.5625rem] h-[19.375rem] rounded-[9.6875rem] mb-2 ${
            animate
              ? " opacity-100 scale-100 transition-all duration-500 delay-100 ease-in-out"
              : " opacity-0 scale-0"
          }`}
        >
          <img
            className="absolute z-0 top-0 left-0  h-full w-full"
            src="/images/person-bg.png"
            alt="flowery bg behind the person"
          />

          <div className="relative z-10 w-[10.3125rem] h-[19.875rem] rounded-[9.9375rem] overflow-hidden  mx-auto">
            <img
              className="max-w-none w-full h-full object-cover object-center"
              src={usermessage.image ? usermessage.image : "/images/user.png"}
              // src={"/images/woman.jpeg"}
              alt="person's image"
            />

            <h2 className="w-full py-2 bottom-5 left-0  absolute font-Inter text-[12.71px] font-semibold leading-[15.4px] text-center text-white bg-black/70">
              {usermessage.name ? usermessage.name : "Farmer's Name"}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 ">
        <div
          className={`flex flex-1 flex-col items-center gap-1  mx-auto max-w-[19.5rem]  ${
            animate
              ? " opacity-100  transition-all duration-500 delay-100 ease-in-out"
              : " opacity-0 "
          }`}
        >
          <div className=" flex flex-col gap-1">
            <h1 className="text-textPink font-Inter text-xl font-bold leading-[1.21rem] text-center">
              Thank you!
            </h1>
          </div>

          <p className="font-Inter font-normal text-[13px] leading-[0.99rem] pt-3  text-center text-black/80">
            {usermessage?.name} is grateful for your contribution in the
            training she receives.
          </p>
        </div>

        <Button
          onClick={() => window.open("https://himalayansaffron.in", "_blank")}
          className={`bg-primaryPurple self-center max-w-[19.5rem] text-nowrap font-Poppins py-[14px] rounded-[14px] border-white/50 font-semibold text-[17px] leading-[22px] px-[105px] ${
            animate
              ? "translate-y-0 opacity-100 scale-100 transition-all duration-1000 delay-100 ease-in-out"
              : "translate-y-40 opacity-0 scale-50"
          } `}
          // navigateUrl={"/batch-input"}
          title={"Explore Now"}
        />
      </div>
    </div>
  );
};

export default ThankYouMsg;
