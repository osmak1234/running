import { Box, Input, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// components
import CreateAdminComponent from "../../components/adminPage/createNewAdmin";
import LoginForm from "../../components/adminPage/login";
import InputField from "../../components/adminPage/inputFields";

import { type NextPage } from "next";

const AdminPanel: NextPage = () => {
  //TODO: Create the admin panel design
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

  // this function checks if an admin exists in the database,
  // it uses the checkAdmin.ts file in the api folder
  // it then sets the state of the adminId, name, and username
  async function login() {
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
  // this code creates a new admin in the database
  // it doens't return anything
  // Will be repurposed for useing for every user to be able to register

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
  // this function creates a new run in the database
  // it doesn't return anything

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
  // there is a variable that will decide what will be shown
  // loggedIn == true => show the admin AdminPanel
  // loggedIn == false => show the login form
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
            <Text textAlign='center'>Add point coordinates for the component</Text>
            <InputField />

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

          <CreateAdminComponent
            // I don't know any other way to pass the state variables to the component, if you know a better way implement it
            newAdminEmail={newAdminEmail}
            setNewAdminEmail={setNewAdminEmail}
            newAdminName={newAdminName}
            setNewAdminName={setNewAdminName}
            newAdminUsername={newAdminUsername}
            setNewAdminUsername={setNewAdminUsername}
            newAdminPassword={newAdminPassword}
            setNewAdminPassword={setNewAdminPassword}
            createAdmin={createAdmin}
          />
        </Box>
      ) : (
        <LoginForm password={password} username={username} setPassword={setPassword} setUsername={setUsername} login={login} />

      )}
    </>
  );
};

export default AdminPanel;
