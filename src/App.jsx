import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Layout from "./components/Layout";
import BatchInput from "./components/BatchInput";
import MoreInformation from "./components/MoreInformation";
import WrongBatchCode from "./components/WrongBatchCode";
import OverlayWrapper from "./components/OverlayWrapper";
import ThankYouMsg from "./components/ThankYouMsg";
import CameraCapture from "./components/CameraCapture";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="batch-input" element={<BatchInput />} />
            <Route path="more-information" element={<MoreInformation />} />
            <Route path="wrong-batch-code" element={<WrongBatchCode />} />
            <Route path="thank-you-msg" element={<ThankYouMsg />} />
            <Route path="capture-your-batch-code" element={<CameraCapture />} />

            <Route
              path="/overlay"
              element={
                <OverlayWrapper isOverlayActive={true}>
                  <BatchInput />
                </OverlayWrapper>
              }
            />

            {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
