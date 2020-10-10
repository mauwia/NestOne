import { Controller,Body,Post,ValidationPipe, UseGuards,Request, Get } from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthCredentialsDto} from './DTO/auth-credentials.dto'
import { JwtAuthGuard } from './Guard/jwt-auth.guard';
import { LocalAuthGuard } from './Guard/local-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(private authservice:AuthService){}
    @Post('signup')
    async signup(
        @Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto):Promise<any>{
           try{ 
                let auth= await this.authservice.signUp(authCredentialsDto);
            return auth
        }catch(err){
            throw err
        }
        }
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req){
        try{
            let user= await this.authservice.signIn(req.user)
           return user
        }
        catch (err) {
            return err
        }
    }
    // @UseGuards(JwtAuthGuard)
    // @Get('me')
    // getme(@Request() req){
    //     return req.user
    // }
}
