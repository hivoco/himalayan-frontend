import Button from "./Button";

const ThankYouMsg = () => {
  return (
    <div className="h-svh bg-flowery-bg  bg-cover  bg-center bg-no-repeat bg-fixed py-[2.125rem]  flex flex-col justify-between  gap-y-5">
      <div className="flex flex-col items-center gap-5 ">
        <img
          className="max-h-[52px] max-w-full h-auto object-contain self-center"
          src="/images/himalayan-logo.png"
          alt="logo"
        />

        <div className="relative flex items-center w-[10.425rem] h-[17.5rem] rounded-[8.75rem] mb-2">
          <img
            className="absolute z-0 top-0 left-0  h-full w-full"
            src="/images/person-bg.png"
            alt="flowery bg behind the person"
          />

          <div className="relative z-10 w-[9.3125rem] h-[17.9375rem] overflow-hidden rounded-[8.96875rem] mx-auto">
            <img
              className="max-w-none w-full h-full object-cover object-center"
              src={"/images/woman.jpeg"}
              alt="person's image"
            />

            <h2 className="w-full py-2 bottom-5 left-0  absolute font-Inter text-[12.71px] font-semibold leading-[15.4px] text-center text-white bg-black/70">
              Zara Hussain
            </h2>

          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className=" flex flex-col gap-1">
            <h1 className="text-textPink font-Inter text-base font-bold leading-[19.36px] text-center">
              Thank you for supporting us.{" "}
            </h1>

            <p className="text-textPink font-Inter text-sm font-medium leading-[16.94px] text-center">
              Together, we can continue to bring you <br /> the finest saffron.
            </p>
          </div>
          <p className="font-Inter font-normal text-[13px] leading-[15.73px]  text-center text-black/80">
            Discover the journey of pure saffron from the <br /> Himalayas.
            Learn more about it's purity test, <br /> delicious dishes etc &
            explore the magic of
            <br /> Kashmiri saffron!
          </p>
        </div>

        <Button
          className={`self-center max-w-[19.5rem] text-nowrap font-Poppins py-[14px] rounded-[14px] border-white/50 font-semibold text-[17px] leading-[22px] px-[105px]`}
          navigateUrl={"/batch-input"}
          title={"Explore Now"}
        />
      </div>

    </div>
  );
};

export default ThankYouMsg;
