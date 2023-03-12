import { type NextPage } from "next";
import Navbar from "../components/navbar";
import { Box, Text } from "@chakra-ui/react";
const Home: NextPage = () => {
  //TODO: Create the home page design

  return (
    <>
      <Navbar home={false} admin={true} join={true} />
      <Box>Home</Box>
    </>
  );
};

export default Home;
