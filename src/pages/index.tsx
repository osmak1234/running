import { type NextPage } from "next";
import { Box, Text } from "@chakra-ui/react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Home: NextPage = () => {
  function onScanSuccess(decodedText: string, decodedResult: any) {
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  function onScanFailure(error: string) {
    console.warn(`Code scan error = ${error}`);
  }

  const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false
  );
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  return (
    <>
      <div id='reader'></div>
      <Text>QR code reader</Text>
    </>
  );
};

export default Home;
