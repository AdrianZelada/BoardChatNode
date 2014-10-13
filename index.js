/**
 * Created by Zelada_Torrez on 05-10-14.
 */

var express = require('express')
    , http = require('http');
var app = new express();
app.set('port', process.env.PORT || 4444);



var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('express Server listen on port'+app.get('port'));
});

//var server = http.createServer(app);
//var io = require('socket.io').listen(server)

var io=require('socket.io').listen(server);
server.listen(4444);
console.log('listening.... in the port '+ app.get('port'));
io.sockets.on('connection',function(socket){
    socket.on('Message',function(data){
        console.log(data);
        io.sockets.emit('SendMsg',data);
    });

   //pizarra


    socket.on('startLine',function(e){
        console.log('Dibujando...');
        io.sockets.emit('down',e);
    });

    socket.on('closeLine',function(e){
        console.log('Trazo Terminado');
        io.sockets.emit('up',e);
    });

    socket.on('draw',function(e){
        io.sockets.emit('move',e);
    });

    socket.on('clean',function(){
        console.log('Pizarra Limpia');
        io.sockets.emit('clean',true);
    });

    socket.on('openPi',function(){
        io.sockets.emit('pizarra');
    })

})