import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../auth.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel('User') private userModel:Model<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'protection102',
    });
  }

  async validate(payload: any) {
    // console.log("In auth strategies", payload)
   try{
      let user=await this.userModel.findOne({username:payload.username})
    if(user)
    return { _id: payload.sub, username:user};
    else
      return null
  }catch(err){
    throw err
  }
}
}