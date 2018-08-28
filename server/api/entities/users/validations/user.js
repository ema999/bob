var Joi = require('joi');

module.exports = {


  edit: {
    body: {
      name: Joi.string(),
      bags: Joi.number().min(0).max(5),
    }
  },

  add: {
    body: {
      name: Joi.string(),
      bags: Joi.number().min(0).max(5),
    }
  }

};
