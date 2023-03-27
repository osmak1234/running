import { Box, Text, Button } from '@chakra-ui/react';
import QrCode from "./../../components/qrCode";
import { type NextPage } from 'next';

const AdminRun: NextPage = () => {
  return (
    <Box pt='100px' display='flex' flexDir='column'>
      <Box w='full' m='auto' display='flex' flexDir='column' gap={5}>
        <Text>Admin Run</Text>
        <QrCode />
      </Box>
    </Box>
  );
}

export default AdminRun;
