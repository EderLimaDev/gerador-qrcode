import prompt from "prompt";
import promtQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";



async function createQRCode() {
    prompt.get(promtQRCode, handle);

    prompt.start();
    
};




export default createQRCode;