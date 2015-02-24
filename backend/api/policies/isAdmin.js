module.exports = function(req, res, next) {	
	if (req.user && req.user.rol === 'administrador')
		return next();
	return res.forbidden('No tiene permitido realizar esta acción.');
};