const WebSocketServer = require('ws').Server;
const express = require('express');
const server = require('http').createServer();
const app = express();
const port = process.env.port || "9000";

app.get('/subscribe/topic1', function (req, res) {
    res.sendFile(__dirname + '/public/receiver.html');
});

server.on('request', app);
server.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});