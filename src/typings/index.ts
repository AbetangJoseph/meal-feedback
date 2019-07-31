import { Document } from 'mongoose';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface UserInterface extends User, Document {}
