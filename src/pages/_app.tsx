import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  const customTheme = extendTheme({
    colors: {
      brand: {
        bg: "blue.900",
        text: "blue.50",
        border: "cyan.400",
        hover: "blue.500",
        pressed: "blue.600",
      },
    },

    styles: {
      global: {
        body: {
          bg: "gray.900",
          color: "blue.50",
        },
      },
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
