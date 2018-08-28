var express = require('express');
var router = express.Router();
var InitialController = require('../controllers/initialController');
var AuthMiddleware = require('../../../middleware/authMiddleware');

var routes = {
  getInitialState : '/'
}

var authMiddleware = new AuthMiddleware();

router.get(routes.getInitialState, authMiddleware.isLogged, function(req, res) {

  InitialController.getInitialState(req.get("authorization"), function(err, data){
    if(err) return res.status(err.httpStatusCode).jsonp(err);

    res.status(200).jsonp(data);
  })

});

module.exports = router;
