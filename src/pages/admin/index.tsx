import Navbar from "~/components/navbar";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { type NextPage } from "next";
import { prisma } from "~/server/db";
/*
export async function getServerSideProps(context) {
  let admin = await prisma.admin.findUnique({
    where: {
      username: "admin",
    },
  });
  admin = JSON.parse(JSON.stringify(admin));
  return {
    props: { admin },
  };
}
*/

const AdminPanel: NextPage = () => {
  //TODO: Create the admin panel design
  //TODO: Add option to create a new run
  //TODO: Add option to edit a run
  //TODO: Add option to delete a run

  const [data, setData] = useState();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [loggedIn, setLoggedIn] = useState(false);

  async function login() {
    //TODO: Add login form logic
    const body = JSON.stringify({
      username: username,
      password: password,
    });
    await fetch("http://localhost:3000/api/checkAdmin", {
      method: "PATCH",
      body: body,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.login === true) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function createAdmin() {
    const body = JSON.stringify({
      email: "admin@gdžímej.cz",
      name: "admin",
      username: username,
      password: password,
    });

    const res = await fetch("http://localhost:3000/api/createAdmin", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    setData(res);
  }

  return (
    <>
      {loggedIn ? (
        <Box pt='100px'>
          Logged in as admin
          <Button
            bg='blue.500'
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
            onClick={() => {
              setLoggedIn(false);
            }}
          >
            Logout
          </Button>
        </Box>
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
              _hover={{ bg: "blue.600" }}
              _active={{ bg: "blue.700" }}
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
