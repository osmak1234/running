import QRCode from 'qrcode'

function QrCode(props: { value: string }) {
  const generateQR = async (text: string) => {
    try {
      console.log(await QRCode.toDataURL(text))
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div>
    </div>
  );
}

export default QrCode;
