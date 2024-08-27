import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import OverlayWrapper from "./OverlayWrapper";
import axios1 from "../instance.js";
import { error } from "../helper/hottoast.js";
import axios from "../instance.js";

const BatchInput = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [batchInput, setBatchInput] = useState("");
  const [isCameraOpened, setIsCameraOpened] = useState(false);
  const navigate = useNavigate();

  const [usermessage, setUsermessage] = useState({
    name: "",
    image: "",
    message: "",
    description: "",
  });

  useEffect(() => {
    const getRandomMessage = async () => {
      const res = await axios.get("/message/fetch-random-message");

      setUsermessage({
        ...usermessage,
        name: res.data.name,
        image: res.data.image,
        message: res.data.message,
        description: res.data.description,
      });
    };
    getRandomMessage();
  }, []);

  const verifyBatch = async () => {
    if (batchInput == "") {
      return;
    }
    try {
      setIsOverlayActive(true);
      const responce = await axios1.post("/batch/verify-batch-code", {
        code: batchInput,
      });
      setIsOverlayActive(false);
      navigate("/thank-you-msg", { state: usermessage });
    } catch (err) {
      setIsOverlayActive(false);
      navigate("/wrong-batch-code");
    }
  };

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streaming, setStreaming] = useState(false);

  // Open the camera and stream to the video element
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } }, // Forces the use of the back camera
      });
      // const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setStreaming(true);
    } catch (err) {
      setIsCameraOpened(false);
      console.error("Error accessing camera:", err);
    }
  };

  // Capture an image from the video stream
  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a data URL
    const imageDataUrl = canvas.toDataURL("image/jpeg");
    return imageDataUrl;
  };

  function removeBase64Prefix(base64String) {
    return base64String.replace(/^data:image\/jpeg;base64,/, "");
  }

  const sendImageToAPI = async () => {
    const imageDataUrl = captureImage();
    console.log("first", imageDataUrl);
    setIsCameraOpened(false);

    try {
      setIsOverlayActive(true);
      const response = await axios.post(
        "https://scope-mag.interactivedemos.io/api/number",
        {
          image: removeBase64Prefix(imageDataUrl),
        }
      );
      console.log("re", response.data.text);

      setBatchInput(response.data.text);
      setIsOverlayActive(false);
    } catch (err) {
      setIsOverlayActive(false);
      error(`Batch number not found`);
      console.error("Error uploading image:", err);
    }
  };

  return (
    <>
      {!isCameraOpened && (
        <OverlayWrapper isOverlayActive={isOverlayActive}>
          <div className="h-svh bg-design-bg  bg-cover py-[2.125rem] flex bg-center bg-no-repeat bg-fixed  ">
            <div className="flex flex-1 flex-col    gap-y-16">
              <div className="flex flex-1 flex-col gap-12">
                <img
                  onClick={() => navigate("/")}
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
                      <img
                        className="hover:cursor-pointer"
                        src="/svgs/info.svg"
                        alt="info icon"
                      />
                    </Link>
                  </div>

                  <div className="relative ">
                    <input
                      onChange={(e) => setBatchInput(e.target.value)}
                      className="outline-none w-full rounded-[10px] border border-textBlack py-[13.5px] pl-[10px] pr-9 bg-[#F8F8F859] font-Poppins font-semibold text-sm tracking-[0.06em] text-left text-[#373737] placeholder:text-[#373737]"
                      placeholder="BATCH NUMBER"
                      // inputMode="tel"
                      type="text"
                      value={batchInput}
                      maxLength="10"
                      minLength="1"
                    />

                    <img
                      onClick={() => {
                        startCamera();
                        setIsCameraOpened(true);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer"
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
                  className={`py-[14px]  max-w-[19.5rem] text-nowrap  rounded-[0.875rem] border-[2px]  border-white/50 font-semibold text-[1.046875rem] leading-[1.354375rem] px-[7.75rem] ${
                    batchInput == "" ? "bg-gray-500" : "bg-primaryPurple"
                  } `}
                  title={"Submit"}
                />
              </div>
            </div>
          </div>
        </OverlayWrapper>
      )}
      {isCameraOpened && (
        <div className="w-screen h-screen relative overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            style={{ display: streaming ? "block" : "none" }}
            autoPlay
            playsInline
          ></video>
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          {streaming && (
            <div
              className="absolute flex justify-center items-center bottom-28 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gray-300 border border-black"
              onClick={sendImageToAPI}
            >
              <img className="w-9 h-9" src="/svgs/camera.svg" alt="" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BatchInput;
