import { User } from '../models/schema';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import {
  userSignUpSchema,
  userLoginSchema,
  inputValidation
} from '../validation/schema';

const createUser = async (userInfo: any) => {
  const { error, value } = inputValidation(userInfo, userSignUpSchema);

  if (error) {
    throw new Error(error.details[0].message.replace(/\"/g, ''));
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
  const { error, value } = inputValidation(userInfo, userLoginSchema);

  if (error) {
    const err = error.details.map(error => error.message.replace(/\"/g, ''));
    throw new Error(err);
  }

  const foundUser = await User.findOne({ email: value.email });

  if (!foundUser) {
    throw Error('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(
    value.password,
    foundUser.password
  );

  if (!validPassword) {
    throw Error('Invalid email or password');
  }

  const token = foundUser.generateAuthToken();

  return { token };
};

export { createUser, userLogin };
