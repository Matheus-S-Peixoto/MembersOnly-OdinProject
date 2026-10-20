import app from './app.js';

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

server.on('error', err => {
  console.log(`Error starting the server: ${err.message}`);
});