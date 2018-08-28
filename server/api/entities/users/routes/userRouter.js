var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');
var Validate = require('express-validation');
var userValidation = require('../validations/user.js');

var routes = {
  getUsers : '/',
  getUser : '/:id',
  editUser: '/:id',
  deleteUsers: '/delete',
  addUser : '/'
}


router.get(routes.getUsers, function(req, res) {

  UserController.getUsers(function(err, data){
    if(err) return res.status(err.httpStatusCode).jsonp(err);

    res.status(200).jsonp(data);
  })

});

router.put(routes.editUser, Validate(userValidation.edit), function(req, res) {

  UserController.editUser(req.body, function(err, data){
    if(err) return res.status(err.httpStatusCode).jsonp(err);

    res.status(200).jsonp(data);
  })

});

router.get(routes.getUser, function(req, res) {

  UserController.getUser(req.params.id, function(err, data){
    if(err) return res.status(err.httpStatusCode).jsonp(err);

    res.status(200).jsonp(data);
  })

});

router.delete(routes.deleteUsers,  function(req, res) {

  UserController.deleteUser(req.body, function(err, result){
    if(err) return res.status(err.httpStatusCode).jsonp(err);

    res.status(200).jsonp(result);
  })

});

router.post(routes.addUser, Validate(userValidation.add),  function(req, res) {

  UserController.addUser(req.body, function(err, result){
    if(err) return res.status(err.httpStatusCode).jsonp(err);

    res.status(200).jsonp(result);
  })

});

module.exports = router;
