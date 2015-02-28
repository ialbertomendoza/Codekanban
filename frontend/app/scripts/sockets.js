io.sails.url = "http://localhost:1337/";

//Inicializando enlace sockets.
io.socket.get("/proyecto",function(data){
  //console.log(data);
});

io.socket.get("/tarea",function(data){
  console.log(data);
});

//Eventos para los sockets.
io.socket.on("proyecto", function (data){
  console.log(data);
  proyecto.query.list();
});

io.socket.on("tarea", function (data){
  console.log(data);

});
