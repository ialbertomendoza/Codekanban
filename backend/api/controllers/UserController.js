/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	_config: {
		actions: false,
	    shortcuts: false,
	    rest: true
	},
	crear: function(req, res, next) {
 		User.create( req.params.all(), function createdUser(err, user){
 			if (err)
 				return next(err);
 			req.session.authenticated = true;
 			req.session.user = user;
 			return res.json(201, {"status":"true","response":{"id":user.id}});
 		});
 	},
 	eliminar: function(req, res, next) {
 		var id = req.param('id');
 		if( !id ) return res.notFound();
 		User.findOne(id).exec(function foundUser(err, user){
 			if ( err ) return next(err);
 			if ( !user ) return res.notFound();
 			User.destroy(user.id).exec(function userDestroyed(err){
 				if ( err ) return next();
 				return res.json(200, {"status":"true"});
 			});
 		});
 	},
 	listar:function(req, res, next){
		User.find().exec(function usuariosEncontrados(err,usuarios){
			if(err)
				return next(err);			
			return res.json(usuarios);
		});
	},
	login: function(req, res, next){
		require('passport').authenticate('local', function(err, user, info){
			if((err)||(!user)){
				next(err);
			}				
			req.logIn(user, function(err){
				if(err)
					return res.redirect('/user/auth');
				return res.redirect('/proyecto');
			});
		})(req,res);
	},
	logout: function(req, res){
		req.logout();
		return res.redirect('/proyecto');
	}
};

