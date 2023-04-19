const { platform } = process;
import { runScript } from "./script-runner.mjs";

async function buildDoc() {
  switch (platform) {
    case "linux":
    case "darwin":
      runScript("npm", ["run", "tp:doc:build:unix"]);
      break;

    case "win32":
      await runScript("npm", ["run", "tp:win:set-node:newer"]);
      runScript("npm", ["run", "tp:doc:build:win"]);
      break;

    default:
      console.log(
        "Sistema Operacional não listado, nvm não fará mudanças na versão atual do node"
      );
      runScript("npm", ["run", "tp:doc:build:win"]);
  }
}

buildDoc();
