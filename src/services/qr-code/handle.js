import qr from "qrcode-terminal"



async function handle(err, result) {
    if(err) {
        console.error("Error in QR Code generation:", err);
        return
    };

   const isSmall = result.type == 2;
   qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log("QR Code generated successfully!\n");
        console.log(qrcode);
    });
}


export default handle;