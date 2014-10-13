/**
 * Created by Zelada_Torrez on 05-10-14.
 */
var SingleMessage=function(objectContact,parent){
    var message=$('<div>');
    var textDateName=$('<p>',{class:'textDateName'});
    var textMessage=$('<p>',{class:'textMessage'});
    var text="";

    if(objectContact.message.type=='0'){
        console.dir(objectContact);
        text=objectContact.message.dateSendGet+' , '+objectContact.message.timeSendGet+' , '+ objectContact.name;
        message.attr({class:'triangle-isosceles '});
    }else{
        text=objectContact.message.dateSendGet+' , '+objectContact.message.timeSendGet+' , '+ objectContact.name;
        message.attr({class:'triangle-isosceles top'});
    }
    textDateName.text(text);
    textMessage.text(objectContact.message.message);
    message.append(textDateName);
    message.append(textMessage);
    parent.append(message);
    parent.append($('<br>'));


    var LimitText=function(text,limit){
        var NewText=text;
        if(text.length>limit){
            NewText=text.substr(0,limit)+'...';
        }
        return NewText;
    }
}