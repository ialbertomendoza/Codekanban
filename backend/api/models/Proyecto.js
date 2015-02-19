/**
* Proyecto.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
		nombre:{
			type:'string',
			unique: true
		},
		fecha_termino:{
			type:'date'
		},
		status:{
			type:'boolean',
			required: true
		},
		usuario:{
			type:'string',
			required: true
		}
	}
};

