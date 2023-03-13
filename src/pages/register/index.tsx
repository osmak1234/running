import { FormEventHandler, useState } from "react";
import Navbar from "~/components/navbar";
import { type NextPage } from "next";
import {signIn} from "next-auth/react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { FormControl } from '@chakra-ui/react'


const Register: NextPage = () => {

  const [userInfo, setUserInfo] = useState({username : "", email : "", password: "", passwordRepeat: ""})
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      passwordRepeat: userInfo.passwordRepeat,
      redirect: false
    })

  };

  return (
    <>
      <Navbar admin={false} home={true} join={false} register={true}></Navbar>
      <Box pt='100px' display='flex' flexDir='column'>
        <Text fontSize='xl' textAlign='center'>
          Register
        </Text>
        <br />
        <FormControl w='full' m='auto' display='flex' flexDir='column' gap={1}>
          <Input
            m='auto'
            w='full'
            maxW={"400px"}
            placeholder='Username'
            onChange={ ({target}) =>
            setUserInfo({...userInfo, username: target.value})
          }
          />
          <Input
            m='auto'
            w='full'
            maxW={"400px"}
            placeholder='Email'
            onChange={ ({target}) =>
            setUserInfo({...userInfo, email: target.value})
          }
          />
          <br/>
          <Input
            m='auto'
            w='full'
            maxW={"400px"}
            placeholder='Password'
            type={"password"}
            onChange={ ({target}) =>
            setUserInfo({...userInfo, password: target.value})
          }
          />
          <Input
            m='auto'
            w='full'
            maxW={"400px"}
            placeholder='Repeat password'
            type={"password"}
            onChange={ ({target}) =>
            setUserInfo({...userInfo, passwordRepeat: target.value})
          }
          />
          <br />
          <Button
            m='auto'
            w='full'
            maxW='400px'
            bg='blue.500'
            onClick={() => {
              signIn();
            }}
          >
            Registruj
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Register;
