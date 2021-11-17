const readline = require("readline");
const chalk = require("chalk");
const Generator = require("./structures/Generator");

process.title = "[Generatify] Spotify Account Generator by mertushka";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  chalk.hex("00FF00")(`
				╔════════════════════════════════════════════════╗ 
			             ╔═╗╔═╗╔═╗╔╦╗╦╔═╗╦ ╦  ╔═╗╔═╗╔═╗╔═╗╦ ╦╔╗╔╔╦╗
			             ╚═╗╠═╝║ ║ ║ ║╠╣ ╚╦╝  ╠═╣║  ║  ║ ║║ ║║║║ ║ 
			             ╚═╝╩  ╚═╝ ╩ ╩╚   ╩   ╩ ╩╚═╝╚═╝╚═╝╚═╝╝╚╝ ╩ 
						╔═╗╦═╗╔═╗╔═╗╔╦╗╔═╗╦═╗                     
						║  ╠╦╝║╣ ╠═╣ ║ ║ ║╠╦╝                     
						╚═╝╩╚═╚═╝╩ ╩ ╩ ╚═╝╩╚═
				╚════════════════════════════════════════════════╝         
					github.com/mertushka/generatify`)
);
console.log("");

rl.question(
  chalk.hex("00FF00")(
    "[?] What would you like the display names of the accounts to be? "
  ),
  (name) => {
    if (name.length === 0) {
      console.log(chalk.red("Nickname cannot be null!"));
      process.exit();
    }

    rl.question(
      chalk.hex("00FF00")("[?] How many accounts would you like to generate? "),
      (amount) => {
        if (amount.length === 0) {
          console.log(chalk.red("Amount cannot be null!"));
          process.exit();
        }
        console.log("");

        new Generator(name, amount);
      }
    );
  }
);
