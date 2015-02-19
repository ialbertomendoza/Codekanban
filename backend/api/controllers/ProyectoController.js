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
			return res.redirect('/proyecto/'+proyecto.id);
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
			return res.redirect('/proyecto/'+proyecto.id);
		});
	},
	listar:function(req, res, next){
		Proyecto.find().exec(function proyectosEncontrados(err,proyectos){
			if(err)
				return next(err);
			return res.json(proyectos);
		});
	}

};

