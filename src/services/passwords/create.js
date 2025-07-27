import chalk from "chalk";
import handle from "./handle.js";



async function createPassword(params) {
    const password = await handle();
    console.log(chalk.blue(password));
}


export default createPassword;
