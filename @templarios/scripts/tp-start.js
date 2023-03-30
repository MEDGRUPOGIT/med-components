const spawn = require("spawn-please");
const { platform } = process;

async function runScript(command, args = []) {
  const output = await spawn(command, args, undefined, {
    rejectOnError: false,
    stdout: (data) => {
      console.log(String.fromCharCode(...data).trimEnd());
    },
    stderr: (err) => {
      // console.log(String.fromCharCode(...err).trimEnd());
    },
  });

  console.log(output);
}

async function startAll() {
  switch (platform) {
    case "linux":
    case "darwin":
      runScript("npm", ["run", "tp:start:unix"]);
      break;

    case "win32":
      await runScript("npm", ["run", "tp:start:win:set-node"]);
      runScript("npm", ["run", "tp:start:win:run-all"]);
      break;

    default:
      console.log(
        "Sistema Operacional não listado, nvm não fará mudanças na versão atual do node"
      );
      runScript("npm", ["run", "tp:start:default"]);
  }
}

startAll();
