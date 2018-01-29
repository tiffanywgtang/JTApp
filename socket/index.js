const server = require('http').Server();
const port = 10001;

var io = require('socket.io')(server);

var names = [];
var allmsgs= [];

io.on("connection", function(socket){
   console.log("user connected"); 
    
    socket.on("uName", function(data){
        console.log("username sent = " +data);
        names.push(data);
        
        io.emit("names", names);
        
    });
    
    socket.on("msg", function(data){
        console.log("msg sent = " +data);
        allmsgs.push(data);
        io.emit("allmsgs", allmsgs);
    });
    
    socket.on("disconnect", function(){
        console.log("user has disconnected");
    })
});

server.listen(port,(err)=>{
    if(err){
        
        console.log("error: " +err);
        return false;
    }
    
    console.log("socket port is running");
})





