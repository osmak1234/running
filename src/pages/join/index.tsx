import Navbar from "~/components/navbar";
import { Box, Text, Button, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Scan from "~/components/scan";
import { type NextPage } from "next";

const Join: NextPage = () => {
  const [codeEntered, setCodeEntered] = useState(false);
  const [joinedRun, setJoinedRun] = useState(false);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  function checkCode() {
    if (code === "1234") {
      setCodeEntered(true);
    }
    /* Commented out because of testing, make function async and uncomment the code below
    await fetch("http://localhost:3000/api/findRun", {
      method: "POST",
      body: JSON.stringify({
        code: code,
      }),
    })
      .then((res) => res.json())
      //this logic is wrong, it always returns true, even if the code is wrong
      //TODO: fix this logic 1) check if the code is correct 2) check if the user is already joined
      //TODO: do this logic in the backend, api/findRun
      .then((data) => {
        console.log(data);
        if (data) {
          setCodeEntered(true);
        }
      });
        */
  }

  return (
    <>
      <Navbar home={true} join={false} admin={true} />
      {!codeEntered ? (
        <Box
          w='full'
          display='flex'
          flexDir='column'
          height='auto'
          m='auto'
          mt='100px'
        >
          <Text textAlign='center'>Enter the Join code</Text>
          <Box
            gap={1}
            w='full'
            display='flex'
            flexDir='column'
            height='auto'
            mb='20px'
          >
            <Input
              placeholder='Enter the Join code'
              maxW='300px'
              m='auto'
              onChange={(e) => setCode(e.target.value)}
            />
            <Button
              m='auto'
              bg='blue.500'
              maxW='full'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => setCodeEntered(true)}
            >
              Join
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          {joinedRun ? (
            <Box>
              <Text textAlign='center'>You are in the run</Text>
              <br />
              <Text textAlign='center'>Your name is {name}</Text>
              <br />
              <Text textAlign='center'>Scan the next QR code</Text>
              <br />
              <Scan />
            </Box>
          ) : (
            <Box w='full' height='auto' mt='100px'>
              <Text>Enter the Join code</Text>
              <Input
                placeholder='Enter your Name'
                onChange={(e) => setName(e.target.value)}
              />
              <Button bg='blue.500'>Join</Button>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Join;
