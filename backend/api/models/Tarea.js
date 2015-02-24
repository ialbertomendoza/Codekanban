/**
* Tarea.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes:{
		titulo:{
			type:'string',
			required: true
		},
		descripcion:{
			type:'string'
		},
		fecha_termino:{
			type:'date'
		},
		timestamp_termino:{
			type:'timestamp'
		},
		proyecto:{
			type:'string',
			required: true
		},
		estado:{
			type:'string'			
		},
		asignado:{
			type:'string'
		},
		status:{
			type:'boolean',
			defaultsTo: true,
			required:true
		},
		total_comentario:{
			type:'integer',
			defaultsTo: 0
		}
	}	
};

