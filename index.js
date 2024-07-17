const { spawn } = require('child_process');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Define routes or middleware as needed
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the Express server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Function to start child process
function start() {
  let args = [path.join(__dirname, 'plugins.js'), ...process.argv.slice(2)];
  console.log([process.argv[0], ...args].join('\n'));
  
  // Spawn child process
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  });

  // Event listeners for child process
  p.on('message', data => {
    if (data === 'reset') {
      console.log('Restarting Bot...');
      p.kill();
      start(); // Restart the child process
      delete p;
    }
  });

  p.on('exit', code => {
    console.error('Exited with code:', code);
    if (code === '.' || code === 1 || code === 0) start();
  });
}

start(); // Start the child process

// Handle process termination
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});
