import { Injectable,ConflictException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import {Model} from 'mongoose'
import {AuthCredentialsDto} from './DTO/auth-credentials.dto'
import {User} from './auth.model'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private userModel:Model<User>,private jwtService:JwtService){}
    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        const {username,password}=authCredentialsDto
        const hashedpass=await bcrypt.hash(password,10)
        const user=new this.userModel({username,password:hashedpass})
        try{
            await user.save()
        }catch(error){
            if(error.code===11000)
            throw new ConflictException('User already ')
            throw error
        }
    }
    async signIn(user:User){
        const payload={username:user.username,id:user.id}
        return{
            accessToken:this.jwtService.sign(payload)
        }
    }
    async validateUser(username:string,pass:string):Promise<User>{
        const user=await this.userModel.findOne({username})
        if(!user){
            return null
        }
        const valid = await bcrypt.compare(pass,user.password)
        if(valid){
            return user
        }
        return null
    }
}
