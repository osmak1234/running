import { Box, Container, Text, Stack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {signIn} from "next-auth/react";

const Navbar = (display: { home: boolean; join: boolean; admin: boolean, register: boolean }) => {
  //Props are toggles for text in the navbar
  return (
    <>
      <Box
        position='fixed'
        top='0'
        as='nav'
        w='100%'
        h="5rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={2}
        alignSelf='start'
        background="rgba(120, 120, 255, 0.1)"
      >
        <Container display='flex'>
          <Stack
            spacing={30}
            direction={"row"}
            display={"flex"}
            w='full'
            alignItems='center'
            justifyContent='center'
          >
            {display.home ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href='/'>
                  <Text fontSize='lg' fontWeight='bold' display='inline-flex'>
                    Domů
                  </Text>
                </Link>
              </motion.div>
            ) : null}
            {display.join ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href='/join'>
                  <Text fontSize='lg' fontWeight='bold' display='inline-flex'>
                    Začít
                  </Text>
                </Link>
              </motion.div>
            ) : null}
            {display.admin ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href='/admin'>
                  <Text fontSize='lg' fontWeight='bold' display='inline-flex'>
                    Založit
                  </Text>
                </Link>
              </motion.div>
            ) : null}
            {display.register ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  background={"transparent"}
                  onClick={() => {signIn(); }}>
                    Register
                </Button>
              </motion.div>
            ) : null}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default Navbar;
