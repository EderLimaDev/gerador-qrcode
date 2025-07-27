import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/passwords/create.js";
import chalk from "chalk";

async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(err) console.log(err);
        
        if(choose.Select == 1) {
            // Call the QR Code generation function
            console.log("Gerando QR Code...");
            await createQRCode();
            
        }
        if(choose.Select == 2) {
            // Call the Password generation function
            console.log("Gerando Senha...");
            console.log(chalk.green("Senha gerada com Sucesso!"));
            
            await createPassword();
        }

    });
    prompt.start();
}

main();