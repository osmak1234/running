import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
function Scan() {
  let alreadyRuns = false;
  let html5QrcodeScanner: Html5QrcodeScanner;
  // can't run server side
  useEffect(() => {
    getCameras().catch((err) => console.log(err));
  }),
    [];

  //TODO: close the camera after scan
  //TODO: add a button to scan again
  async function getCameras() {
    // prevent from running multiple times
    if (alreadyRuns) return;
    alreadyRuns = true;
    //generate qr code scannner
    const devices = await Html5Qrcode.getCameras();
    if (devices && devices.length) {
      const config = { fps: 30, qrbox: 250 };
      html5QrcodeScanner = new Html5QrcodeScanner(
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

    html5QrcodeScanner.clear().catch((e) => console.log(e));
  }
  function QrcodeErrorCallback() {
    //TODO: handle scan error
  }

  return (
    <>
      <Box id='reader' w='full' height='auto'></Box>
    </>
  );
}

export default Scan;
