import spawn from "spawn-please";

export async function runScript(command, args = []) {
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
