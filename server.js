var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/appWebsocket.html');
});

io.on('connection', function(socket){
    console.log('a user is connect');
    socket.on('disconnect', function(){
        console.log("a user is disconnect");
    })
    socket.on('chat message', function(msg){
        console.log("message reçu"+ msg);
        io.emit('chat message', msg);
    })
})
http.listen(8080,function(){
    console.log(" Server running on 8080");
})