import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './auth.model';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './Strategies/local.strategies';
import { JwtStrategy } from './Strategies/jwt-auth-strategies';
@Module({
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{name:"User",schema:UserSchema}]),
    PassportModule,
    JwtModule.register({
      secret:'protection100',
      signOptions:{expiresIn:'2d'}
    })
  ],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
