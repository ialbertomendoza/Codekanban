/**
* Comentario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes:{
		comentario:{
			type:'string',
			required: true			
		},
		usuario:{
			type:'string',
			required:true
		},
		fecha:{
			type:'date'
		},
		hora:{
			type:'time'
		},
		id_tarea:{
			type:'string',
			required:true
		},
		status:{
			type:'boolean',
			required:true
		},
		reply_to_id:{
			type:'string'
		}
	}
};

