import { Injectable, ConflictException,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import { Model } from 'mongoose'
import { AuthCredentialsDto } from './DTO/auth-credentials.dto'
import { User } from './auth.model'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private userModel: Model<User>, private jwtService: JwtService) { }
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<any> {
        try {
            const { email, username, password, fullname, status, imagelink } = authCredentialsDto
            const hashedpass = await bcrypt.hash(password, 10)
            const user = new this.userModel({ email, username, password: hashedpass, fullname, status, imagelink })
            // console.log("checks nowasdsad", user)
            await user.save()
             return {email,password}

        } catch (error) {
            console.log("check error now", error)
            if (error.code === 11000)
                throw new ConflictException('Email Already Exist')
            throw error
        }
    }
    async signIn(user: User) {
       try{ 
        // console.log('hellp')
        const payload = { username: user.username, id: user.id }
        return {
            accessToken: this.jwtService.sign(payload),username:user.username,email:user.email,status:user.status,imagelink:user.imagelink,_id:user.id
        }}catch(err){
            throw err
        }
    }
    async validateUser(username: string, pass: string): Promise<User> {
        try{
        const user = await this.userModel.findOne({ username })
        console.log(user)
        if (!user) {
           throw new NotFoundException("USER NOT FOUND")
        }
        const valid = await bcrypt.compare(pass, user.password)
        if (valid) {

            return user
        }
        throw new NotFoundException("Incorrect Password")
    }
        catch(err){
            throw err
        }
    }
}
