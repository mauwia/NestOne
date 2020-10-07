import * as mongoose from 'mongoose';
import {Document} from 'mongoose'
export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  username:String,
  password: String,
  fullname:String,
  status:String,
  imagelink:String
});

export interface User extends Document{
    readonly email:string;
    readonly username: string;
    readonly password:string;
    readonly fullname:string;
    readonly status:string;
    readonly imagelink:string;

}