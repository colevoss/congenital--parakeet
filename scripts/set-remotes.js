const { spawn } = require('child_process');

// Child will use parent's stdios.
spawn(
  'git',
  ['remote', 'add', 'base', 'git@github.com:colevoss/asdfasdf.git'],
  { stdio: 'inherit' },
);
