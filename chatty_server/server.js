const express = require('express');
const WebSocket = require('ws');
const PORT = 3001;
const uuid = require('uuid/v1');

//setting express server to serve assests from the public folder
const server = express()
.use(express.static('public'))
.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));


//creating the WobSockets server
const wss = new WebSocket.Server({server});


wss.on('connection', (ws) => {
  let welcome = {
    nOfUsers: wss.clients.size
  }
  wss.broadcast(JSON.stringify(welcome))
  ws.on('message', (msg) => {
    let msgRaw = JSON.parse(msg);
    let outgoingMsg;
    let sync = true;
    switch(msgRaw.type) {
      case 'message':
        outgoingMsg = {
          id: uuid(),
          user: msgRaw.user,
          content: msgRaw.content,
          type: msgRaw.type,
          nOfUsers: wss.clients.size
        }
        break;
      case 'globalNotification':
        outgoingMsg = {
          id: uuid(),
          content: msgRaw.content,
          type: msgRaw.type,
          nOfUsers:wss.clients.size
        }
        break;
      default:
        outgoingMsg = {
          id: uuid(),
          content: 'Sorry, you can\'t do that.',
          type: 'error'
        }
    }
    if (sync) {
      wss.broadcast(JSON.stringify(outgoingMsg));
    }
  });
  ws.on('close', () => {
  let goodbye = {
    nOfUsers: wss.clients.size
  }
  wss.broadcast(JSON.stringify(goodbye))
  });
})

//set a broadcast to each connected client for new incoming messages
wss.broadcast = function broadcast(message){
  wss.clients.forEach(function each(client){
    if (client.readyState === WebSocket.OPEN){
      client.send(message);
    }
  })
}