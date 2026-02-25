module.exports = {
  apps: [{
    name: 'claude-telegram-relay',
    script: 'start-relay.cjs',
    interpreter: 'node',
    cwd: 'C:\\Users\\user\\claude-telegram-relay',
    out_file: 'C:\\Users\\user\\claude-telegram-relay\\logs\\claude-telegram-relay.log',
    error_file: 'C:\\Users\\user\\claude-telegram-relay\\logs\\claude-telegram-relay.error.log',
    autorestart: true,
    watch: false,
    env: {
      CLAUDECODE: '',
    },
  }]
};
