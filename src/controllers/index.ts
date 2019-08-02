import { User } from '../models/schema';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import { userSignUpSchema } from '../validation';

const createUser = async (userInfo: any) => {
  const { error, value } = Joi.validate(userInfo, userSignUpSchema, {
    skipFunctions: true,
    stripUnknown: true,
    abortEarly: false
  });

  if (error) {
    const err = error.details.map(error => error.message.replace(/\"/g, ''));
    throw new Error(err);
  }

  const user = new User(value);
  const foundUser = await User.findOne({ email: value.email });

  if (!foundUser) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    return user.save();
  }

  throw Error('This user already exists');
};

const userLogin = async (userInfo: any) => {
  const foundUser = await User.findOne({ email: userInfo.email });

  if (!foundUser) {
    throw Error('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(
    userInfo.password,
    foundUser.password
  );

  if (!validPassword) {
    throw Error('Invalid email or password');
  }

  const token = jwt.sign(
    { firstname: foundUser.firstName, _id: foundUser.id },
    `${process.env.rate_meal_jwt}`
  );

  return { token };
};

export { createUser, userLogin };
