import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
function Scan() {
  let alreadyRuns = false;
  // can't run server side
  useEffect(() => {
    getCameras(false).catch((err) => console.log(err));
  }),
    [];

  async function getCameras(stop) {
    if (alreadyRuns) return;
    alreadyRuns = true;
    const devices = await Html5Qrcode.getCameras();
    if (devices && devices.length) {
      const config = { fps: 30, qrbox: 250 };
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        config,
        /* verbose= */ false
      );
      html5QrcodeScanner.render(onScanSuccess, QrcodeErrorCallback);
    }
  }

  function onScanSuccess(qrCodeMessage: string) {
    //TODO: handle scan success
    console.log(qrCodeMessage);
  }
  function QrcodeErrorCallback(error: string) {
    //TODO: handle scan error
    error = error;
  }

  return (
    <>
      <Box id='reader' w='full' height='auto'></Box>
    </>
  );
}

export default Scan;
