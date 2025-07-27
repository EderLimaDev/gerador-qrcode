import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "Select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - Gerar QR Code, 2 - Gerar Senha)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Opção inválida. Digite 1 ou 2."),
        required: true,
    }
];

export default promptSchemaMain;