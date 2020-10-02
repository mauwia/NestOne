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
        @Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto):Promise<void>{
            return await this.authservice.signUp(authCredentialsDto);
        }
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req){
        return this.authservice.signIn(req.user)
    }
    @UseGuards(JwtAuthGuard)
    @Get('me')
    getme(@Request() req){
        return req.user
    }
}