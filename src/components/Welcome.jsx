import Button from "./Button";

const Welcome = () => {
  // bg-[length:100%_100%] cover cent percent width and height of the container
  //  bg-flowery-bg  bg-cover  bg-center bg-no-repeat bg-fixed
  return (
    <div className="h-svh bg-flowery-bg  bg-cover  bg-center bg-no-repeat bg-fixed  flex flex-col gap-y-[107x] justify-between pt-[2.1375rem] pb-[0.89375rem]">
      {/* <div className="flex flex-col gap-y-[124px]"> */}
      <Button
        className={`mx-3 max-w-[6.5625rem] self-end py-[0.66rem] px-[2.56rem] border-white rounded-[0.575rem] text-[0.70rem] font-normal leading-[0.90rem]`}
        navigateUrl={""}
        title={"Skip"}
      />

      <div className="flex flex-col gap-y-11 ">
        <img
          className="max-h-16 max-w-full h-auto object-contain self-center"
          src="/images/himalayan-logo.png"
          alt="logo"
        />

        <div className=" flex flex-col gap-y-[24.7px]">
          <h1 className="text-textPink font-Poppins text-xl font-bold leading-[1.625rem] text-center">
            Celebrate Himalayan <br /> day with us!
          </h1>

          <p className="font-Poppins font-normal text-[17px] leading-6  text-center text-black/80">
            This Himalayan day let us take <br /> a stand to uplift the
            livelihood <br /> of the Kashmiri Saffron farmers
          </p>
        </div>
      </div>
      {/* </div> */}

      <div className="flex flex-col gap-y-3 ">
        <Button
          className={`max-w-[19.5rem] text-nowrap self-center py-[14px] rounded-[0.8625rem] border-white/50 font-semibold text-[1.046875rem] leading-[1.354375rem] px-[6.75rem]`}
          navigateUrl={"/batch-input"}
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
