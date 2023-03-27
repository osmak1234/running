import QRCode from 'qrcode'
import { Box, Text } from '@chakra-ui/react'

function QrCode() {
  return (
    <>
      <Box display='flex' w='full' h='full'>
        <img src={QRCode.toDataURL('I am a pony!')
          .then((url: string) => {
            console.log(url)
          })
          .catch((err: string) => {
            console.error(err)
          })
        } />
      </Box>
    </>
  )
}

export default QrCode
