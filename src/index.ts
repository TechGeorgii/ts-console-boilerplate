import { printHello } from "./printHello.js";

async function main() {
  await printHello();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
