'use strict';
function asignaTarea() {
  var estado = $(this).parent().attr('id');
  $(this).find('.tarea').removeClass('box-pendiente').removeClass('box-asignado').removeClass('box-desarrollo').removeClass('box-pruebas').removeClass('box-lanzamiento');
  $(this).find('.tarea').addClass('box-'+estado);
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
  return $.ajax(opcionesAjax);
}

function inputClear(){
  $('.input-clear').val('');
  $('.modal').modal('hide');
}

$(document).ready(function(){
  proyecto.query.list();

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
});






