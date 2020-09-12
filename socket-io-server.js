var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection',function(socket){

    socket.on('cardValueReceived' , (data) => {
    io.emit('cardValueReceived', data);
});

});

server.listen(3000,() => {
    console.log("sockt.io server is listening  on port 3000");
});