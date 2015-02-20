/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	username:{
  		type:'string',
  		required: true,
  		unique: true
  	},
  	password:{
  		type:'string',
  		required:true
  	},
    rol:{
      type:'string',
      required:true
    },
    validPassword: function(password, callback) {
        var obj = this.toObject();
        // If there are a callback, compare async.
        if (callback) {
           //callback (err, res)
           return bcrypt.compare(password, obj.password, callback);
        }
        // Otherwise, compare sync.
        return bcrypt.compareSync(password, obj.password);
    }
  },
  beforeCreate: function(values, next) {
    hashPassword(values, next);
  }
};

var bcrypt = require('bcrypt');
  
function hashPassword(values, next) {  
  bcrypt.genSalt(10, function(err, salt) {
    if (err) 
      return next(err);    
    bcrypt.hash(values.password, salt, function(err, hash) {
      if (err) 
        return next(err);      
      values.password = hash;
      next();
    });
  });
}

