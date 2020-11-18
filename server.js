var app=require('express')();
var http=require(http).server(app);
var io=require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + 'appWebsocket.html');
});

io.on('connection', function(socket){
    console.log('a user is connect');
    socket.on('disconnect', function(){
        console.log("a user is disconnect");
    })
    socket.on('chat message', function(msg){
        console.log("message reçu"+ msg);
    })
})
http.listen(3000,function(){
    console.log(" Server running on 3000");
})