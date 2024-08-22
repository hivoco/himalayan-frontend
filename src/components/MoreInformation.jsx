import { Link } from "react-router-dom";

const MoreInformation = () => {
  return (
    <div className="  h-svh  bg-design-bg  bg-cover py-6 flex flex-col flex-1 gap-9  justify-between  items-center  bg-center bg-no-repeat bg-fixed  ">
      <Link to={"/batch-input"} className="self-end px-6">
        <img src="/svgs/exit.svg" alt="exit button" />
      </Link>

      <div className="w-full overflow-hidden flex justify-center">
        <img
          className="max-h-[30rem] max-w-none"
          src="/images/saffron-box.png"
          alt="saffron-box"
        />
      </div>

      <p className="font-Poppins text-lg text-black leading-[23.65px] text-center">
        You may find the batch number <br />
        here on your package
      </p>
    </div>
  );
};

export default MoreInformation;
