var UserService = require('../../../../services/userService');

var UserController = {};

UserController.editUser = function(data, callback){
  var userService = new UserService();

  userService.editUser(data, function(err, userEdited){
    if (err) return callback(err)
    callback(null, userEdited);
  })

}

UserController.getUser = function(id, callback){
  var userService = new UserService();

  userService.getUser(id, function(err, user){
    if (err) return callback(err)
    callback(null, user);
  })

}

UserController.getUsers = function(callback){
  var userService = new UserService();

  userService.getUsers(function(err, users){
    if (err) return callback(err)
    callback(null, users);
  })

}

UserController.deleteUser = function(users, callback){
  var userService = new UserService();

  userService.deleteUser(users, function(err, result){
    if (err) return callback(err)
    callback(null, result);
  })

}

UserController.addUser = function(user, callback){
  var userService = new UserService();

  userService.addUser(user, function(err, result){
    if (err) return callback(err)
    callback(null, result);
  })

}

module.exports = UserController;
