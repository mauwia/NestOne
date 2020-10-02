import * as mongoose from 'mongoose';
import {Document} from 'mongoose'
export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

export interface User extends Document{
    readonly username: string;
    readonly password:string
}