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

const userLoginSchema = {
  email: Joi.string()
    .email()
    .lowercase()
    .trim()
    .required(),
  password: Joi.string()
    .min(5)
    .trim()
    .required()
};

const inputValidation = (bodyInput: any, JoiSchema: any) => {
  const { error, value } = Joi.validate(bodyInput, JoiSchema, {
    skipFunctions: true,
    stripUnknown: true,
    abortEarly: false
  });

  return { error, value };
};

export { userSignUpSchema, userLoginSchema, inputValidation };
