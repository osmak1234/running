import QRCode from 'qrcode'
import { Box, Text } from '@chakra-ui/react'

function QrCode() {
  const Code = QRCode.create('I am a pony!');
  return (
    <>
      <Box display='flex' w='full' h='full'>
        <img src={Code} alt='QR Code' />
      </Box>
    </>
  )
}

export default QrCode
