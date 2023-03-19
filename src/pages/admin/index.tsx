import { Box, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { type NextPage } from "next";

const AdminPanel: NextPage = () => {
  //TODO: Create the admin panel design
  //TODO: Add option to create a new run
  //TODO: Add option to edit a run
  //TODO: Add option to delete a run

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const [newAdminUsername, setNewAdminUsername] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");

  const [runName, setRunName] = useState("");

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
      .then(
        (res: {
          login: boolean;
          adminId: string;
          name: string;
          username: string;
        }) => {
          if (res.login === true) {
            console.log(res.adminId);
            setLoggedIn(true);
            setAdminId(res.adminId);
            setName(res.name);
            setUsername(res.username);
            console.log(res.adminId);
            console.log(adminId);
          }
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }

  async function createAdmin() {
    const body = JSON.stringify({
      email: newAdminEmail,
      name: newAdminName,
      username: newAdminUsername,
      password: newAdminPassword,
    });
    await fetch("http://localhost:3000/api/createAdmin", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((res: { success: boolean }) => {
        console.log(res);
      });
  }

  async function createRun() {
    const body = JSON.stringify({
      creatorId: adminId,
      name: runName,
      points: {},
    });
    await fetch("http://localhost:3000/api/createRun", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((res: { success: boolean }) => {
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
                createRun().catch((err) => {
                  console.log(err);
                });
              }}
            >
              Create Run
            </Button>
          </Box>
          <Box
            w='full'
            m='auto'
            display='flex'
            flexDir='column'
            gap={5}
            mt='20px'
          >
            <Text textAlign='center'>Create new Admin login</Text>
            <Input
              placeholder='Email'
              maxW={"400px"}
              m='auto'
              value={newAdminEmail}
              onChange={(e) => {
                setNewAdminEmail(e.target.value);
              }}
            />

            <Input
              placeholder='Name'
              maxW={"400px"}
              m='auto'
              value={newAdminName}
              onChange={(e) => {
                setNewAdminName(e.target.value);
              }}
            />
            <Input
              placeholder='Username'
              maxW={"400px"}
              m='auto'
              value={newAdminUsername}
              onChange={(e) => {
                setNewAdminUsername(e.target.value);
              }}
            />
            <Input
              placeholder='Password'
              maxW={"400px"}
              m='auto'
              value={newAdminPassword}
              onChange={(e) => {
                setNewAdminPassword(e.target.value);
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
                createAdmin().catch((err) => {
                  console.log(err);
                });
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
