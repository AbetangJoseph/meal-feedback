import { User } from '../models/schema';

const createUser = async (userInfo: any) => {
  const user = new User(userInfo);
  const foundUser = await User.findOne({ email: userInfo.email });

  if (!foundUser) {
    return await user.save();
  }

  throw Error('This user already exists');
};

export { createUser };
