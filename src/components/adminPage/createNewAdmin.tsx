import React from 'react';
import { Box, Text, Input, Button } from '@chakra-ui/react';

const CreateAdminComponent = ({
  newAdminEmail,
  setNewAdminEmail,
  newAdminName,
  setNewAdminName,
  newAdminUsername,
  setNewAdminUsername,
  newAdminPassword,
  setNewAdminPassword,
  createAdmin,
}) => {
  return (
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
        Create new admin
      </Button>
    </Box>
  );
};

export default CreateAdminComponent;
