import { Box, Text, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import Scan from "~/components/scan";
import { type NextPage } from "next";

const Join: NextPage = () => {
  const [codeEntered, setCodeEntered] = useState(false);
  const [joinedRun, setJoinedRun] = useState(false);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  async function checkCode() {
    await fetch("http://localhost:3000/api/checkRun", {
      method: "PATCH",
      body: JSON.stringify({
        code: code,
      }),
    })
      .then((res) => res.json())
      //TODO: fix this logic 1) check if the code is correct 2) check if the user is already joined
      //TODO: do this logic in the backend, api/findRun
      .then(
        (data: {
          found: boolean;
          runId?: string;
          name?: string;
          joined?: boolean;
        }) => {
          if (data.found === true) {
            setCodeEntered(true);
          }
        }
      );
  }

  return (
    <>
      {!codeEntered ? (
        <Box
          w='full'
          display='flex'
          flexDir='column'
          height='auto'
          m='auto'
          mt='100px'
          gap={4}
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
              maxW='400px'
              m='auto'
              onChange={(e) => setCode(e.target.value)}
            />
            <Button
              m='auto'
              bg='blue.500'
              maxW='400px'
              w='full'
              _hover={{ bg: "blue.600" }}
              _active={{ bg: "blue.700" }}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => checkCode()}
            >
              Join
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          {joinedRun ? (
            <Box
              w='full'
              height='auto'
              mt='100px'
              display='flex'
              flexDir='column'
              gap={4}
            >
              <Text textAlign='center'>You are in the run</Text>
              <Text textAlign='center'>Your name is {name}</Text>
              <Text textAlign='center'>Scan the next QR code</Text>
              <Box w='full' maxW='400px' m='auto'>
                <Scan />
              </Box>
            </Box>
          ) : (
            <Box
              w='full'
              height='auto'
              mt='100px'
              display='flex'
              flexDir='column'
              gap={4}
            >
              <Text textAlign='center'>Enter the name you want to use</Text>
              <Input
                maxW='400px'
                m='auto'
                placeholder='Enter your Name'
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                w='full'
                m='auto'
                maxW='400px'
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "blue.700" }}
                bg='blue.500'
                onClick={() => setJoinedRun(true)}
              >
                Join
              </Button>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Join;
