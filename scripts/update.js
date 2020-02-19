const { spawn } = require('child_process');

// Child will use parent's stdios.
spawn('git', ['pull', 'base', 'master'], { stdio: 'inherit' });
