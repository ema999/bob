const customError = require('../class/customError.js');
var userModel = require('../models/userModel.js');

var UserService = function(){

  UserService.prototype.getUsers = function (callback) {
    
    var query = userModel.find();

    query.exec(function (err, users) {
      if (err) return callback(new customError('unknownError'));
      callback(null, {users: users});
    })

  }

  UserService.prototype.addUser = function (data, callback) {
    
    var user = new userModel({
      name: data.name,
      bags: data.bags 
    });

    user.save(function(err) {
      if (err) return callback(new customError('unknownError'));
    
      return callback(null, user);
    });

  }

  UserService.prototype.deleteUser = function (data, callback) {

    userModel.remove({ name: data.name }, function (err) {
      if (err) return callback(new customError('unknownError'));
      return callback(null, {});
    });

  }

  UserService.prototype.editUser = function (data, callback) {

    userModel.findOneAndUpdate({ name: data.name }, { name: data.name, bags: data.bags }, function(err, user) {
      if (err) return callback(new customError('unknownError'));
      if (!user) return callback(new customError('userDontExist'));
      
      return callback(null, user);
    });

  }

}

module.exports = UserService;
