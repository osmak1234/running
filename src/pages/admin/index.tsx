import Navbar from "~/components/navbar";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { type NextPage } from "next";
import { prisma } from "~/server/db";

const AdminPanel: NextPage = () => {
  //TODO: Create the admin panel design
  //TODO: Add option to create a new run
  //TODO: Add option to edit a run
  //TODO: Add option to delete a run

  const [data, setData] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const [runCode, setRunCode] = useState("");
  const [runName, setRunName] = useState("");
  const [runCreated, setRunCreated] = useState("");

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
          setAdminId(res.adminId);
          setName(res.name);
          setUsername(res.username);
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

  async function createRun() {
    const body = JSON.stringify({
      creatorId: adminId,
      name: runName,
      code: "12343",
    });
    const res = await fetch("http://localhost:3000/api/createRun", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          console.log("success");
        } else {
        }
      });
  }

  return (
    <>
      {loggedIn ? (
        <Box pt='100px' display='flex' flexDir='column'>
          <Box w='full' m='auto' display='flex' flexDir='column' gap={5}>
            <Text textAlign='center'>{`Logged in as ${username}`}</Text>
            <Button
              w='full'
              bg='blue.500'
              maxW={"400px"}
              _hover={{ bg: "blue.600" }}
              _active={{ bg: "blue.700" }}
              m='auto'
              onClick={() => {
                setLoggedIn(false);
              }}
            >
              Logout
            </Button>
            <Text textAlign='center'>Create Run</Text>
            <Input
              placeholder='Run Name'
              maxW={"400px"}
              m='auto'
              value={runName}
              onChange={(e) => {
                setRunName(e.target.value);
              }}
            />
            <Button
              w='full'
              bg='blue.500'
              maxW={"400px"}
              m='auto'
              _hover={{ bg: "blue.600" }}
              _active={{ bg: "blue.700" }}
              onClick={() => {
                createRun();
              }}
            >
              Create Run
            </Button>
          </Box>
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
              value={username}
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
              value={password}
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
