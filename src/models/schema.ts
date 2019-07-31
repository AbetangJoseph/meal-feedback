import mongoose from 'mongoose';

import { UserInterface } from '../typings/';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  confirmPassword: String
});

const User = mongoose.model<UserInterface>('Users', userSchema);

export { User };
