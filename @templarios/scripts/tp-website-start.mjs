const { platform } = process;
import { runScript } from "./script-runner.mjs";

async function startWebsite() {
  switch (platform) {
    case "linux":
    case "darwin":
      runScript("npm", ["run", "tp:website:start:unix"]);
      break;

    case "win32":
      await runScript("npm", ["run", "tp:win:set-node"]);
      runScript("npm", ["run", "tp:website:start:win"]);
      break;

    default:
      console.log(
        "Sistema Operacional não listado, nvm não fará mudanças na versão atual do node"
      );
      runScript("npm", ["run", "tp:website:start:win"]);
  }
}

startWebsite();
