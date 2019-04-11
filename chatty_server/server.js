const express = require('express');
const webSocket = require('ws');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const WebSocketServer = new webSocket.Server({server});


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
WebSocketServer.on('connection', () => {
  console.log('Client connected');
  WebSocketServer.on( 'message', function incomingMessage(message) {
    console.log("Server side:", message);
  })

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  WebSocketServer.on('close', () => console.log('Client disconnected'));
});
