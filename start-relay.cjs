// Launcher: strips Claude Code session vars before starting the relay
const { spawn } = require('child_process');

const env = { ...process.env };
delete env.CLAUDECODE;
delete env.CLAUDE_CODE_ENTRYPOINT;
delete env.CLAUDE_CODE_SESSION_ID;

const child = spawn('C:\\Users\\user\\.bun\\bin\\bun.exe', ['run', 'src\\relay.ts'], {
  env,
  cwd: 'C:\\Users\\user\\claude-telegram-relay',
  stdio: 'inherit',
  windowsHide: true,
});

child.on('exit', (code) => process.exit(code ?? 0));
