import mongoose from 'mongoose';

// import { UserInterface } from '../typings/';
import { ObjectID } from 'bson';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  confirmPassword: String
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { firstname: this.firstName, _id: this.id },
    `${process.env.rate_meal_jwt}`
  );
  return token;
};

const mealSchema = new mongoose.Schema({
  day: String,
  meal: [
    {
      id: ObjectID,
      time: String,
      name: String,
      vendor: String
    }
  ]
});

const User = mongoose.model<any>('Users', userSchema);
const Meal = mongoose.model<any>('Meal', mealSchema);

export { User, Meal };
