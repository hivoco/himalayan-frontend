import React, { useRef, useState } from "react";
import axios from "axios";

const CameraCapture = () => {

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <video
        className="w-full h-full"
        ref={videoRef}
        style={{ display: streaming ? "block" : "none" }}
      ></video>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      {/* {!streaming && <button onClick={startCamera}>Start Camera</button>} */}
      {streaming && (
        <div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gray-300 border border-black"
          onClick={sendImageToAPI}
        >
          <img src="/images/camera.png" className="rounded-full" alt="" />
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
