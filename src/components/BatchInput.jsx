import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import OverlayWrapper from "./OverlayWrapper";
import axios from "../instance.js";
import { error } from "../helper/hottoast.js";

const BatchInput = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [batchInput, setBatchInput] = useState(0);
  const navigate = useNavigate();

  const verifyBatch = async () => {
    try {
      setIsOverlayActive(true);
      const responce = await axios.post("/batch/verify-batch-code", {
        code: batchInput,
      });
      setIsOverlayActive(false);
      navigate("/thank-you-msg");
    } catch (err) {
      setIsOverlayActive(false);
      navigate("/wrong-batch-code");
    }
  };

  return (
    <OverlayWrapper isOverlayActive={isOverlayActive}>
      <div className="h-svh bg-design-bg  bg-cover py-[2.125rem] flex bg-center bg-no-repeat bg-fixed  ">
        <div className="flex flex-1 flex-col    gap-y-16">
          <div className="flex flex-1 flex-col gap-12">
            <img
              className="max-h-[3.25rem]  max-w-full  object-contain self-center"
              src="/images/himalayan-logo.png"
              alt="logo"
            />

            <div className="flex flex-1 flex-col gap-4 ">
              <h1 className="text-textPink  font-Poppins text-xl leading-[30px] font-bold  text-center text-nowrap">
                Make a difference today!
              </h1>
              <img
                className="h-7 self-center"
                src="/images/curly-pattern.png"
                alt="curly-pattern image"
              />

              <p className="font-Poppins font-normal text-sm  text-center text-textBlack/80 ">
                Contribute to the well-being of our
                <br /> Kashmiri Saffron Farmers who bring
                <br /> the finest saffron to your table this
                <br />
                <span className="font-semibold ">Himalayan Day!</span>
              </p>
            </div>
          </div>

          <div className="flex  flex-col flex-1 justify-between gap-y-20 items-center">
            <div className="flex  flex-col gap-y-[6.5px]">
              <div className="flex gap-x-2 items-center">
                <p className="font-Poppins text-[10px] font-normal leading-[22px] text-left text-[#161616]  text-nowrap">
                  Enter your Himalayan Kashmiri Saffron batch no. from pack
                </p>

                <Link className="w-3 h-3" to={"/more-information"}>
                  <img src="/svgs/info.svg" alt="info icon" />
                </Link>
              </div>

              <div className="relative ">
                <input
                  onChange={(e) => setBatchInput(e.target.value)}
                  className="outline-none w-full rounded-[10px] border border-textBlack py-[13.5px] pl-[10px] pr-9 bg-[#F8F8F859] font-Poppins font-semibold text-sm tracking-[0.06em] text-left text-[#373737] placeholder:text-[#373737]"
                  placeholder="BATCH NUMBER"
                  inputMode="tel"
                  type="number"
                />

                <img
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  src="/svgs/camera.svg"
                  alt="camera icon"
                />
              </div>

              <p
                // onClick={() => setIsOverlayActive(true)}
                className="font-Poppins text-[10px] ml-2 font-normal leading-[14px]  text-black/60 "
              >
                *Tap on camera to upload your batch code image
              </p>
            </div>

            <Button
              onClick={verifyBatch}
              className={`py-[14px]  max-w-[19.5rem] text-nowrap  rounded-[0.875rem] border-[2px]  border-white/50 font-semibold text-[1.046875rem] leading-[1.354375rem] px-[7.75rem]`}
              // navigateUrl={"/wrong-batch-code"}
              title={"Submit"}
            />
          </div>
        </div>
      </div>
    </OverlayWrapper>
  );
};

export default BatchInput;
