import pkg from "enquirer";
import chalk from "chalk";
import { newToken } from "./functions/newToken.js";
const { prompt } = pkg;

const main = async () => {
  const { n } = await prompt({
    type: "input",
    name: "n",
    message: "How many tokens do you want to generate?",
  });
  newToken(Number(n));
  console.log(
    chalk.green(`Successfully generated ${chalk.yellow(n)} token(s)`),
  );
};

main();
