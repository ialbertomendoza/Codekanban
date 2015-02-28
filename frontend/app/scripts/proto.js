var proyecto = {
  query:{
    new: function(data){
      peticionApi('PUT',myApp.url.rest+'proyecto',data)
        .done(function(dato){
          inputClear();
          console.log('Proyecto insertado');
        })
        .fail(function(){
          console.log('Ha ocurrio un error');
        });
    },
    list: function(){
      peticionApi('GET',myApp.url.rest+'proyecto')
        .done(proyecto.render.carga);
    }
  },
  render:{
    carga: function(data){
      console.log(data);
      $('.select-proyecto').html('');
      $.each( data, function( i, item ) {
        var html = '<option value="'+item.nombre+'">'+item.nombre+'</option>';
        $(html).appendTo('.select-proyecto');
      });

    }
  }
};

var tarea = {
  query:{
    new: function(data){
      console.log(data);
      peticionApi('PUT',myApp.url.rest+'tarea',data)
        .done(function(dato){
          inputClear();
          console.log('Tarea insertada');
        })
        .fail(function(){
          console.log('Ha ocurrio un error');
        });
    }
  }
};
