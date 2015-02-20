/**
 * TareaController
 *
 * @description :: Server-side logic for managing tareas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	_config: {
		actions: false,
	    shortcuts: false,
	    rest: true
	},
	crear: function(req, res, next){
		Tarea.create(req.params.all(),function tareaCreada(err, tarea){
			if(err)
				return next(err);
			var socket = req.socket;
			var io = sails.io;
			io.sockets.emit('nuevaTarea', {"status":"true","response":tarea});
			return res.json(201, {"status":"true","response":{"id":tarea.id}});
		});
	},
	actualizar:function(req, res, next){
		var id = req.param('id');		
		if(!id)
			return res.notFound();
		Tarea.update(id, req.params.all()).exec(function tareaActualizada(err, tareas){
			if(err)
				return next(err);
			if(!tareas)
				return res.notFound();
			var tarea = tareas[0];
			io.sockets.emit('actualizadaTarea', {"status":"true","response":tarea});
			return res.json(200, {"status":"true","response":{"id":tarea.id}});
		});
	},
	listar:function(req, res, next){
		Tarea.find().exec(function tareasEncontradas(err,tareas){
			if(err)
				return next(err);
			return res.json(tareas);
		});
	}
};

