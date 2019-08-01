import { User } from '../models/schema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createUser = async (userInfo: any) => {
  const user = new User(userInfo);
  const foundUser = await User.findOne({ email: userInfo.email });

  if (!foundUser) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    return user.save();
  }

  throw Error('This user already exists');
};

export { createUser };
