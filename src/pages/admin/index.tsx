import Navbar from "~/components/navbar";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { type NextPage } from "next";

const AdminPanel: NextPage = () => {
  //TODO: Create the admin panel design
  //TODO: Add option to create a new run
  //TODO: Add option to edit a run
  //TODO: Add option to delete a run
  //TODO: Add option to create a new question

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    //TODO: Add login form logic
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
    }
  }

  return (
    <>
      <Navbar home={true} admin={false} join={false} />
      {loggedIn ? (
        <Box pt='100px'>Logged in as admin</Box>
      ) : (
        <Box pt='100px' display='flex' flexDir='column'>
          <Text fontSize='xl' textAlign='center'>
            Login
          </Text>
          <br />
          <Box w='full' m='auto' display='flex' flexDir='column' gap={1}>
            <Input
              m='auto'
              w='full'
              maxW={"400px"}
              placeholder='Username'
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <br />
            <Input
              m='auto'
              w='full'
              maxW={"400px"}
              placeholder='Password'
              type={"password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <Button
              m='auto'
              w='full'
              maxW='400px'
              bg='blue.500'
              onClick={() => login()}
            >
              Login
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AdminPanel;
