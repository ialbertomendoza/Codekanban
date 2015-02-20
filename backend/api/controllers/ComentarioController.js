/**
 * ComentarioController
 *
 * @description :: Server-side logic for managing comentarios
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	_config: {
		actions: false,
	    shortcuts: false,
	    rest: true
	},
	crear: function(req, res, next){
		Comentario.create(req.params.all(),function comentarioCreado(err, comentario){
			if(err)
				return next(err);
			var socket = req.socket;
			var io = sails.io;
			io.sockets.emit('nuevoComentario', {"status":"true","response":comentario});
			return res.json(201, {"status":"true","response":{"id":comentario.id}});
		});
	},
	actualizar:function(req, res, next){
		var id = req.param('id');
		if(!id)
			return res.notFound();
		Comentario.update(id, req.params.all()).exec(function comentarioActualizado(err, comentarios){
			if(err)
				return next(err);
			if(!comentarios)
				return res.notFound();
			var comentario = comentarios[0];
			var socket = req.socket;
			var io = sails.io;
			io.sockets.emit('actualizadoComentario', {"status":"true","response":comentario});
			return res.json(200, {"status":"true","response":{"id":comentario.id}});
		});
	},
	listar:function(req, res, next){
		var id_tarea = req.param('id_tarea');
		if(!id_tarea)
			return res.notFound();
		Comentario.find({id_tarea:id_tarea}).exec(function comentariosEncontrados(err,comentarios){
			if(err)
				return next(err);
			return res.json(comentarios);
		});
	}
};

