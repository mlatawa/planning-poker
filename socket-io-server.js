var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection',function(socket){
console.log("A user  connected");

socket.on('joined' , (data) => {
    console.log( 'new user joined  on server' + data);
    io.emit('new user', data);

});

//cardValueReceived

socket.on('cardValueReceived' , (data) => {
    console.log( 'card value  on server' + data);
    io.emit('cardValueReceived', data);

});

//socket.emit('test event', 'here is some data');
});



server.listen(3000,() => {
console.log("sockt.io server is listening  on port 3000");
});