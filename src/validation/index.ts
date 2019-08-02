import Joi from '@hapi/joi';

const userSignUpSchema = {
  firstName: Joi.string()
    .trim()
    .required(),
  lastName: Joi.string()
    .trim()
    .required(),
  email: Joi.string()
    .email()
    .lowercase()
    .trim()
    .required(),
  phone: Joi.string()
    .trim()
    .required(),
  password: Joi.string()
    .min(5)
    .trim()
    .required()
};

export { userSignUpSchema };
