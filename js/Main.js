/**
 * Created by Zelada_Torrez on 05-10-14.
 */
$(document).on('ready',function(){
    var socket =io.connect('http://localhost:4444');
    var user={
        name:'adrian',
        message:""
    }

    $('#Send').click(function(){
        var d=new Date();
        user.name=$('#nameUser').val();
        user.message = {
            type:'0',
            message:$('#msg').val(),
            dateSendGet: d.toLocaleDateString(),
            timeSendGet: d.toLocaleTimeString(),
            favorite:''
        }
        socket.emit('Message',user);
        console.log(user);
        SingleMessage(user,$('#panel'));
    });

    socket.on('SendMsg',function(data){
        if(user.message.timeSendGet!=data.message.timeSendGet)
        {
            data.message.type='1';
            SingleMessage(data,$('#panel'));
        }
    });

    socket.on('pizarra',function(data){
        $.fancybox.open({
            href : 'pizarra/index.html',
            type : 'iframe',
            closeClick : false,
            padding : 5
        });
    });

    $("#pizarra").click(function() {
        socket.emit('openPi');
        $.fancybox.open({
            href : 'pizarra/index.html',
            type : 'iframe',
            closeClick : false,
            padding : 5
        });

        $.fancybox.close();
    });

    $('#close').click(function(){
        //console.log($.fancybox);
        $.fancybox.close();
    });

});