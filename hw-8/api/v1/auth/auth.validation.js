const { Segments } = require('celebrate');
const Joi = require('joi');

const loginUserValidation = {
  [Segments.BODY]: {
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required(),
  },
};

exports.loginUserValidation = loginUserValidation;

exports.registerUserValidation = {
  [Segments.BODY]: {
    ...loginUserValidation[Segments.BODY],
    firstName: Joi.string().trim().max(256).required(),
    lastName: Joi.string().trim().max(256).required(),
    username: Joi.string().trim().max(256).required(),
  },
};
