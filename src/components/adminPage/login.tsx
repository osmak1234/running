import { Box, Button, Input, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const LoginForm = ({ username, password, setPassword, setUsername, login }) => {
  return (
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

  )
}

LoginForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  setUsername: PropTypes.func,
  login: PropTypes.func
};

export default LoginForm;
