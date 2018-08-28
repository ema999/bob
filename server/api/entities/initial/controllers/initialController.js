var UserService = require('../../../../services/userService');

var InitialController = {};

InitialController.getInitialState = function(token, callback){
  var userService = new UserService();

  var initialstate = {
    users: {},
    form: {}
  };
  
  callback(null, initialstate)

}

module.exports = InitialController;
