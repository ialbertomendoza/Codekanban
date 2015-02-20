'use strict';
function asignaTarea() {
  //var id = $(this).data('id');
  var estado = $(this).parent().attr('id');
  $(this).find('.tarea').removeClass('box-pendiente').removeClass('box-asignado').removeClass('box-desarrollo').removeClass('box-pruebas').removeClass('box-lanzamiento');
  $(this).find('.tarea').addClass('box-'+estado);
  //console.log(estado);
  //console.log(id);
}

function peticionApi(metodo,url,parametros) {
  var opcionesAjax ={
    type: metodo,
    url: url,
    dataType: 'json'
  };
  if((typeof parametros != 'undefined') || (parametros != false)){
    opcionesAjax.data = parametros;
  };

  //console.log("Peticion AJAX: "+metodo);
  //console.log("Peticion url: "+url);
  //console.log("Peticion parametros: "+parametros);
  return $.ajax(opcionesAjax);
}


$('#pendiente, #asignado, #desarrollo, #pruebas, #lanzamiento').dragsort({ dragSelector: '.tarea', dragBetween: true, dragEnd: asignaTarea, placeHolderTemplate: '<li class="placeHolder"><div></div></li>' });

$('.col-estado').on('click','li div', function(){
  $('#modalTarea').modal('show');
});

$('#btn-task-new').on('click', function(){
  $('#modalNuevaTarea').modal('show');
  return false;
});

$('#btn-project-new').on('click', function(){
  $('#modalNuevoProyecto').modal('show');
  return false;
});



