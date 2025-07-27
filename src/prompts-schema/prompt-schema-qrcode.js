import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.blue("Digite o link que deseja gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.blue("Digite o tipo de QR Code (1 - NORMAL, 2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Tipo inválido! Digite 1 para NORMAL ou 2 para TERMINAL"),
        required: true,
    }
];

export default promptQRCode;