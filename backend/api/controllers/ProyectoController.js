/**
 * ProyectoController
 *
 * @description :: Server-side logic for managing proyectoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    _config: {
        actions: false,
        shortcuts: false,
        rest: true
    },
	crear: function(req, res, next){
		Proyecto.create(req.params.all(),function proyectoCreado(err, proyecto){
			if(err){
				console.log('entro al error');
				return next(err);
			}
            console.log(Proyecto);
            Proyecto.publishCreate(proyecto);
			return res.json(201, {"status":"true","response":{"id":proyecto.id}});
		});
	},
	actualizar:function(req, res, next){
		var id = req.param('id');
		if(!id)
			return res.notFound();
		Proyecto.update(id, req.params.all()).exec(function proyectoActualizado(err, proyectos){
			if(err)
				return next(err);
			if(!proyectos)
				return res.notFound();
			var proyecto = proyectos[0];
			var socket = req.socket;
			var io = sails.io;
			io.sockets.emit('actualizadoProyecto', {"status":"true","response":proyecto});
			return res.json(200, {"status":"true","response":{"id":proyecto.id}});
		});
	},
	listar:function(req, res, next){
        if (req.isSocket) {
            Proyecto.watch(req);
            console.log('Proyecto with socket id ' + sails.sockets.id(req) + ' is now subscribed to the model class \'Proyecto\'.');
        }


        Proyecto.find().exec(function proyectosEncontrados(err,proyectos){
			if(err)
				return next(err);
			return res.json(proyectos);
		});
	}
};