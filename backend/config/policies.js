module.exports.policies = {
	'*': true,
	ProyectoController:{
		'*':'isAuthenticated'
	},
	TareaController:{
		'*':'isAuthenticated'
	},
	ComentarioController:{
		'*':'isAuthenticated'
	}
}